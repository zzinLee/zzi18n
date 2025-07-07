const FIGMA_WIDTH = 320;
const FIGMA_HEIGHT = 384;

interface UIToPluginMessage {
  type: string;
  message?: string;
}

const onMessage = async (msg: UIToPluginMessage) => {
  switch (msg.type) {
    case "zzi18n-plugin-message":
      console.log(msg.message);
      break;
    default:
      break;
  }
};

//MARK: init
const initializePlugin = async () => {
  try {
    console.log("Plugin initialization started");

    const catchOnMessage = async (msg: UIToPluginMessage) => {
      try {
        await onMessage(msg);
      } catch (error) {
        alert(error);
      }
    };

    figma.ui.onmessage = catchOnMessage;
    console.log(
      "About to show UI with dimensions:",
      FIGMA_WIDTH,
      "x",
      FIGMA_HEIGHT,
    );
    figma.showUI(__html__, { width: FIGMA_WIDTH, height: FIGMA_HEIGHT });
    console.log("UI should be displayed now");
  } catch (error) {
    console.error("Plugin initialization error:", error);
    figma.notify("Error", { error: true });
  }
};

console.log("Plugin script loaded");
initializePlugin();
