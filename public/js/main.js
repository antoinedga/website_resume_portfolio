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
   putInTable(result[0]);
  }});


  function putInTable(project)
  {
    var content = document.createElement("ul");
    var list_tech = document.createElement("ul");
    var row = document.createElement('tr');
    row.innerHTML += `<h3>${project.name}</h3>`;
    for (var i = 0; i < project.tech.length; i++)
    {
      list_tech.innerHTML += `<li> ${project.tech[i]} </li>`;
    }

    var list_item = document.createElement("li");
    list_item.append(list_tech);
    content.append(list_item);

    for (var i = 0; i < project.description.length; i++)
    {
      content.innerHTML += `<li> ${project.description[i]} </li>`;
    }
    row.append(content);
    $("#table_project").append(row);
  }
