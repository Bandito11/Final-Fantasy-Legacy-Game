/*:
 * @plugindesc Plugin used to set rendering mode to canvas if on a Safari Webview.
 * @author Esteban
 *
 * @help This plugin does not provide plugin commands.
 * Enhancements to Community_Basic. Should be added below that plugin
 *
 */

(function () {
    function toNumber(str, def) {
        return isNaN(str) ? def : +(str || def);
    }

    SceneManager.preferableRendererType = function () {
        if (navigator.userAgent.toLowerCase().match('safari') && !navigator.userAgent.toLowerCase().match('chrome')) {
            return 'canvas';
        }
    };
})();