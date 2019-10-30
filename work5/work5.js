//9x9的空表
str ='<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>'
    for(var j=1;j<10;++j){
        str +='<td>&nbsp;</td>'
    }
     str +='</tr>'
}
str +='</table>'
document.getElementById('table1').innerHTML = str

//倒九九乘法空表
str ='<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
     str +='</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str 

//正九九乘法表
str ='<table border="1">'
for(let i=1;i<10;++i){
    str +='<tr>'
    for(var j=1;j<=i;++j){
        str +='<td>' + j + '*' + i + '=' + (i*j) + '</td>'
    }
    str +='</tr>'
}
document.getElementById('table3').innerHTML = str

//倒九九乘法表
str ='<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str +='<td>' + j + '*' + i + '=' + (i*j) + '</td>'
    }
    str +='</tr>'
}
document.getElementById('table4').innerHTML = str