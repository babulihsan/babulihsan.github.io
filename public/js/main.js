$('#chat').submit(function(e){
  e.preventDefault();

  let nama = $('#name').val();
  let email = $('#email').val();
  let text = $('#text').val();

  $.ajax({
    url : 'https://conn.alisita.my.id/chat/babulihsan/send',
    method : 'post',
    data : {
      'nama' : nama,
      'email' : email,
      'chat' : text
    },
    beforeSend : function(){
      $('#send').val('Mengirim');
      $('#send').attr('class', 'form-control btn btn-secondary');
    },
    success : function(){
      $('#name').val('');
      $('#email').val('');
      $('#text').val('');
      $('#send').val('Kirim');
      $('#send').attr('class', 'form-control btn btn-primary');
      $('#alert').html('<span class="text-success"><i class="fa fa-check-circle"></i> Chat terkirim</span>');
    },
    error : function(){
      $('#send').val('Gagal');
      $('#send').attr('class', 'form-control btn btn-primary');
    }
  });
});