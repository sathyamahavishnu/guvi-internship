function validateForm() {
  
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
 
}
