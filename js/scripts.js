function createArray(event){
  event.preventDefault();
  const obj1 = document.getElementById('obj1').value;
  const obj2 = document.getElementById('obj2').value;
  const obj3 = document.getElementById('obj3').value;
  let resultsArray = [];
  resultsArray.push(obj1, obj2, obj3);
  let resultsString = resultsArray.join(', ');
  const body = document.querySelector('body');
  let ul = document.createElement('ul');
  ul.append(resultsArray[0]);
  let ul1 = document.createElement('ul');
  ul1.append(resultsArray[1]);
  let ul2 = document.createElement('ul');
  ul2.append(resultsArray[2]);
  body.append(ul);
  body.append(ul1);
  body.append(ul2);


  


}

window.addEventListener("load", function() {
  const form = document.getElementById("objects");
  form.addEventListener("submit", createArray);
});