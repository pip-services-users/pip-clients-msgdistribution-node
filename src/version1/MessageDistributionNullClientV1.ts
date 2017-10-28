import { ConfigParams } from 'pip-services-commons-node';

import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';

export class MessageDistributionNullClientV1 implements IMessageDistributionClientV1 {

    public sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void) {
        if (callback) callback(null);
    }

    public sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

}