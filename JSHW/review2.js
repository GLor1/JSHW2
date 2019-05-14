var fil = ['o','oo', 'ooo'];
console.log(fil);

for(var i=0; i<=2; i++){
    console.log(i);
}

var movies= ['titanic', 'notebook', 'forest gump', 'players club'];
console.log(movies);

movies.forEach(element =>{
    console.log(movies);
});

var movies2 = movies.filter(element=>{
    return element.startsWith ('p');
})

console.log(movies2);

var movies2 = movies.filter(element =>{
    return element.match ('for');
})
console.log(movies2);

var movies3 = movies.map(element =>{
    return element.startsWith ('for') + ": Directed by Ger";
})
movies.forEach(element =>{
    console.log(movies3);
    console.log('good');
})
