var menu=document.querySelectorAll('.nav-menu a');
// console.log(menu);
var interval;  
for(var i=0;i<menu.length;i++)
{


    menu[i].addEventListener('click',function(event)
    {
        // menu[i].innerText='hello';
        event.preventDefault();
        
        console.log(this.textContent);
        this.textContent.innerText="Hello";

        var sectionName=this.textContent.trim().toLowerCase();

        // console.log(sectionName);
        // sectionName.innerHTML="Hello";

        var section=document.getElementById(sectionName);
        // console.log(section);
        // document.getElementById(sectionName).innerText='Hello';
        // section.innerText="hello";

        interval=setInterval(function()
        {

            scrollVertically(section);

        },20);


    });
}
   function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    console.log(targetSectionCoordinates);
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}




var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    // console.log('********',data-visited);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
