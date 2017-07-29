/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
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
    define(['ApiClient', 'model/SmtptemplatestemplateIdsendAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SmtptemplatestemplateIdsendAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.SendEmail1 = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.SmtptemplatestemplateIdsendAttachment);
  }
}(this, function(ApiClient, SmtptemplatestemplateIdsendAttachment) {
  'use strict';




  /**
   * The SendEmail1 model module.
   * @module model/SendEmail1
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SendEmail1</code>.
   * @alias module:model/SendEmail1
   * @class
   * @param emailTo {Array.<String>} Email addresses of the recipients
   */
  var exports = function(emailTo) {
    var _this = this;

    _this['emailTo'] = emailTo;






  };

  /**
   * Constructs a <code>SendEmail1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendEmail1} obj Optional instance to populate.
   * @return {module:model/SendEmail1} The populated <code>SendEmail1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emailTo')) {
        obj['emailTo'] = ApiClient.convertToType(data['emailTo'], ['String']);
      }
      if (data.hasOwnProperty('emailBcc')) {
        obj['emailBcc'] = ApiClient.convertToType(data['emailBcc'], ['String']);
      }
      if (data.hasOwnProperty('emailCc')) {
        obj['emailCc'] = ApiClient.convertToType(data['emailCc'], ['String']);
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('attachment')) {
        obj['attachment'] = ApiClient.convertToType(data['attachment'], [SmtptemplatestemplateIdsendAttachment]);
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Email addresses of the recipients
   * @member {Array.<String>} emailTo
   */
  exports.prototype['emailTo'] = undefined;
  /**
   * Email addresses of the recipients in bcc
   * @member {Array.<String>} emailBcc
   */
  exports.prototype['emailBcc'] = undefined;
  /**
   * Email addresses of the recipients in cc
   * @member {Array.<String>} emailCc
   */
  exports.prototype['emailCc'] = undefined;
  /**
   * Email on which campaign recipients will be able to reply to
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Pass the absolute URL (no local file) or the base64 content of the attachment. Name can be used in both cases to define the attachment name. It is mandatory in case of content. Extension allowed: gif, png, bmp, cgm, jpg, jpeg, tif, tiff, rtf, txt, css, shtml, html, htm, csv, zip, pdf, xml, ods, doc, docx, docm, ics, xls, xlsx, ppt, tar, and ez
   * @member {Array.<module:model/SmtptemplatestemplateIdsendAttachment>} attachment
   */
  exports.prototype['attachment'] = undefined;
  /**
   * @member {Object.<String, String>} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * @member {Object.<String, String>} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));

