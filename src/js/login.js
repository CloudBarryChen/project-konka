$(document).ready(function(){
    var show_num = [];
    draw(show_num);
    var flag=false;//验证码的标志量
    var pflage=false;//密码一致的标志量

    //验证两次密码是否输入一致
    $("#repassword").on('blur',function(){
        var p1=$("#password").val();
        var p2=$("#repassword").val();
        if(p1==p2){
            pflage=true;
        }
        else{
            pflage=false;
            alert("两次密码输入不一致");
        }
    })

    //更改验证码
    $("#change").on('click',function(){
        draw(show_num);
    });

    //验证验证码
    $("#ucode").on('blur',function(){
        var val = $("#ucode").val().toLowerCase();
        var num = show_num.join("");
        if(val==''){
            alert('请输入验证码!');
        }else if(val == num){
            flag=true;
        }else{
            alert('验证码错误！请重新输入！');
            $(".input-val").val('');
            draw(show_num);
            flag=false;
        }
    });
    //用户注册
    $("#registers").on("click",function(){
        console.log(flag);
             if($("#uname").val()!="" && $("#password").val()!="" &&flag===true){
            addUser($("#uname").val(),$("#password").val());
        
        }
    });

    //用户登录
    $("#logins").on("click",function(){
        console.log(flag);
        if($("#uname").val()!="" && $("#password").val()!="" &&flag===true){
            checkLogin($("#uname").val(),$("#password").val());
   
   }
    });

});

//canvas绘制验证码
function draw(show_num) {
    var canvas_width=$('#canvas').width();
    var canvas_height=$('#canvas').height();
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    
    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x =  i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        // context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
   
}

//创建用户类
class User {
    constructor(username,pwd) {
      this.username=username;
      this.pwd=pwd;
    }
}
//用户注册
function addUser(username,pwd){
    var userList = JSON.parse(window.localStorage.getItem('user')||'[]');
          //如果该已存在则提示用户已存在
            for(var j=0;j<userList.length;j++){
                if(userList[j].username==username){
                    alert("该用户已存在!");
                    return;
                }
            }
            //第一次加入则增加一行显示
            var user = new User(username,pwd);
            userList.push(user);
            //改变购物车列表以后要存入本地存储
            window.localStorage.setItem("user",JSON.stringify(userList));
          
}

//用户登录
function checkLogin(username,pwd){
    var userList = JSON.parse(window.localStorage.getItem('user')||'[]');
    //如果该已存在则提示用户已存在
    for(var j=0;j<userList.length;j++){
        if(userList[j].username==username&&userList[j].pwd==pwd){
            alert("登录成功");
            return;
        }
        else{
            alert("用户名或者密码错误!");
            
        }
    }
}