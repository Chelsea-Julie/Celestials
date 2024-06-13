// 
let wrapper = document.querySelector("[recentProducts]")

let products = JSON.parse(localStorage.getItem("jewelery")) ? JSON.parse (localStorage.getItem("jewelery") ) 
: localStorage.setItem("jewelery", 
    JSON.stringify(
          [{
            id: 1,
            productName: "Delicate Pearl Drop Necklace",
            catergory: "necklace",
            description: "Sterling Silver Chain Necklace with pearl",
            amount: 295.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/delicate-pearl-.jpg"
          },
          {
            id: 2,
            productName: "Aquarmarine Germstone Necklace",
            catergory: "necklace",
            description: "Aquarmarine Germstone Necklace color blue",
            amount: 350.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/aquamarine.jpg"
            
          },
          {
            id: 3,
            productName: "amethest gemstone necklace",
            catergory: "necklace",
            description: "amethest gemstone necklace color purple",
            amount: 350.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/amethest_gemstone_necklace.jpg"
          },
          {
            id: 4,
            productName: "cubic zirconia arrow necklace",
            catergory: "neckclace",
            description: "a silver arrow made from cubic zirconia",
            amount: 350.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/arrownecklace.jpg"
          },
          {
            id: 5,
            productName: "crystal quarts gemstone necklace",
            catergory: "neckclace",
            description: "crystal quarts gemstone clear in color",
            amount: 350.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/crystalnecklace.jpg"
          }, 
          {
            id: 6,
            productName: "ava 2 bracelet",
            catergory: "bracelet",
            description: "Sterlin Silver bracelet",
            amount: 895.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/avabracelet.jpg"
          }, 
          {
            id: 7,
            productName: "fresh water pearl strech bracelet",
            catergory: "bracelet",
            description: "fresh water pearl bracelet that has stretch",
            amount: 295.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/pearlbracelet.jpg"
          }, 
          {
            id: 8,
            productName: "multi-circle bracelet",
            catergory: "bracelets",
            description: "Sterlin Silver bracelet with four circles on it ",
            amount: 325.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/circlebracelet.jpg"
          }, 
          {
            id: 9,
            productName: "multi-disk bracelet",
            catergory: "bracelet",
            description: "Sterlin Silver bracelet with four disks on it ",
            amount: 295.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/diskbracelet.jpg"
          },
          {
            id: 10,
            productName: "cubic zirconia circle bracelet",
            catergory: "bracelet",
            description: "Sterlin Silver bracelet with Circle on it",
            amount: 295.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/circlebracele.jpg"
          },
          {
            id: 11,
            productName: "eternity heart ring",
            catergory: "ring",
            description: "a silver ring with an hearts around it ",
            amount: 349.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/heartring.jpg"
          },
          {
            id: 12,
            productName: "marquise cz detail",
            catergory: "ring",
            description: "a silver ring with a branch on it",
            amount: 399.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/marquisedetail.jpg"
          },
          {
            id: 13,
            productName: "four clover ring",
            catergory: "ring",
            description: "a silver ring with four clover",
            amount: 349.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/cloverring.jpg"
          },
          {
            id: 14,
            productName: "cross over ring",
            catergory: "ring",
            description: "a silver cross over open ended ring",
            amount: 499.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/crossring.jpg"
          },
          {
            id: 15,
            productName: "Multi Layer Ring",
            catergory: "ring",
            description: "  a silver ring with 3 layers ",
            amount: 499.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/LayerRing.jpg"
          },
          {
            id: 16,
            productName: "broad hoop earrings",
            catergory: "earrings",
            description: "silver hoop earrings ",
            amount: 250.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/hoopearrings.jpg"
          },
          {
            id: 17,
            productName: "cubic Ziconia flower studs",
            catergory: "earrings",
            description: " silver flower studs with cubic ziconia color clear",
            amount: 215.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/flowerstuds.jpg"
          },
          {
            id: 18,
            productName: "cubic zirconia drop earrings",
            catergory: "earrings",
            description: "drop earrings with cubic zirconia color clear",
            amount: 345.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/dropearrings.jpg"
          },
          {
            id: 19,
            productName: "crystal quartz french hook earrings",
            catergory: "earrings",
            description: "silver french hook earrings with crystal quartz color clear",
            amount: 395.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/hookearrings.jpg"
          },
          {
            id: 20,
            productName: "cubic zirconia threader earrings",
            catergory: "earrings",
            description: "silver threader earrings",
            amount: 250.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/threaderearrings.jpg"
          },
          {
            id: 21,
            productName: "cubic zirconia hoop earrings",
            catergory: "earrings",
            description: "sliver hoop earrings with cubic zirconia",
            amount: 220.00,
            img_url: "https://chelsea-julie.github.io/all-images/images/earrings.jpg"
          },
        
        ])
)


document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 

function recentProducts() {

    try{
        let latestProducts = products.reverse().slice(0,3) 
        latestProducts.forEach(product => {
          console.log(product.img_url);
            wrapper.innerHTML += `
            <div class="card" style="width:18rem;">
              <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading= "lazy">
              <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
              </div>
            </div>
            `
        })
    } catch (e){
      wrapper.textContent = "Please contact our administrator" 
      
      setTimeout(() => {
        location.reload()
      },
        2000
      )
    }
    
}

recentProducts() 

