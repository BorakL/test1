//Prvi zadatak
let kolicina = 10;
let cena = 100;
let godine = 22;
let iznos = cena*kolicina;

if(godine>=18){
    if(godine%7==0 && godine%11!=0){
        iznos = iznos - (iznos*15/100);
    }
    else if(godine%11==0){ 
        iznos = iznos - (iznos*25/100);
    }
    console.log(iznos);
}
else{
    console.log("Morate biti punoletni");
}


