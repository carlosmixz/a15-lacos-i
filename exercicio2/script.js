let Num = Number(prompt("Digite um número: "));

if (!isNaN(Num)) {
    for(i = 1; i <= 10; i++){
        console.log(`${Num} x ${i} = ${Num * i}`);
    }
} else {
    alert("Digite um NÚMERO!");
}