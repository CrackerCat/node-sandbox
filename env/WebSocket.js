globalMy.WebSocket_get_url = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['url'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_url,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_get_readyState = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_readyState,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_get_bufferedAmount = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['bufferedAmount'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_bufferedAmount,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_get_onopen = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onopen'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_onopen,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_set_onopen = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onopen'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_set_onopen, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.WebSocket_get_onerror = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_set_onerror = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.WebSocket_get_onclose = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclose'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_onclose,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_set_onclose = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclose'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_set_onclose, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.WebSocket_get_extensions = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['extensions'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_extensions,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_get_protocol = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['protocol'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_protocol,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_get_onmessage = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onmessage'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_onmessage,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_set_onmessage = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onmessage'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_set_onmessage, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.WebSocket_get_binaryType = function () {
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['binaryType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_get_binaryType,result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_set_binaryType = function (val) {
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['binaryType'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_set_binaryType, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.WebSocket_close = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_close, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.WebSocket_send = function () {
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了WebSocket_send, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};