//写一个公用方法可以获取和设置本地存储
util = {
    //设置本地存储
    setStorage:function(json){
        /*
        JSON 通常用于与服务端交换数据。
        在向服务器发送数据时一般是字符串。
        我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。*/
        window.localStorage.setItem('cart',JSON.stringify(json))
    },
    //获取本地存储
    // JSON.parse() 方法将数据转换为 JavaScript 对象。
    getStorage:function(){
        return JSON.parse(window.localStorage.getItem('cart') || '[]');
    }
}

//定义一个商品的构造函数,可以创建一个商品对象:
function Product(id,text,src,figureTitle,figureColor,price){
    // {id:"";name:"";pic:"";num:"";price:""}
    this.id = id;
    this.text = text;
    this.src = src;
    this.figureTitle = figureTitle;
    this.figureColor = figureColor;
    this.price = price;
    this.num = 1;
}

//2 增加商品:点击加入购物车,商品可以在购车列表显示,如果该商品已经加入过购物车,则添加数量,第一次加入则增加一行显示
function addCartEvent(){
    // console.log(1);
    //选中所有加入购物车按钮
    var addCartBtnS = document.querySelectorAll('.cart');
    //给每个按钮添加事件,forEach是数组的方法
    for(var i = 0; i < addCartBtnS.length; i++){
        addCartBtnS[i].addEventListener('click',function(){
            var li = this.parentNode;//获取删除按钮所在的li
            var id = li.children[0].innerHTML;//获取商品的id
            var pic = li.children[1].src;//获取商品的图片路径
            var name = li.children[2].innerHTML;//获取商品的名称
            var price = li.children[3].innerHTML;//获取商品的价格
            // console.log(id);
            //加入购物车列表数据,并展示在页面上
            addProduct(id,text,src,figureTitle,figureColor,price)
        })
    }
}
addCartEvent();

function addProduct(id,text,src,figureTitle,figureColor,price){
    var productList = util.getStorage();
    //如果该商品已经加入过购物车,则添加数量
    for(var j = 0; j < productList.length; j++){
        if(productList[j].id == id){
            productList[j].num += 1;
            //改变购物车列表以后要存入本地存储
            util.setStorage(productList);
            renderCart('div');  
            return;
        }
    }
    //第一次加入则增加一行显示
    var product = new Product(id,text,src,figureTitle,figureColor,price);
    productList.push(product);
    //改变购物车列表以后要存入本地存储
    util.setStorage(productList);
    renderCart('div');
    // console.log(productList);
}