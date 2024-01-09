// Variable for the content container | We want to grab ALL the classes with this name (houses both the question & answer)
const accordion = document.getElementsByClassName('content-container');

// Create a 'for loop' to access all of these classes
// If the variable 'i' is less than the number of accordion items, increment up 'i' | We are selecting ALL the classes inside the 'accordion' class 
for(i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
    // ^^ We have selected all the containers in the accordion
    //  ^^ then added a 'click' event listener that will target that container and add and toggle (on/off) the class of 'active' to that container
    //  ^^ Once this JavaScript is written, you can create the CSS styles that we've added here
};

