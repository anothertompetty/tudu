Plan

Clarify scope and behavior
Define the core interactions: add, reorder (drag), mark done, delete, and toggle viewing done items. Decide where data is stored (plugin data vs. local storage) and whether it’s per-file or per-user.

Set up the plugin skeleton
Create a minimal Figma plugin with a UI panel, a manifest.json, and a small code bridge between UI and plugin main code.

Build the UI (to‑do list app)
Implement the list UI with add, drag reorder, done toggle, delete, and a “show done” filter. Keep it simple and usable for your workflow.

Implement data persistence
Store the list in the Figma file (or user’s local storage) so it persists between sessions. Decide if “done” items are kept or archived.

Test in Figma and iterate
Run the plugin, test behaviors, fix edge cases (empty list, reordering, filtering), and polish the UI.