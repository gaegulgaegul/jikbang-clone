export const render = (rootComponent, root) => {
    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
}