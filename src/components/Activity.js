function Activity(props) {
  function getDays(m, y) {
    let daysInMonth = new Date(y, m, 0).getDate();
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let numberOfDays = getDays(month, year);

  return (
    <>
      <section className="Hero">
        <div className="container flex">
          <div className="flex-25">
            <h2 className="activity">{props.activity.activityName}</h2>
            <h3 className="month">{months[month]}</h3>
          </div>
          <div className="flex-75 grid">
            {numberOfDays.map((day, i) => {
              return (
                <button key={i} value={day} onClick={props.handleClick}>
                  {day}
                </button>
              );
            })}
          </div>
        </div>
        <div className="cross">
          <p
            onClick={(e) => {
              props.handleDelete(e, props.index);
            }}
          >
            x
          </p>
        </div>
      </section>
    </>
  );
}
export default Activity;
