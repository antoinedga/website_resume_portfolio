var array;

fetch("https://thegordonexperience.herokuapp.com/lines").then(function(response) {
  return response.json();
})
.then(function(result){
    array = result.data;
   
    $("#quotes").append(result.data[0].sent);
    setTimeout(a, 3000);
  });


function a() {
  var index = 0;
  window.setInterval(changeQuote, 15000);

  function changeQuote(){
      index++;
    $("#quotes").fadeOut(2000,function() {
      $("#quotes").html(array[index % array.length].sent).fadeIn(2000);
    });

  }
} 

fetch("https://thegordonexperience.herokuapp.com/projects").then(function(response) {
  return response.json();
}).then(function(result){

  result.sort(sorting);

   result.forEach(putInTable);
  });


  function putInTable(project) {
    var content = document.createElement("ul");
    var list_tech = document.createElement("ul");
    var row = document.createElement('tr');
    row.innerHTML += `<h3><u>${project.name}</u></h3>`;
    for (var j = 0; j < project.tech.length; j++) {
      list_tech.innerHTML += `<li> ${project.tech[j]} </li>`;
    }

    var list_item = document.createElement("li");
    list_item.innerHTML += (`Technology <p id=\"date_project\" class=\"w3-right\">${project.semester}</p>`)
    list_item.append(list_tech);
    content.append(list_item);

    for (var j = 0; j < project.description.length; j++) {
      content.innerHTML += `<li> ${project.description[j]} </li>`;
    }
    row.append(content);
    $("#table_project").append(row);
  }

  $(document).ready(function () {
	
    var chart = new CanvasJS.Chart("skill_chart", {
      animationEnabled: true,

      backgroundColor: "#1a3573",
      title:{
        text:"Technical Skills Rating",
        padding: {
          top: 10,
          bottom: 15,
        },
        fontColor	: "white",

      },
      axisX:{
        margin: 10,
        labelFontWeight: "bold",
        interval: 1,
        labelFontSize: 18,
        labelAutoFit: true,
        tickColor: "white",
        gridColor: "white" ,
        labelFontColor: "white",
        lineThickness: 1.5,
        lineColor: "white"
      },
      axisY2:{
        labelFontWeight: "bold",
        interval: 25,
        tickLength: 0,
        lineThickness: 2,
        labelMaxWidth: 150,
        labelWrap: true,
        labelFontSize: 18,
        lineColor: "white",
        tickThickness: 0,
        gridThickness: 2,
        labelFontColor: "white",
        gridColor: "white" ,
        labelFormatter: function ( e ) {
            if (e.value == 25)
              return "Novice (25)";
            else if (e.value == 50)
              return "Intermediate (50)";
            else if (e.value == 75)
              return "Expert (75)";
            else if (e.value == 100)
              return "Master (100)";
            else
              return "";
         },
        maximum: 100
      },
      dataPointMaxWidth: 25,
      dataPointMinWidth: 10,
      data: [{
        type: "bar",
        axisYType: "secondary",
        dataPoints: [
          { y: 40, label: "Node.js" },
          { y: 40, label: "Express.js" },
          { y: 60, label: "Java" },
          { y: 63, label: "C" },
          { y: 55, label: "HTML & CSS" },
          { y: 37, label: "JQuery" },
          { y: 45, label: "BootStrap" },
          { y: 58, label: "W3.CSS" },
          { y: 40, label: "React.js"},
          { y: 40, label: "Angular2+"},
          { y: 45, label: "Git" },
          { y: 30, label: "MongoDB" },
          { y: 35, label: "MySQL" },
          { y: 35, label: "CanvasJS" },
          {y: 30, label: 'Azure'},
          { y: 30, label: "AWS"},
          { y: 25, label: "Heroku" },

        ]
      }]
    });


    chart.render();
   
  });

  // skills last updated on 01/22/2019

  function sorting( x, y) {

    var x_temp = x.semester.split(' ');
    var y_temp = y.semester.split(' ');
    
    var x_seme = semester(x_temp[0]);
    var y_seme = semester(y_temp[0]);
  
    if (x_temp[1] > y_temp[1])
        return -1;

    if (x_temp[1] < y_temp[1])
      return 1;

    if (x_seme > y_seme)
      return 1;
    
    if (x_seme < y_seme)
      return -1;
    
    return 0;

  }

  function semester(x) {

    if (x.localeCompare("Summer") == 0)
      return 3;

    if (x.localeCompare("Spring") == 0)
        return 2;
    if (x.localeCompare("Fall") == 0)
      return 1;
  }
