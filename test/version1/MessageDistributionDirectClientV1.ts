let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { MessageDistributionController } from 'pip-services-msgdistribution-node';
import { IMessageDistributionClientV1 } from '../../src/version1/IMessageDistributionClientV1';
import { MessageDistributionDirectClientV1 } from '../../src/version1/MessageDistributionDirectClientV1';
import { MessageDistributionClientFixtureV1 } from './MessageDistributionClientFixtureV1';

suite('MessageDistributionDirectClientV1', ()=> {
    let client: MessageDistributionDirectClientV1;
    let fixture: MessageDistributionClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new MessageDistributionController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-msgdistribution', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MessageDistributionDirectClientV1();
        client.setReferences(references);

        fixture = new MessageDistributionClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Send Message', (done) => {
        fixture.testSendMessage(done);
    });

    test('Send Message to Recipient', (done) => {
        fixture.testSendMessageToRecipient(done);
    });
    
});
