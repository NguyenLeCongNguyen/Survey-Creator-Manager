
const projectName = 'survey-form';
function getInputElements()
{
  var myForm = document.getElementById("survey-form"); 
  var completeText = "This is what you filled in. \n"
  
  for(var i = 0; i < myForm.elements.length; i++)
  {
      completeText = completeText + " " + myForm.elements[i].name + "" +       myForm.elements[i].value + " \n"

  }; 

    window.alert(completeText);

}; 



  