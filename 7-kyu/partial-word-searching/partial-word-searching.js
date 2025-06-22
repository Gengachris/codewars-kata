function wordSearch(query, seq){
 return seq.filter(elem => elem.toLowerCase().includes(query.toLowerCase()))
}
console.log(wordSearch('muh',['chris','christopher','christine','muhizi']));