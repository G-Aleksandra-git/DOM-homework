// Создайте объект на JavaScript, который описывает видеоролик на платформе для блогеров. Включите в объект следующие свойства:
// Заголовок видео.
// Описание видео.
// URL видео.
// Длительность видео в секундах.
// Количество просмотров.
// Количество лайков.
// Признак того, является ли видео прямым эфиром.
// Информация об авторе видео в виде вложенного объекта. Добавьте имя автора, URL канала автора и количество подписчиков.
// Список тегов для видео в виде массива.
// Список комментариев в виде массива объектов. Каждый комментарий должен содержать имя пользователя, текст комментария и количество лайков.
// Типы значений для свойств определите самостоятельно.

const video = {
    title: "Lorem",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non sequi illum consequuntur officia eum fuga",
    URL: "https://www.videoclip.com/YeliseyPotemkin=channel_0001",
    duration: 947,
    views: 515,
    likes: 118,
    live: false,
    author: {
        name: "Yelisey Potemkin",
        channelUrl: "https://www.videoclip.com/YeliseyPotemkin",
        subscribers: 5712
    },
    tags: ["bike", "enduro", "races"],
    comments: [
        { name: "Greg", comment: "Amazing race!", likesCounter: 55 },
        { name: "Jann", comment: "I thought my heart would stop", likesCounter: 113 },
        { name: "Oleg", comment: "It's the best race I've seen.", likesCounter: 499 }
    ]
}

// Дан массив:
// const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"]
// Создайте новый массив только с именами, которые начинаются на букву В.

const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"]

const namesStartingWithB = array.filter(item => typeof item === "string" && item[0] === "В"); //typeof item === "string": Проверка, чтобы элемент был строкой. item[0] === "В": Проверка, чтобы первый символ строки был буквой "В".
console.log(namesStartingWithB);
// Добавьте к каждому элементу массива фамилию Иванов.

const surname = array.map((name) => {
    return `${name} - Иванов`;    
})
console.log(surname);

// Выведите в консоль каждый элемент получившегося массива.

surname.forEach((item) => {
    console.log(item); 
})
// В исходном массиве найдите первый элемент, который не является строкой, и выведите в консоль.
const nonStringElement = array.find(element => typeof element !== "string");
console.log(nonStringElement);


// У вас есть объект с информацией о пользователе. Используя деструктуризацию объектов, получите нужные данные и выполните простые операции.
// Объект пользователя:

// const user = {
//   name: "Иван",
//   age: 28,
//   contact: {
//       email: "ivan@example.com",
//       phone: "+7-123-456-7890"
//   },
//   address: {
//       city: "Москва",
//       street: "ул. Ленина",
//       building: "10"
//   }
// };
// Задания
// Извлеките и выведите в консоль имя пользователя и его возраст, используя деструктуризацию.
// Извлеките контактные данные пользователя (email и phone), также используя деструктуризацию.
// Извлеките город и улицу из адреса пользователя, присвоив им переменные с другими именами: 
// userCity  и userStreet.
// Напишите функцию displayUserInfo, которая принимает объект user  в качестве аргумента и выводит в консоль строку:
// "Имя: Иван, Возраст: 28, Город: Москва, Email: ivan@example.com"

const user = {
    nameUser: "Иван",
    age: 28,
    contact: {
        email: "ivan@example.com",
        phone: "+7-123-456-7890"
    },
    address: {
        city: "Москва",
        street: "ул. Ленина",
        building: "10"
    }
};
// Извлеките и выведите в консоль имя пользователя и его возраст, используя деструктуризацию.
const {nameUser, age} = user;
console.log(nameUser);
console.log(age);

// Извлеките контактные данные пользователя (email и phone), также используя деструктуризацию.
const {contact: {email, phone}} = user;
console.log(email);
console.log(phone);

// Извлеките город и улицу из адреса пользователя, присвоив им переменные с другими именами: 
const {address: {city: userCity, street: userStreet, building}} = user;
console.log(userCity);
console.log(userStreet);

// Напишите функцию displayUserInfo, которая принимает объект user  в качестве аргумента и выводит в консоль строку:
// "Имя: Иван, Возраст: 28, Город: Москва, Email: ivan@example.com"
 function displayUserInfo({nameUser, age, address: {city}, contact: {email}}) {
    console.log(`Имя: ${nameUser}, Возраст: ${age}, Город: ${city}, Email: ${email}`);
 }
 displayUserInfo(user);


//  У вас есть массив, содержащий информацию о товаре. Используя деструктуризацию массивов, извлеките нужные данные и выполните указанные задания.

// Дан массив:
// const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];
//  Извлеките и выведите в консоль название товара и его цену, используя деструктуризацию массива.
//  Извлеките статус наличия и скидку на товар, сохранив их в переменные availability и discount.
//  Используя оператор остаточных элементов (...), соберите все оставшиеся данные (кроме первых двух) в массив 
// otherDetails и выведите его в консоль.
//  Напишите функцию displayProductDetails, которая принимает массив productInfo и выводит в консоль сообщение:
// "Название: Кресло VILORA, Цена: 21000, Статус: в наличии, Скидка: скидка 10%"

