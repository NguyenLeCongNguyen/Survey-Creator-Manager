
//Global:
$(document).ready(function() {

  var survey = []; //Bidimensional array: [ [1,3], [2,4] ]
  //Switcher function:
  $(".rb-tab").click(function(){
    
    //Spot switcher:
    $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
    $(this).addClass("rb-tab-active");
  });
  
  //Save data:
  $(".trigger").click(function(){
    var a = $("input[name='name']").val();
    var b = $("input[name='email']").val();
    var c = $("input[name='comment']").val();
    //Empty array:
    survey = [];
    //Push data:
    for (i=1; i<=$(".rb").length; i++) {
      var rb = "rb" + i;
      var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
      
      //Bidimensional array push:
      survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
    };
    //Debug:
    debug(a,b,c);
  });
  
  //Debug:
  function debug(a,b,c){
    var debug = "";
    for (i=0; i<survey.length; i++) {
      
      if (survey[i][0] == 1) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "I'm not 18 yet" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "18 years old ~ 25 years old" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "26 years old ~ 45 years old" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "Over 45 years old" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Other" + "\n";
        }
      }
      
      if (survey[i][0] == 2) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "Male" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "Female" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "LGBT" + "\n";
        }
      }

      if (survey[i][0] == 3) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "1" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "7" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "8" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "2" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "3" + "\n";
        }
      }
      
      if (survey[i][0] == 4) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "Alone" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "Colleagues" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "Boy friend/Girl friend" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "Friends" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Wife/Husband" + "\n";
        }
      }

      if (survey[i][0] == 5) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "15$" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "10$" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "2.5$" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "7$" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "5$" + "\n";
        }
      }

      if (survey[i][0] == 6) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "1 time / day" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "2 ~ 3 times / day" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "4 ~ 5 times / month" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "Less than 10 times / month" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Other" + "\n";
        }
      }

      if (survey[i][0] == 7) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "CGV VinCom Cinema" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "Lotte Cinema" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "Galaxy Cinema" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "StarLight Cinema" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Metiz Cinema" + "\n";
        }
      }

      if (survey[i][0] == 8) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "Cheap" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "Comfortable seats" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "Branded cinema" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "Quality" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Others" + "\n";
        }
      }

      if (survey[i][0] == 9) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "The student" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "Student" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "Working" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "Unemployment" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "Other" + "\n";
        }
      }

      if (survey[i][0] == 10) {
        if (survey[i][1] == 1) {
          debug += "Nº" + survey[i][0] + " : " + "7" + "\n";
        } else if (survey[i][1] == 2) {
          debug += "Nº" + survey[i][0] + " : " + "9" + "\n";
        } else if (survey[i][1] == 3) {
          debug += "Nº" + survey[i][0] + " : " + "10" + "\n";
        } else if (survey[i][1] == 4) {
          debug += "Nº" + survey[i][0] + " : " + "6" + "\n";
        } else if (survey[i][1] == 5) {
          debug += "Nº" + survey[i][0] + " : " + "5" + "\n";
        }
      }

    };
    
    alert("Name: " + a + "\n" + "Email : " + b + "\n"  + debug + "Suggestion: " + c + "\n");
  };
  });
  