let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { MessageDistributionController } from 'pip-services-msgdistribution-node';
import { MessageDistributionSenecaServiceV1 } from 'pip-services-msgdistribution-node';
import { IMessageDistributionClientV1 } from '../../src/version1/IMessageDistributionClientV1';
import { MessageDistributionSenecaClientV1 } from '../../src/version1/MessageDistributionSenecaClientV1';
import { MessageDistributionClientFixtureV1 } from './MessageDistributionClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('MessageDistributionSenecaClient', () => {
    let service: MessageDistributionSenecaServiceV1;
    let client: MessageDistributionSenecaClientV1;
    let fixture: MessageDistributionClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new MessageDistributionController();
        controller.configure(new ConfigParams());

        service = new MessageDistributionSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-msgdistribution', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-msgdistribution', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new MessageDistributionSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new MessageDistributionClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Send Message', (done) => {
        fixture.testSendMessage(done);
    });

    test('Send Message to Recipient', (done) => {
        fixture.testSendMessageToRecipient(done);
    });

});
