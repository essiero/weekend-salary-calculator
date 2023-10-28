onReady();

// to update Counter: use innerHTML
let totalMonthly = 0;
let employeeArray = [];

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
    let employeeAdded = {
        name: firstName + lastName,
        ID: IDNumber,
        title: title,
        monthlySalary: annualSalary/12
    }
    employeeArray.push(employeeAdded);
    console.log(employeeArray)
}

function deleteEmployee(event){
    console.log(`deleteEmployee function is running`);
    event.target.parentElement.parentElement.remove();

}

function onReady () {
    console.log('Javascript is working!');
}