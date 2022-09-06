document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  }, true); //useCapture => true:Capturing & false:Bubbling

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
  }, true);  //useCapture => true:Capturing & false:Bubbling

  document.querySelector("#child")
  .addEventListener('click', (e) => {
    console.log("Child Clicked!");
  }, true);  //useCapture => true:Capturing & false:Bubbling
