class AllProducts{
    constructor(containerProducts, catalogProduct){
        this.container = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.createCatalog();
    }

  /* <div class="item">
        <div class="name">Iphone 15</div>
        <div class="img"></div>
        <div class="price">2999.99</div>
        <button class="btn">Купить</button>
    </div> */

    createCatalog(){
        let wrapper = document.createElement('slot');
        for(let i = 0; i < this.catalogProduct.length; i++){
            let item = this.getCatalogItem({
                tagName: 'div',
                className: 'item'
            });
            let name = this.getCatalogItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = this.getCatalogItem({
                tagName: 'div',
                className: 'img',
                backgroundImage: `url('${this.catalogProduct[i].img}')` 
            });
            let price = this.getCatalogItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price
            });
            let btn = this.getCatalogItem({
                tagName: 'button',
                className: 'btn',
                textName: 'Купить'
            });
            
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getCatalogItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        return elem;
    }

}

let allProducts = new AllProducts('.container-products', catalogProduct);