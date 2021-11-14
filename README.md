## React Calculator Database
Database for react-calculator repository found here: https://github.com/kevinzhugao/react-calculator/

## Built With

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Getting Started

### Prerequisites
* Install MongoDB

* Install dependencies
  ```sh
  npm i
  ```
* Run server
  ```sh
  npm start
  ```

## Usage

* After starting the server, configure react-calculator repo to hit port 8000.
* GET /history retrieves a list of previously entered expressions and their results.
* POST /history allows users to create a document in the database. The body will need an input and output, both of which are of type string.
  ```sh
  {
    "input": "1+1",
    "output": "2"
  }
  ```
 * DELETE /history will truncate the entire database, this will need to be done manually through a service such as Postman.
 
## Contact

Kevin Gao: [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/kevinzhugao/)](https://www.linkedin.com/in/kevinzhugao/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/kevinzhugao)](https://github.com/kevinzhugao)

Project Link: [https://github.com/kevinzhugao/react-calculator-database/](https://github.com/kevinzhugao/react-calculator-database/)
