$(function() {

$("#form :button").click(function(){
  search($("#form :input").val());
});

$("#form :input").keypress(function(e) {
  if(e.keyCode == 13) {
    e.preventDefault();
    search($(this).val());
  };
});

function search(v) {
$.getJSON("https://www.googleapis.com/customsearch/v1?key=AIzaSyA1gAq_nVEwRBhEUZc6GEuOv6Gz3FX4yiQ&cx=014946099749440321246:vwuz9epa6ya&q="+v+"&callback=?", function (data){

//  var results = data.items;
  
  var ol = document.createElement("ol");
  for (var i=0; i<data.items.length; i++){
    var r = data.items[i];
    var li = document.createElement("li");
    li.innerHTML = "<a href="+r.link+"title="+r.link+"target=_blank>"+r.title+"</a> <h3>"+r.link+"</h3> <p>"+r.snippet+"</p>";
    ol.appendChild(li);
  };
  $(".result").html(ol);
});
};

});
