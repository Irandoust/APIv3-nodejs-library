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
    define(['ApiClient', 'model/GetExtendedCampaignOverview', 'model/GetExtendedCampaignOverviewSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExtendedCampaignOverview'), require('./GetExtendedCampaignOverviewSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetEmailCampaign = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetExtendedCampaignOverview, root.SibApiV3Sdk.GetExtendedCampaignOverviewSender);
  }
}(this, function(ApiClient, GetExtendedCampaignOverview, GetExtendedCampaignOverviewSender) {
  'use strict';




  /**
   * The GetEmailCampaign model module.
   * @module model/GetEmailCampaign
   * @version 7.2.4
   */

  /**
   * Constructs a new <code>GetEmailCampaign</code>.
   * @alias module:model/GetEmailCampaign
   * @class
   * @implements module:model/GetExtendedCampaignOverview
   * @param id {Number} ID of the campaign
   * @param name {String} Name of the campaign
   * @param type {module:model/GetCampaignOverview.TypeEnum} Type of campaign
   * @param status {module:model/GetCampaignOverview.StatusEnum} Status of the campaign
   * @param testSent {Boolean} Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @param header {String} Header of the campaign
   * @param footer {String} Footer of the campaign
   * @param sender {module:model/GetExtendedCampaignOverviewSender} 
   * @param replyTo {String} Email defined as the \"Reply to\" of the campaign
   * @param toField {String} Customisation of the \"to\" field of the campaign
   * @param htmlContent {String} HTML content of the campaign
   * @param tag {String} Tag of the campaign
   * @param createdAt {Date} Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param modifiedAt {Date} UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @param recipients {Object} 
   * @param statistics {Object} 
   */
  var exports = function(id, name, type, status, testSent, header, footer, sender, replyTo, toField, htmlContent, tag, createdAt, modifiedAt, recipients, statistics) {
    var _this = this;

    GetExtendedCampaignOverview.call(_this, id, name, type, status, testSent, header, footer, sender, replyTo, toField, htmlContent, tag, createdAt, modifiedAt);
    _this['recipients'] = recipients;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>GetEmailCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEmailCampaign} obj Optional instance to populate.
   * @return {module:model/GetEmailCampaign} The populated <code>GetEmailCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      GetExtendedCampaignOverview.constructFromObject(data, obj);
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], Object);
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * @member {Object} statistics
   */
  exports.prototype['statistics'] = undefined;

  // Implement GetExtendedCampaignOverview interface:
  /**
   * ID of the campaign
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * Name of the campaign
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
   * @member {String} subject
   */
exports.prototype['subject'] = undefined;

  /**
   * Type of campaign
   * @member {module:model/GetCampaignOverview.TypeEnum} type
   */
exports.prototype['type'] = undefined;

  /**
   * Status of the campaign
   * @member {module:model/GetCampaignOverview.StatusEnum} status
   */
exports.prototype['status'] = undefined;

  /**
   * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} scheduledAt
   */
exports.prototype['scheduledAt'] = undefined;

  /**
   * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
   * @member {Boolean} abTesting
   */
exports.prototype['abTesting'] = undefined;

  /**
   * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} subjectA
   */
exports.prototype['subjectA'] = undefined;

  /**
   * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} subjectB
   */
exports.prototype['subjectB'] = undefined;

  /**
   * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
   * @member {Number} splitRule
   */
exports.prototype['splitRule'] = undefined;

  /**
   * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
   * @member {String} winnerCriteria
   */
exports.prototype['winnerCriteria'] = undefined;

  /**
   * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
   * @member {Number} winnerDelay
   */
exports.prototype['winnerDelay'] = undefined;

  /**
   * It is true if you have chosen to send your campaign at best time, otherwise it is false
   * @member {Boolean} sendAtBestTime
   */
exports.prototype['sendAtBestTime'] = undefined;

  /**
   * Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
   * @member {Boolean} testSent
   */
exports.prototype['testSent'] = undefined;

  /**
   * Header of the campaign
   * @member {String} header
   */
exports.prototype['header'] = undefined;

  /**
   * Footer of the campaign
   * @member {String} footer
   */
exports.prototype['footer'] = undefined;

  /**
   * @member {module:model/GetExtendedCampaignOverviewSender} sender
   */
exports.prototype['sender'] = undefined;

  /**
   * Email defined as the \"Reply to\" of the campaign
   * @member {String} replyTo
   */
exports.prototype['replyTo'] = undefined;

  /**
   * Customisation of the \"to\" field of the campaign
   * @member {String} toField
   */
exports.prototype['toField'] = undefined;

  /**
   * HTML content of the campaign
   * @member {String} htmlContent
   */
exports.prototype['htmlContent'] = undefined;

  /**
   * Link to share the campaign on social medias
   * @member {String} shareLink
   */
exports.prototype['shareLink'] = undefined;

  /**
   * Tag of the campaign
   * @member {String} tag
   */
exports.prototype['tag'] = undefined;

  /**
   * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} createdAt
   */
exports.prototype['createdAt'] = undefined;

  /**
   * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {Date} modifiedAt
   */
exports.prototype['modifiedAt'] = undefined;

  /**
   * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
   * @member {Boolean} inlineImageActivation
   */
exports.prototype['inlineImageActivation'] = undefined;

  /**
   * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
   * @member {Boolean} mirrorActive
   */
exports.prototype['mirrorActive'] = undefined;

  /**
   * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
   * @member {Boolean} recurring
   */
exports.prototype['recurring'] = undefined;

  /**
   * Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if 'status' of the campaign is 'sent'
   * @member {Date} sentDate
   */
exports.prototype['sentDate'] = undefined;

  /**
   * Total number of non-delivered campaigns for a particular campaign id.
   * @member {Number} returnBounce
   */
exports.prototype['returnBounce'] = undefined;



  return exports;
}));


