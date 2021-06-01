document.addEventListener("DOMContentLoaded", function(){//NavBar
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
        // window.addEventListener

    }


    //StickTop
// const stickTop = (navBarSt) => {
//     const navBar = document.querySelector(navBarSt);
//     if (navBarSt) {
//         window.onscroll = () => {
//             this.scrollY > 70 ? navBar.classList.add("scroll-header") : navBar.classList.remove("scroll-header")
//         };
//     }
// }


}); 