//SPA = single page application

var database = [];
var id = 100;
var mode = 0;

window.onload = function() {
	createForm();
    populateTable();
}

createForm = () => {
	let root = document.getElementById("root");
	let form = document.createElement("form");
	form.setAttribute("class","m-3");
	
	//First name input and label
	
	let firstNameInput = document.createElement("input");
	firstNameInput.setAttribute("type","text");
	firstNameInput.setAttribute("name","firstname");
	firstNameInput.setAttribute("id","firstname");
	firstNameInput.setAttribute("class","form-control");
	let firstNameLabel = document.createElement("label");
	firstNameLabel.setAttribute("for","firstname");
	firstNameLabel.setAttribute("class","form-label");
	let firstNameText = document.createTextNode("First Name");
	firstNameLabel.appendChild(firstNameText);
	
	//last name input and label
	
	let lastNameInput = document.createElement("input");
	lastNameInput.setAttribute("type","text");
	lastNameInput.setAttribute("name","lastname");
	lastNameInput.setAttribute("id","lastname");
	lastNameInput.setAttribute("class","form-control");
	let lastNameLabel = document.createElement("label");
	lastNameLabel.setAttribute("for","lastname");
	lastNameLabel.setAttribute("class","form-label");
	let lastNameText = document.createTextNode("Last Name");
	lastNameLabel.appendChild(lastNameText);
	
	//Email input and label
	
	let emailInput = document.createElement("input");
	emailInput.setAttribute("type","email");
	emailInput.setAttribute("name","email");
	emailInput.setAttribute("id","email");
	emailInput.setAttribute("class","form-control");
	let emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	emailLabel.setAttribute("class","form-label");
	let emailText = document.createTextNode("Email");
	emailLabel.appendChild(emailText);
	
	//Phone input and label
	
	let phoneInput = document.createElement("input");
	phoneInput.setAttribute("type","tel");
	phoneInput.setAttribute("name","phone");
	phoneInput.setAttribute("id","phone");
	phoneInput.setAttribute("class","form-control");
	let phoneLabel = document.createElement("label");
	phoneLabel.setAttribute("for","phone");
	phoneLabel.setAttribute("class","form-label");
	let phoneText = document.createTextNode("Phone");
	phoneLabel.appendChild(phoneText);

	//submit Button
	let submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("id","submitbutton");
	submitButton.setAttribute("class","btn btn-secondary");
	submitButton.setAttribute("value","Add");
	
	form.append(firstNameLabel,firstNameInput,lastNameLabel,lastNameInput,emailLabel,emailInput,phoneLabel,phoneInput,submitButton);
	form.addEventListener("submit",function(event) {
		event.preventDefault();
        addContact();
	})
	
	root.appendChild(form);
}

addContact = () => {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    let contact = {
        "firstname":firstNameInput.value,
        "lastname":lastNameInput.value,
        "email":emailInput.value,
        "phone":phoneInput.value
    }
    if(mode){
        contact.id = mode;
        for(let i=0; i<database.length;i++){
            if(contact.id === database[i].id){
                database.splice(i,1,contact);
            }
        }
    }
    else{
        contact.id = id;
        id++;
        database.push(contact);
    }
    //tyhjennä arvot
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    const submitButton = document.getElementById("submitbutton");
    submitButton.value = "Add";
    mode = 0;
    populateTable();
}

removeContact = (id) => {
    for(let i=0; i<database.length;i++){
        if(id === database[i].id){
            database.splice(i,1);
        }
    }
    populateTable();
}

editContact = (contact) => {
    //fecth values
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    //assign values
    firstNameInput.value = contact.firstname;
    lastNameInput.value = contact.lastname;
    emailInput.value = contact.email;
    phoneInput.value = contact.phone;

    mode = id;
    const submitButton = document.getElementById("submitbutton");
    submitButton.value = "Save edit";
}

populateTable = () => {
    const root = document.getElementById("root");
    const oldTable = document.getElementById("table");
    if(oldTable){
        root.removeChild(oldTable);
    }

    const table = document.createElement("table");
    table.setAttribute("class", "table-striped");
    table.setAttribute("id", "table");

    //Table Headers

    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");

    //First Name Header
    const firstNameHeader = document.createElement("th"); //th = table header
    const firstNameNode = document.createTextNode("First Name");
    firstNameHeader.appendChild(firstNameNode);

    //Last Name Header
    const lastNameHeader = document.createElement("th");
    const lastNameNode = document.createTextNode("Last Name");
    lastNameHeader.appendChild(lastNameNode);

    //Email Header
    const emailHeader = document.createElement("th");
    const emailNode = document.createTextNode("Email");
    emailHeader.appendChild(emailNode);

    //Phone Header
    const phoneHeader = document.createElement("th");
    const phoneNode = document.createTextNode("Phone");
    phoneHeader.appendChild(phoneNode);

    //Remove Header
    const removeHeader = document.createElement("th");
    const removeNode = document.createTextNode("Remove");
    removeHeader.appendChild(removeNode);

    //EditHeader
    const editHeader = document.createElement("th");
    const editNode = document.createTextNode("Edit");
    editHeader.appendChild(editNode);

    headerRow.append(firstNameHeader, lastNameHeader, emailHeader, phoneHeader, removeHeader, editHeader);
    header.appendChild(headerRow);
    table.appendChild(header);

    //Table body

    const body = document.createElement("tbody");
    for(let i=0; i<database.length; i++){
        const row = document.createElement("tr");
        for(x in database[i]){
            if(x === "id"){
                continue;
            }
            const column = document.createElement("td");
            const info = document.createTextNode(database[i][x]);
            column.appendChild(info);
            row.append(column);
        }
        const removeColumn = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.setAttribute("class", "btn btn-danger");
        const removeButtonText = document.createTextNode("Remove");
        removeButton.appendChild(removeButtonText);
        removeButton.addEventListener("click", function(event){
            removeContact(database[i].id);
        })

        const editColum = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-secondary");
        const editButtonText = document.createTextNode("Edit");
        editButton.appendChild(editButtonText);
        editButton.addEventListener("click", function(event){
            editContact(database[i].id);
        })

        removeColumn.appendChild(removeButton);
        editColum.appendChild(editButton);
        row.append(removeColumn, editColum);
        body.appendChild(row);
    }

    table.appendChild(body);
    root.appendChild(table);

}