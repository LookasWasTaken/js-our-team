/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg

// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg

// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg

// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg

// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// Genero un array contenente le proprietà di ogni singolo membro del team

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "./assets/img/wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "./assets/img/angela-caroll-chief-editor.jpg",
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "./assets/img/walter-gordon-office-manager.jpg",
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "./assets/img/angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "./assets/img/scott-estrada-developer.jpg",
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "./assets/img/barbara-ramos-graphic-designer.jpg",
  },
  {
    name: "Luca Piacentini",
    role: "Junior Full-Stack Developer",
    photo: "./assets/img/luca.jpeg",
  },
  {
    name: "Alexandro Fioretti",
    role: "Junior Full-Stack Developer",
    photo: "./assets/img/alex.jpeg",
  },
  {
    name: "Mattia Volpe",
    role: "Senior Full-Stack Developer",
    photo: "./assets/img/mattia.jpeg",
  },
];

onConsole(teamMembers);
printMembers(teamMembers, ".container > .row");

function onConsole(teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    console.log("## MEMBER ##");
    console.log(`Name: ${thisMember.name}`);
    console.log(`Role: ${thisMember.role}`);
    console.log(`Photo: ${thisMember.photo}`);
  }
}

function printMembers(teamMembers, selector) {
    const rowElement = document.querySelector(`${selector}`);
    const markupsList = memberMarkup (teamMembers);
    console.log(markupsList)
    for (let i = 0; i < markupsList.length; i++) {
      const memberMarkup = markupsList[i];
      rowElement.append(memberMarkup);
    }
  }

function memberMarkup(teamMembers) {
  const membersArray = [];
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    const member = document.createElement("div");
    member.classList.add("col-4", "my-3");
    member.innerHTML = `
      <div class="card">
        <div class="card-header text-center">
          <strong>${thisMember.name}</strong>
        </div>
        <div class="card-body text-center">
          <img src="${thisMember.photo}" class="img-card-top img-fluid mb-3 rounded-3">
          <span>${thisMember.role}</span>
        </div>
      </div>`;
    membersArray.push(member);
    console.log("Members:", membersArray);
  }
  return membersArray;
}
