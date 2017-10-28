let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services-commons-node';
import { MessageV1 } from '../../src/version1/MessageV1';
import { DeliveryMethodV1 } from '../../src/version1/DeliveryMethodV1';
import { IMessageDistributionClientV1 } from '../../src/version1/IMessageDistributionClientV1';

export class MessageDistributionClientFixtureV1 {
    private _client: IMessageDistributionClientV1;
    
    constructor(client: IMessageDistributionClientV1) {
        this._client = client;
    }

    public testSendMessageToRecipient(done) {
        let message = <MessageV1> {
            subject: 'Test subject',
            text: 'Test text',
            html: 'Test html'
        };

        this._client.sendMessageToRecipient(
            null, '1', null, message, null, DeliveryMethodV1.All,
            (err) => {
                assert.isNull(err);
                done();
            }
        );
    }

}
