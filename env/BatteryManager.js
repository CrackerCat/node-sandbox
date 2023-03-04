globalMy.BatteryManager_get_charging = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['charging'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_charging,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_get_chargingTime = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['chargingTime'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_chargingTime,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_get_dischargingTime = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['dischargingTime'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_dischargingTime,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_get_level = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['level'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_level,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_get_onchargingchange = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchargingchange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_onchargingchange,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_set_onchargingchange = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchargingchange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_set_onchargingchange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.BatteryManager_get_onchargingtimechange = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchargingtimechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_onchargingtimechange,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_set_onchargingtimechange = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchargingtimechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_set_onchargingtimechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.BatteryManager_get_ondischargingtimechange = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['ondischargingtimechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_ondischargingtimechange,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_set_ondischargingtimechange = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['ondischargingtimechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_set_ondischargingtimechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.BatteryManager_get_onlevelchange = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onlevelchange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_get_onlevelchange,result => ', '' + result);
  }
  return result;
};
globalMy.BatteryManager_set_onlevelchange = function (val) {
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onlevelchange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BatteryManager_set_onlevelchange, 传参val => ' + val + '  result => ', '' + result);
  }
};