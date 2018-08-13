$(document).ready(()=>{
    $('.bar').click(()=>{
        $('.bar').toggleClass('click-dark')
        $('#dropdown').slideToggle(200).css('display','flex');
    })
$(document).click((e)=>{
    if(e.target == document.getElementsByTagName('body')[0]){
        $('#dropdown').slideUp(200)
        $('.bar').removeClass('click-blue')
    }
    })
})