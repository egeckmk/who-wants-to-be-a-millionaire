import { Component } from "react";

class QuestionCard extends Component {
  constructor() {
    super();
  }

  render() {
    const question = this.props.questions[this.props.numberOfQuestion];
    const clickHandler = (e, option) => {
      if (option === Object.keys(question.options)[0]) {
        if (option === question.correctAnswer) {
          this.props.setFirstOptionClassName("true");
          this.props.setDisabled();
          // console.log("correct answer");
        } else {
          this.props.setFirstOptionClassName("false");
          this.props.setDisabled();
          // console.log("wrong answer");
        }
      } else if (option === Object.keys(question.options)[1]) {
        if (option === question.correctAnswer) {
          this.props.setSecondOptionClassName("true");
          this.props.setDisabled();
          // console.log("correct answer");
        } else {
          this.props.setSecondOptionClassName("false");
          this.props.setDisabled();
          // console.log("wrong answer");
        }
      } else if (option === Object.keys(question.options)[2]) {
        if (option === question.correctAnswer) {
          this.props.setThirdOptionClassName("true");
          this.props.setDisabled();
          // console.log("correct answer");
        } else {
          this.props.setThirdOptionClassName("false");
          this.props.setDisabled();
          // console.log("wrong answer");
        }
      } else {
        if (option === question.correctAnswer) {
          this.props.setFourthOptionClassName("true");
          this.props.setDisabled();
          // console.log("correct answer");
        } else {
          this.props.setFourthOptionClassName("false");
          this.props.setDisabled();
          // console.log("wrong answer");
        }
      }
    };
    return (
      <>
        <div className="text-3xl mt-8 border">
          Question {this.props.numberOfQuestion}: {question.question}
        </div>

        <div className="flex row mt-8 border-gray-900 border-8 p-4 mx-2 justify-between">
          <button
            className={
              "w-full mr-4 text-3xl rounded-lg p-3 text-left " +
              this.props.firstOptionClassName
            }
            disabled={this.props.disabled}
            onClick={(e) => {
              clickHandler(e, Object.keys(question.options)[0]);
            }}
          >
            {Object.keys(question.options)[0].toLocaleUpperCase()}.{" "}
            {question.options.a}
          </button>
          <button
            className={
              "w-full mr-4 text-3xl rounded-lg p-3 text-left " +
              this.props.secondOptionClassName
            }
            disabled={this.props.disabled}
            onClick={(e) => {
              clickHandler(e, Object.keys(question.options)[1]);
            }}
          >
            {Object.keys(question.options)[1].toLocaleUpperCase()}.{" "}
            {question.options.b}
          </button>
        </div>
        <div className="flex row mt-8 border-gray-900 border-8 p-4 mx-2 justify-between">
          <button
            className={
              "w-full mr-4 text-3xl rounded-lg p-3 text-left " +
              this.props.thirdOptionClassName
            }
            disabled={this.props.disabled}
            onClick={(e) => {
              clickHandler(e, Object.keys(question.options)[2]);
            }}
          >
            {Object.keys(question.options)[2].toLocaleUpperCase()}.{" "}
            {question.options.c}
          </button>
          <button
            className={
              "w-full mr-4 text-3xl rounded-lg p-3 text-left " +
              this.props.fourthOptionClassName
            }
            disabled={this.props.disabled}
            onClick={(e) => {
              clickHandler(e, Object.keys(question.options)[3]);
            }}
          >
            {Object.keys(question.options)[3].toLocaleUpperCase()}.{" "}
            {question.options.d}
          </button>
        </div>
      </>
    );
  }
}

export default QuestionCard;
