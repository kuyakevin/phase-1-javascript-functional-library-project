function myEach(collection, callback){
    let array = [];
    let copy = [...collection]
    for(array in collection){
        callback(array);
    }
    return collection;
}
