
//PARALLAX
$(document).ready(function(){
    var scrollLink = $(' .scroll'); 
    var aux = this;

    // Smooth scrolling 
    scrollLink.click(function(event){
        event.preventDefault(); 
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top 
        }, 1500);
    }); 
    
    // Active link switching 
    $(window).scroll(function(){
        var aux = this;
        var scrollbarlocation = $(this).scrollTop(); 
        //console.log(scrollbarlocation)
        scrollLink.each(function(){

            var sectionOffset = $(this.hash).offset().top

            if( sectionOffset <= scrollbarlocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
});

// SCROLL MENUS 
const target = document.querySelectorAll('[data-animate]'); /* $ */
const animationClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight*3)/4); 
  target.forEach(function(element){
    if((windowTop) >= element.offsetTop){
        element.classList.add(animationClass); 
    } else{
        element.classList.remove(animationClass);
    }
  })
};

//animeScroll(); 

if(target.length){
window.addEventListener('scroll', function(){
    animeScroll();
})
};


// Email 
$(document).ready(function(){
    $('#btn').click(function(){
        var nome = $('#name').val();
        var email = $('#email').val(); 
        var mensagem = $("#mensagem").val(); 

        /*Validando*/
        if(nome.length <= 2){
            alert('Informe seu nome'); 
            return false; 
        }  
        if(mensagem.length <= 5){
            alert('Escreva uma mensagem');
            return false;
        }

        // construindo URL 
        var urlData = "&nome=" + nome + "&email=" + email + "&mensagem=" + mensagem;

        /*Ajax*/

        $.ajax({
            type: "POST", 
            url: "php/enviaEmail.php",
            async: true,
            data: urlData, 
            success: function(data){
                console.log('"' + data.trim() + '"');
               if(data.trim()=='1'){
                    $('#message').html('<div class="alert alert-success alert-dismissible fade show">Sua Mensagem foi enviada com sucesso<button type="button" class="close" data-dismiss="alert">&times;</button></div>')
               }else{
                $('#message').html('<div class="alert alert-danger alert-dismissible fade show">Ocorreu um erro ao enviar sua mensagem.<button type="button" class="close" data-dismiss="alert">&times;</button></div>')
               }
            },
            error: function(data){
                 
            },            
        });
    });
});