const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];

//  Извлеките и выведите в консоль название товара и его цену, используя деструктуризацию массива.
const [title, color, price, availability, discount] = productInfo;
console.log(title);
console.log(price);

//  Извлеките статус наличия и скидку на товар, сохранив их в переменные availability и discount.
console.log(availability);
console.log(discount);

//  Используя оператор остаточных элементов (...), соберите все оставшиеся данные (кроме первых двух) в массив 
// otherDetails и выведите его в консоль.
const [, , ...otherDetails] = productInfo;
console.log(otherDetails);

//  Напишите функцию displayProductDetails, которая принимает массив productInfo и выводит в консоль сообщение:
// "Название: Кресло VILORA, Цена: 21000, Статус: в наличии, Скидка: скидка 10%"
function displayProductDetails([title, color, price, availability, discount]) {
    console.log(`Название: ${title}, Цена: ${price}, Статус: ${availability}, Скидка: ${discount}`);
}

displayProductDetails(productInfo);

// Задача 1. Фильтрация и сортировка товаров
// У вас есть массив объектов, которые представляют товары интернет-магазина:

// const products = [
//     { id: 1, title: "Кресло VILORA", price: 21000, stock: true },
//     { id: 2, title: "Диван TULIP", price: 35000, stock: false },
//     { id: 3, title: "Столик MANGO", price: 12000, stock: true },
//     { id: 4, title: "Кровать BALI", price: 40000, stock: true },
//     { id: 5, title: "Стул HUGO", price: 8000, stock: false },
// ];
// Что нужно сделать: 
// - Выведите доступные товары.  Используйте метод filter, чтобы создать новый массив availableProducts, 
// который будет содержать только те товары, которые есть в наличии (stock: true). Выведите результат в консоль.
// - Отсортируйте товары по цене.  Используя метод sort, отсортируйте массив products по цене в порядке возрастания и выведите его в консоль.
// - Создайте список названий товаров.  Используя метод map, создайте новый массив productNames, 
// содержащий только названия всех товаров, и выведите его в консоль.

const products = [
    { id: 1, title: "Кресло VILORA", price: 21000, stock: true },
    { id: 2, title: "Диван TULIP", price: 35000, stock: false },
    { id: 3, title: "Столик MANGO", price: 12000, stock: true },
    { id: 4, title: "Кровать BALI", price: 40000, stock: true },
    { id: 5, title: "Стул HUGO", price: 8000, stock: false },
];
// - Выведите доступные товары.  Используйте метод filter, чтобы создать новый массив availableProducts, 
// который будет содержать только те товары, которые есть в наличии (stock: true). Выведите результат в консоль.

const availableProducts = products.filter(product => product.stock);
console.log("Присутствующие товары", availableProducts);

// - Отсортируйте товары по цене.  
// Используя метод sort, отсортируйте массив products по цене в порядке возрастания и выведите его в консоль.

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Сортировка по возрастанию цены:", sortedByPrice);

// - Создайте список названий товаров.  Используя метод map, создайте новый массив productNames, 
// содержащий только названия всех товаров, и выведите его в консоль.

const productNames = products.map((product) => {
    return `Название товара: ${product.title}`
})
console.log(productNames);

// Задача 2. Подсчет общей стоимости доступных товаров
// Используя методы filter и reduce, посчитайте общую стоимость всех товаров, которые есть в наличии (stock: true), и выведите ее в консоль.

const totalPrice = products
    .filter(product => product.stock)
    .reduce((sum, product) => sum + product.price, 0);

console.log("Итоговая стоимость:", totalPrice);

// Задача 3. Найти товар с самой высокой ценой
// Найдите самый дорогой товар. Используйте метод reduce и найдите объект с самым высоким значением 
// price  в массиве products. Выведите название и цену этого товара в консоль.
   
const mostExpensiveProduct = products.reduce((max, product) => {
    return (product.price > max.price) ? product : max;
}, products[0]); // Инициализируем с первого товара для сравнения

console.log(`Самый дорогой товар: ${mostExpensiveProduct.title}, Цена: ${mostExpensiveProduct.price}`);

// Задача 4. Подсчитать количество товаров в наличии и не в наличии
// Установите количество доступных и недоступных товаров.  Используйте метод reduce
//  и посчитайте количество товаров в наличии (stock: true) и отсутствующих (stock: false) в виде объекта 
// { available: x, unavailable: y }. Выведите результат в консоль.

const stockCount = products.reduce((acc, product) => {
    acc[product.stock ? 'available' : 'unavailable'] += 1;
    return acc;
}, { available: 0, unavailable: 0 });

console.log("Количество товаров в наличии и недоступных:", stockCount);






