let account = JSON.parse(localStorage.getItem("user"));
let check = false;
let images = JSON.parse(localStorage.getItem("images"))||[];
    // localStorage.setItem("images",JSON.stringify(images));
function change() {
    if (account !== null && typeof account === 'object' && Object.keys(account).length == 0) {
        check = false;
        document.getElementById("user").innerHTML = `<div id="user"> <a href="/session06-project/page/register.html">Đăng kí</a>/<a href="/session06-project/page/login.html">Đăng nhập</a></div>`
                                                        
    }else{
        check = true;
        document.getElementById("user").innerHTML = `
                                                        <div id="user" class="user-logo">${account.firstName} ${account.lastName}</div>
                                                        <ul class="tools">
                                                            <li><a href="">thông tin tài khoản</a></li>
                                                            <li onclick="logOut()">đăng xuất</li>
                                                        </ul>
                                                    `
    } 
}
change();
function logOut() {
    account = {}
    localStorage.setItem("user",JSON.stringify(account));
    change();
}
function render() {
    let products;
    for (let i = 0; i < images.length; i++) {
        console.log(images[i]);
       products += `
                    <a href="">
                        <div class="product">
                        <div class="productImg"><img src="${images[i].src}"></div>
                        <div class="productName">${images[i].name}</div>
                        <div class="price">${images[i].price}.000VNĐ</div>
                        <button>Mua</button>
                    </div>
                    </a>
       `
    }
    document.getElementById("products").innerHTML = products;
}
render();

