copy = document.querySelectorAll("code");
for (const span of copy) {
    span.onclick = function () {
        document.execCommand("copy");
    }

    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
            alert(event.clipboardData.getData("text"));
        }
    });
};

function openLink(evt, e) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("doc_link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(e).style.display = "block";
        evt.currentTarget.className += " active";
}


const showMenu = (toggleId, navId) =>{
    const toggle = document.querySelector(toggleId),
    navigation = document.querySelector(navId)

    if(toggle && navigation){
        toggle.addEventListener('click', ()=>{
            navigation.classList.toggle("active")
            toggle.classList.toggle("close");
        })
    }
};


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchTable");
    li = document.querySelectorAll('.details');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].querySelectorAll(".title")[0];
      txtValue = a.textContent.toUpperCase() || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

		
    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.nav_bar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';

    if(el_autohide){
        
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
               let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

        }); 
    }
  


    //Modal

const btnOpenVideo = document.querySelectorAll('.modal_btn')
const islandsPopup = document.querySelectorAll('.modal_area')

function poPup(){
    islandsPopup.classList.remove('d_none')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.querySelectorAll('modal_close')

btnCloseVideo.addEventListener('click', ()=> {
    islandsPopup.classList.add('d_none')
})


//Nav
  


// function scrollHeader(){
//     const nav = document.querySelector('.nav_bar')
//     // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

// window.onscroll = () => {
//     this.scrollY > 70 ? header.classList.add("stickTop") : header.classList.remove("stickTop")
// };



