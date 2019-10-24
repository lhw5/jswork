function goldbach(odd){
    odd = document.getElementById("odd").value
    odd = parseInt(odd);
    let temp = ''
    for(var j=2;j<odd-2;j++){
        var i = odd-j;
        if(gedebahe(j)&&gedebahe(i)&&j<=i){
            temp += (odd+"可以拆分为两个质数"+j+"与"+i+"的和"+'<br>');
        }
    }
    document.getElementById("goldbach").innerHTML = temp;
}
function gedebahe(gdbh){
    var sum = 0;
    for(var k=1;k<=gdbh;k++){
        if(gdbh % k == 0){
            sum++;
        }
    }
    if(sum == 2){
        return true;
    }else{
        return false;
    }
}