let $ = document 
let heder = $.querySelector(".heder_top")

// ///////////////////////////////////////////////  menu heder  ///////////////////////////////////////////////

let hedernavlist = $.querySelector(".heder_nav_list")
let menu = $.getElementById("menu")
let isheder = false
menu.addEventListener("click" , function(){
    if (isheder === false){
        hedernavlist.style.left = "0"
        menu.classList.replace("fa-bars","fa-times")
        isheder = true
    }else{
        hedernavlist.style.left = "-250px"
        menu.classList.replace("fa-times","fa-bars")
        isheder = false
    }
})



/////////////////////////////////////////////////////////  color style  /////////////////////////////////////////////////// 

let btnColor = $.querySelector(".color_btn")
let color = $.querySelector(".color")
let coloritems = $.querySelectorAll(".color_item")

btnColor.addEventListener("click" , function(){
    color.classList.toggle("open")
})

coloritems.forEach(function(item){
    item.addEventListener("click" , function (){
        let style = getComputedStyle(item)
        let color = style.backgroundColor
        localStorage.setItem("color",color)
        $.documentElement.style.setProperty("--color-khas",color)
    })
})

// /////////////////////////////////////////////  dark and light mod  ////////////////////////////////////


let themeBtn = $.querySelector(".theme_item")
let loder = $.querySelector(".loder")
let img = $.querySelectorAll(".section4_img")
let themeIcon = $.getElementById("themeicon")
let theme = "dark"
let isteme = false


themeBtn.addEventListener("click" , function(){
    if (isteme === false){
        themeIcon.classList.replace("fa-sun","fa-moon")
        $.documentElement.style.setProperty("--color-wight","#1B2430")
        $.documentElement.style.setProperty("--color-blac","#F5F7F8")
        $.documentElement.style.setProperty("--color-blaclight","#F5F7F8")
        img[0].style.border = "1px solid gray"
        img[1].style.border = "1px solid gray"
        theme = "light"
        localStorage.setItem("theme",theme)
        isteme = true
    }else{
        themeIcon.classList.replace("fa-moon","fa-sun")
        $.documentElement.style.setProperty("--color-wight","#F5F7F8")
        $.documentElement.style.setProperty("--color-blac","#1B2430")
        $.documentElement.style.setProperty("--color-blaclight","#2f353d")
        theme = "dark"
        localStorage.setItem("theme",theme)
        isteme = false
    }

})



window.addEventListener("load",function(){
    loder.style.display = "none"

    let color = localStorage.getItem("color")
    $.documentElement.style.setProperty("--color-khas",color)


    let mod = localStorage.getItem("theme")


    if(mod ===  "light"){
        themeIcon.classList.replace("fa-sun","fa-moon")
        $.documentElement.style.setProperty("--color-wight","#1B2430")
        $.documentElement.style.setProperty("--color-blac","#F3FDE8")
        $.documentElement.style.setProperty("--color-blaclight","#F5F7F8")
        img[0].style.border = "1px solid gray"
        img[1].style.border = "1px solid gray"
        isteme = true
    }else{
        themeIcon.classList.replace("fa-moon","fa-sun")
        $.documentElement.style.setProperty("--color-wight","#F5F7F8")
        $.documentElement.style.setProperty("--color-blac","#1B2430")
        $.documentElement.style.setProperty("--color-blaclight","#2f353d")
        isteme = false   
    }
})



// ////////////////////////////////////////  scroll  /////////////////////////////////////////////
let costomscroll = $.querySelector(".scrollnavar")

window.addEventListener("scroll",function(){
    let scrollNumber = $.documentElement.scrollTop
    let documentHight = $.body.clientHeight
    let widowHight = window.innerHeight

    let scrollpresent = scrollNumber / (documentHight - widowHight)
    let scrollpresentrond = Math.round(scrollpresent * 100)
    costomscroll.style.width = scrollpresentrond +'%'

    if (scrollNumber > 100){
        heder.classList.add("hederfix")
        if(isteme){
            // $.documentElement.style.setProperty("--color-wight2","#2f353d")
        }
    }
    if(scrollNumber === 0){
        heder.classList.remove("hederfix")
        // $.documentElement.style.setProperty("--color-wight2","#F5F7F8")
    }
})

// ////////////////////////////////////////////  persent  ///////////////////////////////////////////

let container = $.querySelector(".section3_content")
let arraySkills = [
    {id:1 , title: "HTML" , peresent: 90  ,icon:'<i class="fab fa-html5"></i>'},
    {id:2 , title: "CSS" , peresent: 90  ,icon:'<i class="fab fa-css3-alt"></i>'},
    {id:3 , title: "JAVA SCRIPT" , peresent: 60  ,icon:'<i class="fab fa-js-square"></i>'},
    {id:4 , title: "PYTHON" , peresent: 60  ,icon:'<i class="fab fa-python"></i>'},
    {id:5 , title: "WEB DISIGN" , peresent: 70  ,icon:'<i class="fas fa-pencil-alt"></i>'},
    {id:6 , title: "ICDL" , peresent: 100  ,icon:'<i class="fas fa-laptop"></i>'},
]

arraySkills.forEach(function(item){
    container.insertAdjacentHTML("beforeend",'<div class="skill_1"><div class="skill_1_information"><span class="skill_1_title">'+item.title+''+item.icon+'</span><span class="skill_1_persent">'+item.peresent+'%</span></div><div class="skill_navar1"><div class="skill_navar1_color"style=" width:'+item.peresent+'%;"></div></div></div>')

})

// //////////////////////////////////////////  btn scroll to  ////////////////////////////////////////////////

let home =$.getElementById("home")
let information =$.getElementById("aboutme") 
let skill =$.getElementById("skill") 
let madarek =$.getElementById("madarek") 
let phone =$.getElementById("phone")
let btn1 = $.querySelector(".btn1") 
let btn2 = $.querySelector(".btn2") 

home.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
});

information.addEventListener("click", function() {
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 710,
            behavior: 'smooth'
        });
    }else{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }
});

skill.addEventListener("click", function() {
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 1500,
            behavior: 'smooth'
        });

    }else{
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    }
});

madarek.addEventListener("click", function() {
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });

    }else{
        window.scrollTo({
            top: 1800,
            behavior: 'smooth'
        });
    }
});

phone.addEventListener("click", function() {
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 3450,
            behavior: 'smooth'
        });

    }else{
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });
    }
});
btn1.addEventListener('click' , function(e){
    e.preventDefault()
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 710,
            behavior: 'smooth'
        });
    }else{
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    }
})
btn2.addEventListener('click' , function(e){
    e.preventDefault()
    if(window.innerWidth < 768){
        window.scrollTo({
            top: 3450,
            behavior: 'smooth'
        });

    }else{
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });
    }
})


