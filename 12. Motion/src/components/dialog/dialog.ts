import { BaseComponent, Component } from "../page/component.js";
import { Composable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}
export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<section class="dialog">
            <div class="dialog__container">
              <button class="close">&times</button>
              <div id="dialog__body"></div>
              <button class="dialog__submit">ADD</button>
            </div>
          </section>`);

    const closeBtn = this.element.querySelector(`.close`)! as HTMLElement;
    // closeBtn.addEventListener("click", () => {});
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector(`.dialog__submit`)! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
