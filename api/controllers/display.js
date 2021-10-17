//const https = require('https');
const request = require('request'); //should probably use fetch or got APIs.

/*class InstaAPI {

    private const code;

    constructor(params) {
        if params.query.code {
            code = params.query.code;
        }
    }

};*/

exports.get_display = (req, res, next) => {
    const code = req.query.code;
    console.log('~~~~~~' + code);
    //console.log(process.env.INSTAGRAM_APP_ID);
    const options = {
        'client_id': '914052029523165',
        'client_secret': process.env.INSTAGRAM_APP_SECRET,
        'grant_type': 'authorization_code',
        'redirect_uri': 'https://localhost:3443',
        'code': code
    }

        //form: JSON.stringify(options),
    request.post({
        method: 'POST',
        url: 'https://api.instagram.com/oauth/access_token',
        form: {
            client_id: '914052029523165',
            client_secret: process.env.INSTAGRAM_APP_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: 'https://localhost:3443/display/', //OKAY why does using this red-uri work? must it match the one in initial request (maybe enccrypted in original 'code')?
            code: code
        }
    }, (e, res, body) => {
        const obj = JSON.parse(body);
        //const user_id = obj.user_id;
        const token = obj.access_token;
        console.log('flagX + token:' + token);
        request.get({ url: `https://graph.instagram.com/me/media?fields=media_url,id&access_token=${token}`
        }, (e, res, body) => {
            //const obj2 = JSON.parse(body);
            console.log(body);
            console.log('flagZZ');

        });
    });


    console.log('flag0');
    res.sendFile('display.html', { root: '.'});

};