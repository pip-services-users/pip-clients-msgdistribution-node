import { ConfigParams } from 'pip-services-commons-node';
import { CommandableLambdaClient } from 'pip-services-aws-node';
import { MessageV1 } from './MessageV1';
import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
export declare class MessageDistributionLambdaClientV1 extends CommandableLambdaClient implements IMessageDistributionClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string, message: MessageV1, parameters: ConfigParams, method: string, callback?: (err: any) => void): void;
    sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string, message: MessageV1, parameters: ConfigParams, method: string, callback?: (err: any) => void): void;
}
