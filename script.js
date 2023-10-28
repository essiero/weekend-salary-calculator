onReady();

// to update Counter: use innerHTML
let totalMonthly = 0;

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
    document.getElementById('counter').textContent = `Total Monthly: ${totalMonthly}`;

}

function deleteEmployee(event){
    console.log(`deleteEmployee function is running`);
    event.target.parentElement.parentElement.remove();

}



function onReady () {
    console.log('Javascript is working!');
}