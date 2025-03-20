window.addEventListener("message", (event) => {
    if (event.data.injectScript) {
      try {
        const script = document.createElement("script");
        script.innerHTML = `
          // Override the default document.requestFullscreen behavior inside the iframe
          document.requestFullscreen = function() {
            parent.postMessage("requestFullscreen", "*");
          };
        `;
        document.documentElement.appendChild(script);
      } catch (e) {
        console.error("Failed to inject script:", e);
      }
    }
  });