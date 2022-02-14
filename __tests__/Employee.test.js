
const Employee = require("../lib/Employee")

test(
    "How can I get the name via getName function?",() => {
        const testValue = "Alvaro"
        const e = new Employee (testValue)
        expect(e.getName()).toBe(testValue)
    }
) 

// test(
//     "How can I get the Id via getId function?",() => {
//         const testValue = "Alvaro"
//         const e = new Employee (testValue)
//         expect(e.getId()).toBe(testValue)
//     }
// ) 

// test(
//     "How can I get the email via getEmail function?",() => {
//         const testValue = "Alvaro"
//         const e = new Employee (testValue)
//         expect(e.getEmail()).toBe(testValue)
//     }
// ) 
