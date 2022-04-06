// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


let findMatching = (drivers, person) => {
    let result = drivers.filter(drivers => drivers.toLowerCase() === person.toLowerCase());
    return result
}

let fuzzyMatch = (drivers, person) => {
    //return drivers.filter(drivers => drivers[0], drivers[1] === person)
    return drivers.filter(drivers => drivers.indexOf(person) === 0)
        
}



pers1 = 'Bobby';

