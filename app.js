let form = document.querySelector('form')
let input = document.querySelector('input')
let body = document.querySelector('body')
let button = document.querySelector('button')
let div = document.querySelector('.container')
let card = document.querySelector('.card')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    // console.log(form.elements.query.value)
    // console.log(input.value)
    let userInput = input.value
    let searchUrl = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)
    // console.log(searchUrl)
    card.innerHTML = ''
    makeImages(searchUrl.data)
    input.value = ''
})

let makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            try {
                let img = document.createElement('img')
                img.classList.add('img-edit')
                img.src = result.show.image.medium
                let p = document.createElement('p')
                p.classList.add('desc-edit')
                p.innerHTML = `Title:${result.show.name}`
                let para = document.createElement('div')
                para.classList.add('desc-edit2')
                para.innerHTML = `Summary:${result.show.summary}`
                let para2 = document.createElement('div')
                para2.classList.add('desc-edit2')
                para2.innerHTML = `Genre(s):${result.show.genres}`
                let para3 = document.createElement('div')
                para3.classList.add('desc-edit2')
                para3.innerHTML = `Runtime:${result.show.runtime} minutes.`
                let para4 = document.createElement('div')
                para4.classList.add('desc-edit2')
                para4.innerHTML = `Type:${result.show.type}`
                card.append(p)
                card.append(img)
                card.append(para4)
                card.append(para3)
                card.append(para2)
                card.append(para)
            }
            catch (e) {
                alert(`${userInput} not found`)
            }
        }
    }
}
// let aboutShow = (title)=>{
//    for (tit of title){
//        if(tit.show.name){
//            let p = document.createElement('p')
//            p.classList.add('img-edit')
//            p.innerHTML = tit.show.name
//            card.append(p)
//        }
//    }
// }
