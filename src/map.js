export function MP(WRfnAHINwmqdZoK3a4sVI8pLv2PmYckH) {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + WRfnAHINwmqdZoK3a4sVI8pLv2PmYckH + "&callback=init";
    script.onerror = reject;
    document.head.appendChild(script);
  })
}