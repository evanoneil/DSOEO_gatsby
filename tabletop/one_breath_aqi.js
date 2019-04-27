  function init() {
        Tabletop.init( { key: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1anu-bDZ3lYkzJ2ScvCpRFl3Fsc1PV6P0arijHRDmOxg&output=html',
                         callback: showInfo,
                         simpleSheet: true } );
      }
      window.addEventListener('DOMContentLoaded', init)
      function showInfo(data) {
        // data comes through as a simple array since simpleSheet is turned on
        // alert("Successfully processed " + data.length + " rows!")
        document.getElementById("aqival").innerHTML = "<a href=\x22https://airnow.gov/index.cfm?action=airnow.local_city&cityid=236\x22 target=\x22blank\x22 style=\x22 color:" + [ data[0].Color].join(", ") +"\x22 > Today's Air Quality: " + [ data[0].Value].join(", ");
        console.log(data);
      }
