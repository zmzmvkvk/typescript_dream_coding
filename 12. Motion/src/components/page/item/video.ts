import { BaseComponent } from "../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
              <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="video__title"></h3>
          </section>`);

    const iframe = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
    iframe.src = "https://www.youtube.com/embed/-u5CTkgJVgA";

    console.log(url);
    const titleElement = this.element.querySelector(`.video__title`)! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const videoId = "kk";
  }
}

// <iframe
//   width="700"
//   height="394"
//   src="https://www.youtube.com/embed/-u5CTkgJVgA"
//   title="Devastator (4K) Transformers"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// ></iframe>;
