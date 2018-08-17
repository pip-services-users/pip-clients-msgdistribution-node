"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_components_node_1 = require("pip-services-components-node");
const MessageDistributionNullClientV1_1 = require("../version1/MessageDistributionNullClientV1");
const MessageDistributionDirectClientV1_1 = require("../version1/MessageDistributionDirectClientV1");
const MessageDistributionHttpClientV1_1 = require("../version1/MessageDistributionHttpClientV1");
const MessageDistributionSenecaClientV1_1 = require("../version1/MessageDistributionSenecaClientV1");
class MessageDistributionClientFactory extends pip_services_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(MessageDistributionClientFactory.NullClientV1Descriptor, MessageDistributionNullClientV1_1.MessageDistributionNullClientV1);
        this.registerAsType(MessageDistributionClientFactory.DirectClientV1Descriptor, MessageDistributionDirectClientV1_1.MessageDistributionDirectClientV1);
        this.registerAsType(MessageDistributionClientFactory.HttpClientV1Descriptor, MessageDistributionHttpClientV1_1.MessageDistributionHttpClientV1);
        this.registerAsType(MessageDistributionClientFactory.SenecaClientV1Descriptor, MessageDistributionSenecaClientV1_1.MessageDistributionSenecaClientV1);
    }
}
MessageDistributionClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-msgdistribution', 'factory', 'default', 'default', '1.0');
MessageDistributionClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-msgdistribution', 'client', 'null', 'default', '1.0');
MessageDistributionClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-msgdistribution', 'client', 'direct', 'default', '1.0');
MessageDistributionClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-msgdistribution', 'client', 'http', 'default', '1.0');
MessageDistributionClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-msgdistribution', 'client', 'seneca', 'default', '1.0');
exports.MessageDistributionClientFactory = MessageDistributionClientFactory;
//# sourceMappingURL=MessageDistributionClientFactory.js.map