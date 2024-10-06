var btnget=document.querySelector('#btnget')
var data=document.querySelector('#data')
var qrCode=document.querySelector('#qrCode')

btnget.addEventListener('click',function(){
    if(data.value==''){
        alert('Name of Url required!!')
    }else{
        getQrcode(data.value)
    }
})

async function getQrcode(data){
    var api=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data+""
    var imgSrc=await fetch(api)
    qrCode.src=imgSrc.url
}