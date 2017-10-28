import { YamlConfigReader } from 'pip-services-commons-node';
import { MessageDistributionClientFixtureV1 } from './MessageDistributionClientFixtureV1';
import { MessageDistributionLambdaClientV1 } from '../../src/version1/MessageDistributionLambdaClientV1';

suite('MessageDistributionLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: MessageDistributionLambdaClientV1;
    let fixture: MessageDistributionClientFixtureV1;

    setup((done) => {
        client = new MessageDistributionLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new MessageDistributionClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Send Message to Recipient', (done) => {
        fixture.testSendMessageToRecipient(done);
    });

});