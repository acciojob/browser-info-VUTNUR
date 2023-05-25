//your JS code here. If required.
let div= document.createElement("div");
div.id="browser-info";
div.innerText = "You are using " + `${navigator.appName}`+" version " + `${navigator.appVersion}`;
document.body.append(div);