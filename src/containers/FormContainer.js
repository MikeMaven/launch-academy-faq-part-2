import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleQuestionChange(event){
    let newQ = event.target.value
    this.setState({ question: newQ })
  }

  handleAnswerChange(event){
    let newA = event.target.value
    this.setState({ answer: newA })
  }

  handleSubmit(event){
    event.preventDefault()

    let formPayload = {
      question: this.state.question,
      answer: this.state.answer
    }

    this.props.trackNewQuestion(formPayload)

  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Question:<input onChange={this.handleQuestionChange} type="text" name="question" value={this.state.question} />
          </label>
          <label>Answer:<input onChange={this.handleAnswerChange} type="text" name="answer" value={this.state.answer} />
          </label>
          <input type="submit" value="Add Question" />
        </form>
      </div>
    )
  }
}

export default FormContainer;
