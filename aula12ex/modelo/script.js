function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <=12){
        //Bom dia
        img.src = 'fotoamanha.png' 
        document.body.style.background = '#ef853b'
    }
    else if ( hora >=12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#d63c00'
    }else{
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#3b2d47'
    }
}
