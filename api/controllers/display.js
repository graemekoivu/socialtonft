//const https = require('https');
const axios = require('axios').default; //should probably use fetch or got APIs.

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
    var urls_data;
    const insta_url = 'https://api.instagram.com/oauth/access_token';
    var options = new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:3443/display/',
        code: code
    });

    axios.post(insta_url, options)
        .then(response => {
            const access_token = response['data']['access_token'];
            axios.get(`https://graph.instagram.com/me/media?fields=media_url,id&access_token=${access_token}`)
            .then(response2 => {
                urls_data = response2['data'];
                console.log(urls_data);
                res.render('display', {data: urls_data, token: access_token})/*, (err, res2) => {
                    console.log('inside render\'s callback');
                    if (err) {
                        console.log(err);
                    }
                    return console.log(res2);
                })*/
                //res.sendFile('display.html', {root: '.'})
            })
    }).catch(err => {
        console.log(err);
    })

    console.log('flag0');
    return
};