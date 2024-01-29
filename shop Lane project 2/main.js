/*
 Api calls:
    REFERENCE SITE : https://test-hosting-8f9bf.web.app/index.html;
    Homepage: https://5d76bf96515d1a0014085cf9.mockapi.io/product
    Product Details: https://5d76bf96515d1a0014085cf9.mockapi.io/product/1
    Create Order: https://5d76bf96515d1a0014085cf9.mockapi.io/order

    BANNER IMAGES
 1) https://imgur.com/96OnkX7.png
2) https://imgur.com/KtGxwnN.png
3) https://imgur.com/sfjg9R8.png
4) https://imgur.com/p0wdadG.png

    LOGO
    https://i.imgur.com/OKAY6Fl.png
*/

console.log('main js file output');

const homePageUrl = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product';
// GRAB THE CLOTHING SECTION ELEMENTS
let product_container = document.getElementById('product_container');
let product_constainer_Accessories = document.getElementById('product_container_Accessories')
// console.log(product_container);


// MAKE REQUEST TO API
const request = new XMLHttpRequest();
request.open('GET',homePageUrl,true);
request.send();
// console.log(request);
request.onload = function(){

  
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.responseText);
        let result = JSON.parse(this.responseText);
        console.log(result);
      //ITIRATE OBJECTS OF RESULT 
      for (const item of result) {
        console.log(item);
       product_id = item.id;
        console.log(product_id);
      
       if(item.isAccessory === false){
           // CREATING CARDS DYNAMICALLY
      //  card wrapper
       let card_wrapper = document.createElement('div');
       card_wrapper.setAttribute('class','card_wrapper');
       product_container.appendChild(card_wrapper);
       console.log(product_container);

      //  forimage div
      let link = document.createElement('a');
      card_wrapper.appendChild(link);
      // link.href = `./product_detail_page.html`
      let image_div = document.createElement('div');
      image_div.setAttribute('class','image-container');
      let image = document.createElement('img');
      image_div.appendChild(image);
      image.src = item.preview;
      link.appendChild(image_div);

      // for name brand and price
      let product_meta = document.createElement('div');
      product_meta.setAttribute('class','product-meta') 
      let product_name = document.createElement('h4');
      product_name.setAttribute('class','product-name');
      let product_brand = document.createElement('h5');
      product_brand.setAttribute('class','product-brand');
      let product_price = document.createElement('p');
      product_price.setAttribute('class','product-price');

      product_meta.append(product_name,product_brand,product_price);
      card_wrapper.appendChild(product_meta);

      // assaign data 
      product_name.innerText = item.name;
      product_brand.innerText =item.brand;
      product_price.innerText = 'RS ' + item.price;

      // ----------------------------------------------
      card_wrapper.addEventListener('click',function(e){
        console.log(product_id)
        window.location.href = '../product_detail_page/product_detail_page.html'
        // console.log(product_detail_page);
        
      })
      
        }

        // REUSED CODE HAVE TO CONVERT INTO FUNCTION LATER 
        if(item.isAccessory === true){
          // CREATING CARDS DYNAMICALLY
     //  card wrapper
      let card_wrapper = document.createElement('div');
      card_wrapper.setAttribute('class','card_wrapper');
      product_constainer_Accessories.appendChild(card_wrapper);
      console.log(product_container);

     //  forimage div
     let link = document.createElement('a');
     card_wrapper.appendChild(link);
    //  link.href = `./product_detail_page.html`
     let image_div = document.createElement('div');
     image_div.setAttribute('class','image-container');
     let image = document.createElement('img');
     image_div.appendChild(image);
     image.src = item.preview;
     link.appendChild(image_div);

     // for name brand and price
     let product_meta = document.createElement('div');
     product_meta.setAttribute('class','product-meta') 
     let product_name = document.createElement('h4');
     product_name.setAttribute('class','product-name');
     let product_brand = document.createElement('h5');
     product_brand.setAttribute('class','product-brand');
     let product_price = document.createElement('p');
     product_price.setAttribute('class','product-price');

     product_meta.append(product_name,product_brand,product_price);
     card_wrapper.appendChild(product_meta);

     // assaign data 
     product_name.innerText = item.name;
     product_brand.innerText =item.brand;
     product_price.innerText = 'RS ' + item.price;
     
       }
        
      }
      
    }
}
// let product_id_expo = product_id;
// export {product_id_expo};
