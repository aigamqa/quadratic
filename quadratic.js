function sqr(a,b,c) {
    var d = b*b - 4*a*c;
      if(d>0){
        var x2 = (-b - Math.sqrt(d))/(2*a);
        var x1 = (-b + Math.sqrt(d))/(2*a);
     }else if (d === 0){
        var x1 = (-b + Math.sqrt(d))/(2*a);
        var x2 = "";
     }else{
     alert('Дискримінант відємний, кореней немає');
     }
   return ("Перший корінь: " + x1 + ' | ' + "Другий корінь: "+x2 );
}
var formula = alert('Давайте спробуем вирішити квадратний вираз:')
var num1 = Number(prompt('Значення для "a"'));
var num2 = Number(prompt('Значення для "b"'));
var num3 = Number(prompt('Значення для "c"'));
var result = sqr(num1,num2,num3);
alert(result);