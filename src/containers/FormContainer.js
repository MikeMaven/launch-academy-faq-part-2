import React from 'react';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      errors: {}
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateQuestion = this.validateQuestion.bind(this)
    this.validateAnswer = this.validateAnswer.bind(this)
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
    if (
      this.validateQuestion(this.state.question) &&
      this.validateAnswer(this.state.answer)
    ) {
    let formPayload = {
      question: this.state.question,
      answer: this.state.answer
    }

    this.props.trackNewQuestion(formPayload)

    }
  }

  validateQuestion(question){
    if (question.trim() === ''){
      let newError = { questionAdded: 'You must type a question.'}
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false } else {
      let errorState = this.state.errors
      delete errorState.questionAdded
      this.setState({ errors: errorState })
      return true
    }
  }
  validateAnswer(answer){
    if (answer.trim() === ''){
      let newError = { answerAdded: 'You must type an answer.'}
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false } else {
      let errorState = this.state.errors
      delete errorState.answerAdded
      this.setState({ errors: errorState })
      return true
    }
  }

  render(){
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
      }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {errorDiv}
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
