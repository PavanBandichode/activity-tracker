import React from "react";
import Activity from "./Activity";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerText: "",
      activities: [],
    };
  }
  handleChange = (event) => {
    this.setState({
      innerText: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.innerText !== "") {
      let activity = {
        activityName: this.state.innerText,
        activityDays: [],
      };
      this.setState({
        activities: [...this.state.activities, activity],
        innerText: "",
      });
    }
  };
  handleClick = (event) => {
    console.log(event.target.value);
  };
  handleDelete = (event, index) => {
    var activitiesArr = [...this.state.activities];
    console.log(activitiesArr);
    if (event) {
      activitiesArr.splice(index, 1);
      this.setState({
        activities: [...activitiesArr],
      });
    }
  };
  render() {
    return (
      <>
        <header>
          <h1>Monthly Activity Tracker😄!</h1>
        </header>
        <section className="heading">
          <form className="flex" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.innerText}
              onChange={this.handleChange}
              name="innerText"
              placeholder="Type here..."
              id="text"
            />
            <input type="submit" id="submit" />
          </form>
        </section>
        {this.state.activities.map((activity, i) => {
          return (
            <Activity
              index={i}
              activity={activity}
              handleClick={this.handleClick}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </>
    );
  }
}
export default App;
