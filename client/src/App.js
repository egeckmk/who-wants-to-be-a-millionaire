import { Component } from "react";
import QuestionCard from "./components/question-card";
import localData from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: localData,
      numberOfQuestions: 0,
      disabled: false,
      firstOptionClassName: "bg-gray-400",
      secondOptionClassName: "bg-gray-400",
      thirdOptionClassName: "bg-gray-400",
      fourthOptionClassName: "bg-gray-400",
    };
  }

  nextQuestion = () => {
    this.setState({
      numberOfQuestions: Math.floor(
        Math.random() * this.state.data.questions.length
      ),
      disabled: false,
      firstOptionClassName: "bg-gray-400",
      secondOptionClassName: "bg-gray-400",
      thirdOptionClassName: "bg-gray-400",
      fourthOptionClassName: "bg-gray-400",
    });
  };
  setDisabled = () => {
    this.setState({
      disabled: true,
    });
  };

  setFirstOptionClassName = (status) => {
    if (status === "true") {
      this.setState({
        firstOptionClassName: "bg-green-400",
      });
    } else if (status === "false") {
      this.setState({
        firstOptionClassName: "bg-orange-400",
      });
    } else {
      this.setState({
        firstOptionClassName: "bg-gray-400",
      });
    }
  };

  setSecondOptionClassName = (status) => {
    if (status === "true") {
      this.setState({
        secondOptionClassName: "bg-green-400",
      });
    } else if (status === "false") {
      this.setState({
        secondOptionClassName: "bg-orange-400",
      });
    } else {
      this.setState({
        secondOptionClassName: "bg-gray-400",
      });
    }
  };

  setThirdOptionClassName = (status) => {
    if (status === "true") {
      this.setState({
        thirdOptionClassName: "bg-green-400",
      });
    } else if (status === "false") {
      this.setState({
        thirdOptionClassName: "bg-orange-400",
      });
    } else {
      this.setState({
        thirdOptionClassName: "bg-gray-400",
      });
    }
  };

  setFourthOptionClassName = (status) => {
    if (status === "true") {
      this.setState({
        fourthOptionClassName: "bg-green-400",
      });
    } else if (status === "false") {
      this.setState({
        fourthOptionClassName: "bg-orange-400",
      });
    } else {
      this.setState({
        fourthOptionClassName: "bg-gray-400",
      });
    }
  };

  render() {
    return (
      <div className="bg-gray-600 text-white h-screen flex justify-center items-center">
        <div className="w-3/4">
          <h1 className="text-6xl text-center">
            Who wants to be a millionare?
          </h1>
          <button
            onClick={this.nextQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next Question
          </button>
          <QuestionCard
            questions={this.state.data.questions}
            numberOfQuestion={this.state.numberOfQuestions}
            disabled={this.state.disabled}
            setDisabled={this.setDisabled}
            firstOptionClassName={this.state.firstOptionClassName}
            secondOptionClassName={this.state.secondOptionClassName}
            thirdOptionClassName={this.state.thirdOptionClassName}
            fourthOptionClassName={this.state.fourthOptionClassName}
            setFirstOptionClassName={this.setFirstOptionClassName}
            setSecondOptionClassName={this.setSecondOptionClassName}
            setThirdOptionClassName={this.setThirdOptionClassName}
            setFourthOptionClassName={this.setFourthOptionClassName}
          />
        </div>
      </div>
    );
  }
}

export default App;
