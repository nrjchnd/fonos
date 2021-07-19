// source: callmanager.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.fonos.callmanager.v1alpha1.CallRequest', null, global);
goog.exportSymbol('proto.fonos.callmanager.v1alpha1.CallResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.callmanager.v1alpha1.CallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fonos.callmanager.v1alpha1.CallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fonos.callmanager.v1alpha1.CallRequest.displayName = 'proto.fonos.callmanager.v1alpha1.CallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.fonos.callmanager.v1alpha1.CallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.fonos.callmanager.v1alpha1.CallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.fonos.callmanager.v1alpha1.CallResponse.displayName = 'proto.fonos.callmanager.v1alpha1.CallResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.fonos.callmanager.v1alpha1.CallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fonos.callmanager.v1alpha1.CallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.callmanager.v1alpha1.CallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    webhook: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ignoreE164Validation: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fonos.callmanager.v1alpha1.CallRequest;
  return proto.fonos.callmanager.v1alpha1.CallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.callmanager.v1alpha1.CallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebhook(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreE164Validation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fonos.callmanager.v1alpha1.CallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.callmanager.v1alpha1.CallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.callmanager.v1alpha1.CallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWebhook();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIgnoreE164Validation();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest} returns this
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest} returns this
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string webhook = 3;
 * @return {string}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.getWebhook = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest} returns this
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.setWebhook = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool ignore_e164_validation = 4;
 * @return {boolean}
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.getIgnoreE164Validation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.fonos.callmanager.v1alpha1.CallRequest} returns this
 */
proto.fonos.callmanager.v1alpha1.CallRequest.prototype.setIgnoreE164Validation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.fonos.callmanager.v1alpha1.CallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.fonos.callmanager.v1alpha1.CallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.fonos.callmanager.v1alpha1.CallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.callmanager.v1alpha1.CallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fonos.callmanager.v1alpha1.CallResponse}
 */
proto.fonos.callmanager.v1alpha1.CallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fonos.callmanager.v1alpha1.CallResponse;
  return proto.fonos.callmanager.v1alpha1.CallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fonos.callmanager.v1alpha1.CallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fonos.callmanager.v1alpha1.CallResponse}
 */
proto.fonos.callmanager.v1alpha1.CallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.fonos.callmanager.v1alpha1.CallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.fonos.callmanager.v1alpha1.CallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fonos.callmanager.v1alpha1.CallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.fonos.callmanager.v1alpha1.CallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 duration = 1;
 * @return {number}
 */
proto.fonos.callmanager.v1alpha1.CallResponse.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.fonos.callmanager.v1alpha1.CallResponse} returns this
 */
proto.fonos.callmanager.v1alpha1.CallResponse.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.fonos.callmanager.v1alpha1);
