import "./QuizTemplate.js"
let Data = [];
fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then((response)=>{
        return response.json();
    })
    .then((json)=>{
        let data = json.results;
        applyData(data);
        console.log(data);
    })
var applyData = (data)=>{
    let num = 1;
    let addData = [];
    data.forEach((e) => {
        Data.push(`
            <quiz-template
            question="${e.question}"
            answer1="${e.incorrect_answers[0]}"
            answer2="${e.incorrect_answers[1]}"
            answer3="${e.incorrect_answers[2]}"
            answer4="${e.correct_answer}">
            </quiz-template>
        `);
        addData.push(e.correct_answer);
        num++;
    });
}
