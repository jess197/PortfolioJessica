$(document).ready(function() {
    var scrollLink = $('.scroll');
    
    scrollLink.click(function(event) {
      event.preventDefault();
      $('body, html').animate({
        scrollTop: $(this.hash).offset().top - 100 // Adjust the offset to center the content
      }, 1500);
    });
  
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top;
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });
  });
  
  const target = document.querySelectorAll('[data-animate]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight / 2); // Adjust the value for centering
    target.forEach(function(element) {
      if (windowTop >= element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  }
  
  if (target.length) {
    window.addEventListener('scroll', function() {
      animeScroll();
    });
  }
  
  
  

// Email 
$(document).ready(function(){
    $('#btn').click(function(){
        var nome = $('#name').val();
        var email = $('#email').val(); 
        var mensagem = $("#mensagem").val(); 

        /*Validando*/
        if(nome.length <= 2){
            alert('Please insert your name bigger than two characters'); 
            return false; 
        }  
        if(mensagem.length <= 5){
            alert('Write a message bigger than five characters');
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
                    $('#message').html('<div class="alert alert-success alert-dismissible fade show">Email sent successfully!<button type="button" class="close" data-dismiss="alert">&times;</button></div>')
               }else{
                $('#message').html('<div class="alert alert-danger alert-dismissible fade show">An error occurred while sending your message.<button type="button" class="close" data-dismiss="alert">&times;</button></div>')
               }
            },
            error: function(data){
                 
            },            
        });
    });
});



