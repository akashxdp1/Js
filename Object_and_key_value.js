let akash = {
    name: 'hasan mahmud akash',
    age: 29,
    job: "freelancer",
    location: 'kishoreganj',
    matarialStatus: "married",
}
akash ["name"] = 'Akash';


console.log(akash['name']);

let key= Object.keys(akash);
console.log(key);

let value= Object.values(akash);
console.log(value);
