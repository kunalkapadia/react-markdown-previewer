import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
  constructor () {
    super();
    this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
    this.handleChange = this.handleChange.bind(this);
    this.parseMarkup = this.parseMarkup.bind(this);
  }

  handleChange (e) {
    this.setState({ text: e.target.value });
  }

  parseMarkup (text) {
    const parsedMarkup = marked(text, {sanitize: true});
    return { __html: parsedMarkup };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea rows="22" value={this.state.text} onChange={this.handleChange} className="form-control">
          </textarea>
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={this.parseMarkup(this.state.text)} />
        </div>
      </div>
    );
  }
}

export default App;
