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
                            "data-key", current_medication_key);
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
                                "data-key", current_fam_hist_key);
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
                            "id", current_name_key).attr("data-key", current_name_key);
    var label_spec_name = $("<label>Name</label>").attr("for", current_name_key);
    //-------------------------------------------------------------------------------------

    //var's for creation of input/label tags for speciality--------------------------------
    var input_speciality = $("<input type='text' class='validate'>").attr(
                            "id", current_spec_key).attr("data-key", current_spec_key);
    var label_speciality = $("<label>Speciality</label>").attr("for", current_spec_key);
    //-------------------------------------------------------------------------------------

    //var's for creation of input/label tags for specialist phone--------------------------
    var input_spec_phone = $("<input type='text' class='validate'>").attr(
                            "id", current_spec_phone_key).attr("data-key", current_spec_phone_key);
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

$("#submit-button").on("click", function(event){
    event.preventDefault();
});