// MY VERSION

//Select the DOM node for the element that will be clicked (the image).
// Choose the event that will act as the trigger for the function (the mouse click).
// Specify the function that you wish to run when the event occurs.

<script>

var button = document.querySelector('.button');
button.addEventListener("click", function(event){

})

</script>

// DEMO VERSION

const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)
keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Do something
 }
})