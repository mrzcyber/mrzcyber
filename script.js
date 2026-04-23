const item = document.querySelector('.image')


let run = setTimeout(()=>{
slide()
},3000)

const slide = ()=>{
    const slideitem = item.querySelectorAll('.item')
    
    item.appendChild(slideitem[0])
    item.classList.remove('next')
   item.classList.add('next')


setTimeout(slide,3000)

}

