# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_python37_app]
from flask import Flask, request, jsonify
from flask_cors import CORS
from ebaysdk.exception import ConnectionError
from ebaysdk.finding import Connection
from datetime import timedelta

def getJsonFromEbay(keywords, sortOrder='BestMatch', MinPrice=-1.0
                    , Currency='USD', MaxPrice=-1.0, ReturnsAcceptedOnly=False
                    , FreeShippingOnly=False, ExpeditedShippingType='Expedited', Condition=[]):
    api = Connection(appid='ZimingWa-csci571h-PRD-c2eb49443-53c96387', config_file=None)
    api_request = {}
    api_request['keywords'] = keywords
    api_request['sortOrder'] = sortOrder
    itemFilter = []
    if MinPrice >= 0.0:
        itemFilter.append({'name': 'MinPrice', 'value': MinPrice, 'paramName': 'Currency', 'paramValue': Currency})
    if MaxPrice >= 0.0:
        itemFilter.append({'name': 'MaxPrice', 'value': MaxPrice, 'paramName': 'Currency', 'paramValue': Currency})
    if ReturnsAcceptedOnly:
        itemFilter.append({'name': 'ReturnsAcceptedOnly', 'value': ReturnsAcceptedOnly})
    if FreeShippingOnly:
        itemFilter.append({'name': 'FreeShippingOnly', 'value': FreeShippingOnly})
    if ExpeditedShippingType and ExpeditedShippingType == 'Expedited':
        itemFilter.append({'name': 'ExpeditedShippingType', 'value': ExpeditedShippingType})
    if len(Condition):
        itemFilter.append({'name': 'Condition', 'value': Condition})
    api_request['itemFilter'] = itemFilter
    paginationInput = []
    paginationInput.append({'entriesPerPage': 30})
    api_request['paginationInput'] = paginationInput
    response = api.execute('findItemsAdvanced', api_request)

    if response.reply.ack == 'Success':
        jsondata = []
        if int(response.reply.paginationOutput.totalEntries) <= 0 or int(
                response.reply.paginationOutput.totalEntries) <= 0.0:
            jsondata.append({0: {"TotalResultsFound": 0}})
            jsondata.append({1: {"NoResult": "No Result Found"}})
            return jsondata
        else:
            jsondata.append({0: {"TotalResultsFound": int(response.reply.paginationOutput.totalEntries)}})
        temp = response.reply.searchResult.item
        #print(temp)
        i = 1
        for tempitem in temp:
            try:
                tempitem.condition.conditionDisplayName
                tempitem.galleryURL
                tempitem.title
                tempitem.primaryCategory.categoryName
                tempitem.viewItemURL
                tempitem.topRatedListing
                tempitem.returnsAccepted
                tempitem.shippingInfo.shippingServiceCost.value
                tempitem.shippingInfo.expeditedShipping
                tempitem.sellingStatus.convertedCurrentPrice.value
                tempitem.location
            except:
                continue
            item = dict()
            item["ImageURL"] = tempitem.galleryURL
            if str(item["ImageURL"]) == "https://thumbs1.ebaystatic.com/pict/04040_0.jpg":
                item["ImageURL"] = "static/imgs/defaultpic.jpg"
            item["Title"] = str(tempitem.title)
            item["Category"] = str(tempitem.primaryCategory.categoryName)
            item["Redirection"] = str(tempitem.viewItemURL)
            item["Condition"] = str(tempitem.condition.conditionDisplayName)
            item["Top"] = True if str(tempitem.topRatedListing) == "True" or str(
                tempitem.topRatedListing) == "true" else False
            item["Accepts"] = True if str(tempitem.returnsAccepted) == "True" or str(
                tempitem.returnsAccepted) == "true" else False
            item["FreeShipping"] = float(tempitem.shippingInfo.shippingServiceCost.value)
            # print(response.reply.searchResult.item[1].shippingInfo.shippingServiceCost.value)
            item["ExpeditedShipping"] = True if str(tempitem.shippingInfo.expeditedShipping) == "True" or str(
                tempitem.shippingInfo.expeditedShipping) == "true" else False
            item["Price"] = float(tempitem.sellingStatus.convertedCurrentPrice.value)
            item["Location"] = str(tempitem.location)
            itemOuter = {i: item}
            jsondata.append(itemOuter)
            if i >= 10:
                break
            i = i + 1
        if (i<2):
            jsondata[0][0]['TotalResultsFound'] = 0
            #print(jsondata[0][0]['TotalResultsFound'])
            jsondata.append({1: {"NoResult": "No Result Found"}})
        # print(jsondata)
        return jsondata
    else:
        jsondata = []
        jsondata.append({0: {"TotalResultsFound": 0}})
        jsondata.append({1: {"NoResult": "connecting ebay failed"}})
        return jsondata


# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(seconds=1)
CORS(app)


@app.route('/')
def EBayIndex():
    """Return a friendly HTTP greeting."""
    return app.send_static_file('EBay.html')


@app.route('/search', methods=['GET', 'POST'])
def search():
    try:
        if (request.content_type and request.content_type.startswith('application/json')):
            data = request.get_json(force=True)
        elif 'keywords' in request.args.to_dict().keys():
            data = request.args.to_dict()
        else:
            return jsonify([{0: {"TotalResultsFound": 0}}, {1: {"Error": "no keywords"}}])
        keywords = data["keywords"]
        sortOrder = data["selecteditem"] if 'selecteditem' in data.keys() else 'BestMatch'
        MinPrice = float(data["lower"]) if 'lower' in data.keys() and len(data["lower"]) > 0 else -1.0
        MaxPrice = float(data["upper"]) if 'upper' in data.keys() and len(data["upper"]) > 0 else -1.0
        ReturnsAcceptedOnly = 'true' if 'checkreturn' in data.keys() and (str(data["checkreturn"]) == "True" or str(
            data["checkreturn"]) == "true") else False
        FreeShippingOnly = 'true' if 'checkfree' in data.keys() and (str(data["checkfree"]) == "True" or str(data["checkfree"]) == "true") else False
        ExpeditedShippingType = 'Expedited' if 'checkexpedited' in data.keys() and (str(data["checkexpedited"]) == "True" or str(
            data["checkexpedited"]) == "true") else 'OneDayShipping'
        Condtion = []
        if ('checknew' in data.keys() and (str(data["checknew"]) == "True" or str(data["checknew"]) == "true")):
            Condtion.append(1000)
        if ('checkused' in data.keys() and (str(data["checkused"]) == "True" or str(data["checkused"]) == "true")):
            Condtion.append(3000)
        if ('checkverygood' in data.keys() and (str(data["checkverygood"]) == "True" or str(data["checkverygood"]) == "true")):
            Condtion.append(4000)
        if ('checkgood' in data.keys() and (str(data["checkgood"]) == "True" or str(data["checkgood"]) == "true")):
            Condtion.append(5000)
        if ('checkacceptable' in data.keys() and (str(data["checkacceptable"]) == "True" or str(data["checkacceptable"]) == "true")):
            Condtion.append(6000)
        jsondata = getJsonFromEbay(keywords, sortOrder=sortOrder, MinPrice=-MinPrice, MaxPrice=MaxPrice
                                   , ReturnsAcceptedOnly=ReturnsAcceptedOnly, FreeShippingOnly=FreeShippingOnly
                                   , ExpeditedShippingType=ExpeditedShippingType, Condition=Condtion)
        print(jsondata)
        return jsonify(jsondata)
    except Exception as e:
        print(e)
        jsondata = [{0: {"TotalResultsFound": 0}}, {1: {"Error": "server internal failed"}}]
        return jsonify(jsondata)


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=5000, debug=True)
# [END gae_python37_app]
