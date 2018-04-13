const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className="languages">
        {languages.map(lang => {
          return <li
            key={lang}
            onClick={this.updateLanguage.bind(null, lang)}
            style={lang === this.state.selectedLanguage ? { color: '#d0021b'} : null}
          >
            {lang}
          </li>
        })}
      </ul>
    );
  }
}

module.exports = Popular;