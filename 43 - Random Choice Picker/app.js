const tagsElements = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => { 
    createTags(e.target.value)              //klavyeden yazılan değeri aldık, createTags metoduna parametre olarak gönderdik.

    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        },10)

        randomSelect();
    }

})

function createTags(input){                 
    const tags = input.split(',')          //gelen değerlerde virgül varsa virgülden sonrasını ikinci bir eleman olarak diziye ekle(split metin ayırır ve ayrılan metinlerin eleman olduğu bir dizi döndürür.)
    .filter((tag) => tag.trim() !== '')    //gelen dizi elemanının başındaki ve sonundaki boşlukları boşlukları kaldırılınca(trim) eleman boş kalıyorsa bu elemanı filtrele yani boş olmayanları filtrele ve dizi olarak döndür.
    .map((tag) => tag.trim())              //dolu olarak gelen dizi elemanının sağındaki ve solundaki boşlukları sil ve bu boşluksuz elamanların olduğu yeni dizi döndür. (trim ortadaki boşlukları silmez, "merve gazi" bir dizi elemanı olabilir)

    tagsElements.innerHTML = "";           //her klavye hareketini dizi elemanı olarak span oluşturmasın diye başta boş veriyoruz.
    tags.forEach((tag)=>{
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag;
        tagsElements.appendChild(tagEl);
    })

}

function randomSelect(){

    const times = 30;
    const interval = setInterval(() =>{
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
            
        }, 100);
    }, 100)
   
}