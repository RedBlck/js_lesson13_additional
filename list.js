// let productsContainer = document.createElement('div');
// productsContainer.classList.add('productsContainer');
// let btnClear = document.createElement('button');
// btnClear.innerText = 'Очистити корзину';
// btnClear.classList.add('btnClear');
// btnClear.addEventListener('click', function () {
//     localStorage.clear();
//     location.reload();
// });
//
// for (let i = 0; i < localStorage.length; i++) {
//     let productArr = JSON.parse(localStorage.getItem(`${i}`));
//     let product = productArr[0];
//     let productDiv = document.createElement('div');
//     productDiv.classList.add('productDiv');
//     let btnProduct = document.createElement('button');
//     btnProduct.innerText = 'Видалити з корзини';
//
//     for (productKey in product) {
//         if (productKey === 'img') {
//             let image = document.createElement('div');
//             image.classList.add('image');
//             image.innerHTML = `<img src=${product.img}">`;
//             productDiv.append(image);
//         } else {
//             let divElement = document.createElement('div');
//             divElement.innerText = `${productKey}: ${product[`${productKey}`]}`;
//             productDiv.append(divElement);
//         }
//     }
//     btnProduct.addEventListener('click', function () {
//         localStorage.removeItem(`${i}`);
//     });
//
//     productDiv.append(btnProduct);
//     productsContainer.append(productDiv);
// }
//
// document.body.append(productsContainer, btnClear);


let productsContainer = document.createElement('div');
productsContainer.classList.add('productsContainer');
let btnClear = document.createElement('button');
btnClear.innerText = 'Очистити корзину';
btnClear.classList.add('btnClear');
btnClear.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});
try {
    let products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let productDiv = document.createElement('div');
        productDiv.classList.add('productDiv');
        if (product === null) {
            productDiv.style.display = 'none';
        } else {
            let btnProduct = document.createElement('button');
            btnProduct.innerText = 'Видалити з корзини';
            btnProduct.addEventListener('click', function () {
                delete products[`${product.id}`];
                localStorage.setItem(`products`, JSON.stringify(products));
                location.reload();

            });
            productDiv.append(btnProduct);
        }
        for (productKey in product) {
            if (productKey === 'img') {
                let image = document.createElement('div');
                image.classList.add('image');
                image.innerHTML = `<img src=${product.img}">`;
                productDiv.append(image);
            } else {
                let divElement = document.createElement('div');
                divElement.innerText = `${productKey}: ${product[`${productKey}`]}`;
                productDiv.append(divElement);
            }
        }

        productsContainer.append(productDiv);
    }

} catch (e) {
    document.write('корзина пуста');
}

document.body.append(productsContainer, btnClear);