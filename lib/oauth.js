'use strict';

const querystring = require('querystring');
const axios = require('axios');

const request = axios.create();

class OAuth {
    constructor(appid, appsecret) {
        this.appid = appid;
        this.appsecret = appsecret;
        this.request = request;
    }

    /**
     * 获取小程序认证的URL地址
     * @param {string} code 客户端回调的code
     * @returns {string} url
     */
    getAuthorizeURL(code) {
        let url = 'https://api.weixin.qq.com/sns/jscode2session';
        let info = {
            appid:this.appid,
            secret:this.appsecret,
            js_code:code,
            grant_type:"authorization_code"
        };
        return url + '?' + querystring.stringify(info)
    }

    /**
     * 获取用户的openid
     * @param code
     * @returns {Promise<*>} 正常返回 {"openid": "OPENID","session_key": "SESSIONKEY"}
     */
    async getAccessToken(code){
        let url = this.getAuthorizeURL(code);
        const token = await this.request.get(url);
        return token.data;
    }


    //todo:获取用户信息
    _getUser(){

    }

    async getUser(){

    }

}

module.exports = OAuth;
