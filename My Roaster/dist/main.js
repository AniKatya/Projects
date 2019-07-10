//client making a request to your server which is making a request to an external NBA API

// const fetchData = function () {
//     let input = $("#input").val()

//     $.get(`teams/${input}`, function (data) {
//         $(".result").empty()
//         for (i in data){
//         $(".result").append(`<div id = ${data[i].lastName} style = "background-color:#ffcc66">
//         <div>${data[i].firstName}</div>
//         <div>${data[i].jersey}</div>
//         <div>${data[i].pos}</div>
//         <img src="https://nba-players.herokuapp.com/players/${data[i].lastName}/${data[i].firstName}"></img>
//         </div>`)
//         }
//     })}

//handlebars version
const fetchData = function () {
    let input = $("#input").val()
    $.get(`teams/${input}`, function (data) {
        $(".result").empty()
        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        // append our new html to the page
        $('.result').append(newHTML);
    })}