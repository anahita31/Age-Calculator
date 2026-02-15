document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const dobInput = document.getElementById("dob").value;
  if (!dobInput) return;

  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  // Check if birthday has not occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  document.getElementById("result").innerText = `You are ${age} years old.`;
});