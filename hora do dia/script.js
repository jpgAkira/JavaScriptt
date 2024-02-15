function horas() {
    let date = new Date()
    let horas = date.getHours()

    let h1 = document.getElementById('horas')
    h1.innerHTML = `<p>Agora são ${horas} horas</p>`

    let img = document.getElementById('imagem')
    let body = document.getElementById('corpo')
    let section = document.getElementById('fundo')

    if(horas >= 6 && horas < 13) {
        img.setAttribute('src', 'imagens/tomorrow.jpg')
        body.style.backgroundColor = 'gray'
        section.style.backgroundColor = '#999999'  
    } else if(horas >= 13 && horas < 18) {
        img.setAttribute('src', 'imagens/afternoon.jpg')
        body.style.backgroundColor = '#FFCF99'
        section.style.backgroundColor = '#FFF4E4'
    } else {
        img.setAttribute('src', 'imagens/night.jpg')
        body.style.backgroundColor = '#121619'
        section.style.backgroundColor = '#353535'
    }
}