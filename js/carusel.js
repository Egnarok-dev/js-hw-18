const productsList = [
    {
    status: 'New', 
    name: 'Google Pixel Watch', 
    image: './gallery/images/PixelWatch.png',
    href: 'https://store.google.com/us/product/google_pixel_watch?hl=en-US'
    },
    {
    status: 'New', 
    name: 'Pixel 7 Pro', 
    image: './gallery/images/Pixel7Pro.png'
    },
    {
    status: 'New', 
    name: 'Pixel 7', 
    image: './gallery/images/Pixel7.png'
    },
    {
    status: 'New', 
    name: 'Pixel Buds Pro', 
    image: './gallery/images/PixelBudsPro.png'
    },
    {
    status: 'New', 
    name: 'Nest Doorbells', 
    image: './gallery/images/NestDoorbells.png'
    },
];

const productBox = document.querySelector('.cards_items');
console.log(productBox);
const productData = createProductCard(productsList)

productBox.insertAdjacentHTML("beforeend", productData)


function createProductCard (productsList) {
    return productsList.map(({status, name, image, href}) => {
        return `<a href="${href}" class="product_card">
        <div class="card">
            <p>${status}</p>
            <img src="${image}" alt="">
        </div>
        <span>${name}</span>
    </a>`
    }).join('')
}