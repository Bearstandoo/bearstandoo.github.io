(() => {
  let lastL2 = false;
  let lastStickLeft = false;

  const sendKey = (key) => {
    const evt = new KeyboardEvent("keydown", {
      key,
      code: key,
      keyCode: key === "ArrowLeft" ? 37 : 39,
      which: key === "ArrowLeft" ? 37 : 39,
      bubbles: true,
    });
    document.dispatchEvent(evt);
  };

  const update = () => {
    const gp = navigator.getGamepads?.()[0];
    if (!gp) return requestAnimationFrame(update);

    const L2 = gp.buttons[6]?.pressed;
    const stickLeft = gp.axes[0] < -0.7;

    if (L2 && !lastL2) sendKey("ArrowLeft");
    if (stickLeft && !lastStickLeft) sendKey("ArrowRight");

    lastL2 = L2;
    lastStickLeft = stickLeft;

    requestAnimationFrame(update);
  };

  window.addEventListener("gamepadconnected", update);
})();
