// create empty list to hold my journal entry
journalList = [];
 
// This function logs the journal entries
function logJournalEntries() {
  for (let index = 0; index < journalEntries.length; index++) {
    console.log(journalEntries[index]);
  }
}
function addJournalEntry(date, entry, confidence) {
  // Create a new journal object
  let newEntry = {
    creation_date: date,
    journal_entry: entry,
    confidence_level: confidence
  };

  // Add the entry to the Array and to the DOM (u do this...)
  journalEntry.push(newEntry);
  // Call your logJournalEntries function to log all entries in the array to the console
  logJournalEntries();
}

// When the user clicks the 'Add Journal Entries' button,
// prompt the user to enter creation date for journal entry
function newJournalEntry() {
  // prompt the user to enter their journal entry
  let getDate = prompt("Please enter today's date");

  // prompt the user to state their confidence level

  const validConfidence = ["LOW", "MEDIUM", "HIGH"];
  let confidenceLvl = prompt(
    "Describe your confidence level in your skills at the time of journal entry by selecting one of the following options: low, medium, and high."
  );

  if (confidenceLvl === null || confidenceLvl.toUpperCase() === "QUIT") return;
  while (validConfidence.indexOf(confidenceLvl.toUpperCase()) < 0) {
    confidenceLvl = prompt("Invalid input. Please enter one of the following responses: easy, medium, and hard.");
  }

  let entry = prompt("Type your journal entry below, then select OK when you are finished.");


  // use a confirm dialog box to ask if they really want to submit
  let confirmation = confirm("Are you sure you want to submit?");
  // when user selects OK to confirm submit- continue loop
  if (confirmation) {
    newEntry.push(date, entry, confidence);
    } 
    // when the user selects cancel
    else {
    alert("Entry not saved");
    }
  }


// 	prompt("Please enter today's Date");

//    let result = prompt("Rate your confidence using one of the following choices: high, medium, and low")
//     //While the following condition is TRUE.
//     var i = 1
//     var result = low || medium || high
//     do {
//         prompt("invalid entry try again");
//     }

//     while result !=== 1

// use a confirm dialog box to confirm the post/record your journal entry

// (if the user selects OK, add post to the array

// otherwise if they click cancel start over with prompts and entry)
