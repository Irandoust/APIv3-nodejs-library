/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetSharedTemplateUrl = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSharedTemplateUrl model module.
   * @module model/GetSharedTemplateUrl
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetSharedTemplateUrl</code>.
   * @alias module:model/GetSharedTemplateUrl
   * @class
   * @param sharedUrl {String} A unique URL for the email campaign or transactional template. This URL can be shared with other Sendinblue users.
   */
  var exports = function(sharedUrl) {
    var _this = this;

    _this['sharedUrl'] = sharedUrl;
  };

  /**
   * Constructs a <code>GetSharedTemplateUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSharedTemplateUrl} obj Optional instance to populate.
   * @return {module:model/GetSharedTemplateUrl} The populated <code>GetSharedTemplateUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sharedUrl')) {
        obj['sharedUrl'] = ApiClient.convertToType(data['sharedUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * A unique URL for the email campaign or transactional template. This URL can be shared with other Sendinblue users.
   * @member {String} sharedUrl
   */
  exports.prototype['sharedUrl'] = undefined;



  return exports;
}));


