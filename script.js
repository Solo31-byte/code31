/* const tab=[
    {
     "image":"marcus-loke.jpg"
     "content":"<h3>Auberge la Canebiere</h3> <p>Nuit a partir de 25 <span>€</span></p>"
     }

]*/
const cartes=document.querySelectorAll(".card2")
const division=document.querySelector(".div1")
const division2=document.querySelector(".div2")
const fermer=document.querySelector(".close")
const main_div=document.querySelector(".div2")
const alls=document.querySelectorAll(".All")
const free=document.querySelector(".free")

const div4=document.createElement("div")
div4.classList.add("card-manip")


const room= async ()=>{
    const data= await fetch("./data.json",{
        method:"GET",
        headers:{"content-type":"application/json"}
    })
    .then((res)=>{return res.json()})
    return data
}
const room2= async ()=>{
    const data2= await room()
    console.log(data2)
    for(let data1 of data2){
        const article=document.createElement("article")
        div4.appendChild(article)
        article.classList.add("card2")
        main_div.appendChild(div4)
        const image=document.createElement("img")
        image.src=data1.image
        console.log(data1.image)
        image.classList.add("image-marseille")
        article.appendChild(image)
        const div1=document.createElement("div")
        div1.classList.add("card-content2")
        article.appendChild(div1)
        const div2=document.createElement("div")
        div2.classList.add("card-txt2")
        div1.appendChild(div2)
        const title=document.createElement("h3")
        title.classList.add("card-title2")
        title.innerHTML=data1.title
        div2.appendChild(title)
        const subtitle=document.createElement("p")
        subtitle.classList.add("card-subtitle2")
        subtitle.innerHTML=data1.subtitle
        div2.appendChild(subtitle)
        const div3=document.createElement("div")
        div3.innerHTML=data1.ratting
        div3.classList.add("card-rating2")
        div1.appendChild(div3)
      

        
    }
}




for(let carte of cartes){ //creation d'une bloucle avec "carte" comme element du tableau de "carte" 
carte.addEventListener("click",()=>{
    console.log("clique")
    division.style.display="block" //ajout dune propriete css dans un document
})
}
fermer.addEventListener("click",()=>{
division.style.display="none"
})
room2()

const fonction= async(button_name)=>{ //creation dune fonction asynchrone avec comme parametre "button_name"
   const data2=await room() // recuperation des donnees du json
   console.log(data2)
   let selects=data2.filter(data2_elelment => data2_elelment.hotel===button_name)//filtration par nom de boutton
   console.log(selects)
   div4.innerHTML=""
   for(let select of selects){
    const article=document.createElement("article")
    div4.appendChild(article)
    article.classList.add("card2")
    main_div.appendChild(div4)
    const image=document.createElement("img")
    image.src=select.image
    console.log(select.image)
    image.classList.add("image-marseille")
    article.appendChild(image)
    const div1=document.createElement("div")
    div1.classList.add("card-content2")
    article.appendChild(div1)
    const div2=document.createElement("div")
    div2.classList.add("card-txt2")
    div1.appendChild(div2)
    const title=document.createElement("h3")
    title.classList.add("card-title2")
    title.innerHTML=select.title
    div2.appendChild(title)
    const subtitle=document.createElement("p")
    subtitle.classList.add("card-subtitle2")
    subtitle.innerHTML=select.subtitle
    div2.appendChild(subtitle)
    const div3=document.createElement("div")
    div3.innerHTML=select.ratting
    div3.classList.add("card-rating2")
    div1.appendChild(div3)
}
   

}
for(let all of alls){
    all.addEventListener("click",()=>{
        const name=all.closest("button") 
        const button_name=name.getAttribute("data-name") //recuperation de lattribut "data_name"
        console.log(button_name)
        console.log("OK")
       fonction(button_name)
})
}
free.addEventListener("click",()=>{
    console.log("yes")
    room2()
}
)



