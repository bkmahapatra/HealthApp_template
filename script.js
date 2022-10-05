const nav_items=document.querySelectorAll(".nav__item");
console.log(nav_items)

const undobar=()=>{
    nav_items.forEach(item=>{
        item.classList.remove("showbar");
    })
}
nav_items[0].classList.add("showbar")

nav_items.forEach(item=>{
    item.addEventListener('click',()=>{
        undobar();
        item.classList.add("showbar")
    })
})