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
         if(data.status=="OK"){
             $("#frm").after("<h3>Dados cadastrados com sucesso</h3>");
             $("#frm").hide();
             
         }
         else{
            $("#frm").after("<h3>"+data.mensagem+"</h3>");
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
        $("#frmCadastro").submit(
            function(e)
            {
                e.preventDefault();
                Cadastrar();
            }
        )
    }
);

