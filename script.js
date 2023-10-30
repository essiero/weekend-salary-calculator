onReady();

// to update Counter: use innerHTML
let totalMonthly = 0;
// let employeeArray = [];
// let employeeIndex = 0;

/* NOTES FROM MATT'S MONDAY REVIEW
- README.md is a place for you to document your project process.
document.querySelector('h1').classList.add('pink-text')
- if you don't defer the JS file, it will mess up the JS code that's supposed to apply to html bc it hasn't created the html yet.
- you can move a line of code with option + arrow
- command bracket to indent a line of code right or left
 */

function handleSubmit(event){
    event.preventDefault(); // this is so that clicking submit doesn't refresh the page.
    console.log('Submit function is working')
    let USDollar = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    });
    let firstName = document.getElementById('firstName').value;
    document.getElementById('firstName').value = '';
    let lastName = document.getElementById('lastName').value;
    document.getElementById('lastName').value = '';
    let IDNumber = document.getElementById('IDnumber').value;
    document.getElementById('IDnumber').value = '';
    let title = document.getElementById('title').value;
    document.getElementById('title').value = '';
    let annualSalary = document.getElementById('annualSalary').value;
    document.getElementById('annualSalary').value = '';
    tableBody.innerHTML += // the reason you can do this with tableBody is that there is only one; BUT, if you add another table body at some point,
    // it would push into both. So you can add an id to your specific table body and use: document.getElementByID('whatever-the-id-is').innerHTML
        // add onclick function trigger to delete employee object from array at employee index number! somehow!! 
    `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${IDNumber}</td>
    <td>${title}</td>
    <td>${USDollar.format(annualSalary)}</td>
    <td><button onclick="deleteEmployee(event, ${annualSalary})">❌</button></td>
    </tr>`;
    // massive, massive props to Hannah for figuring out how to solve the stretch in the simplest way that didn't involve 
    totalMonthly += annualSalary/12;

   let annualSalary = 0;
   let totalAnnualSalary += Number (totalAnnualSalary)
// Selects footer, accesses its CSS class list and adds a new 'over-budget' CSS class to it
    document.querySelector('footer').classList.add('over-budget)



 */
    // let employeeAdded = {
    //     name: firstName + ' ' + lastName,
    //     ID: IDNumber,
    //     title: title,
    //     monthlySalary: annualSalary/12,
    //     indexNumber: employeeIndex ++
    // }
    // employeeArray.push(employeeAdded);
    // console.log(`Employee array: `, employeeArray)
    // console.log(`Employee added's index:`, employeeIndex);
//     function updateBudget(array, object){
//         for (employee of array){
//             for (index in employee){
//             totalMonthly += `${array[index].monthlySalary}`;
//         console.log(array[i].indexNumber);
//         console.log(totalMonthly)
//             }
//         }
//         console.log('Total monthly budget: ', totalMonthly);
// updateBudget(employeeArray);
    document.getElementById('number').textContent = `${USDollar.format(totalMonthly)}`;
    if(totalMonthly>20000){
        // document.getElementById('number').style.color="red";
        document.querySelector('footer').classList.add('over-budget');
    }
    }

// function salaryCalculator(array){
//     for (employee of array){
//         totalMonthly += employee.monthlySalary;
//     }
//         let USDollar = new Intl.NumberFormat('en-us', {
//         style: 'currency',
//         currency: 'USD',
//     });
//     console.log('Total monthly: ', totalMonthly);
//     document.getElementById('number').textContent = `${USDollar.format(totalMonthly)}`;
//     if(totalMonthly>20000){
//         document.getElementById('number').style.color="red";
// }
// }

function deleteEmployee(event, annualSalary){
    console.log(`deleteEmployee function is running`);
    event.target.parentElement.parentElement.remove();
    // you need to use -= and not just - in order to 'return' the new value
    totalMonthly -= annualSalary/12;
    if (totalMonthly<=20000){
        document.querySelector('footer').classList.remove('over-budget');
    }
// you can also go up until you find a table row!
// selects the button that was clicked (event.target)
// travels upward through the DOM structure to find the first <tr> element: .closest('tr')
// event.target.closest('tr').remove()

    // salaryCalculator(employeeArray);
// I want this to ALSO delete that employee from the employeeArray!

}

function onReady () {
    console.log('Javascript is working!');
}