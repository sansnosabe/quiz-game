// function getJSON() {
//   fetch('https://gist.githubusercontent.com/bertez/2528edb2ab7857dae29c39d1fb669d31/raw/4891dde8eac038aa5719512adee4b4243a8063fd/quiz.json')
//     .then(res => res.json())
//     .then(data => {
//       getQuestions(data)
//     })
// }

// getJSON()

// function getQuestions(questions) {
//   const question = questions.map((element, i) => {
//     return {
//       "question": element.question,
//       "answer": element.answers,
//       "correct": element.correct,
//       "index": i
//     }
//   });
//   console.log(question);
// }


//Recuperar imagen

// async function getPeticion() {
//   const response = await fetch('https://raw.githubusercontent.com/Cjavierlopez/REP-DeliveriesHAB/main/projectONE/questions-images/question01.png');
//   const peticion = await response.blob();

//   const imagen = document.querySelector('#imagen');
//   imagen.src = URL.createObjectURL(peticion);
//   imagen.alt = "portada peliculas";
// }
// getPeticion()
////////////////////////////////////////////////////////

// async function getPeticion() {
//   const array = await generateQuestions();

//   const numeros = []
//   for (let i = 0; i < 50; i++) {
//     const element = i.toString().padStart(2, '0');
//     numeros.push(element)
//   }

//   array.map(elemento => elemento === numeros)

//   const URL = `https://raw.githubusercontent.com/Cjavierlopez/REP-DeliveriesHAB/main/projectONE/questions-images/question${numeros}.png`

//   const imagen = document.querySelector('#image');
//   imagen.src = URL;
//   imagen.alt = "portada peliculas";
// }
// getPeticion()