const error = require('./error');

class Api {
  constructor(_super) {
    this._super = _super;
  }

  getTokenInfo(accessToken, callback) {
    const params = {
      access_token: accessToken,
    };

    this._super.callApiMethod('auth/o2/tokeninfo', params, (err, tokenInfo) => {
      if (err) {
        return callback(err);
      }

      if (!tokenInfo) {
        return callback(error.badToken('No token info returned'));
      }

      if (tokenInfo.aud !== this._super.config.clientId) {
        return callback(error.badToken('Token does not belong to us', tokenInfo));
      }

      return callback(null, tokenInfo);
    });
  }

  getProfile(accessToken, callback) {
    this.getTokenInfo(accessToken, (err) => {
      if (err) {
        return callback(err);
      }

      return this._super.callApiMethod('user/profile', null, accessToken, callback);
    });
  }
}

exports.Api = Api;
