import methods from './methods';

const getApiOpts = (methodsName, para = {}) => {
    if (methodsName === undefined || methodsName === "") {console.log("methodsObj为空")}
    else {
        return new Promise(function (resolve,reject) {
            let requestUrl = methods[methodsName][0];
            Object.keys(para).map((item, index) => {
                const symbol = index === 0 ?"?":"&";
                requestUrl = `${requestUrl}${symbol}${item}=${para[item]}`
            })
            let request = new XMLHttpRequest();
            request.open(methods[methodsName][1], requestUrl);
            request.send();
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 304 || request.status === 200) {
                        resolve(JSON.parse(request.response));
                    }else {
                        reject(request.response);
                    }
                }
            }
        })
    }
}

export default getApiOpts;