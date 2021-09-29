const readline = require('readline-sync');
weight = readline.question('請輸入您的體重(kg)?');
height = readline.question('請輸入您的身高(cm)?');  
weight = Number(weight)
height = Number(height)

//判斷數值是否不合理


if(isNaN(weight)||(weight<=10 ||weight>=200))
{
console.log("你輸入的資料有誤! 請輸入介於10~200之間的數字");
}
else if ( isNaN(height) || height <= 100 || height > 220)
{
console.log("你輸入的資料有誤! 請輸入介於100~220之間的數字");
} else {

    height=(height/100);

    var bmi=weight/((height)**2);
    
    var idealLow =18.5*(height**2);


    var idealHi= 24* (height**2);

console.log("你的理想體重範圍為"+idealLow+"~"+idealHi)

console.log("你的BMI結果是:"+ bmi);
}
