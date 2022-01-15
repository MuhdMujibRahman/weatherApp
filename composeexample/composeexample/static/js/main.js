
//function click_category(){
//    $("ul li a.active").removeClass("active");
//    $(this).addClass("active");
//}
var url = window.location.origin;

//document.getElementById("button-city").addEventListener("click", getCityList());

$("li a").click(function() {

			// Select all list items
			var listItems = $("li a");

			// Remove 'active' tag for all list items
			for (let i = 0; i < listItems.length; i++) {
				listItems[i].classList.remove("active");
			}

			// Add 'active' tag for currently selected item
			this.classList.add("active");
		});

window.onload=function(){
main_getLocation();
getCityList();
}

function getCityList(){
        var jqXHR = $.ajax({
            type: "GET",
            url: "/web_app/cityList",
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });
        listItem(JSON.parse(jqXHR.responseText))
        return jqXHR.responseText;

}

function listItem(item){
    console.log(typeof item)
    store_1b(item)
  for (var i = 0; i < item.length; i++){
    console.log(item[i]["Name"])
    var list = item[i]["Name"];
    console.log(list);
//    list = document.createElement("LI");
    var li_node = document.createElement("LI");
    var a_node = document.createElement("p");
    var i_node = document.createElement("i")
    var textnode = document.createTextNode(list);

    li_node.className = "ui-item green";
    li_node.appendChild(i_node);
    i_node.appendChild(a_node);
    a_node.appendChild(textnode);
    li_node.setAttribute('id',list);
    li_node.setAttribute('onclick','getLocationByCityName(this.id)');
    document.getElementById('id-ui-list').appendChild(li_node);


  }
 }

function store (item) {
  // (A) VARIABLES TO PASS
//  var first = "Foo Bar",
//      second = ["Hello", "World"];

  // (B) SAVE TO SESSION STORAGE
  // sessionStorage.setItem("KEY", "VALUE");
  sessionStorage.setItem("first", JSON.stringify(item));
  // session storage cannot store array and objects
  // JSON encode before storing, convert to string
  sessionStorage.setItem("second", JSON.stringify(item));

  // (C) REDIRECT
//  location.href = "1b-session.html";
  // Opening new window works too
  // window.open("1b-session.html");
}
function store_1b (item) {
  // (A) VARIABLES TO PASS
//  var first = "Foo Bar",
//      second = ["Hello", "World"];

  // (B) SAVE TO SESSION STORAGE
  // sessionStorage.setItem("KEY", "VALUE");
  sessionStorage.setItem("cityList", JSON.stringify(item));
  // session storage cannot store array and objects
  // JSON encode before storing, convert to string
  sessionStorage.setItem("second", JSON.stringify(item));

  // (C) REDIRECT
//  location.href = "1b-session.html";
  // Opening new window works too
  // window.open("1b-session.html");
}
