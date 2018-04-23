const request = require('request-promise');
//  v3 版本
const delay = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
         resolve()   
        }, 4000);
    })
}
class Ideone {
    constructor(accessToken, customerId) {
        this.url = `http://${customerId}.compilers.sphere-engine.com/api/v3/compilers?access_token=${accessToken}`;
        this.url1 = `http://${customerId}.compilers.sphere-engine.com/api/v3/submissions?access_token=${accessToken}`;
        this.url2 = (submissionId) =>  `http://${customerId}.compilers.sphere-engine.com/api/v3/submissions/${submissionId}?access_token=${accessToken}&withSource=1&withInput=1&withOutput=1&withStderr=1&withCmpinfo=1`;
    }
    // 设置语言类别
    setMode(languageId) {
        this.languageId = languageId;
    }
    async support(){
        try {
            const res = await request({
                url: this.url,
                method: 'GET'
            });
            if (res) {
                return JSON.parse(res).items;
            }
        } catch (e) {
           console.log(e);
        }
    }
    async run(sourceCode, input) {
        const submissionData = {
            language: 112,
            sourceCode,
            input
        };
        try {
            const res1 = await request({
                url: this.url1,
                method: 'POST',
                form: submissionData
            });
            if (res1) {
                    await delay();
                    const res2 = await request({
                        url: this.url2(JSON.parse(res1).id),
                        method: 'GET'
                    });
                    if (res2) {
                        return JSON.parse(res2)
                    }
            }
        } catch (e) {
           console.log(e);
        }
    }
}

