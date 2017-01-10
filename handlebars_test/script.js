/**
 * Created by Jeffrey on 1/6/2017.
 */
(function(){
    var patient_list = document.getElementById("patient_list");
    var patients = {
        patient_data: [
            {
                lastName: "Chou",
                firstName: "Jeffrey",
                birthdate: "12/17/1989",
                age: "27",
                medication: ["none"],
            },
            {
                lastName: "Derp",
                firstName: "Herp",
                birthdate: "01/01/2001",
                age: "16",
                medication: ["adderal", "nyquil"],
            }
        ]
    };

    Handlebars.registerHelper('list', function(items, options){
        var out = '<ul style="list-style-type:none">';

        for(var i = 0, length = items.length; i < length; i++){
            out += '<li>' + options.fn(items[i]) + '</li>';
        }

        return out + '</ul>';
    });

    var template = Handlebars.compile(document.getElementById("patient_list_template").innerHTML);

    patient_list.innerHTML = template(patients);
})();