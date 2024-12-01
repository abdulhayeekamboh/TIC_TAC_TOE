var box = document.querySelectorAll('.box');
var haal = document.querySelector('.haal');
var show = document.querySelector('.show_result');
var resetbtn = document.querySelector('.haal button');
let vip = 0;
check = true;
const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

box.forEach((e)=>{
    e.addEventListener('click',function(){
        if (check && e.innerHTML === ''){
            e.innerHTML = 'O';
            check = false;
        }else if (e.innerHTML === '') {
            e.innerHTML = 'X';
            check = true;
        }
        winner_check();
        return
    })
})


const winner_check = ()=>{
    for (let jik of arr){
        let vale1 = box[jik[0]].innerHTML;
        let vale2 = box[jik[1]].innerHTML;
        let vale3 = box[jik[2]].innerHTML;

        if (vip != 1 && vale1 != '' && vale2 != '' && vale3 != ''){
            if (vale1 === vale2 && vale2 === vale3){
                // haal.style.width = '0%';
                show.style.width = '100%';
                haal.style.opacity = 0.2;
                let h1 = document.createElement('h1');
                h1.innerHTML = `${vale1} is winner`;
                show.appendChild(h1);
                btn = document.createElement('button');
                btn.innerHTML = 'Return to game';
                show.appendChild(btn);
                btn.addEventListener('click',function(){
                    location.reload();
                })
                vip = 1;
                return
                

                

            }
        }
    }
    let vc = true;
                box.forEach((e)=>{
                    if (e.innerHTML === ''){
                        vc = false;
                    }
                })
                if (vip != 1 && vc){
                    show.style.width = '100%';
                    haal.style.opacity = 0.2;
                    let h1 = document.createElement('h1');
                    h1.innerHTML = 'Nobody is winner';
                    show.appendChild(h1);
                    btn = document.createElement('button');
                    btn.innerHTML = 'Return to game';
                    show.appendChild(btn);
                    btn.addEventListener('click',function(){
                        location.reload();
                    })

                }
}



resetbtn.addEventListener('click',function(){
    location.reload();
})