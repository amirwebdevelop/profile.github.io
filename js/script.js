"use strict"

// /////////////////////////////  function get elements  ////////////////////////////////////

const getId = id => document.getElementById(id)

const getClass = clas => document.querySelector(clas)

const getClassAll = clas => document.querySelectorAll(clas)

// ///////////////////////////////////////////////  menu heder  ///////////////////////////////////////////////

const hedernavlist = getClass(".heder_nav_list")
const menu = getId("menu")
let isheder = false
menu.addEventListener("click" , () => {
    if (!isheder){
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

const btnColor = getClass(".color_btn")
const color = getClass(".color")
const coloritems = getClassAll(".color_item")

btnColor.addEventListener("click" , function(){
    color.classList.toggle("open")
})

coloritems.forEach(function(item){
    item.addEventListener("click" , function (){
        let style = getComputedStyle(item)
        let color = style.backgroundColor
        localStorage.setItem("color",color)
        document.documentElement.style.setProperty("--color-khas",color)
    })
})

///////////////////////////////////////////////  dark and light mod  ////////////////////////////////////

const themeBtn = getClass(".theme_item")
const loder = getClass(".loder")
const img = getClassAll(".section4_img")
const themeIcon = getId("themeicon")
let theme = "dark"
let isteme = false


themeBtn.addEventListener("click" , () => {
    
    if (!isteme){

        themeIcon.classList.replace("fa-sun","fa-moon")

        document.documentElement.style.setProperty("--color-wight","#1B2430")

        document.documentElement.style.setProperty("--color-blac","#EEEEEE")

        document.documentElement.style.setProperty("--color-blaclight","#EEEEEE")

        img[0].style.border = "1px solid gray"

        img[1].style.border = "1px solid gray"

        theme = "light"

        localStorage.setItem("theme",theme)

        isteme = true

    }else{

        themeIcon.classList.replace("fa-moon","fa-sun")

        document.documentElement.style.setProperty("--color-wight","#EEEEEE")

        document.documentElement.style.setProperty("--color-blac","#26282b")

        document.documentElement.style.setProperty("--color-blaclight","#2e3135")

        theme = "dark"

        localStorage.setItem("theme",theme)

        isteme = false
    }

})

/////////////////////////////////////  event load  //////////////////////////////////////////

window.addEventListener("load",() => {
    loder.style.display = "none"

    let color = localStorage.getItem("color")

    document.documentElement.style.setProperty("--color-khas",color)


    let mod = localStorage.getItem("theme")


    if(mod ===  "light"){
        themeIcon.classList.replace("fa-sun","fa-moon")

        document.documentElement.style.setProperty("--color-wight","#1B2430")

        document.documentElement.style.setProperty("--color-blac","#EEEEEE")

        document.documentElement.style.setProperty("--color-blaclight","#EEEEEE")

        img[0].style.border = "1px solid gray"

        img[1].style.border = "1px solid gray"

        isteme = true

    }else{

        themeIcon.classList.replace("fa-moon","fa-sun")

        document.documentElement.style.setProperty("--color-wight","#EEEEEE")

        document.documentElement.style.setProperty("--color-blac","#26282b")

        document.documentElement.style.setProperty("--color-blaclight","#2e3135")

        isteme = false   
    }
    let content1 = getClassAll(".content1_p")
    let content2 = getClassAll(".content2_p")
    
    if(window.innerWidth < 992){
        let p1 = content1[1].innerHTML
        let p2 = content2[0].innerHTML
        console.log(p1);
        console.log(p2);
        content1[1].innerHTML = p2
        content2[0].innerHTML = p1   
    }
})



//////////////////////////////////////////  scroll  /////////////////////////////////////////////

const costomscroll = getClass(".scrollnavar")
const heder = getClass(".heder_top")

window.addEventListener("scroll",function(){
    let scrollNumber = document.documentElement.scrollTop
    let documentHight = document.body.clientHeight
    let widowHight = window.innerHeight

    let scrollpresent = scrollNumber / (documentHight - widowHight)
    let scrollpresentrond = Math.round(scrollpresent * 100)
    costomscroll.style.width = scrollpresentrond +'%'

    if (scrollNumber > 100){
        heder.classList.add("hederfix")
    }
    if(scrollNumber === 0){
        heder.classList.remove("hederfix")

    }
})

// ////////////////////////////////////////////  persent  ///////////////////////////////////////////

let container = getClass(".section3_content")

let arraySkills = [
    {id:1 , title: "HTML" , peresent: 90  ,icon:'<i class="fab fa-html5"></i>'},
    {id:2 , title: "CSS" , peresent: 90  ,icon:'<i class="fab fa-css3-alt"></i>'},
    {id:3 , title: "JAVA SCRIPT" , peresent: 80  ,icon:'<i class="fab fa-js-square"></i>'},
    {id:4 , title: "PYTHON" , peresent: 60  ,icon:'<i class="fab fa-python"></i>'},
    {id:5 , title: "WEB DISIGN" , peresent: 70  ,icon:'<i class="fas fa-pencil-alt"></i>'},
    {id:6 , title: "ICDL" , peresent: 100  ,icon:'<i class="fas fa-laptop"></i>'},
]

arraySkills.forEach(function(item){
    container.insertAdjacentHTML("beforeend",`<div class="skill_1"><div class="skill_1_information"><span class="skill_1_title"> ${item.title} ${item.icon}</span><span class="skill_1_persent"> ${item.peresent}%</span></div><div class="skill_navar1"><div class="skill_navar1_color"style=" width:${item.peresent}%;"></div></div></div>`)

})

// //////////////////////////////////////////  btn scroll to  ////////////////////////////////////////////////

const home = getId("home")
const information = getId("aboutme") 
const skill = getId("skill") 
const madarek = getId("madarek") 
const phone = getId("phone")
const btn1 = getClass(".btn1") 
const btn2 = getClass(".btn2") 

home.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
});

information.addEventListener("click", () => {
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

skill.addEventListener("click", () => {
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

madarek.addEventListener("click", () => {
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

phone.addEventListener("click", () => {
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
btn1.addEventListener('click' , (e) => {
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
btn2.addEventListener('click' , (e) => {
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





