
function validateTitle(value) {
    return (value.length >=3 && value.length <= 16);
   }
  
   function showError(value) {
      value.removeClass("hide_display");
      value.addClass("show_display");
   }
  
   function showValidity(value) {
      value.removeClass("show_display");
      value.addClass("hide_display");
   }
  
   function previousInputAreValid() {
       let flag = true;
       $('#ed_title_nm').each(function() {
           if (!validateTitle($(this).val())) {
               flag = false;
               $(this).addClass('red_bottom');
               showError($(".ed_title_check"));
           } else {
               $(this).removeClass('red_bottom')
               showValidity($(".ed_title_check"));
           }
       });
       return flag;
   }
  
   function checkSelectedEducation(value) {
       return (value == 0);
   }
  
   function checkPrevSelect() {
     let flag = true;
     $(".form_select").each(function() {
       if(checkSelectedEducation($(this).val())) {
         flag = false;
         $(this).addClass('red_bottom');
         showError($(".ed_select_check"));
       } else {
         $(this).removeClass('red_bottom');
         showValidity($(".ed_select_check"));
       }
     })
  
     return flag;
   }
  
   function previousDateAreValid() {
       let check = true;
       $('.date').each(function() {
           if ($(this).val() == false) {
               check = false;
               $(this).addClass('red_bottom');
               showError($(".ed_date_check"));
           } else {
               $(this).removeClass('red_bottom')
               showValidity($(".ed_date_check"));
           }
       });
       return check;
   }
  
    function previousEducationValid() {
      let inputValid = previousInputAreValid();
      let dateValid = previousDateAreValid();
      let selectValid = checkPrevSelect();
  
      return (inputValid && dateValid && selectValid);
    }
   
  $(document).ready(function() {
      let wrapper         = $(".form_fields_wrap");
      let add_button      = $("#sc_btn");
  
  
      function addEducation() {
          if (previousEducationValid()) {
              $(wrapper).append(buildEducationForm());
          }
      }
     
  
     $(add_button).click(function(e){
       
          e.preventDefault();
          addEducation();
          if($(".dt").hasClass("toRemove")) {
            $(".toRemove span").remove();
          }
         
      });
  
      $(wrapper).on("click",".gb", function(e){ 
  
          if(previousEducationValid()) {
             $(".date_info").addClass("hide_display");
             $(".set_education_type").addClass("hide_display");
             $(".removeBtn").addClass("hide_display");
            // $("#ed_title_nm").attr("disabled","true");
             $(".remove_field_sc").addClass("hide_display");
             $(".dt").addClass("toRemove");
          } else {
           // $("#ed_title_nm").removeAttr("disabled");
          }
  
          if(!previousInputAreValid()) {
              showError($(".ed_title_check"));
          } else {
              showValidity($(".ed_title_check"));
          }
  
          if(!previousDateAreValid()) {
              showError($(".ed_date_check"));
          }else {
              showValidity($(".ed_date_check"));
          }
  
          if(!checkPrevSelect()) {
            showError($(".ed_select_check"));
          } else {
            showValidity($(".ed_select_check"));
          }
  
      });
      
  });
  
  
     function validateDate(value) {
          return value;
      }
  
  
      function previousDateAreValidJob() {
          let flag = true;
          $('input[name=job_start_date]').each(function() {
              if (!validateDate($(this).val())) {
                  flag = false;
                  $(this).addClass('red_bottom');
                  showError($(".job_dateStart_check"));
              } else {
                  $(this).removeClass('red_bottom')
                  showValidity($(".job_dateStart_check"));
              }
          });
      
          return flag;
      }
  
      function previousEndDateAreValid() {
        let flag = true;
        $('.remAft').each(function() {
            if ($(this).val() == false) {
                flag = false;
                $(this).addClass('red_bottom');
                showError($(".job_end_check"));
            } else {
                $(this).removeClass('red_bottom');
                showValidity($(".job_end_check"));
            }
        });
    
        return flag;
    }
  
  
    function checkSelectedJob(value) {
      if(value == "0") {
        return true;
        }
        return false;
    }
  
    function checkSelectedCompany(value) {
      return (value != 0);
    }
  
    function checkPrevSelectJob() {
      let flag = true;
      $(".add_job_name").each(function() {
        if(checkSelectedJob($(this).val())) {
          flag = false;
          $(this).addClass('red_bottom');
          showError($(".ed_job_check"));
        } else {
          $(this).removeClass('red_bottom');
          showValidity($(".ed_job_check"));
        }
      })
  
      return flag;
    }
  
    function checkPrevCity() {
      let flag = true;
      $(".city_select").each(function() {
        if(checkSelectedJob($(this).val())) {
          flag = false;
          $(this).addClass('red_bottom');
          showError($(".job_city_check"));
        } else {
          $(this).removeClass('red_bottom');
          showValidity($(".job_city_check"));
        }
      })
  
      return flag;
    }
  
    function checkPrevCompany() {
      let flag = true;
      $(".add_company_name").each(function() {
        if(!checkSelectedCompany($(this).val())) {
          flag = false;
          $(this).addClass('red_bottom');
          showError($(".company_name_check"));
        } else {
          $(this).removeClass('red_bottom');
          showValidity($(".company_name_check"));
        }
      })
  
      return flag;
    }
  
    let y = 0;
  
    $(document).ready(function() {
      var wrapper         = $(".job_field_wrap");
      var add_button      = $("#th_btn"); 
    
       $(add_button).click(function(e){
        e.preventDefault();
            if($(".first_part").hasClass("toRemove")) {
              $(".toRemove span").remove();
            }
       });
    
  
        $(wrapper).on("click",".gn", function(){ 
          if(previousDateAreValidJob() && checkPrevSelectJob() && checkPrevCompany() && (previousEndDateAreValid() || $(".rico").is(":checked"))) {
            $(".start_date_select").addClass("hide_display");
            $(".start_date").addClass("hide_display");
            $(".end_date_select").addClass("hide_display");
            $(".visibilitySet").addClass("hide_display");
            $(".r_btn").addClass("hide_display");
            $(".set_city").addClass("hide_display");
            $(".set_company_name").addClass("hide_display");
            //$(".add_job_name").attr("disabled","true");
            $(".remove_field_sc").addClass("hide_display");
            $(".save_job_form").addClass("hide_display");
            $(".rmbBtn").addClass("hide_display");
            $(".first_part").addClass("toRemove");
            $(".end_date").removeClass("remAft");
            $(".chbox").removeClass("rico");
            y++;
    
          }else {
            //$(".add_job_name").removeAttr("disabled");
          }
    
            if(!checkPrevSelectJob()) {
              showError($(".ed_job_check"));
          } else {
              showValidity($(".ed_job_check"));
          }
    
          if(!previousDateAreValidJob()) {
              showError($(".job_dateStart_check"));
          }else {
              showValidity($(".job_dateStart_check"));
          }
    
          if(!checkPrevCompany()) {
            showError($(".company_name_check"));
          } else {
            showValidity($(".company_name_check"));
          }
    
          if(!checkPrevCity()) {
            showError($(".job_city_check"));
          } else {
            showValidity($(".job_city_check"));
          }
    
          if(!$(".rico").is(":checked")) {
            if(!previousEndDateAreValid()) {
              showError($(".job_end_check"));
            } else {
              showValidity($(".job_end_check"));
            }
          } else {
            $(".remAft").addClass("hide_display");
            showValidity($(".job_end_check"));
          }
        });
    
        $(wrapper).on("click",".rico", function(){ 
          if($(this).is(":checked")) {
            $(".remAft").val("2014-02-09");
            $(".remAft").addClass("hide_display");
            showValidity($(".job_end_check"));
          } else {
           $(".remAft").val("");
           $(".remAft").removeClass("hide_display");
           showValidity($(".job_end_check"));
          }
          });
    
      
    });
  
  function validateName() {
      return ($("#name").val().length >=3 && $("#name").val().length <= 16);    
  }
  
  function validateSurname() {
      return ($("#surname").val().length >=3 && $("#surname").val().length <= 16);
  }
  
  function validateEmail() {
      let sign = $("#email").val().indexOf("@");
  
      if(sign < 1) {
          return false;
      }
  
      let dot = $("#email").val().lastIndexOf(".");
  
      if(dot <= sign + 2) {
          return false;
      }
  
      if(dot ===  $("#email").val().length - 1) {
          return false;
      }
  
      return true;
  }
  
  function validatePhone() {
   return ($("#phone").val().charAt(0) == "0" && $("#phone").val().length == 9);   
  }
  
  function validatePhoneplus() {
      return ($("#phone").val().charAt(0) == "+" && $("#phone").val().charAt(1) == "3" &&
       $("#phone").val().charAt(2) == "7" && $("#phone").val().charAt(3) == "3" && 
       $("#phone").val().length == 12);
  }
  
  function setBottomColor(value) {
    value.removeClass("red_bottom");
    value.addClass("green_bottom");
  }
  
  function invSetBottomColor(value) {
    value.removeClass("green_bottom");
    value.addClass("red_bottom");
  }
  
  function invRsColor(value) {
    value.removeClass("set_color_green");
    value.addClass("set_color_red");
  }
  
  function rsColor(value) {
    value.removeClass("set_color_red");
    value.addClass("set_color_green");
  }
  
  $(document).ready(function(){
      $("#name").keyup(function(){
        if (validateName())  {
          setBottomColor($("#name"));
          $("#name_validator").text("Nume valid");
          rsColor($("#name_validator"));
      } else {
          invSetBottomColor($("#name"));
          $("#name_validator").text("Acest câmp este necesar de îndeplinit (trebuie sa conțină între 3 și 16 caractere)");
          invRsColor($("#name_validator"));
      }
      });
  
      $("#surname").keyup(function(){
          if (validateSurname()) {
              setBottomColor($("#surname"));
              $("#surname_validator").text("Prenume valid");
              rsColor($("#surname_validator"));
          } else {
              invSetBottomColor($("#surname"));
              $("#surname_validator").text("Acest câmp este necesar de îndeplinit (trebuie sa conțină între 3 și 16 caractere)");
              invRsColor($("#surname_validator"));
          }
      });
  
      $("#email").keyup(function(){
          if(validateEmail()){
              setBottomColor($("#email"));
              $("#email_validator").text("Adresa de email este valida");
              rsColor($("#email_validator"));
          }else{
              invSetBottomColor($("#email"));
              $("#email_validator").text("Email-ul este formatat greșit");
              invRsColor($("#email_validator"));
          }
  
      });
  
      $("#phone").keyup(function(){
          if (validatePhone() || validatePhoneplus()) {
              setBottomColor($("#phone"));
              $("#phone_validator").text("Telefon valid");
              rsColor($("#phone_validator"));
          } else {
              invSetBottomColor($("#phone"));
              $("#phone_validator").text("Numărul de telefon este formatat greșit sau aparține unei țări străine");
              invRsColor($("#phone_validator"));
          }
      });
  
  });
   
  
    let protocol = "https://";
    let facebook ="www.facebook.com/";
    let reddit = "www.reddit.com/";
    let youtube = "www.youtube.com/";
    let snapchat = "www.snapchat.com/";
    let instagram = "www.instagram.com/";
    let vk = "www.vk.com/";
    let myspace = "www.myspace.com/";
    let linkedin = "www.linkedin.com/";
    let pinterest = "www.pinterest.com/";
  
  
    function validateProtocol(str)
    {	 if (str.indexOf("https://") == 0)  {
           return true;
        } else {
           return false;
        }
    }
    
    function validateURL(str)
    {		if (str.indexOf(facebook) == 8)  {
           return true;
        } else if(str.indexOf(reddit) == 8){
           return true;
        }else if(str.indexOf(youtube) == 8) {
          return true;
        } else if(str.indexOf(snapchat) == 8) {
          return true;
        }else if(str.indexOf(instagram) == 8) {
            return true;
        } else if(str.indexOf(vk) == 8) {
          return true;
        } else if(str.indexOf(myspace) == 8) {
        return true;
        } else if(str.indexOf(linkedin) == 8) {
        return true;
        } else if(str.indexOf(pinterest) == 8) {
        return true;
        } else {
        return false;
        }
    }
    
    function validateValue(value) {
      if(validateProtocol(value) && validateURL(value)) {
      return true;
      } else {
      return false;
      }
    }
  
  function previousRowsAreValid() {
    let flag = true;
    $('input[name=link]').each(function() {
        if (!validateValue($(this).val())) {
            flag = false;
            $(this).addClass('invalid');
        } else {
            $(this).removeClass('invalid')
        }
    });
    return flag;
  }
  
  
  $(document).ready(function() {
      let wrapper         = $(".input_fields_wrap");
      let add_button      = $("#frs_btn");
  
      initIcons();
  
     $(add_button).click(function(e){
              e.preventDefault();
              previousRowsAreValid();
  
      });
      
      $(".links").keyup(function() {
        previousRowsAreValid();
      })
  
      $(wrapper).on("click",".remove_field", function(e){
          e.preventDefault(); 
          $(this).parent('div').remove(); 
      })
  
       function capitalCase(str) {
          return str[0].toUpperCase() + str.substring(1);
      }
  
      function initIcons() {
          const icons = [
              'facebook',
              'pinterest',
              'instagram',
              'reddit',
              'linkedin',
              'myspace',
              'twitter',
              'vk',
              'snapchat',
              'youtube'
          ];
          $('select[name=title-icon]').each(function() {
              if (!$(this).html()) {
                  icons.forEach(icon => {
                      $(this).append(
                          `<option value="${icon}">${capitalCase(icon)}</option>`
                      );
                  });
              }
          });
      }
  });

  function send() {
      $('form').submit();
  }

  
  $("#im_btn").on("click",()=> {
    $("#msg_status").removeClass("final_message_color");
    if($(".set_atr").html() || $(".dt").html() || $(".m_wrappe").html()) {
      $("#msg_status").text();
      if(validateName() && validateSurname() && validateEmail() && (validatePhone() || validatePhoneplus()) && 
      previousEducationValid() && previousDateAreValidJob() && checkPrevSelectJob() && checkPrevCompany() && (previousEndDateAreValid() || $("#chB"+y).is(":checked")) && previousRowsAreValid()){
        $("#msg_status").text("");
        $("#msg_status").addClass("final_message_color");;
        send();
      }else {
        $("#msg_status").text("Nu toate campurile au fost validate");
      }
    } else {
      $("#msg_status").text("Trebuie de adăugat cel puțin un element [link, education sau job]")
    }
  
      if (validateName())  {
        setBottomColor($("#name"));
        $("#name_validator").text("Nume valid");
        rsColor($("#name_validator"));
    } else {
        invSetBottomColor($("#name"));
        $("#name_validator").text("Acest câmp este necesar de îndeplinit (trebuie sa conțină între 3 și 16 caractere)");
        invRsColor($("#name_validator"));
    }
  
    if (validateSurname()) {
      setBottomColor($("#surname"));
      $("#surname_validator").text("Prenume valid");
      rsColor($("#surname_validator"));
    } else {
      invSetBottomColor($("#surname"));
      $("#surname_validator").text("Acest câmp este necesar de îndeplinit (trebuie sa conțină între 3 și 16 caractere)");
      invRsColor($("#surname_validator"));
    }
  
    if(validateEmail()){
      setBottomColor($("#email"));
      $("#email_validator").text("Adresa de email este valida");
      rsColor($("#email_validator"));
    }else{
      invSetBottomColor($("#email"));
      $("#email_validator").text("Email-ul este formatat greșit");
      invRsColor($("#email_validator"));
    }
  
    if (validatePhone() || validatePhoneplus()) {
      setBottomColor($("#phone"));
      $("#phone_validator").text("Telefon valid");
      rsColor($("#phone_validator"));
    } else {
      invSetBottomColor($("#phone"));
      $("#phone_validator").text("Numărul de telefon este formatat greșit sau aparține unei țări străine");
      invRsColor($("#phone_validator"));
    }
  
      if(!previousInputAreValid()) {
        $(".ed_title_check").removeClass("hide_display");
        $(".ed_title_check").addClass("show_display");
    } else {
        $(".ed_title_check").removeClass("show_display");
        $(".ed_title_check").addClass("hide_display");
    }
  
    if(!previousDateAreValid()) {
        $(".ed_date_check").removeClass("hide_display");
        $(".ed_date_check").addClass("show_display");
    }else {
        $(".ed_date_check").removeClass("show_display");
        $(".ed_date_check").addClass("hide_display");
    }
  
    if(!checkPrevSelect()) {
      $(".ed_select_check").removeClass("hide_display");
      $(".ed_select_check").addClass("show_display");
    } else {
      $(".ed_select_check").removeClass("show_display");
      $(".ed_select_check").addClass("hide_display");
    }
  
    if(!checkPrevSelectJob()) {
      $(".ed_job_check").removeClass("hide_display");
      $(".ed_job_check").addClass("show_display");
  } else {
      $(".ed_job_check").removeClass("show_display");
      $(".ed_job_check").addClass("hide_display");
  }
  
    if(!previousDateAreValidJob()) {
        $(".job_dateStart_check").removeClass("hide_display");
        $(".job_dateStart_check").addClass("show_display");
    }else {
        $(".job_dateStart_check").removeClass("show_display");
        $(".job_dateStart_check").addClass("hide_display");
    }
  
    if(!checkPrevCompany()) {
      $(".company_name_check").removeClass("hide_display");
      $(".company_name_check").addClass("show_display");
    } else {
      $(".company_name_check").removeClass("show_display");
      $(".company_name_check").addClass("hide_display");
    }
  
    if(!checkPrevCity()) {
      $(".job_city_check").removeClass("hide_display");
      $(".job_city_check").addClass("show_display");
    } else {
      $(".job_city_check").addClass("hide_display");
      $(".job_city_check").removeClass("show_display");
    }
  
    if(!$(".rico").is(":checked")) {
      if(!previousEndDateAreValid()) {
        $(".job_end_check").removeClass("hide_display");
        $(".job_end_check").addClass("show_display");
      } else {
        $(".job_end_check").addClass("hide_display");
        $(".job_end_check").removeClass("show_display");
      }
    } else {
      $(".remAft").addClass("hide_display");
      $(".job_end_check").removeClass("show_display");
      $(".job_end_check").addClass("hide_display");
    }
  
    previousRowsAreValid();
  })
  
  