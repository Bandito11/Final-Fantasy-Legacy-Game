/*:
 * @target MZ
 * @plugindesc Fix focus bug for mobile platform.
 * @author Esteban Morales
 *
 * @help GameIsActive.js
 *
 * This plugin add as a check for mobile platform and just returns
 * true for the game is already active so that the canvas is shown
 * on the screen.
 *
 * Bug found by yymess (from https://forums.rpgmakerweb.com) and his pals
 */

(() => {
  console.log(navigator.userAgent);
  SceneManager.prototype.isGameActive = function () {
    if (
      navigator.userAgent.toLowerCase().match('iphone') ||
      navigator.userAgent.toLowerCase().match('android')
    ) {
      return true;
    }
    // [Note] We use "window.top" to support an iframe.
    try {
      return window.top.document.hasFocus();
    } catch (e) {
      // SecurityError
      return true;
    }
  };
})();
