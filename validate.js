function checkSID() {
  let sid = document.getElementById("sid").value.trim();
  let regex = /^\d{10}$/; // ตรวจสอบว่ามีตัวเลข 0-9 เท่านั้น และต้องมีความยาว 10 ตัวอักษร
  return regex.test(sid); // คืนค่า true ถ้าตรงเงื่อนไข, false ถ้าไม่ตรง
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1 || candi > 10) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}