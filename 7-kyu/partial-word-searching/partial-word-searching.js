function wordSearch(query, seq){
 return query.filter(elem => elem.toLowerCase().includes(seq.toLowerCase()))
}
console.log(wordSearch(['chris','christopher','christine','muhizi'],'muh'));