<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Forma pentru angajare</title>
</head>
<body>

    <div id="main_container">
        <div id="title"><h1>Formularul de inregistrare </h1></div>
        <form id="main_form" autocomplete="off" action="send_data.php" method="post">
           <div class="mini_container"><label class="info_text">Numele : <br>
            <input type="text" name="name" placeholder="Intorduceti numele" autocomplete="off" id="name"></label>
        </div>
        <div id="name_checker"><p id="name_validator"></p></div>
        <div class="mini_container">
            <label class="info_text">Prenumele : <br>
                <input type="text" name="surname" placeholder="Introduceti prenumele" id="surname" autocomplete="off"></label>
            </div> 
        <div id="surname_checker"><p id="surname_validator"></p></div>       
       <div class="mini_container">
        <label class="info_text">Email : <br>
            <input type="email" name="email" placeholder="Introduceti email-ul" id="email" autocomplete="off" d></label>
        </div>
        <div id="email_checker"><p id="email_validator"></p></div>
       <div class="mini_container">
        <label class="info_text">Telefon : <br>
            <input type="phone" name="phone" placeholder="Introduceti telefonul mobil" id="phone" autocomplete="off"> </label>
        </div>
        <div id="phone_checker"><p id="phone_validator"></p></div>
        <div class="mini_container">
            <label class="info_text">Adresa fizica : <br>
                <input type="text" name="address" placeholder="Introduceti adresa" id="address" autocomplete="off"> </label>
            </div>
            <div class="mini_container">
                <label class="info_text">Profesia : <br>
                    <select id="selectProfession" name="profession">
                        <option value="0"></option>
                        <option value="banker">banker</option>
                        <option value="butcher">butcher</option>
                        <option value="developer">developer</option>
                        <option value="filmmaked">filmmaked</option>
                        <option value="nutritionist">nutritionist</option>
                        <option value="pilot">pilot</option>
                        <option value="salesman">salesman</option>
                        <option value="translator">translator</option>
                    </select>
                </div>
        <div class="input_fields_wrap">
             </div>
             <div class="set_atr"><select class="select-element">
             <option value="facebook">Facebook</option>
             <option value="pinterest">Pinterest</option>
             <option value="instagram">Instagram</option>
             <option value="reddit">Reddit</option>
             <option value="linkedin">Linkedin</option>
             <option value="myspace">Myspace</option>
             <option value="twitter">Twitter</option>
             <option value="vk">Vk</option>
             <option value="snapchat">Snapchat</option>
             <option value="youtube">Youtube</option>
             </select>
                <input type="text" name="link" id="sc_link" class="links">
                </div>
             <div id="add_social_btn">
                <button type="button" class="btn btn-primary" id="frs_btn">Check Social Links</button>
             </div>
             <div id="add_education_btn">
                <button type="button" class="btn btn-primary" id="sc_btn">Check Education</button>
             </div>
        <div class="form_fields_wrap">
            <div class="dt" name="education_wrapper">
                    <div class="education_title">
                    <p class="education_title">Education Title</p>
                    <input type="text" placeholder="Education Title" id="ed_title_nm" name="Education_Title">
                    </div>
                    <span class="ed_title_check hide_display">Acest camp este necesar de indeplinit</span> 
                    <div class="date_info">
                    <p class="education_date_start">Graduation Date</p>    
                    <input type="date" class="date" name="graduation_date">
                    </div>
                    <span class="ed_date_check hide_display">Acest camp este necesar de indeplinit</span>
                <div class="set_education_type">
                    <p class="education_select">Education Type</p>
                    <select class="form_select" aria-label="Default select example" name="Selected_Education">
                    <option selected value="0"></option>
                    <option value="Primary education">Primary education</option>
                    <option value="Upper secondary education">Upper secondary education</option>
                    <option value="Short-cycle tertiary education">Short-cycle tertiary education</option>
                    <option value="Master or equivalent">Master's or equivalent</option>
                    <option value="Lower secondary education">Lower secondary education</option>
                    <option value="Post secondary education">Post secondary education</option>
                    <option value="Bachelor or equivalent">Bachelor's or equivalent</option>
                  </select>
                </div>
                <span class="ed_select_check hide_display">Acest camp este necesar de indeplinit</span>
                  <div class="removeBtn"><button type="button" class="btn btn-info gb">Save</button></div>
          </div>

        </div>  
        <div id="add_job_btn">
            <button type="button" class="btn btn-primary" id="th_btn">Check Job</button>
         </div>
         <div class="job_field_wrap">
            <div class="m_wrappe">
                <div class="first_part">
                <div class="set_job_name">
                    <p class="job_select">Job name</p>
                    <select class="add_job_name" id="rm${y}" name="Selected_Job">
                    <option selected value="0"></option>
                    <option value="teacher">teacher</option>
                    <option value="doctor">doctor</option>
                    <option value="police officer">police officer</option>
                    <option value="chef / cook">chef / cook</option>
                    <option value="firefighter">firefighter</option>
                    <option value="bus driver">bus driver</option>
                    <option value="scientist">scientist</option>
                    <option value="post man">post man</option>
                    <option value="vet">vet</option>
                    <option value="artist">artist</option>
                    <option value="pilot">pilot</option>
                    <option value="nurse">nurse</option>
                    <option value="baker">baker</option>
                    <option value="builder">builder</option>
                    <option value="judge">judge</option>
                    <option value="farmer">farmer</option>
                    <option value="waiter">waiter</option>
                    <option value="flight attendant">flight attendant</option>
                    <option value="maid">maid</option>
                    <option value="reporter">reporter</option>
                    <option value="professional golf player">professional golf player</option>
                    </select>
                </div>
                <span class="ed_job_check hide_display">Acest camp este necesar de indeplinit</span>
                <div class="set_start_date">
                <p class="start_date_select">Start Date</p>
                <input type="date" class="start_date" name="job_start_date">
                </div>
                <span class="job_dateStart_check hide_display">Acest camp este necesar de indeplinit</span>
                <div class="set_end_date">
                <p class="end_date_select">End Date</p>
                <input type="date" class="end_date remAft visibilitySet" name="job_end_date">
                </div>    
                <span class="job_end_check hide_display" name="end_date">Acest camp este necesar de indeplinit</span>
                    <div class="r_btn">
                    <input type="checkbox" class="chbox rico"> 
                    <label for="chboxdaw">In prezent</label>
                </div>
                <br><br>
                <div class="set_city">
                <p>City name</p>
                <select class="city_select openedCityName" aria-label="Default select example" name="Selected_City" id="city${y}">
                    <option selected value ="0"></option>
                    <option value="Chisinau">Chisinau</option>
                    <option value="Balti">Balti</option>
                    <option value="Orhei">Orhei</option>
                    <option value="Tiraspol">Tiraspol</option>
                    <option value="Soroca">Soroca</option>
                    <option value="Nisporeni">Nisporeni</option>
                    <option value="Bender">Bender</option>
                </select>
                </div>
                <span class="job_city_check hide_display">Acest camp este necesar de indeplinit</span>
              <div class="set_company_name">
                <p class="company_select">Company name</p>
                <select class="add_company_name openedCompanyName" name="Selected_Company" id="company${y}">
                    <option value="0" selected></option>
                    <option value="JSC Alimentarmash">JSC Alimentarmash</option>
                    <option value="Beekeepers">Beekeepers</option>
                    <option value="Zilant S.A">Zilant S.A</option>
                    <option value="Cuptorul Fermecat SRL">Cuptorul Fermecat SRL</option>
                    <option value="NiC OL SRL">NiC OL SRL</option>
                    <option value="Balkan Pharmaceuticals">Balkan Pharmaceuticals</option>
                    <option value="Sc Dominus Deus SRL">Sc Dominus Deus SRL</option>
                    <option value="Erlan Ltd.">Erlan Ltd.</option>
                    <option value="Abbe Virgil Media">Abbe Virgil Media</option>
                    <option value="Algora">Algora</option>
                </select>
            </div>
            <span class="company_name_check hide_display">Acest camp este necesar de indeplinit</span>
            </div>
            <div class="save_job_form"><button type="button" class="btn btn-info gn">Save</button></div>
            </div>
         </div>
         <button type="button" class="btn btn-primary" id="im_btn">Submit</button>
         <div id="check_status"><h3 id="msg_status"></h3></div>      
    </form>
    </div>

    <script src="jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    
</body>
</html>