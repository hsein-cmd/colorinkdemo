const textDisplay=document.getElementById('lala')
const phrases = ['Core Business']
let i =0
let J =0
let currentPhrase=[]
let isDeleting= false
let isEnd=false

function loop(){
    isEnd=false
    textDisplay.innerHTML=currentPhrase.join('')

    if(i<phrases.length){
        
        if(!isDeleting && J<=phrases[i].length){
            currentPhrase.push(phrases[i][J])
            
            J++
            textDisplay.innerHTML=currentPhrase.join('')
            
        }
        if(isDeleting && J <= phrases[i].length){
            
            currentPhrase.pop(phrases[i][J])
            J--
            textDisplay.innerHTML=currentPhrase.join('')
            
        }

        if(J==phrases[i].length){
            isEnd=  true
            isDeleting = true
        }
        if(isDeleting && J==0){
            currentPhrase=[]
            isDeleting=false
            i++
            if(i== phrases.length){
                i=0
            }
        }
        
        const speedup = Math.random() * (80-50) + 50
        const normalspeed = Math.random() * (300-200) +200
        const time = isEnd ? 2000 : isDeleting ? speedup: normalspeed
        setTimeout(loop,time)

    }

    


}
loop()