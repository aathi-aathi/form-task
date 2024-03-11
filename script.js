const form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
   
    const fname=document.getElementById("first-name").value;
    const lname=document.getElementById("last-name").value;
    const address=document.getElementById("address").value;
    const pin=document.getElementById("pincode").value;
    const gender= document.querySelector('input[name="gender"]:checked').value;
    const foodElements = document.getElementsByName('food');
        var selectedFoods = [];
        foodElements.forEach(function(element) {
            if (element.checked) {
                selectedFoods.push(element.value);
            }
        });
        if(selectedFoods.length<2){
            alert("Select minimum 2 Items")
        }
    const state= document.getElementById("state").value;
    const country=document.getElementById("country").value;
    
const table=document.querySelector(".table");
let row = table.insertRow();
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5 = row.insertCell(4);
let cell6 =row.insertCell(5);
let cell7= row.insertCell(6);
let cell8= row.insertCell(7);
cell1.innerText = fname;
cell2.innerText = lname;
cell3.innerText = address;
cell4.innerText = pin;
cell5.innerText = gender;
cell6.innerText = selectedFoods.join(', ');
cell7.innerText = state;
cell8.innerText = country;
});
