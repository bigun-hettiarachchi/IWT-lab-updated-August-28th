function loadData(name) {
  if (name == "btn1") {
    document.getElementById("para").innerHTML =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, ipsa possimus? Assumenda sint eaque numquam earum debitis cupiditate excepturi repellat. Dolor, architecto. Recusandae autem voluptatem hic sint, atque magnam commodi explicabo! Saepe veniam hic libero architecto quibusdam odio deserunt molestias voluptatem nemo excepturi consequatur repudiandae expedita, amet ut quasi aperiam ea cupiditate adipisci pariatur officia placeat. Architecto, deleniti!";
    document.getElementById("img1").src = "images/iPhone.jpg";
  } else if (name == "btn2") {
    document.getElementById("para").innerHTML =
      "sample text 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis suscipit, delectus ratione et sed esse placeat eaque consequuntur sapiente similique deleniti iusto! Dolor, mollitia odio? Id voluptatum nemo cumque omnis similique, facilis architecto iure hic officiis perspiciatis maxime?";
    document.getElementById("img1").src = "images/iPhone2.jpg";
  } else if (name == "btn3") {
    document.getElementById("para").innerHTML =
      "sample text 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dicta libero placeat nisi asperiores, delectus autem! Eligendi, consectetur vero. Velit totam sed hic. Qui rerum voluptate similique, odit culpa sint. Deserunt, nam voluptates. Quaerat asperiores, vel ducimus enim nemo quasi magnam repellat, iste id sint deleniti! Quidem, rem ea laboriosam nobis officiis labore expedita suscipit nam eligendi voluptatibus quae quis blanditiis aut? Suscipit aut sint nobis alias rerum!";
    document.getElementById("img1").src = "images/iPhone.jpg";
  } else if (name == "btn4") {
    document.getElementById("para").innerHTML =
      "sample text 4Lore  dicta libero placeat nisi asperiores, delectus autem! Eligendi, consectetur vero. Velit totam sed hic. Qui rerum voluptate similique, odit culpa sint. Deserunt, nam voluptates. Quaerat asperiores, vel ducimus enim nemo quasi magnam repellat, iste id sint deleniti! Quidem, rem ea laboriosam nobis officiis labore expedita suscipit nam eligendi voluptatibus quae quis blanditiis aut? Suscipit aut sint nobis alias rerum!";
    document.getElementById("img1").src = "images/iPhone2.jpg";
  } else if (name == "btn5") {
    document.getElementById("para").innerHTML =
      "sample text 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi error odio? Explicabo doloribus molestiae maiores consequuntur ipsam. Veniam itaque libero porro nisi amet sunt quam iure illum! Alias vero modi ut, odit quae, aut hic eius ea tenetur iure quidem quis adipisci eligendi, repellendus dignissimos distinctio obcaecati.";
    document.getElementById("img1").src = "images/iPhone.jpg";
  } else {
    // document.getElementById("para").innerHTML = "expensive phones";
    alert("invalid response");
  }
}

//

// function priceForInLoop() {
//   var phone = [
//     "iphone xs = Rs.100000/-",
//     "iPhone12 = Rs. 2590/-",
//     "iPhone13 = Rs. 33889/-",
//     "iphone 6 = Rs.1000/-",
//     "iPhone7 = Rs. 23590/-",
//     "iPhone11 = Rs. 338089/-",
//     "iphone 14 = Rs.3980/-",
//     "iPhone13 pro = Rs. 290/-",
//     "iPhone12 pro = Rs. 338/-",
//   ];

//   for (
//     i = 0,
//       len = phone.length,
//       list = "List of average prices (using for loop). <br/>";
//     i < len;
//     i++
//   ) {
//     list += phone[i] + "<br/>";
//   }

//   document.getElementById("img1").src = "images/img.jpg";
//   document.getElementById("para").innerHTML = list;
// }

//
//
//
//associative array

function productForInLoop() {
  var phone = [];
  phone["iphone xs"] = "Rs.10000/-";
  phone["iPhone12"] = "Rs.23590/-";
  phone["iPhone13"] = "Rs. 33889/-";
  phone["iphone6"] = "Rs.10000/-";
  phone["iPhone7"] = "Rs. 23590/-";
  phone["iPhone11"] = "Rs. 33889/-";
  phone["iphone14"] = "Rs.10000/-";
  phone["iPhone13pro"] = "Rs. 23590/-";
  phone["iPhone12pro"] = "Rs. 33889/-";

  var list = "List of average prices (using for in loop) <br/>";

  for (var item in phone) {
    list += item + " : " + phone[item] + "<br/>";
  }

  document.getElementById("img1").src = "images/img.jpg";
  document.getElementById("para").innerHTML = list;
}

//
//
function priceHigher() {
  var phone = [];

  phone["iPHone XS"] = 1000;
  phone["iPHone XR"] = 100;
  phone["iPHone SE"] = 1900;
  phone["Nova 5"] = 1000;
  phone["Nova Pro 4"] = 9000;
  phone["iPHone XS"] = 4900;
  phone["iPHone XS"] = 4500;
  phone["iPHone XS"] = 2000;
  phone["iPHone XS"] = 3000;

  var highPrice = "list of high cost mobile phones <br/>";
  for (var item in phone) {
    if (phone[item] < 1000) {
      LowPrice += item + " : " + phone[item] + "<br/>";
    }
  }

  document.getElementById("img1").src = "images/img.jpg";

  document.getElementById("para").innerHTML = highPrice;
}

// enable submit button
function enableButton() {
  if (document.getElementById("checkbox").checked) {
    document.getElementById("submitbtn").disabled = false;
  } else {
    document.getElementById("submitbtn").disabled = true;
  }
}

//
function checkPassword() {
  if (
    document.getElementById("pw").value ==
    document.getElementById("confirmpw").value
  ) {
    alert("success!!!");
    return true;
  } else {
    alert("password mismatch!!");
    return false;
  }
}
