//Treci zadatak
let k=100 ;
let n=35;
let s=0;
let p=1;


if(k>n){
    let x=k;
    k=n;
    n=x;
}

for(let i=k; i<=n; i++){
    if(i%3==0){
        s+=i;
    }
    else if(i%7==0){
        p*=i;
    }
}
console.log("Zbir: ",s);
console.log("Proizvod: ",p);