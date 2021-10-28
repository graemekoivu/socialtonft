import axios from 'axios';

class APIService {

    static getDisplay(code) {
        var data;
        return new Promise((resolve, reject) => {
            try {
                axios.get(`https://localhost:3443/display/?code=${code}`)
                .then(res => {
                    console.log(res.data.data);
                    data = res.data.data;
                });
                resolve(
                    data //how should the data be resolved...
                );
            } catch(err) {
                reject(err);
            }
        })
    }

}

export default APIService;