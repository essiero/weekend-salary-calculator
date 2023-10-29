onReady();

// to update Counter: use innerHTML
let totalMonthly = 0;
let employeeArray = [];
let employeeIndex = -1;


function handleSubmit(event){
    event.preventDefault();
    console.log('Submit function is working')
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
    tableBody.innerHTML +=
        // add onclick function trigger to delete employee object from array at employee index number! somehow!! 
    `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${IDNumber}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteEmployee(event)">❌</button></td>
    </tr>`;
    totalMonthly += annualSalary/12;
    let USDollar = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    });
    document.getElementById('number').textContent = `${USDollar.format(totalMonthly)}`;
    if(totalMonthly>20000){
        document.getElementById('number').style.color="red";
    }
    // let employeeAdded = {
    //     name: firstName + ' ' + lastName,
    //     ID: IDNumber,
    //     title: title,
    //     monthlySalary: annualSalary/12
    //     indexNumber: employeeIndex ++;
    // }
    // employeeArray.push(employeeAdded);
    // console.log(employeeIndex);
    // salaryCalculator(employeeArray);
    
}

function salaryCalculator(array){
    for (employee of array){
        totalMonthly += employee.monthlySalary;
    }
        let USDollar = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    });
    console.log('Total monthly: ', totalMonthly);
    document.getElementById('number').textContent = `${USDollar.format(totalMonthly)}`;
    if(totalMonthly>20000){
        document.getElementById('number').style.color="red";
}
}

function deleteEmployee(event){
    console.log(`deleteEmployee function is running`);
    event.target.parentElement.parentElement.remove();
    salaryCalculator(employeeArray);
// I want this to ALSO delete that employee from the employeeArray!

}

function onReady () {
    console.log('Javascript is working!');
}