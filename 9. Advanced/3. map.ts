{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // [1, 2].map((item) => item * item);

  type Optional<T> = {
    // Map 타입
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "Hi Hello",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };

  animal.name = "elli";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
    description: "asd",
  };

  // video.author = "asd";

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: "sdsd",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type ProxiFy<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
