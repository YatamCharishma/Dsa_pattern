
function man(this: any, salary: number, age: number){
    console.log(`for ${this.name}, ${salary} is huge for age ${age}`)
}

const person = {
    name: "mintu"
}

// call
man.call(person, 16, 23);

// apply
man.apply(person, [18, 23]);

// bind
const res = man.bind(person);
res(24, 23);
