import { BaseComponent, Component } from "./component.js";
export interface Composable {
    addChild(child: Component): void;
}
type OnCloseListener = () => void;
interface SectionContainer extends Component, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}
type SectionContainerConstructor = {
    new (): SectionContainer;
};
export declare class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
    private closeListener?;
    constructor();
    addChild(child: Component): void;
    setOnCloseListener(listener: OnCloseListener): void;
}
export declare class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    private pageItemConstructor;
    constructor(pageItemConstructor: SectionContainerConstructor);
    addChild(section: Component): void;
}
export {};
