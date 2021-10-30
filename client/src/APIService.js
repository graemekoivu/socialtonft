import axios from 'axios';

class APIService {

    static getDisplay(code) {
        var data;
        return new Promise((resolve, reject) => {
            try {
                axios.get(`https://localhost:3443/display/?code=${code}`)
                .then(res => {
                    data = res.data;
                    resolve(data);
                });
                /*resolve(
                    console.log(data),
                    data //how should the data be resolved...
                );*/
            } catch(err) {
                reject(err);
            }
        })
    }

    static postNFTs(postURL, options) {
        return new Promise((resolve, reject) => {
            try {
                axios.post(postURL, options)
                .then(res => {
                    resolve(res);
                });
            } catch(err) {
                reject(err);
            }
        })
    }

}

export default APIService;