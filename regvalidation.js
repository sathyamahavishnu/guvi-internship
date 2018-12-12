function validateForm() {
  var x = document.getElementById("name").value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  x=document.getElementById("collegename").value;
  if (x==""){
  alert("college name must be filled");
  return false;
  }
  x=document.getElementById("degree").value;
  if(x==""){
  alert("degree must be filled");
  return false;
  }
  x=document.getElementById("registernumber").value;
  if(x==""){
  alert("register number must be filled");
  return false;
  }
  x=document.getElementById("email").value;
  if(x==""){
  alert("email must be filled");
  return false;
  }  
  x=document.getElementById("password").value;
  if(x==""){
  alert("password must be filled");
  return false;
  }
  y=document.getElementById("repeatpassword").value;
  if(x!=y){
  alert("password not matched");
  return false;
  }
 
}
