window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function isScriptAlreadyIncluded(src) {
  return document.querySelectorAll(`script[src="${src}"]`).length > 0;
}
 
function loadScript(src) {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
}
 
const nrzmalikMGFY = 'https://cdn.jsdelivr.net/gh/nrzmalik/nrzmalikslmgfy/nrzMagnifier1.2.js';
 
 
loadScript(nrzmalikMGFY);
}

window.Script2 = function()
{
  nrzMagnify("Human",2,300,'circle');

/*Usage:
Example: 
nrzMagnify('Human', 2, 350, 'circle');

By default, it applies a 4x zoom with a magnifier size of 250px.
e.g., nrzMagnify("Write_Your_IMAGEaccessibility_Name");

Customize the zoom level:
e.g., for 2x zoom: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2);

Adjust the size of the magnifier:
e.g., for a 350px magnifier size: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2, 350);
*/

}

window.Script3 = function()
{
  nrzMagnify("Human",2,300,'circle');

/*Usage:
Example: 
nrzMagnify('Human', 2, 350, 'circle');

By default, it applies a 4x zoom with a magnifier size of 250px.
e.g., nrzMagnify("Write_Your_IMAGEaccessibility_Name");

Customize the zoom level:
e.g., for 2x zoom: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2);

Adjust the size of the magnifier:
e.g., for a 350px magnifier size: nrzMagnify("Write_Your_IMAGEaccessibility_Name", 2, 350);
*/

}

};
