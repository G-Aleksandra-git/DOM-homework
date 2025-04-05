// Задача 5. Преобразование данных с изменением ключей и вложенных значений
// У вас есть массив объектов products, представляющий товары в интернет-магазине: 

// const products = [
//     { id: 1, title: "Кресло VILORA", price: 21000, stock: true, details: { category: "Мебель" } },
//     { id: 2, title: "Диван TULIP", price: 35000, stock: false, details: { category: "Мебель" } },
//     { id: 3, title: "Столик MANGO", price: 12000, stock: true, details: { category: "Мебель" } },
//     { id: 4, title: "Кровать BALI", price: 40000, stock: true, details: { category: "Спальня" } },
//     { id: 5, title: "Стул HUGO", price: 8000, stock: false, details: { category: "Мебель" } },
// ];
// Что нужно сделать. Создайте новый массив объектов, в котором:
// поле title будет переименовано в productName;
// цена (price) будет пересчитана в долларах (допустим, текущий курс — 100 рублей за доллар);
// категория (category), взятая из вложенного объекта details, будет переименована в productCategory.
// Затем новый массив выведите в консоль.

const products = [
    { id: 1, title: "Кресло VILORA", price: 21000, stock: true, details: { category: "Мебель" } },
    { id: 2, title: "Диван TULIP", price: 35000, stock: false, details: { category: "Мебель" } },
    { id: 3, title: "Столик MANGO", price: 12000, stock: true, details: { category: "Мебель" } },
    { id: 4, title: "Кровать BALI", price: 40000, stock: true, details: { category: "Спальня" } },
    { id: 5, title: "Стул HUGO", price: 8000, stock: false, details: { category: "Мебель" } },
];

const modifiedProducts = products.map(product => ({
    productName: product.title, 
    priceUSD: (product.price / 100).toFixed(2), // Переводим цену в доллары (100 рублей = 1 доллар)
    stock: product.stock,
    productCategory: product.details.category,
}));

console.log(modifiedProducts);
















