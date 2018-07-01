var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form className="user-form" method="POST" action="/user">

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
