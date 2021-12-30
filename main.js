// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let shop = document.forms.shop;
shop.onsubmit = (e => {
    e.preventDefault();
});
let btn = document.getElementById('btnShop');
let objID = 0;
let arrProduct = [];
btn.addEventListener('click', function () {
    let objectProduct = {id: objID, name: shop.name.value, value: shop.number.value, price: shop.price.value, img: shop.image.value};
    arrProduct.push(objectProduct);
    localStorage.setItem(`products`, JSON.stringify(arrProduct));
    objID = objID + 1;
});
