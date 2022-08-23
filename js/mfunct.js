$(function(){
    $(".paymodal").on("click" , function(){
        alert("Наш телефон : +380 968 769 583")
    });
    $(".smart-basket__form::after").on("click" , function(){
        $(".smart-basket").removeClass("smart-basket_active")
    });
})
