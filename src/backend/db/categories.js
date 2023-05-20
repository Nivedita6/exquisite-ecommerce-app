import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "birthday-specials",
    description:
      "A birthday is a special day that should be celebrated with joy and happiness. And what better way to mark the occasion than with a delicious, freshly baked cake? If you're looking for the best birthday cakes , look no further than Birthday Cakes by Exquisite!",
  },
  {
    _id: uuid(),
    categoryName: "anniversary-specials",
    description:
      "Anniversaries are special milestones in our lives that we celebrate with our loved ones. They are a celebration of our love, commitment and the memories we have created together. And what better way to celebrate these special days than with a delicious and beautifully crafted anniversary cake?",
  },
  {
    _id: uuid(),
    categoryName: "baby-shower",
    description:
      "Our Baby Shower Theme Cake is the perfect addition to your baby shower. It's a beautiful way to welcome the new baby and celebrate the new parents-to-be. Whether you're looking for a cake for a boy or cake for a girl, we can customise the cake according to your preferences",
  },
];
