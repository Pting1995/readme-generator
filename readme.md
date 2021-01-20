# Readme Generator

![App Demo]
https://drive.google.com/file/d/1uTw09xwSEZb247AyVe7Z1dE627DD_Zi2/view

This site was made to generate readmes! You have to do an npm install before running the node index.js command because it relies on inquirer. When the application runs it will ask you a series of questions. After all the questions have been answered, the answers will be put inside a readme skeleton with a clickable table of contents that direct you to the related area.

## Snips of code

This code snippet below is how the answers are taken from questionPrompts, and then those answers are inserted into the generateReadMe. Then the generateReadMe is written to a file and a console log is displayed to confirm that the readme was created. Also there is a error pathway.

```
async function init() {
    try {
        var answers = {};
        answers = await questionPrompts();
        const md = generateReadMe(answers)
        await writeFileAsync("readme-gen.md", md)
        console.log("Readme created!");
    }
    catch (err) {
        console.log(err)
    }
}
```

## Built With

* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [JS](https://www.javascript.com/)
* [Inquirer package](https://www.npmjs.com/package/inquirer).


## Authors

* Peter Ting

- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)
- [Link to Portfolio](https://pting1995.github.io/Portfolio-mk2/)

## License

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

This project is licensed under the MIT License 

## Acknowledgments

* Thank you to UC Berkeley's Extension Bootcamp for giving me the opportunity to work on this project!