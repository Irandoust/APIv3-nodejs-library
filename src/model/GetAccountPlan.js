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
    root.SibApiV3Sdk.GetAccountPlan = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAccountPlan model module.
   * @module model/GetAccountPlan
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetAccountPlan</code>.
   * @alias module:model/GetAccountPlan
   * @class
   * @param type {module:model/GetAccountPlan.TypeEnum} Displays the plan type of the user
   * @param creditsType {module:model/GetAccountPlan.CreditsTypeEnum} This is the type of the credit, \"Send Limit\" is one of the possible types of credit of a user. \"Send Limit\" implies the total number of emails you can send to the subscribers in your account.
   * @param credits {Number} Remaining credits of the user
   */
  var exports = function(type, creditsType, credits) {
    var _this = this;

    _this['type'] = type;
    _this['creditsType'] = creditsType;
    _this['credits'] = credits;



  };

  /**
   * Constructs a <code>GetAccountPlan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAccountPlan} obj Optional instance to populate.
   * @return {module:model/GetAccountPlan} The populated <code>GetAccountPlan</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('creditsType')) {
        obj['creditsType'] = ApiClient.convertToType(data['creditsType'], 'String');
      }
      if (data.hasOwnProperty('credits')) {
        obj['credits'] = ApiClient.convertToType(data['credits'], 'Number');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('userLimit')) {
        obj['userLimit'] = ApiClient.convertToType(data['userLimit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Displays the plan type of the user
   * @member {module:model/GetAccountPlan.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * This is the type of the credit, \"Send Limit\" is one of the possible types of credit of a user. \"Send Limit\" implies the total number of emails you can send to the subscribers in your account.
   * @member {module:model/GetAccountPlan.CreditsTypeEnum} creditsType
   */
  exports.prototype['creditsType'] = undefined;
  /**
   * Remaining credits of the user
   * @member {Number} credits
   */
  exports.prototype['credits'] = undefined;
  /**
   * Date of the period from which the plan will start (only available for \"subscription\" and \"reseller\" plan type)
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * Date of the period from which the plan will end (only available for \"subscription\" and \"reseller\" plan type)
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * Only in case of reseller account. It implies the total number of child accounts you can add to your account.
   * @member {Number} userLimit
   */
  exports.prototype['userLimit'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "payAsYouGo"
     * @const
     */
    "payAsYouGo": "payAsYouGo",
    /**
     * value: "free"
     * @const
     */
    "free": "free",
    /**
     * value: "subscription"
     * @const
     */
    "subscription": "subscription",
    /**
     * value: "sms"
     * @const
     */
    "sms": "sms",
    /**
     * value: "reseller"
     * @const
     */
    "reseller": "reseller"  };

  /**
   * Allowed values for the <code>creditsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CreditsTypeEnum = {
    /**
     * value: "sendLimit"
     * @const
     */
    "sendLimit": "sendLimit"  };


  return exports;
}));


