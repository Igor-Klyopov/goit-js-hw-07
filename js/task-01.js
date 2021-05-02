//---вариант 1---//
const categoriesItemsRef = document.querySelectorAll("#categories .item");

const getCategoriesCount = () =>
  console.log(`В списке ${categoriesItemsRef.length} категории.`);

getCategoriesCount();

const getCategoriesElInfo = function () {
  categoriesItemsRef.forEach((categoriesItemRef) => {
    console.log(`
  Категория: ${categoriesItemRef.firstElementChild.textContent}
  Количество элементов: ${categoriesItemRef.lastElementChild.children.length}
  `);
  });
};
getCategoriesElInfo();
