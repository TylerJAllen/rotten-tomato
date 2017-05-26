//--------------Back End Logic ----------------//
var movieArray = [];
var scoreArray = [];


function Movie(title, year, score) {
  this.title = title;
  this.year = year;
  this.score = score;
}

function resetFields() {
  $("input").val("");
}
//--------------Front End Logic ----------------//
$(function(){

  scoreArray.sort()

  $("form").submit(function(event){
    event.preventDefault();
    var inputTitle = $("input[name=title]").val();
    var inputYear = $("input[name=year]").val();
    var inputScore = $("input[name=score]").val();

    var newMovie = new Movie(inputTitle, inputYear, inputScore);
    movieArray.push(newMovie);
    scoreArray.push(inputScore);

    $(".output").show();
    $("tbody").append('<tr><td>' + newMovie.title + '</td><td>' + newMovie.year + '</td><td>' + newMovie.score + '</td></tr>');
    resetFields();
  });

  $("#sortButton").click(function(){
    $("tbody").empty();

    movieArray.sort(function(a,b) {
      return b.score - a.score;
    });
    console.log(movieArray);
    for(var index = 0; index < movieArray.length; index += 1) {
      $("tbody").append('<tr><td>' + movieArray[index].title + '</td><td>' + movieArray[index].year + '</td><td>' + movieArray[index].score + '</td></tr>');
    }

  });
});
