$(document).ready(function(){ 

$( ".s11" ).each(function(index) { 
    $(this).addClass('groupNum' + index);

    let value = $(this).text(); 
    if (index<51){
        $(".groupList").append('<option value="' + value + '">' + value + '</option>');
    };
});

let map = {};
$( ".s3" ).each(function() {
    let value = $(this).text();
    if (map[value] == null){
        map[value] = true;
        $(".dateList").append('<option value="' + value + '">' + value + '</option>');
    }    
});

$(".groupList").change(function(){
    
    $('td').removeClass('youGroupName'); 
    $('tr').removeClass('parent');
    let youGroupName = $(".groupList option:selected").val(); // название выбранной группы в переменную
    $('td:contains(' + youGroupName + ')').toggleClass('youGroupName'); // добавляем класс юГрупНэйм для выбранной группы
    $(".youGroupName").parent().addClass('parent'); // строке в которой находится выбранная группа добавляем класс parent

    let column = $(".youGroupName").index(); // в переменную колумн кладем номер столбца выбранной группы
    
    $('.parent').next('tr').addClass('firstLessonNameParent');
    
    var eq = $("td:eq(2)");
    var flnp = $(".firstLessonNameParent");
    flnp.find(eq).addClass('activeColumn');
    
    
});

let th = 0;
$(".theme").click(function(){ 
    $(".body").toggleClass("black-theme");
    th++;
    if (th & 1){
        $(this).html("Отключить темную тему");
    } else {
        $(this).html("Включить темную тему");
    }
});

});