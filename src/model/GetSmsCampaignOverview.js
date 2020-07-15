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
    root.SibApiV3Sdk.GetSmsCampaignOverview = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSmsCampaignOverview model module.
   * @module model/GetSmsCampaignOverview
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetSmsCampaignOverview</code>.
   * @alias module:model/GetSmsCampaignOverview
   * @class
   * @param id {Number} ID of the SMS Campaign
   * @param name {String} Name of the SMS Campaign
   * @param status {module:model/GetSmsCampaignOverview.StatusEnum} Status of the SMS Campaign
   * @param content {String} Content of the SMS Campaign
   * @param scheduledAt {Date} UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @param sender {String} Sender of the SMS Campaign
   * @param createdAt {Date} Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(id, name, status, content, scheduledAt, sender, createdAt, modifiedAt) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['status'] = status;
    _this['content'] = content;
    _this['scheduledAt'] = scheduledAt;
    _this['sender'] = sender;
    _this['createdAt'] = createdAt;
    _this['modifiedAt'] = modifiedAt;
  };

  /**
   * Constructs a <code>GetSmsCampaignOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSmsCampaignOverview} obj Optional instance to populate.
   * @return {module:model/GetSmsCampaignOverview} The populated <code>GetSmsCampaignOverview</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('scheduledAt')) {
        obj['scheduledAt'] = ApiClient.convertToType(data['scheduledAt'], 'Date');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * ID of the SMS Campaign
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the SMS Campaign
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Status of the SMS Campaign
   * @member {module:model/GetSmsCampaignOverview.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Content of the SMS Campaign
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
   * @member {Date} scheduledAt
   */
  exports.prototype['scheduledAt'] = undefined;
  /**
   * Sender of the SMS Campaign
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "archive"
     * @const
     */
    "archive": "archive",
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "suspended"
     * @const
     */
    "suspended": "suspended",
    /**
     * value: "inProcess"
     * @const
     */
    "inProcess": "inProcess"  };


  return exports;
}));


