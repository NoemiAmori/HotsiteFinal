function Cadastrar()
{
   let paramentros =
   {
       Nome: $("#nome").val(),
       Email: $("#email").val(),
       Mensagem: $("#mensagem").val()
   }

   $.post('/Home/Cadastrar', paramentros)
   .done(
     function(data){
         if(data.status=="Cadastro realizado com sucesso!!!"){
             $("#form").after("<h3>Dados cadastrados com sucesso</h3>");
             $("#form").hide();
             
         }
         else{
            $("#form").after("<h3>"+data.mensagem+"</h3>");
         }
     }
   )

   .fail(
       function(){
           alert("Ocorreu um erro de Conexão!!!")
       }
   );

}
$(document).ready(
    function()
    {
        $("#formCadastro").submit(
            function(e)
            {
                e.preventDefault();
                Cadastrar();
            }
        )
    }
);

