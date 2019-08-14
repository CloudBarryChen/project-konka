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
function Product(id,name,pic,price){
    // {id:"";name:"";pic:"";num:"";price:""}
    this.id = id;
    this.name = name;
    this.pic = pic;
    this.num = 1;
    this.price = price;
}
//1 生成一个购物车,可以展示购物车内的内容
function renderCart(selector){
    //获取购物车所在的容器
    var box = document.querySelector(selector);
    // console.log(box);
    //box的innerHTML进行模板拼接
    var boxStr = `
    <table>
        <tr>
        <th>商品ID</th>
        <th>图片</th>
        <th>商品名称</th>
        <th>商品数量</th>
        <th>商品价格</th>
        <th>操作</th>
        </tr>`;
    //根据商品种类生成多行,实时获取本地存储中的购物车列表
    var productList = util.getStorage();
    for(var i = 0; i < productList.length; i++){
        boxStr +=`
        <tr>
        <td>${productList[i].id}</td>
        <td>
            <img src="${productList[i].pic}">
            </td>
        <td>${productList[i].name}</td>
        <td>
            <span class="add">+</span>
            <span>${productList[i].num}</span>
            <span class="cut">-</span>
        </td>
        <td>${productList[i].price}</td>
        <td class = "del">删除</td>
        </tr>`
    }
    boxStr +=`</table>`;
    box.innerHTML = boxStr;
    //购物车列表渲染到页面上,给其中的删除按钮添加事件
    addDelEvent(selector);
    //购物车列表渲染到页面上,给其中的+,-按钮添加事件
    addChangeNumEvent(selector);
}
renderCart('div');

//2 增加商品:点击加入购物车,商品可以在购车列表显示,如果该商品已经加入过购物车,则添加数量,第一次加入则增加一行显示
function addCartEvent(){
    // console.log(1);
    //选中所有加入购物车按钮
    var addCartBtnS = document.querySelectorAll('.addCart');
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
            addProduct(id,name,pic,price)
        })
    }
}
addCartEvent();

function addProduct(id,name,pic,price){
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
    var product = new Product(id,name,pic,price);
    productList.push(product);
    //改变购物车列表以后要存入本地存储
    util.setStorage(productList);
    renderCart('div');
    // console.log(productList);
}

//3 点击删除按钮(类名:del)可以删除该行商品
function addDelEvent(selector){
    //获取所有删除按钮
    var box = document.querySelector(selector);
    var delBtnArr = box.querySelectorAll('.del');
    //循环绑定事件
    for(var i = 0; i < delBtnArr.length; i++){
        delBtnArr[i].onclick = function(){
            var tr = this.parentNode;
            var id = tr.children[0].innerHTML;
            removeProduct(id);
        }
    }
}
function removeProduct(id){
    var productList = util.getStorage();
    productList = productList.filter(function(product){
        return product.id !== id;
    });
    //删除完成后同步本地存储
    util.setStorage(productList);
    //重新刷新页面
    renderCart('div');
}
//4 可以修改(增加和减少)购物车中的商品数量,当商品数量为0的时候,删除该商品
//给add和cut元素添加事件
function addChangeNumEvent(selector){
    var box = document.querySelector(selector);//购物车容器
    var addArr = document.querySelectorAll('.add');//增加按钮集合
    var cutArr = document.querySelectorAll('.cut');//减少按钮集合
    for(var i = 0; i < addArr.length; i++){
        addArr[i].onclick = cutArr[i].onclick = function(){
            var tr = this.parentNode.parentNode;
            var id = tr.children[0].innerHTML;
            changeNum(this.className,id);
        }
    }
}

//具体执行add和cut
function changeNum(type,id){
    //策略模式
    var callbackObj = {
        'add':function(id){
            //获取本地数据
            var productList = util.getStorage();
            for(var i = 0; i < productList.length; i++){
                if(productList[i].id == id){
                    //如果循环到商品的id等于传入的id,该商品数量增加
                    productList[i].num += 1;
                    util.setStorage(productList);
                    renderCart('div');
                    return;
                }
            }
        },
        'cut':function(id){
            //获取本地数据
            var productList = util.getStorage();
            for(var i = 0; i < productList.length; i++){
                if(productList[i].id == id){
                    //如果循环到商品的id等于传入的id,该商品数量增加
                    productList[i].num -= 1;
                    if(productList[i].num < 1){
                        removeProduct(id);
                        return;
                    }
                    util.setStorage(productList);
                    renderCart('div');
                    return;
                }
            }
        }
    }
    callbackObj[type](id);
}