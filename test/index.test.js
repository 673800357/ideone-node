const Ideone = require('../index');
const { accessToken, customId } = require('../config');
describe('Basic test', () => {
    test('Support language is 70', () => {
        const ins = new Ideone(accessToken, customId);
        ins.support().then(support => expect(support.length).toBe(70));
    });

    test('Set mode 112, the ins\'s languageId is 112', () => {
        const ins = new Ideone(accessToken, customId);
        ins.setMode(112);
        expect(ins.languageId).toBe(112);
    });

    test('Input hello world and output hello world', () => {
        const source = 'const input=readline();print(input);', input = 'hello world';
        const ins = new Ideone(accessToken, customId);
        ins.setMode(112);
        ins.run(source, input).then(data => {
            expect(data.output).toBe('hello world');
        })
    })
})
