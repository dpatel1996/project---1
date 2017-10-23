

document.getElementById("form").onsubmit=function(){
  errorForm()
  }
  function errorForm(){
    alert("Application Successful");
  }
  
  function c_fname(){
    var fname = document.getElementById("f_name").value
    if(fname == null)
    {
      alert("First name is missing");
    }
    var l_name = document.getElementById("l_name").value
    if(lname == null)
    {
      alert(Last name is missing");
    }
  }
  function submitForm()
    alert("Thanks for applying. ") }