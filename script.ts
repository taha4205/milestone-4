document.getElementById('resume-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = (document.getElementById('name') as HTMLInputElement)?.value;
  const email = (document.getElementById('email') as HTMLInputElement)?.value;
  const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
  const education = (document.getElementById('education') as HTMLInputElement)?.value;
  const experience = (document.getElementById('experience') as HTMLInputElement)?.value;
  const skills = (document.getElementById('skills') as HTMLInputElement)?.value;

  const resumeContent = `
      <h2>${name}</h2>
      <h3>Contact</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
  `;
  
  document.getElementById('resume-display')!.innerHTML = resumeContent;
  document.getElementById('resume-form')!.style.display = "none";
});
function edit(){
  document.getElementById('resume-form')!.style.display = "block"
}
