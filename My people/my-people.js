 
const data = [];

//API request updates the data

$.ajax({
    method: "GET",
    url: 'https://jsonplaceholder.typicode.com/users',
    dataType: 'json',
    success: (result) => {
        for (let i in result){
            data.push ({name:result[i].name,email:result[i].email})
        }}})


const source = $('#user-template').html();
const template = Handlebars.compile(source);
const newHTML = template(data)
$(".container").append(newHTML);