//Drugi zadatak
let n=6;
let result = "";
let space = n;

result += " ".repeat(n) + "*" +" ".repeat(n-1) + "\n";
for(let i=1; i<n; i++){
    space--;
    if(i==n-1){
        result += " ".repeat(space) + "*".repeat(i) + " " + "*".repeat(i) + " ".repeat(space);
    }
    else{
        result += " ".repeat(space) + "*".repeat(i) + "*" + "*".repeat(i) + " ".repeat(space);
    }
    result += "\n";
}
let star = n;
for(let i=1; i<n; i++){
    star--;
    if(i==1)continue;
    result += " ".repeat(i) + "*".repeat(star) + "*" + "*".repeat(star) + " ".repeat(i);
    result += "\n";
}
result += " ".repeat(n) + "*" + " ".repeat(n-1)

console.log(result);