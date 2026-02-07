figma.showUI(__html__, { width: 224, height: 120, themeColors: true });

const userId =
  figma.currentUser && figma.currentUser.id ? figma.currentUser.id : "anon";
const STORAGE_KEY = "todo_list_items_" + userId;

function loadItems() {
  const raw = figma.root.getPluginData(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function saveItems(items) {
  figma.root.setPluginData(STORAGE_KEY, JSON.stringify(items));
}

figma.ui.onmessage = (msg) => {
  if (msg.type === "load") {
    figma.ui.postMessage({ type: "loaded", items: loadItems() });
  }

  if (msg.type === "save") {
    saveItems(msg.items || []);
  }

  if (msg.type === "resize") {
    const height = Math.ceil(msg.height);
    figma.ui.resize(224, height);
  }

};
