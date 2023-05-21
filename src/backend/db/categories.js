import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "birthday-specials",
    img: "https://pic.warmoven.in/wysiwyg/Birthday_1_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "anniversary-specials",
    img: "https://pic.warmoven.in/wysiwyg/Anniversary1.jpg"
  },
  {
    _id: uuid(),
    categoryName: "baby-shower",
    img: "https://pic.warmoven.in/wysiwyg/Baby_Shower_1.jpg"
  },
];
