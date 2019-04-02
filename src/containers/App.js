import React from 'react';
import FAQContainer from './FAQContainer';
import FormContainer from './FormContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
    this.trackNewQuestion = this.trackNewQuestion.bind(this)
  }

  trackNewQuestion(newQuestion){
    fetch("/api/v1/questions",{
      method: 'POST',
      body: JSON.stringify(newQuestion)
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => response.json())
        .then(body => {
          let currentQs = this.state.questions
          this.setState({ questions: currentQs.concat(body) })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    fetch("/api/v1/questions")
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ questions: body })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render(){
    return(
      <div>
      <FAQContainer
        questions={this.state.questions}
      />
      <FormContainer
        trackNewQuestion={this.trackNewQuestion}
      />
      </div>
    )
  }
}

export default App;
