// const spanish = `
//   <div id="spanish">
//     <p>This is the Spanish.</p>
//   </div>
// `;

// const french = `
//   <div id="french">
//     <p>This is the French.</p>
//   </div>
// `;

// function displayHTML(lang) {
//   console.log(lang);
//   if (lang === 'spanish') {
//     console.log(spanish);
//   } else if (lang === 'french') {
//     console.log(french);
//   } else {
//     console.log('wherps, where is the language?');
//   }
// }

// function handleChange(event) {
//   // console.log(event.target.value);
//   const lang = event.target.value;
//   displayHTML(lang);
// }

// const pickingLanguage = document.querySelector('#language-list').addEventListener('change', handleChange);


const pickingLanguage = document.querySelector('#language-list').addEventListener('change', (event) => {
  const lang = event.target.value;
  if (lang === 'spanish') {
    console.log('here is the spanish');
  } else {
    console.log('i do not have that lang');
  };
});


// const myHTML = {//buncha HTML up in here}

