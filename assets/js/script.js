document.addEventListener("DOMContentLoaded", function(){

    const c1 = document.getElementById('c1');

    if (c1){
        c1.addEventListener('click', function(){
            c1.select();
        });
    } else {
        console.log("No c1 found");
    }

});