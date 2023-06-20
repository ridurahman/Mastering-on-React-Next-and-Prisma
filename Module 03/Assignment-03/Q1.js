function dateFormate(date) {
    if (date) {
      var newDate = new Date(date);
    } else {
      var newDate = new Date();
    }

    return newDate.getDay();
  }
  //Result Q1-a
  let resultAnyDate = dateFormate("2023-06-18");
  console.log(`Week Day of the given date is: ${resultAnyDate}`);
  //Result Q1-b
  let resultCurrentDate = dateFormate();
  console.log(`Week Day of the current date is: ${resultCurrentDate}`);