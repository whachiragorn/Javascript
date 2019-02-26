// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.toLocaleString();
      var day = today.getDay();
      var date = today.getDate();
      var month =today.getMonth();
      var year = today.getFullYear();
      
        switch (month) {
            case 0:  month = "January";
            break;
            case 1:  month = "February";
            break;
            case 2:  month = "March";
            break;
            case 3:  month = "April";
            break;
            case 4:  month = "May";
            break;
            case 5:  month = "June";
            break;
            case 6:  month = "July";
            break;
            case 7:  month= "August";
            break;
            case 8:  month = "September";
            break;
            case 9: month = "October";
            break;
            case 10: month = "November";
            break;
            case 11: month = "December";
            break;
        }
       switch(day) {
            case 0: day = "Sunday" ;
            break;
             case 1: day = "Monday" ;
             break;
             case 2: day = "Tuesday" ;
             break;
             case 3: day = "Wednesday" ;
             break;
             case 4: day = "Thursday" ;
             break;
             case 5: day = "Friday" ;
             break;
             case 6: day = "Saturday" ;
             break;
             
       }
            

      //Tuesday 22 january 2012

	  //Write your own code here 

// Display the parts

      // document.write(
      //   "Date: " + dateString + "<br />",
      //   "Day: " + date + "<br />");

      document.write(
            
            day+ " "+ date+" "+  month+" "+ year+ "<br />");
	
