import { ConfigParams } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';
export declare class MessageDistributionDirectClientV1 extends DirectClient<any> implements IMessageDistributionClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string, message: MessageV1, parameters: ConfigParams, method: string, callback?: (err: any) => void): void;
    sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string, message: MessageV1, parameters: ConfigParams, method: string, callback?: (err: any) => void): void;
}
