var array;
$.ajax({url: "https://thegordonexperience.herokuapp.com/lines", success: function(result){
    array = result;
    $("#quotes").append(result[0].sent);
  }});


setTimeout(a, 3000);

function a()
{
  var index = 0;
  window.setInterval(changeQuote, 15000);

  function changeQuote(){
      index++;
    $("#quotes").fadeOut(2000,function() {
      $("#quotes").html(array[index % array.length].sent).fadeIn(2000);
    });

  }


} 

$.ajax({url: "https://thegordonexperience.herokuapp.com/projects", success: function(result){
   result.forEach(putInTable);
  }});


  function putInTable(project)
  {
    var content = document.createElement("ul");
    var list_tech = document.createElement("ul");
    var row = document.createElement('tr');
    row.innerHTML += `<h3><u>${project.name}</u></h3>`;
    for (var j = 0; j < project.tech.length; j++)
    {
      list_tech.innerHTML += `<li> ${project.tech[j]} </li>`;
    }

    var list_item = document.createElement("li");
    list_item.innerHTML += (`Technology <p id=\"date_project\" class=\"w3-right\">${project.semester}</p>`)
    list_item.append(list_tech);
    content.append(list_item);

    for (var j = 0; j < project.description.length; j++)
    {
      content.innerHTML += `<li> ${project.description[j]} </li>`;
    }
    row.append(content);
    $("#table_project").append(row);
  }

  window.onload = function () {
	
    var chart = new CanvasJS.Chart("skill_chart", {
      animationEnabled: true,

      backgroundColor: "#1a3573",
      title:{
        text:"Technical Skills Rating",
        padding: {
          top: 10,
          bottom: 2,
        },
        fontColor	: "white",

      },
      axisX:{
        interval: 1,
        tickColor: "white",
        gridColor: "white" ,
        labelMaxWidth: 150,
        labelWrap: true,
        margin: 10,
        labelFontColor: "white",
        lineThickness: 2,
        lineColor: "white"
      },
      axisY2:{
        interval: 25,
        margin: 10,
        tickLength: 0,
        lineThickness: 2,
        labelMaxWidth: 150,
        labelWrap: true,
        lineColor: "white ",
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
      dataPointMaxWidth: 22,
      dataPointMinWidth: 10,
      data: [{
        type: "bar",
        axisYType: "secondary",
        dataPoints: [
          { y: 60, label: "Java" },
          { y: 63, label: "C" },
          { y: 55, label: "HTML & CSS" },
          { y: 35, label: "JQuery" },
          { y: 45, label: "BootStrap" },
          { y: 58, label: "W3.CSS" },
          { y: 35, label: "PHP" },
          { y: 40, label: "Git" },
          { y: 35, label: "MongoDB" },
          { y: 35, label: "MySQL" },
          { y: 35, label: "Node.js" },
          { y: 35, label: "Express.js" },
          { y: 35, label: "CanvasJS" },

        ]
      }]
    });
    chart.render();
  }