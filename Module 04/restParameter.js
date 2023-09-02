function calculation(a, b, ...numbers){ // a=10, b=20, numbers=3,4,5
    let sum =0;
    for(let i of numbers){
        sum += i;
    }
    console.log(sum);
}

calculation(10 ,20 ,3,4,5)