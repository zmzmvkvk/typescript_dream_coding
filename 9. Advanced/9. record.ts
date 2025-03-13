type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// 하나를 Key로쓰고 하나를 value로 묶고 싶을때 사용

type Product = "cat" | "dog";

type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
