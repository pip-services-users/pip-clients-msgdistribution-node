import { ConfigParams } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IMessageDistributionClientV1 } from './IMessageDistributionClientV1';
import { MessageV1 } from './MessageV1';

//import { IMessageDistributionController } from 'pip-services-msgdistribution-node';

export class MessageDistributionDirectClientV1 extends DirectClient<any> implements IMessageDistributionClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-msgdistribution", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public sendMessageToRecipient(correlationId: string, recipientId: string, subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void) {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipient');
        this._controller.sendMessageToRecipient(
            correlationId, recipientId, subscription, message, parameters, method,
            (err) => {
                timing.endTiming();
                if (callback) callback(err);
            }
        );
    }

    public sendMessageToRecipients(correlationId: string, recipientIds: string[], subscription: string,
        message: MessageV1, parameters: ConfigParams, method: string,
        callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'msg_distribution.send_message_to_recipients');
        this._controller.sendMessageToRecipients(
            correlationId, recipientIds, subscription, message, parameters, method,
            (err) => {
                timing.endTiming();
                if (callback) callback(err);
            }
        );
    }

}