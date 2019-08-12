class Renderer{
    renderBoard(matrix) {
        $('#game').empty()
        const source = $('#board-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(matrix);
        $('#game').append(newHTML);
    }

    // renderScores(scores){
    //     $("#footer").empty();
    //     let source = $('#score-template').html();
    //     let template = Handlebars.compile(source);
    //     let newHTML = template(scores);
    //     $('#footer').append(newHTML);
    // }
}