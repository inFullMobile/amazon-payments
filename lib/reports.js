class Reports {
  constructor(_super, version = '2009-01-01') {
    this._super = _super;
    this.version = version;
  }

  requestReport(params, callback) {
    this._super.callMwsMethod('RequestReport', this.version, params, callback);
  }

  getReportRequestList(params, callback) {
    this._super.callMwsMethod('GetReportRequestList', this.version, params, callback);
  }

  getReportRequestListByNextToken(params, callback) {
    this._super.callMwsMethod('GetReportRequestListByNextToken', this.version, params, callback);
  }

  getReportRequestCount(params, callback) {
    this._super.callMwsMethod('GetReportRequestCount', this.version, params, callback);
  }

  cancelReportRequests(params, callback) {
    this._super.callMwsMethod('CancelReportRequests', this.version, params, callback);
  }

  getReportList(params, callback) {
    this._super.callMwsMethod('GetReportList', this.version, params, callback);
  }

  getReportListByNextToken(params, callback) {
    this._super.callMwsMethod('GetReportListByNextToken', this.version, params, callback);
  }

  getReportCount(params, callback) {
    this._super.callMwsMethod('GetReportCount', this.version, params, callback);
  }

  getReport(params, callback) {
    this._super.callMwsMethod('GetReport', this.version, params, callback);
  }

  manageReportSchedule(params, callback) {
    this._super.callMwsMethod('ManageReportSchedule', this.version, params, callback);
  }

  getReportScheduleList(params, callback) {
    this._super.callMwsMethod('GetReportScheduleList', this.version, params, callback);
  }

  getReportScheduleListByNextToken(params, callback) {
    this._super.callMwsMethod('GetReportScheduleListByNextToken', this.version, params, callback);
  }

  getReportScheduleCount(params, callback) {
    this._super.callMwsMethod('GetReportScheduleCount', this.version, params, callback);
  }

  updateReportAcknowledgements(params, callback) {
    this._super.callMwsMethod('UpdateReportAcknowledgements', this.version, params, callback);
  }
}

exports.Reports = Reports;
