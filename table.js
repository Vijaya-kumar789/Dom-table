
function create_tr() {
    var tr = document.createElement("tr");

    return tr;
}
function create_th(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function create_td(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}



var table = document.createElement("table");
table.className = "table"

var thead = document.createElement("thead");
thead.className = "thead-dark"

var thead_tr = create_tr();

var th1 = create_th("th", "scope", "col", "#");
var th2 = create_th("th", "scope", "col", "First");
var th3 = create_th("th", "scope", "col", "Last");
var th4 = create_th("th", "scope", "col", "Handle");

thead_tr.append(th1, th2, th3, th4);
thead.append(thead_tr);

var tbody = document.createElement("tbody");

var tbody_tr = create_tr();
var body_th = create_th("th", "scope", "row", "1");
var td1 = create_td("td", "Mark")
var td2 = create_td("td", "Otto")
var td3 = create_td("td", "@mdo")

var tbody_tr1 = create_tr();
var body_th1 = create_th("th", "scope", "row", "2");
var td4 = create_td("td", "Jacob")
var td5 = create_td("td", "Thornton")
var td6 = create_td("td", "@fat")

var tbody_tr2 = create_tr();
var body_th2 = create_th("th", "scope", "row", "3");
var td7 = create_td("td", "Larry")
var td8 = create_td("td", "the Bird")
var td9 = create_td("td", "@twitter")

tbody_tr.append(body_th, td1, td2, td3);
tbody_tr1.append(body_th1, td4, td5, td6);
tbody_tr2.append(body_th2, td7, td8, td9);
tbody.append(tbody_tr,tbody_tr1,tbody_tr2);

table.append(thead, tbody)
document.body.append(table);
