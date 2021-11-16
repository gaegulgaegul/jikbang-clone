/**
 * Component 랜더링 함수
 * @param rootComponent
 * @param root
 */
export const render = (rootComponent, root) => {
    if (!root || !rootComponent) return;
    if (typeof rootComponent === "string") {
        root.innerHTML = rootComponent;
        return;
    }
    root.innerHTML = rootComponent();
}

/**
 * HTML tag 추가 함수
 * @param element
 * @param tags
 */
export const appendHtml = (element, tags) => {
    const div = document.createElement('div');
    div.innerHTML = tags;
    while (div.children.length > 0) {
        element.appendChild(div.children[0]);
    }
}