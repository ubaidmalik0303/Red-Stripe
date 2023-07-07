$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<div class='nav-button owl-prev'>🡠</div>",
    "<div class='nav-button owl-next'>🡢</div>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

var cursorOnDiv = false;

// jQuery(document).on({
//         mouseenter:function(){ cursorOnDiv = true; },
//         mouseleave:function(){ cursorOnDiv = false; },
//     },
//    '#name'
// );
document.querySelectorAll("#name").forEach((e) => {
  e.addEventListener("mouseenter", function () {
    cursorOnDiv = true;
  });
  e.addEventListener("mouseleave", function () {
    cursorOnDiv = false;
  });
});

async function getData(place) {
  const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=e41961bfd50b4905b3b89577c09d8971&location=${place}`;
  const res = await fetch(url);
  data = await res.json();
  time = data.datetime;
  // document.getElementById("time").innerText=`${place}'s time = ${time} ${data . timezone_abbreviation}`
}

document.querySelectorAll(".allpaths").forEach((e) => {
  e.removeAttribute("images");
});

function changeImages(products) {
  const data = JSON.parse(products);

  document.querySelectorAll(".allpaths").forEach((e) => {
    e.removeAttribute("images");

    data?.forEach((pro) => {
      const isMatch = pro?.fields?.countries?.find(
        (cnt) =>
          cnt?.fields?.title.toLowerCase() ===
          e?.getAttribute("id")?.toLowerCase()
      );

      if (isMatch) {
        if (e.getAttribute("images")) {
          e.setAttribute(
            "images",
            `${e.getAttribute(
              "images"
            )}, ${pro?.fields?.image?.fields?.file?.url.slice(2)}`
          );
        } else {
          e.setAttribute(
            "images",
            `${pro?.fields?.image?.fields?.file?.url.slice(2)}`
          );
        }
      }
    });
  });

  // setTimeout(() => {
  document.querySelectorAll(".allpaths").forEach((e) => {
    if (
      e.getAttribute("images") === "" ||
      e.getAttribute("images") === null ||
      e.getAttribute("images") === undefined
    ) {
      return;
    }

    e.addEventListener("mouseenter", function (j) {
      offsets = this.getBoundingClientRect();

      // window.onmouseover=function(j){
      // x=j.clientX;
      // y=j.clientY;
      document.getElementById("name").style.top = offsets.top + "px";
      document.getElementById("name").style.left = offsets.left + "px";
      // }
      jQuery(".allpaths").css({ fill: "#ececec" });
      e.style.fill = "#EB1E2F";
      // document.getElementById("namep").innerText=e.id;

      var images_1 = e.getAttribute("images");
      var brandlinks_1 = e.getAttribute("brandlinks");

      const all_images = images_1.split(",");
      const all_brand_links = brandlinks_1.split(",");

      var html_data = "";

      html_data = "<h4>" + e.id + "</h4>";
      for (var i = 0; i < all_images.length; i++) {
        var image_name = all_images[i]?.trim();

        // var img =
        //   "<a href='" +
        //   brand_link +
        //   "'><img src='" +
        //   image_name +
        //   "' style='max-height: 100px;'></a>";

        var img = `<img src='https://${image_name}' style='max-height: 100px; margin-right: 20px;'>`;

        html_data += img;
      }

      document.getElementById("name").innerHTML = html_data;

      document.getElementById("name").style.opacity = 1;
      document.getElementById("name").style.display = "block";
    });
    e.addEventListener("mouseleave", function () {
      if (jQuery("#name:hover").length != 0) {
        // $(".hint").text("Mouse is Over the DIV Element.");
      } else {
        e.style.fill = "#ececec";
        document.getElementById("name").style.opacity = 0;
        document.getElementById("name").style.display = "none";
      }

      window.onmouseleave = function (j) {
        if (jQuery("#name:hover").length != 0) {
          // $(".hint").text("Mouse is Over the DIV Element.");
        } else {
          e.style.fill = "#ececec";
          document.getElementById("name").style.opacity = 0;
          document.getElementById("name").style.display = "none";
        }
      };
    });

    e.addEventListener("click", function () {
      getData(e.id);
    });
  });
  // }, 1000);
}

