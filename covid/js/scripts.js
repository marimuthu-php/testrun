$(document).ready(function(){
    $("#testing-centers").click(function(){
        $(this).parent().hide();
        $("#testing-data").css("display","block");
        $("#goback").css("display","block");
    })
    $("#helpline-numbers").click(function(){
        $(this).parent().hide();
        $("#helpline-data").css("display","block");
        $("#goback").css("display","block");
    })
    $("#symptom-checker").click(function(){
        $(this).parent().hide();
        $("#tab-content").show();
        $("#symptom-data").css("display","block");
        $("#goback").css("display","block");
    })
    $("#goback").click(function(){
        $(".main-tabs").show();
        $("#symptom-data").css("display","none");
        $("#helpline-data").css("display","none");
        $("#testing-data").css("display","none");

    })
})

var json = {
    title: " ",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: false,
    pages: [
        {
            questions: [
                {
                type: "radiogroup",
                title: 'For whom are you taking this test?',
                choices: ['For yourself', 'Parent', 'Spouse', 'Child', 'Someone else']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'What is your gender?',
                choices: ['Male', 'Female', 'Other']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'What is your age-group?',
                choices: ['Less than 12 years', '12 - 50 years', '51 - 60 years', 'Above 60 years']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have any of these health conditions?',
                choices: ['Asthma', 'Chronic lung disease (COPD)', 'Diabetes', 'Heart Diseases', 'Immuno-compromised conditions', 'Pregnancy', 'None of the above']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Have you or someone in your family visited any of the below countries in the last 14 days?',
                choices: ['China','Italy','Spain','Iran','Europe','Middle East','Southeast Asia','Country not listed above','None of the above']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Have you or someone in your family travelled within India in public transport and came in close contact with someone with cough, cold, fever and shortness of breath in the last 14 days?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Have you or someone in your family come in close contact with a confirmed COVID-19 patient in the last 14 days?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have fever?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have headache?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have cough?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have a cold?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have sore throat?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you feel shortness of breath?',
                choices: ['Yes', 'No']
                }
            ]
        }, {
            questions: [
                {
                type: "radiogroup",
                title: 'Do you have coarseness in voice?',
                choices: ['Yes', 'No']
                }
            ]
        }
    ],
    completedHtml: "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>"
};

// if({ "question4": "Pregnancy", "question5": "Country not listed above", "question6": "No", "question7": "No", "question8": "No", "question9": "No", "question10": "No", "question11": "No", "question12": "No", "question13": "No", "question14": "No" })

window.survey = new Survey.Model(json);
var high = 0;
var low = 0;
var dataarr = []
survey.onComplete
    .add(function (result) {
        // document
        //     .querySelector('#surveyResult')
            // .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
                        forEach(result.data, function (value, index) {
                                console.log("Question:"+index+" Answer: " + value); // A, B, C, D
                                dataarr.push(value)
                        });
                        console.log(dataarr);
                        $('#surveyResult').css("display", "block");
                        var txt2 = document.getElementById("red-text");
                    
                        if((dataarr[3] == 'Asthma' || 'Chronic lung disease (COPD)' || 'Diabetes' || 'Heart Diseases' || 'Immuno-compromised conditions' || 'Pregnancy') || (dataarr[4] == 'China' || 'Italy' || 'Spain' || 'Iran' || 'Europe' || 'Middle East' || 'Southeast Asia' || 'Country not listed above') || (dataarr[5] == 'yes') || (dataarr[6] == 'yes') || (dataarr[7] == 'yes') || (dataarr[8] == 'yes') || (dataarr[9] == 'yes') || (dataarr[10] == 'yes') || (dataarr[11] == 'yes') || (dataarr[12] == 'yes') || (dataarr[13] == 'yes')) {
                            txt2.write = 'High Risk (Without Symptoms)';
                        } else  {
                            txt2.write = 'Low Risk';
                        }
    });
	
var forEach = function (collection, callback, scope) {
	if (Object.prototype.toString.call(collection) === '[object Object]') {
		for (var prop in collection) {
			if (Object.prototype.hasOwnProperty.call(collection, prop)) {
				callback.call(scope, collection[prop], prop, collection);
			}
		}
	} else {
		for (var i = 0, len = collection.length; i < len; i++) {
			callback.call(scope, collection[i], i, collection);
		}
	}
};
$("#surveyElement").Survey({model: survey});