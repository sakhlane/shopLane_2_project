console.log('this is from product detail js file');

// Product Details: https://5d76bf96515d1a0014085cf9.mockapi.io/product/1

let detail = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/1`;

// Grab the elements
let product_image = document.getElementById('product_image');
let product_details = document.getElementById('product_details');
console.log(product_image,product_details)

// for request 
let product_detail_response = new XMLHttpRequest();
product_detail_response.open('GET',detail,true);
product_detail_response.send();

product_detail_response.onload = function(){
    if(this.readyState===4 && this.status === 200){
        // console.log(this.responseText);
        let product_detail_result =JSON.parse(this.responseText);
        console.log(product_detail_result);

        // creating elements dynamically 
        // for image section 
        let image = document.createElement('img');
        image.src = product_detail_result.preview;
        product_image.appendChild(image);

       
        product_details.innerHTML = 
        `<h1 class="product_name">${product_detail_result.name}</h1>
         <h3 class="product_brand">${product_detail_result.brand}</h3>
         <h3 class="product_price">Price: Rs <span>${product_detail_result.price}</span></h3>
         <h3 class="description_heading">Description</h3>
         <p class="product_description">${product_detail_result.description}</p>
         <h3 class="product_preview_heading">Product Preview</h3>
        `
        // // for preview images 
        let preview_images_container = document.createElement('div');
        preview_images_container.setAttribute('class','preview_images_container');
        product_details.appendChild(preview_images_container);
      
        // For itirating preview photos 
       product_detail_result.photos.forEach(element => {
         console.log(element);
         let preview_image_single_div = document.createElement('div');
         preview_image_single_div.setAttribute('class','preview_image_single_div');
         let preview_image = document.createElement('img');
         preview_image.src = element;
         preview_image_single_div.append(preview_image);
         preview_images_container.append(preview_image_single_div);

        preview_image_single_div.addEventListener('click',function(event){
          // console.log(event);
          image.src = element;
         

           
        })
        // for border active class
        preview_image.addEventListener('click',function(event){
          
          var current = document.getElementsByClassName("active");
          console.log(current[0]);
        
          if (current.length > 0)
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          
        })
       });
        //  console.log(product_details);

      // Add to cart Button
      let button = document.createElement('button');
      button.setAttribute('class','add-to-cart-btn');
      button.innerText = 'add to cart'
      product_details.appendChild(button);

      // for add to cart button click
     
        
    }
};




