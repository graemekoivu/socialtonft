//const https = require('https');
const axios = require('axios').default; //should probably use fetch or got APIs.
const path = require('path');
/*class InstaAPI {

    private const code;

    constructor(params) {
        if params.query.code {
            code = params.query.code;
        }
    }

};*/

exports.get_display = (req, res, next) => {
    console.log('inside get display');
    const code = req.query.code;
    console.log(code);
    var urls_data;
    const insta_url = 'https://api.instagram.com/oauth/access_token';
    var options = new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:3443/',
        code: code
    });

    axios.post(insta_url, options)
        .then(response => {
            const access_token = response['data']['access_token'];
            console.log("access token: " + access_token);
            axios.get(`https://graph.instagram.com/me/media?fields=media_url,id&access_token=${access_token}`)
            .then(response2 => {
                urls_data = response2['data'];
                console.log(urls_data);
                res.status(200).json({urls_data, access_token});
                /*res.render('index.html', {data: urls_data, token: access_token})/*, (err, res2) => {
                    console.log('inside render\'s callback');
                    if (err) {
                        console.log(err);
                    }
                    return console.log(res2);
                })*/
                //res.render(path.join(__dirname, '../../public', 'index.ejs'), {data: urls_data, token: access_token})
            })
    }).catch(err => {
        console.log(err);
    })

    return
};