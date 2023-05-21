let x=document.getElementById("box1")
let z=document.getElementById("box2");
let y=document.getElementById("plenum");
let plus=document.getElementById("plus");
let aa=document.getElementById("box3");
let val=Number(y.innerHTML);
plus.addEventListener("click",function(ele){
    let xz=Number(y.innerHTML);
   y.innerHTML=xz+1;
   xz+=1;
   z.innerHTML=`${(Number(aa.value)+Number(x.value))/Number(y.innerHTML)}`;
})
let minus=document.getElementById("minus");
minus.addEventListener("click",function(ele){
    let xz=Number(y.innerHTML);
    if(xz>1){
        y.innerHTML=xz-1;
        xz-=1;
        z.innerHTML=`${(Number(aa.value)+Number(x.value))/Number(y.innerHTML)}`;
    }
})
aa.addEventListener("blur",function(ele){
    z.innerHTML=`${(Number(aa.value)+Number(x.value))/Number(y.innerHTML)}`;
    console.log("hello");
})