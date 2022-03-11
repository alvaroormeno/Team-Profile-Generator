// function createCards(team)
const createCards = (team) => {

  const managerCard = (manager) => {
    return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
                <h4 class="card-title">${manager.getRole()}</h4>
                <h5 class="card-text">${manager.getName()}</h5>
          </div>
          <div>
            <ul class="list-group list-group-flush">  
              <li class="list-group-item"> ID: ${manager.getId()}</li>
              <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
              <li class="list-group-item"> Email: ${manager.getEmail()}</li>
            </ul>
          </div>
        </div>
      </div>`;
  };

  const internCard = (intern) => {
    return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${intern.getRole()}</h4>
            <h5 class="card-text">${intern.getName()}</h5>
          </div>
          <div>
            <ul class="list-group list-group-flush">    
              <li class="list-group-item"> ID: ${intern.getId()}</li>
              <li class="list-group-item"> Email: ${intern.getEmail()}</li>
              <li class="list-group-item"> School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>`;
  };

  const engineerCard = (engineer) => {
    return`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${engineer.getRole()}</h4>
            <h5 class="card-text">${engineer.getName()}</h5>
          </div>
          <div>
            <ul class="list-group list-group-flush">    
              <li class="list-group-item"> ID: ${engineer.getId()}</li>
              <li class="list-group-item"> Email: ${engineer.getEmail()}</li>
              <li class="list-group-item"> Github: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
      </div>`;
  };

  var htmlArray = [];

  htmlArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
      .join("")
  );

  htmlArray.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
  );

  htmlArray.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );

  console.log(htmlArray)

  return htmlArray.join("");
  // htmlArray.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="newtemplate.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <div>
                <h1>My Team</h1>
            </div>
        </header>

        <br>

        <main>
          <div class="container">
            <div class="row align-items-center">
              ${createCards(team)}
            </div>
          </div>
        </main>
        <footer>
            <h2>
                Alvaro O. 
            </h2>
        </footer>
    </body>
    
  </html>`;



};
