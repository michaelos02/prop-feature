function setProperty(key, value) {
  var sp = PropertiesService.getScriptProperties();
  sp.setProperty(key, value);
}

function getProperty(key){
  var sp = PropertiesService.getScriptProperties();
  return sp.getProperty(key);
}


function testIt(){
  setProperty("Happy","6666");
  setProperty("Hopeful","9999");
  var rslt = getProperty("Happy");
  Logger.log(rslt);
}
  
function deleteeProperties(){
  var sp = PropertiesService.getScriptProperties();
  sp.deleteAllProperties();
}