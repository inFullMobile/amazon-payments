class OffAmazonPayments {
  constructor(_super, version = '2013-01-01') {
    this.version = version;
    this._super = _super;
  }

  authorize(params, callback) {
    this._super.callMwsMethod('Authorize', this.version, params, callback);
  }

  cancelOrderReference(params, callback) {
    this._super.callMwsMethod('CancelOrderReference', this.version, params, callback);
  }

  capture(params, callback) {
    this._super.callMwsMethod('Capture', this.version, params, callback);
  }

  closeAuthorization(params, callback) {
    this._super.callMwsMethod('CloseAuthorization', this.version, params, callback);
  }

  closeOrderReference(params, callback) {
    this._super.callMwsMethod('CloseOrderReference', this.version, params, callback);
  }

  confirmOrderReference(params, callback) {
    this._super.callMwsMethod('ConfirmOrderReference', this.version, params, callback);
  }

  getAuthorizationDetails(params, callback) {
    this._super.callMwsMethod('GetAuthorizationDetails', this.version, params, callback);
  }

  getCaptureDetails(params, callback) {
    this._super.callMwsMethod('GetCaptureDetails', this.version, params, callback);
  }

  getMerchantAccountStatus(params, callback) {
    this._super.callMwsMethod('GetMerchantAccountStatus', this.version, params, callback);
  }

  getOrderReferenceDetails(params, callback) {
    this._super.callMwsMethod('GetOrderReferenceDetails', this.version, params, callback);
  }

  getRefundDetails(params, callback) {
    this._super.callMwsMethod('GetRefundDetails', this.version, params, callback);
  }

  getServiceStatus(params, callback) {
    this._super.callMwsMethod('GetServiceStatus', this.version, params, callback);
  }

  refund(params, callback) {
    this._super.callMwsMethod('Refund', this.version, params, callback);
  }

  setOrderAttributes(params, callback) {
    this._super.callMwsMethod('SetOrderAttributes', this.version, params, callback);
  }

  setOrderReferenceDetails(params, callback) {
    this._super.callMwsMethod('SetOrderReferenceDetails', this.version, params, callback);
  }

  // Recurring payment-specific API
  authorizeOnBillingAgreement(params, callback) {
    this._super.callMwsMethod('AuthorizeOnBillingAgreement', this.version, params, callback);
  }

  closeBillingAgreement(params, callback) {
    this._super.callMwsMethod('CloseBillingAgreement', this.version, params, callback);
  }

  confirmBillingAgreement(params, callback) {
    this._super.callMwsMethod('ConfirmBillingAgreement', this.version, params, callback);
  }

  createOrderReferenceForId(params, callback) {
    this._super.callMwsMethod('CreateOrderReferenceForId', this.version, params, callback);
  }

  getBillingAgreementDetails(params, callback) {
    this._super.callMwsMethod('GetBillingAgreementDetails', this.version, params, callback);
  }

  setBillingAgreementDetails(params, callback) {
    this._super.callMwsMethod('SetBillingAgreementDetails', this.version, params, callback);
  }

  validateBillingAgreement(params, callback) {
    this._super.callMwsMethod('ValidateBillingAgreement', this.version, params, callback);
  }
}

exports.OffAmazonPayments = OffAmazonPayments;
