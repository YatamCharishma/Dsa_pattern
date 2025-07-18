// DONT USE ANY - just for logic purpose - below code


// polyfills - map

Array.prototype.map = function(cb){
    let temp = []
    for(let i = 0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

// polyfills - filter

Array.prototype.filter = function(cb:any){
    let temp = []
    for(let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(cb(this[i], i, this))
        }
    }
    return temp;
}


// polyfills - reduce

Array.prototype.reduce = function(cb: any, initialValue: any){
    let accumulator = initialValue;
    for(let i = 0; i<this.length; i++){
        accumulator = accumulator? cb(accumulator, this[i], i, this): this[i];
    }
    return accumulator;
}
