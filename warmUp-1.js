let name = "Amy";


function updateNames(name) {
    let sentence = "Hello, my name is John. My friend's name is also John.";
    let update = sentence.replaceAll('John', name); 

      return update;
   
}
  updateNames(name); 