const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.material-symbols-outlined');
const secondPage = document.querySelector('.second');
const closeBtn =  document.querySelector('.close');
const heaDing = document.querySelectorAll('.heading');
const subMenu = document.querySelectorAll('.sub-menu') ;

menuBtn.addEventListener("click" , () =>{
    if(!navBar.classList.contains("active")){
        navBar.classList.add("active");
        secondPage.classList.add("active");
    }
    else{ navBar.classList.remove("active")}
});

closeBtn.addEventListener('click' , () => {
    if(navBar.classList.contains("active")){
        secondPage.classList.remove("active")
        setTimeout(()=>{
            navBar.classList.remove("active")
        },740)
        
    }
    else{
        navBar.classList.add("active")
    }
})


let currentTab;

 //function closeAllSubMenus(){
   // subMenu.forEach((menu)=>{
     //   menu.classList.remove("active");
    //})
//}

heaDing.forEach((heading, index) => {
    heading.addEventListener("click", (e) => {
        // Remove 'active' class from all sub-menus
        subMenu.forEach((menu, menuIndex) => {
            if (menuIndex !== index) {
                menu.classList.remove('active');
            }
        });

        // Toggle 'active' class for the clicked sub-menu
        subMenu[index].classList.toggle('active');
    });
});










