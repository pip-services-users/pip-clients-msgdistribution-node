"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageDistributionNullClientV1 {
    sendMessageToRecipient(correlationId, recipientId, subscription, message, parameters, method, callback) {
        if (callback)
            callback(null);
    }
    sendMessageToRecipients(correlationId, recipientIds, subscription, message, parameters, method, callback) {
        if (callback)
            callback(null);
    }
}
exports.MessageDistributionNullClientV1 = MessageDistributionNullClientV1;
//# sourceMappingURL=MessageDistributionNullClientV1.js.map