export class ImageComponent {
    constructor() {
        this.element = document.createElement("img");
        this.element.textContent = "This is PageComponent";
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
