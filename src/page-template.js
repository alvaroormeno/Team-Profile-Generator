// function createCards(team)
const createCards = (team) => {
  const managerCard = (manager) => {
    return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${manager.getRole()}</h5>
            <p class="card-text">${manager.getOfficeNumber()}</p>
            <p class="card-text">${manager.getName()}</p>
            <p class="card-text">${manager.getId()}</p>
            <p class="card-text">${manager.getEmail()}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
  };

  const internCard = (intern) => {
    return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${intern.getRole()}</h5>
            <p class="card-text">${intern.getName()}</p>
            <p class="card-text">${intern.getId()}</p>
            <p class="card-text">${intern.getEmail()}</p>
            <p class="card-text">${intern.getSchool()}</p>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
  };

  const engineerCard = (engineer) => {
    return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${engineer.getRole()}</h5>
            <p class="card-text">${engineer.getName()}</p>
            <p class="card-text">${engineer.getId()}</p>
            <p class="card-text">${engineer.getEmail()}</p>
            <p class="card-text">${engineer.getGithub()}</p>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
  };

  var htmlArray = [];

  htmlArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
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

  return htmlArray.join("")



};

module.exports = (team) => {
  `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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

        ${createCards(team)}

        </main>
        <footer>
            <h2>
                &copy; 2021 GGL
            </h2>
        </footer>
    </body>
    
    </html>`;
};
