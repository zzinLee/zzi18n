import { FIGMA_HEIGHT, FIGMA_WIDTH } from "./shared/consts";

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
    const catchOnMessage = async (msg: UIToPluginMessage) => {
      try {
        await onMessage(msg);
      } catch (error) {
        alert(error);
      }
    };

    figma.ui.onmessage = catchOnMessage;
    figma.showUI(__html__, { width: FIGMA_WIDTH, height: FIGMA_HEIGHT });
  } catch (error) {
    console.error("Plugin initialization error:", error);
    figma.notify("Error", { error: true });
  }
};

initializePlugin();
