import { empData, emp } from "./interfaces"


interface customEmpData extends empData{
    empSalary: number
}

let empDataForThisFile: customEmpData = {
    empSalary: 24,
    empName: "Kumar",
    empDesg: "SWE",
    empNumber: 12312
}

console.log(empDataForThisFile)
console.log(emp)
