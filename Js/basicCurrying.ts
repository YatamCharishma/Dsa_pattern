// currying

function f(a: number){
    return function(b: number){
        return `${a} ${b}`
    }
}

console.log(f(3)(4))

//sum(2)(3)(4)

function f1(a:number){
    return function(b: number){
        return function(c: number){
            return a+b+c
        }
    }
}

console.log(f1(2)(3)(4))

// Infinite currying - sum(2)(3)(4)...

function f2(a:number){
    return function(b: number){
        if(b) return f2(a+b);
        return a
    }
}

console.log(f2(2)(3)())
