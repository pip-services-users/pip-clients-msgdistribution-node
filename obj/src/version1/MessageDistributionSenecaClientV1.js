"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class MessageDistributionSenecaClientV1 extends pip_services_net_node_1.CommandableSenecaClient {
    constructor(config) {
        super('msg_distribution');
        let thisConfig = pip_services_commons_node_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessageToRecipient(correlationId, recipientId, subscription, message, parameters, method, callback) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand('send_message_to_recipient', correlationId, {
            recipient_id: recipientId,
            subscription: subscription,
            message: message,
            parameters: parameters,
            method: method
        }, callback);
    }
    sendMessageToRecipients(correlationId, recipientIds, subscription, message, parameters, method, callback) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand('send_message_to_recipients', correlationId, {
            recipient_ids: recipientIds,
            subscription: subscription,
            message: message,
            parameters: parameters,
            method: method
        }, callback);
    }
}
exports.MessageDistributionSenecaClientV1 = MessageDistributionSenecaClientV1;
//# sourceMappingURL=MessageDistributionSenecaClientV1.js.map