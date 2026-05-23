function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/*切换为你生日即可 yyyymmdd*/
const myBirthDate = "2008-04-13";
document.getElementById("age").textContent = calculateAge(myBirthDate);