function jsonDifferenceChecker (initial, update) {
  let initialIDs = [];
  let updateIDs = [];
  let subtraction = [];
  let changedStatus = [];
  let removedIDs = [];
  let newIDs = [];
  let removedElements = [];
  let newElements = [];

    for (let i = 0; i < initial.length; i++) {
      // looping through the initial array
      for (let j = 0; j < update.length; j++) {
      // looping through the updated array

      
// --------------------------- CHECKING IF THE STATUS HAS CHANGED -------------------------------

      // variables to check if IDs, names and statuses are the same in both the initial and the update
      const checkID = Object.values(initial[i]).includes(update[j].id)
      const checkName = Object.values(initial[i]).includes(update[j].name)
      const checkStat = Object.values(initial[i]).includes(update[j].status)

      // check if the IDs & names are the same but the statuses are different
      if (checkID && checkName && !checkStat) {
           changedStatus.push(update[j])                
        }
      

//---------------- FINDING THE DIFFERENCE BETWEEN THE INITIAL AND UPDATED ELEMENTS USING THE IDS ---------------------

        // array of unique initial IDs
        if (!(initialIDs.includes(initial[i].id))) {
         initialIDs.push(initial[i].id);
        }

        // array of unique update IDs
        if (!(updateIDs.includes(update[j].id))) {
          updateIDs.push(update[j].id);
        } 

        // function to get an array of the difference
        subtraction = () => {
          return [...diff(initialIDs, updateIDs), ...diff(updateIDs, initialIDs)];

          function diff(a, b) {
            return a.filter(item => b.indexOf(item) === -1);
          }    
        }
      }
  }


// ----- SEPARATING THE DIFFERENCE INTO THOSE THAT HAVE BEEN REMOVED AND THOSE THAT HAVE BEEN ADDED ---------
for (let q = 0; q < subtraction().length; q++) {
  if (initialIDs.includes(subtraction()[q])) {
    removedIDs.push(subtraction()[q])
  } else {newIDs.push(subtraction()[q])}
}


// -------- GET THE ENTIRE OBJECT BACK USING THE ID -----------------------
  function getObjectByValue (arr, value) {
    var result  = arr.filter(function(o){return o.id == value;} );
      return result? result[0] : null; // or undefined
  }

    for (let i = 0; i < initial.length; i++) {
      if (getObjectByValue(initial, removedIDs[i]))
      removedElements.push(getObjectByValue(initial, removedIDs[i]));
    }

    for (let j = 0; j < update.length; j++) {
      if (getObjectByValue(update, newIDs[j]))
      newElements.push(getObjectByValue(update, newIDs[j]));
    }


// ------------------ RETURNING ALL THE DIFFERENCES IN THE TWO ARRAYS OF OBJECTS (REMOVED, NEW & CHANGED STATUSES) --------------
return totalDiff = {
  "removed elements": removedElements,
  "new elements": newElements,
  "changed status": changedStatus
}
}


// ---- FOR TESTING -----
const json1 = [
  {
    "id":11,
    "name":"name1",
    "status":"new"
  },
  {
    "id":12,
    "name":"name2",
    "status":"new"
  },
    {
    "id":13,
    "name":"name3",
    "status":"new"
  },
    {
    "id":14,
    "name":"name4",
    "status":"new"
  },
    {
    "id":15,
    "name":"name5",
    "status":"new"
  }
]

const json2 = [
  {
    "id":11,
    "name":"name1",
    "status":"new"
  },
   {
    "id":13,
    "name":"name3",
    "status":"new"
  },  {
    "id":14,
    "name":"name4",
    "status":"new"
  },  {
    "id":15,
    "name":"name5",
    "status":"new"
  }
]

const json3 = [
  {
    "id":11,
    "name":"name1",
    "status":"hold"
  },
   {
    "id":13,
    "name":"name3",
    "status":"new"
  },  {
    "id":14,
    "name":"name4",
    "status":"new"
  },  {
    "id":15,
    "name":"name5",
    "status":"new"
  }
]

const json4 = [
  {
    "id":11,
    "name":"name1",
    "status":"hold"
  },
   {
    "id":13,
    "name":"name3",
    "status":"new"
  },  {
    "id":14,
    "name":"name4",
    "status":"new"
  },  {
    "id":15,
    "name":"name5",
    "status":"new"
  },  {
    "id":25,
    "name":"name52",
    "status":"new"
  }
]

console.log(JSON.stringify(jsonDifferenceChecker(json1, json4)))
