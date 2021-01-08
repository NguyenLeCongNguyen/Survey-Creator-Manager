
Survey
.StylesManager
.applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
function changeBackground(color) {
    document.body.style.background = color;
}
var json = {
"pages": [
    {
        "name": "page1",
        "title": "Survey everyone's favorite React tools.",
        "elements": [
            {
                "type": "matrixdynamic",
                "minRowCount": 1,
                "rowCount": 1,
                "name": "employer_names",
                "valueName": "employers",
                "isRequired": true,
                "title": "Please enter your information",
                "addRowText": "Add another name",
                "columns": [
                    {
                        "name": "name",
                        "isRequired": true,
                        "title": "What's your name?",
                        "cellType": "text"
                    },

                    {
                        "name": "age",
                        "isRequired": true,
                        "title": "Age",
                        "cellType": "text"
                    },

                    {
                        "name": "address",
                        "isRequired": true,
                        "title": "Address",
                        "cellType": "text",
                    },

                ]
            },

            {
                "type": "panel",
                "name": "employer_gender",
                "title": "Gender",
                "elements": [
                    {
                        "type": "radiogroup",
                        "choices": [
                            "Male", "FeMale"
                        ],
                        "name": "gender",
                        "title": "Gender",
                        "valueName": "gender"
                    }
                ]
            },
            
            {
                "type": "text",
                "name": "employer_phone",
                "valueName": "phone",
                "title": "Phone number:"
            }, 
            
            {
                "type": "text",
                "name": "employer_email",
                "valueName": "email",
                "title": "Email"
            },

        ]
        
    }, 
    
    {
        "name": "page2",
        "title": "Favorites survey about React tools",
        "elements": [
            {
                "type": "paneldynamic",
                "renderMode": "list",
                "allowAddPanel": false,
                "allowRemovePanel": false,
                "name": "arrray_employer_info",
                "title": "People’s favorite React tools.",
                "valueName": "employers",
                "templateTitle": "Hello {panel.name} ",
                
                

                "templateElements": [
                    {
                        "type": "panel",
                    }, 

                    {
                        "type": "panel",
                        "name": "panel_language",
                        "title": "In what language are you designing your website?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Html/Css/Js", "PHP", "C#", "JAVA","ASP.NET"
                                ],
                                "name": "language",
                                "title": "Question 1",
                                "valueName": "language"
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_programming",
                        "title": "What tools do you usually use for Web design and programming?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Bootstrap", "jQuery", "React", "Redux","Sass"
                                ],
                                "name": "programming",
                                "title": "Question 2",
                                "valueName": "programming"
                            }
                        ]
                    },
                    
                    

                    {
                        "type": "panel",
                        "name": "panel_employer_hours_work",
                        "title": "How long have you been studying the Web?",
                        "elements": [
                            {
                                "type": "text",
                                "inputType": "number",
                                "name": "number of views",
                                "valueName": "number of views",
                                "title": "Times:"
                            }, {
                                "type": "dropdown",
                                "name": "member_hours_worked_frequency",
                                "title": "Frequency:",
                                "valueName": "hours_worked_frequency",
                                "startWithNewLine": false,
                                "defaultValue": "Year",
                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                            }
                        ]
                    }, 

                    {
                        "type": "panel",
                        "name": "panel_favorite",
                        "title": "What do you think everyone's favorite React tool right now?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Webpack-Bundle-Analyzer", "Highlight Updates", "React-Testing-Library", "React Developers Tools","CodeSandbox","React Starter Projects"
                                ],
                                "name": "favorite",
                                "title": "Question 3",
                                "valueName": "favorite"
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_support",
                        "title": "How did the React tools above help you?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Speed and flexible", 
                                    "Gives the feeling of making the unit test very smooth.", 
                                    "Make your React faster in a flash.", 
                                    "Learn quickly and have many good choices",
                                    "Helps you improve project performance, but it also helps you understand how React works."
                                ],
                                "name": "support",
                                "title": "Question 4",
                                "valueName": "support"
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_advantages",
                        "title": "What are the advantages of React tools?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Know which files are taking up a lot of space in the application.", 
                                    "Gives the feeling of making the unit test very smooth.", 
                                    "Make your React faster in a flash.", 
                                    "Learn quickly and have many good choices",
                                    "Helps you improve project performance, but it also helps you understand how React works."
                                ],
                                "name": "advantages",
                                "title": "Question 5",
                                "valueName": "advantages"
                            }
                        ]
                    },
                    
                    {
                        "type": "panel",
                        "name": "panel_choice",
                        "title": "Why is react tool the best choice for your project?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Very easy to learn", "Help build rich user interface", "Allows to write custom elements", "Help improve developer productivity","Provides quick rendering"
                                ],
                                "name": "choice",
                                "title": "Question 6",
                                "valueName": "choice"
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_downsides",
                        "title": "What are the downsides of React tools?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Poor performance", 
                                    "Security is not really good", 
                                    "Customization is not really good in some modules", 
                                    "Not suitable for applications requiring high computing power",
                                    "There is still a lot of missing components view for Android devices"
                                ],
                                "name": "downsides ",
                                "title": "Question 7",
                                "valueName": "downsides "
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_improve",
                        "title": "In your opinion what should be improved about the React tools?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "Using useMemo, useCallback hooks in a functional component", 
                                    "Virtualize Long Lists", 
                                    "Using VirtualizedList, FlatList, and SectionList for large datasets makes React Native speed optimized", 
                                    "Use Perf monitor to monitor FPS",
                                    "Bind as soon as possible and don't create functions inside the render function"
                                ],
                                "name": "improve ",
                                "title": "Question 8",
                                "valueName": "improve "
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_employer_income",
                        "title": "What income do you receive?",
                        "elements": [
                            {
                                "type": "text",
                                "inputType": "number",
                                "name": "employer_income",
                                "valueName": "income",
                                "title": "Income:"
                            }, {
                                "type": "dropdown",
                                "name": "employer_income_frequency",
                                "title": "Income Frequency",
                                "valueName": "income_frequency",
                                "startWithNewLine": false,
                                "defaultValue": "Year",
                                "choices": ["Day", "Week", "Fortnight", "Month", "Year"]
                            }
                        ]
                    },

                    {
                        "type": "panel",
                        "name": "panel_point",
                        "title": "On a 5 to 10 scale, how would you rate this survey at random?",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "choices": [
                                    "7", "9", "10", "6","5","8"
                                ],
                                "name": "point",
                                "title": "Question 9",
                                "valueName": "point"
                            }
                        ]
                    },

                ]
            }
        ]
    }
],
"showQuestionNumbers": "off"
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (result) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result:\n" + JSON.stringify(result.data, null, 3);
});

$("#surveyElement").Survey({model: survey});