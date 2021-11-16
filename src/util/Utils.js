export const render = (rootComponent, root) => {
    console.log("rootComponent typeof => ", typeof rootComponent);
    if (!root || !rootComponent) return;
    if (typeof rootComponent === "string") {
        root.innerHTML = rootComponent;
        return;
    }
    root.innerHTML = rootComponent();
}