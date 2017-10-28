import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { MessageV1 } from './MessageV1';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';

export class MessageDistributionHttpClientV1 extends CommandableHttpClient implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('msg_distribution');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand(
            'send_message_to_recipient',
            correlationId,
            {
                recipient_id: recipientId,
                subscription: subscription,
                message: message,
                parameters: parameters,
                method: method
            },
            callback
        );
    }

    public sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand(
            'send_message_to_recipients',
            correlationId,
            {
                recipient_ids: recipientIds,
                subscription: subscription,
                message: message,
                parameters: parameters,
                method: method
            },
            callback
        );
    }

}
