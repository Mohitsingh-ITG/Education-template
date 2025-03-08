let search = document.querySelector("#icon")
let input = document.querySelector("#input")
let cross = document.querySelector("#cross")
search.addEventListener("click", function () {
  if (search.className = "search-bar") {
    input.style.display = "block"
    cross.style.display = "block"
  }
  else {
    search.className = "fa-solid fa-magnifying-glass"
    input.style.display = "none"

  }

  cross.addEventListener("click", function () {
    input.style.display = "none"
    search.style.display = "block"
    cross.style.display = "none"
    search.className = "fa-solid fa-magnifying-glass"

  })

})

let btn = document.querySelector(".bar")
let ul = document.querySelector(".main-menu")
let res = document.querySelector("#res")
btn.addEventListener("click", function () {
  ul.classList.toggle("open-menu")
if(ul.className== "main-menu" ){
  console.log("hii")
  res.className =("fa-solid fa-bars")

}
else{
  res.className=("fa-solid fa-xmark")
}

})













let btn_link = document.querySelectorAll(".btnlink")
for (let i = 0; i < btn_link.length; i++) {
  btn_link[i].addEventListener("click", function () {

    let tabName = this.dataset.tab;
    let tabContent = document.getElementById(tabName)

    let tabContentall = document.querySelectorAll(".tablinks")
    for (let j = 0; j < tabContentall.length; j++) {

      tabContentall[j].style.display = "none"
    }
    tabContent.style.display = "block"

  })
  document.querySelector('.tablinks').style.display = "block"
}




$('.sec-4-inner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});