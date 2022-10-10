const icon_cart=document.querySelectorAll('.js-cart')
const modal=document.querySelector('.modal-cart')
const close_cart=document.querySelector('.js-close')
function show_cart(){
    modal.classList.add('open')
}
function close_show_cart(){
    modal.classList.remove('open')
}

function RandomItem (){
    var random=Math.floor(Math.random()*100);
    var result="rong";
    if(random%2!==0)
    {
        result="Chẵn";
    }else {
        result="Lẻ"
    }
    return result;
}

function ngu(){
    var checkbox = document.getElementsByName("choi");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked===true&&checkbox[i].value === RandomItem()){
            alert("Bạn chọn chính xác "+ "// Kết quả là: "+RandomItem());
        }
        else{
            alert("Bạn chọn sai rồi "+ "// Kết quả là: "+RandomItem());
        }
    }
}