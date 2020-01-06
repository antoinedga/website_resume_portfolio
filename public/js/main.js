var array;
$.ajax({url: "http://localhost:5000/lines", success: function(result){
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


$.ajax({url: "http://localhost:5000/projects", success: function(result){
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
	
    var chart = new CanvasJS.Chart("second_grid", {
      animationEnabled: true,
      title:{
        text:"Technical Skills Rating",
        padding: {
          top: 10,
          bottom: 2,
        }
      },
      axisX:{
        interval: 1,
      },
      axisY2:{
        interval: 25,
        tickLength: 0,
        tickThickness: 0,
        labelFormatter: function ( e ) {
            if (e.value == 25)
              return "Novice";
            else if (e.value == 50)
              return "Intermediate";
            else if (e.value == 75)
              return "Expert";
            else if (e.value == 100)
              return "Master";
            else
              return "";
         },
        maximum: 100
      },
      zoomEnabled: true,
      dataPointWidth: 20,
      data: [{
        type: "bar",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
          { y: 60, x: 0, label: "Java" },
          { y: 63, x: 1,label: "C" },
          { y: 55, label: "JavaScript" },
          { y: 45, label: "BootStrap" },
          { y: 58, label: "W3.CSS" },
          { y: 35, label: "PHP" },
        ]
      }]
    });
    chart.render();
  }