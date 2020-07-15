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
    root.SibApiV3Sdk.RequestSmsRecipientExport = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestSmsRecipientExport model module.
   * @module model/RequestSmsRecipientExport
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>RequestSmsRecipientExport</code>.
   * @alias module:model/RequestSmsRecipientExport
   * @class
   * @param recipientsType {module:model/RequestSmsRecipientExport.RecipientsTypeEnum} Filter the recipients based on how they interacted with the campaign
   */
  var exports = function(recipientsType) {
    var _this = this;


    _this['recipientsType'] = recipientsType;
  };

  /**
   * Constructs a <code>RequestSmsRecipientExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestSmsRecipientExport} obj Optional instance to populate.
   * @return {module:model/RequestSmsRecipientExport} The populated <code>RequestSmsRecipientExport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('notifyURL')) {
        obj['notifyURL'] = ApiClient.convertToType(data['notifyURL'], 'String');
      }
      if (data.hasOwnProperty('recipientsType')) {
        obj['recipientsType'] = ApiClient.convertToType(data['recipientsType'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL that will be called once the export process is finished. For reference, https://help.sendinblue.com/hc/en-us/articles/360007666479
   * @member {String} notifyURL
   */
  exports.prototype['notifyURL'] = undefined;
  /**
   * Filter the recipients based on how they interacted with the campaign
   * @member {module:model/RequestSmsRecipientExport.RecipientsTypeEnum} recipientsType
   */
  exports.prototype['recipientsType'] = undefined;


  /**
   * Allowed values for the <code>recipientsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecipientsTypeEnum = {
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "delivered"
     * @const
     */
    "delivered": "delivered",
    /**
     * value: "answered"
     * @const
     */
    "answered": "answered",
    /**
     * value: "softBounces"
     * @const
     */
    "softBounces": "softBounces",
    /**
     * value: "hardBounces"
     * @const
     */
    "hardBounces": "hardBounces",
    /**
     * value: "unsubscribed"
     * @const
     */
    "unsubscribed": "unsubscribed"  };


  return exports;
}));


