var config = {
    apiKey: "AIzaSyCxjZqhAWrp3vf_wanuS7_iYem_1eLattA",
    authDomain: "inpatient-8a288.firebaseapp.com",
    databaseURL: "https://inpatient-8a288.firebaseio.com",
    storageBucket: "inpatient-8a288.appspot.com",
    messagingSenderId: "607664151265"
};
firebase.initializeApp(config);

inPatientDatabase = firebase.database();

//var's to hold key count
var medication_count = 1;
var family_history_count = 1;
var specialist_count = 1;

//add medication form line
$("#add-medication-button").on("click", function(event){
    event.preventDefault();
    //var to hold created medication count/key
    var current_medication_key = "medication_" + medication_count;
    //var's to create div's and inputs with proper attributes
    var div_Row = $("<div class='row'>");
    var div_col_m6 = $("<div class='input-field col m6 offset-m3'>");
    var medication_input = $("<input type='text' class='validate'>").attr(
                            "id", current_medication_key);
    //putting all the created div's and inputs with attributes together
    var new_medication_form_line = div_Row.append(div_col_m6.append(medication_input));
    //putting to html
    $("#medication-section-holder").append(new_medication_form_line);
    //increasing counter
    medication_count++;
});

$("#add-family-history-button").on("click", function(event){
    event.preventDefault();
    //var to hold created family history count/key
    var current_fam_hist_key = "family_history_" + family_history_count;
    //var's to create div's and inputs with proper attributes
    var div_Row = $("<div class='row'>");
    var div_col_m6 = $("<div class='input-field col m6 offset-m3'>");
    var family_history_input = $("<input type='text' class='validate'>").attr(
                                "id", current_fam_hist_key);
    //putting all the created div's and inputs with attributes together
    var new_family_history_form_line = div_Row.append(div_col_m6.append(family_history_input));
    //putting to html
    $("#family-history-section-holder").append(new_family_history_form_line);
    //increasing counter
    family_history_count++;
});

$("#add-specialist-button").on("click", function(event){
    event.preventDefault();
    //var's to hold created specialist count/key's
    var current_name_key = "specialist_name_" + specialist_count;
    var current_spec_key = "speciality_" + specialist_count;
    var current_spec_phone_key = "specialist_phone_" + specialist_count;
    //var's to create div's and inputs with proper attributes
    var div_Row = $("<div class='row'>");
    var div_col_m6 = $("<div class='input-field col m6'>");
    var col_m3_specialty = $("<div class='input-field col m3'>");
    var col_m3_phone = $("<div class='input-field col m3'>");

    //var's for creation of input/label tags for specialist name---------------------------
    var input_spec_name = $("<input type='text' class='validate'>").attr(
                            "id", current_name_key);
    var label_spec_name = $("<label>Name</label>").attr("for", current_name_key);
    //-------------------------------------------------------------------------------------

    //var's for creation of input/label tags for speciality--------------------------------
    var input_speciality = $("<input type='text' class='validate'>").attr(
                            "id", current_spec_key);
    var label_speciality = $("<label>Speciality</label>").attr("for", current_spec_key);
    //-------------------------------------------------------------------------------------

    //var's for creation of input/label tags for specialist phone--------------------------
    var input_spec_phone = $("<input type='text' class='validate'>").attr(
                            "id", current_spec_phone_key);
    var label_spec_phone = $("<label>Phone</label>").attr("for", current_spec_phone_key);
    //-------------------------------------------------------------------------------------

    //putting all the created div's and inputs with attributes together
    var new_name = div_col_m6.append(input_spec_name).append(label_spec_name);
    var new_speciality = col_m3_specialty.append(input_speciality).append(label_speciality);
    var new_phone = col_m3_phone.append(input_spec_phone).append(label_spec_phone);

    //completed form line's for new specialist
    var completed_spec_line = div_Row.append(new_name).append(new_speciality).append(new_phone);
    //putting to html
    $("#specialist-section-holder").append(completed_spec_line);
    //increase counter
    specialist_count++;
});

//var's to hold info from form
var first_name = "";
var last_name = "";
var phone = "";
var DOB = "";
var age = "";
var gender = "";
var street = "";
var city = "";
var state = "";
var zip = "";
var emergency_contact = "";
var emergency_contact_phone = "";

$("#submit-button").on("click", function(event){
    event.preventDefault();
    console.log(medication_count-1);
    console.log(family_history_count-1);
    console.log(specialist_count-1);

    first_name = $("#first_name").val().trim();
    console.log(first_name);
    last_name = $("#last_name").val().trim();
    console.log(last_name);
    phone = $("#phone_number").val().trim();
    DOB = $("#DOB").val().trim();
    age = $("#age").val().trim();
    gender = $("#gender").val().trim();
    street = $("#street").val().trim();
    city = $("#city").val().trim();
    state = $("#state").val().trim();
    zip = $("#zip").val().trim();
    emergency_contact = $("#emergency_contact").val().trim();
    emergency_contact_phone = $("#emergency_contact_phone").val().trim();

    for (var m = 0; m < medication_count; m++) {
        var med_ID = "medication_" + m;
        $("#" + med_ID).val().trim();
        console.log($("#" + med_ID).val());
    }

    for (var f = 0; f < family_history_count; f++) {
        var fam_hist_ID = "family_history_" + f;
        $("#" + fam_hist_ID).val().trim();
        console.log($("#" + fam_hist_ID).val());
    }

    for (var s = 0; s < specialist_count; s++) {
        var spec_name_ID = "specialist_name_" + s;
        var speciality_ID = "speciality_" + s;
        var spec_phone_ID = "specialist_phone_" + s;

        var name = $("#" + spec_name_ID).val().trim();
        var speciality =  $("#" + speciality_ID).val().trim();
        var specialist_phone = $("#" + spec_phone_ID).val().trim();

        inPatientDatabase.ref().push({
            spec_name_ID: name,
            speciality_ID: speciality,
            spec_phone_ID: specialist_phone
        });

        //
        // console.log("here " + specialist.spec_name_ID);
        // console.log("here " + specialist.speciality_ID);
        // console.log("here " + specialist.spec_phone_ID);
        //
        // console.log($("#" + spec_name_ID).val());
        // console.log($("#" + speciality_ID).val());
        // console.log($("#" + spec_phone_ID).val());
    }
});