setTimeout(()=>{
    dyanmicNavbarFunc();
    createFooterFunc();
},500)
// get all branding data
const brandingData = getAllData("allBrandingData");
console.log(brandingData);

// creating dyanmic bar
const dyanmicNavbarFunc = () =>{
    let allCategory = getAllData("allCategoryData");
    let dyanmicBox = document.querySelector(".dyanamic-box");
    let brandLogo = document.querySelector(".brand-logo");
    for(let category of allCategory)
    {
        dyanmicBox.innerHTML += `
        <li class="nav-item">
            <a href="#" class="nav-link  fw-bold">${category.category}</a>
        </li>
        `;
        
    }
    dyanmicBox.innerHTML += `
        <div class="btn-group">
            <button class="btn">
                <i class="fa fa-shopping-cart"></i>
            </button>
            <button class="btn">
                <i class="fa fa-search"></i>
            </button>
            <div class="dropdown">
                <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
                    <i class="fa fa-user"></i>
                </button>
                <div class="dropdown-menu">
                    <li>
                        <a href="http://localhost/e-coomerce/pages/singnup.html" class="dropdown-item">
                            <i class="fa fa-user"></i> Singup
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost/e-coomerce/pages/login.html" class="dropdown-item">
                            <i class="fa-solid fa-right-from-bracket"></i> Login
                        </a>
                    </li>
                </div>
            </div>
        </div>
    `;
    brandLogo.src = brandingData[0].b_logo;
}

const createFooterFunc = () =>{
    let allCategory = getAllData("allCategoryData");
    let footerCategoryBox = document.querySelector(".footer-category-box");
    let socialMediaBox = document.querySelector(".social-media-box");
    let allATag = socialMediaBox.querySelectorAll("A");
    let venuBox = document.querySelector(".venu-box");
    let allPTag = venuBox.querySelectorAll("P");
    for(let category of allCategory)
        {
            footerCategoryBox.innerHTML += `
            <li class="nav-item">
                <a href="#" class="nav-link fw-bold">${category.category}</a>
            </li>
            `;
        }
        // social media links updateing
        allATag[0].href = brandingData[0].b_facebook;
        allATag[1].href = brandingData[0].b_twitter;
        allATag[2].href = brandingData[0].b_whatsapp;
        allATag[3].href = brandingData[0].b_instagram;

        // venu updating
        allPTag[0].innerHTML += brandingData[0].b_address;
        allPTag[1].innerHTML += brandingData[0].b_email;
        allPTag[2].innerHTML += brandingData[0].b_mobile;
        allPTag[3].innerHTML += brandingData[0].b_domain;

}

const dyanamicRequest = (element,pageRequest) =>{
    const ajax = new XMLHttpRequest();
    ajax.open("POST",pageRequest,true);
    ajax.send();

    //get response
    ajax.onload = () =>{
        element.innerHTML = ajax.response;
        
    }
}