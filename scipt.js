 function calculateAge() {
  const day = Number(document.getElementById('day').value);
  const month = Number(document.getElementById('month').value);
  const year = Number(document.getElementById('year').value);

  const ageResult = document.getElementById('ageResult');
  const today = new Date();

  // Validate inputs
  if (
    !day || day < 1 || day > 31 ||
    !month || month < 1 || month > 12 ||
    !year || year < 1900 || year > today.getFullYear()
  ) {
    ageResult.innerText = "Please enter valid date, month, and year";
    ageResult.style.color = "red";
    return;
  }

  // Check if date is valid (e.g., no Feb 30)
  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    ageResult.innerText = "Invalid birth date";
    ageResult.style.color = "red";
    return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - year;
  let ageMonths = today.getMonth() - (month - 1);
  let ageDays = today.getDate() - day;

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  ageResult.style.color = "#003366";
  ageResult.innerText = `${ageYears} years, ${ageMonths} months, ${ageDays} days`;
}
