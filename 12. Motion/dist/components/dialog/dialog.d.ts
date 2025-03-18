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
export declare class InputDialog extends BaseComponent<HTMLElement> implements Composable {
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;
    constructor();
    setOnCloseListener(listener: OnCloseListener): void;
    setOnSubmitListener(listener: OnSubmitListener): void;
    addChild(child: Component): void;
}
export {};
