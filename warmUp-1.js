let name = "Amy";


function updateNames(name) {
    let sentence = "Hello, my name is John. My friend's name is also John.";
        if (sentence.indexOf('John') >= 0) {
            let update = sentence.replace('John', name); 

            return update;
        } 
  }
  
  updateNames(name); 