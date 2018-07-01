var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form className="login-form" method="POST" action="/login">

            <input name="email" type="text" placeholder="email" />
            <input name="password" type="text" placeholder="password"/>
            <input name="submit" type="submit" />

          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
