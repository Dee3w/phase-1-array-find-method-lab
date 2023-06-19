// code your solution here

const record = [
    { year: "2015", result: "W", team: "Denver Broncos"},
    { year: "2014", result: "N/A", team: "Some Other Team"},
    { year: "2013", result: "L", team: "Denver Broncos"},

  ];

function superbowlWin(arr) {
    const win = arr.find(obj => obj.result === "W"); 
    return win ? win.year : undefined;
  }
  console.log(superbowlWin(record));

  