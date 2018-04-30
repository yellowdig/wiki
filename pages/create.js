
import React from 'react'
import marked from 'marked'

export default class Create extends React.Component {

  constructor(props) {
    super(props)
    this.togglePreview = this.togglePreview.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.state = {
      preview: false,
      text: 'start'
    }
  }

  static async getInitialProps({ query }) {
    return {}
  }

  togglePreview() {
    this.setState({ preview: !this.state.preview })
  }

  onEdit(e) {
    this.setState({ text: e.target.value })
  }

  showPreview() {
    let html = marked(this.state.text)
    return <div>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  }

  render() {
    return <div>
      <div>State: {String(this.state.preview)}</div>
      {this.state.preview && this.showPreview() }
      <button onClick={this.togglePreview}>Preview</button>
      <textarea style={{ width: 600, height: 400 }} onChange={this.onEdit}>{this.state.text}</textarea>
    </div>
  }

}
