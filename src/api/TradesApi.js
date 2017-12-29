/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.TradesApi = factory(root.PeatioSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Trades service.
   * @module api/TradesApi
   * @version 0.2.4
   */

  /**
   * Constructs a new TradesApi. 
   * @alias module:api/TradesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2Trades operation.
     * @callback module:api/TradesApi~getV2TradesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.
     * Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of returned trades. Default to 50. (default to 50)
     * @param {Number} opts.timestamp An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
     * @param {Number} opts.from Trade id. If set, only trades created after the trade will be returned.
     * @param {Number} opts.to Trade id. If set, only trades created before the trade will be returned.
     * @param {module:model/String} opts.orderBy If set, returned trades will be sorted in specific order, default to &#39;desc&#39;. (default to desc)
     * @param {module:api/TradesApi~getV2TradesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2Trades = function(market, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling getV2Trades");
      }


      var pathParams = {
      };
      var queryParams = {
        'market': market,
        'limit': opts['limit'],
        'timestamp': opts['timestamp'],
        'from': opts['from'],
        'to': opts['to'],
        'order_by': opts['orderBy']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/trades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getV2TradesMy operation.
     * @callback module:api/TradesApi~getV2TradesMyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your executed trades. Trades are sorted in reverse creation order.
     * Get your executed trades. Trades are sorted in reverse creation order.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the number of returned trades. Default to 50. (default to 50)
     * @param {Number} opts.timestamp An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
     * @param {Number} opts.from Trade id. If set, only trades created after the trade will be returned.
     * @param {Number} opts.to Trade id. If set, only trades created before the trade will be returned.
     * @param {module:model/String} opts.orderBy If set, returned trades will be sorted in specific order, default to &#39;desc&#39;. (default to desc)
     * @param {module:api/TradesApi~getV2TradesMyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2TradesMy = function(market, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling getV2TradesMy");
      }


      var pathParams = {
      };
      var queryParams = {
        'market': market,
        'limit': opts['limit'],
        'timestamp': opts['timestamp'],
        'from': opts['from'],
        'to': opts['to'],
        'order_by': opts['orderBy']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/trades/my', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));