function change_countries_table(drink_name) {
  drink_name = JSON.parse(drink_name);

  // red_stripe dragon_stout dragon_stout_1 ed_stripe_ca guinness_sto smirnoff_vod
  var html_data = "";

  drink_name?.forEach(({ fields }) => {
    html_data += '<div class="col-md-3  links-col-3">';
    html_data += '<div class="usa ul-div">';
    html_data += `     <h3 class="ul-heading">${fields?.title}</h3>`;
    html_data += "    <ul>";

    fields?.cities.forEach((city) => {
      html_data += `       <li>${city}</li>`;
    });

    html_data += "    </ul>";
    html_data += "</div>";
    html_data += "</div>";
  });

  //   if (drink_name == "red-stripe-can") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "       <li>NEW YORK</li>";
  //     html_data += "       <li>HOUSTION</li>";
  //     html_data += "       <li>BALTIMORE</li>";
  //     html_data += "       <li>SAVANNAH</li>";
  //     html_data += "       <li>OAKLAND</li>";
  //     html_data += "       <li>MIAMI</li>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "             <li>Canada</li>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "             <li>Antigua & Barbuda</li>";
  //     html_data += "             <li>Barbados </li>";
  //     html_data += "             <li> British Guyana</li>";
  //     html_data += "             <li> Dominica</li>";
  //     html_data += "             <li>Montserrat </li>";
  //     html_data += "             <li>Trinidad,Tobago </li>";
  //     html_data += "             <li> Belize</li>";
  //     html_data += "             <li> Guadeloupe</li>";
  //     html_data += "             <li>Martinique </li>";
  //     html_data += "        </ul>";
  //     html_data += "        <ul>";
  //     html_data += "             <li>Amer.Virgin Is </li>";
  //     html_data += "             <li> Anguilla</li>";
  //     html_data += "             <li> Brit.Virgin Is.</li>";
  //     html_data += "             <li> Cayman Islands</li>";
  //     html_data += "             <li>St. Maarten </li>";
  //     html_data += "             <li>Turks & Caicos </li>";
  //     html_data += "             <li>Guyana </li>";
  //     html_data += "             <li> Suriname</li>";
  //     html_data += "             <li>St Lucia </li>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     html_data += "        </div>";

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  //   //SECOND

  //   if (drink_name == "dragon_stout") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "       <li>NEW YORK</li>";
  //     html_data += "       <li>SAVANNAH</li>";
  //     html_data += "       <li>MIAMI</li>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "             <li>Canada</li>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "             <li>Antigua & Barbuda</li>";
  //     html_data += "             <li>Barbados </li>";
  //     html_data += "             <li> British Guyana</li>";
  //     html_data += "             <li> Dominica</li>";
  //     html_data += "             <li>Montserrat </li>";
  //     html_data += "             <li>Trinidad,Tobago </li>";
  //     html_data += "        </ul>";
  //     html_data += "        <ul>";
  //     html_data += "             <li>Amer.Virgin Is </li>";
  //     html_data += "             <li> Cayman Islands</li>";
  //     html_data += "             <li>Guyana </li>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     html_data += "        </div>";

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  //   // Third

  //   if (drink_name == "dragon_stout_1") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "       <li>NEW YORK</li>";
  //     html_data += "       <li>SAVANNAH</li>";
  //     html_data += "       <li>MIAMI</li>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     // html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "        <ul>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     // html_data += '        </div>';

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  //   // fourth

  //   if (drink_name == "ed_stripe_ca") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     // html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "             <li>Antigua & Barbuda</li>";
  //     // html_data += '        </ul>';
  //     // html_data += '        <ul>';
  //     html_data += "             <li>Amer.Virgin Is </li>";
  //     html_data += "             <li> Cayman Islands</li>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     // html_data += '        </div>';

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  //   // fifth

  //   if (drink_name == "guinness_sto") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     // html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "        <ul>";
  //     html_data += "             <li> Suriname</li>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     // html_data += '        </div>';

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  //   // sixth

  //   if (drink_name == "smirnoff_vod") {
  //     html_data = '<div class="col-md-3  links-col-3">';
  //     html_data += '<div class="usa ul-div">';
  //     html_data += '     <h3 class="ul-heading">USA</h3>';
  //     html_data += "    <ul>";
  //     html_data += "    </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-3 links-col-3">';
  //     html_data += '    <div class="canada ul-div">';
  //     html_data += '        <h3 class="ul-heading">CANADA</h3>';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "</div>";
  //     html_data += "</div>";

  //     html_data += '<div class="col-md-4 links-col-4">';
  //     html_data += '    <div class="caricom ul-div">';
  //     html_data += '        <h3 class="ul-heading">Caricom</h3>';
  //     // html_data += '        <div class="js-ul-data">';
  //     html_data += "        <ul>";
  //     html_data += "        </ul>";
  //     html_data += "        <ul>";
  //     html_data += "             <li> Suriname</li>";
  //     html_data += "             <li> Jamaica</li>";
  //     html_data += "        </ul>";
  //     // html_data += '        </div>';

  //     html_data += "</div>";
  //     html_data += "</div>";
  //   }

  $("#countries_table").html(html_data);
}
