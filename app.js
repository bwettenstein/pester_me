document.getElementById('submit').addEventListener('click', sendEmail);

let email = '';
let subject = '';
let pester = '';
let time = 0;
let timeUnit = '';

function sendEmail() {
  getElements();
  setTimeout(() => {
    Email.send({
      SecureToken: 'b90645c0-6694-4eef-842d-c0f274cd1e8f',
      To: `${email}`,
      From: 'pleasepesterme@gmail.com',
      Subject: `${subject}`,
      Body: `<h1>${pester}</h1>`,
    })
      .then((message) => alert(message))
      .catch((error) => alert(error));
  }, calculateTime());
}

function getElements() {
  email = document.getElementById('email').value;
  pester = document.getElementById('pesteredText').value;
  subject = document.getElementById('subject').value;
  time = document.getElementById('time').value;
  if (subject == '') {
    subject = 'Pester Email';
  }
  if (email === '' || pester === '') {
    alert('Required (*) fields cannot be left empty');
  }
  if (time < 0) {
    alert('Time cannot be negative');
  } else if (time > 0) {
    timeUnit = document.querySelector('input[name="time"]:checked').value;
  }
}

function calculateTime() {
  if (timeUnit === 'minutes') {
    return time * 60 * 1000;
  } else if (timeUnit === 'hours') {
    return time * 60 * 60 * 1000;
  } else {
    return 0;
  }
}
