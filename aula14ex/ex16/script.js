function contar(){
   let ini = window.document.getElementById('txti')
   let fim = window.document.getElementById('txtf')
   let passo = window.document.getElementById('txtp') 
   var res = window.document.getElementById('res')


   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    res.innerHTML = `Impossível contar`
    //window.alert('[ERRO] Faltam dados')
   }
   else{
    res.innerHTML = 'Contando <br> <hr>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if(p<=0){
      window.alert('Passo inválido!Considerando passo 1')
      p=1
    }

    if(i < f){
      // CONTAGEM CRESCENTE
      for(c=i; c<=f; c+=p){
        res.innerHTML += ` ${c} \u{1F449}`
      }

    }

    else{
      //CONATGEM REGRESIVA
      for(let c = i; c >= f; c-= p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += ` \u{1F6A9}`
   } 
}