 function login(){
      var icon_btn=document.getElementById("btn_login").innerHTML
      document.getElementById("btn_login").innerHTML ='<i class="spinner-border spinner-border-sm"></i> Proses...';

      const data ={
                        "pass_balance"                : window.btoa(document.getElementById("pass_balance").value), 
                        "email_balance"               : window.btoa(document.getElementById("email_balance").value),
                     };

      

       $.ajax({
                url         : base_url+"/proses_login",
                data        : { 'data': data },
                type        : 'POST',
                success     : function(responseFromServer){
                    var dataJSON = responseFromServer;
                    if (dataJSON.status){
                        msg("reload",'Berhasil Login', dataJSON.msg,1);
                       
                    } else {
                        msg("no_action",'Gagal Login', dataJSON.msg,3);
                    }
                    document.getElementById("btn_login").innerHTML = icon_btn;
                },
                error: function(e){
                    msg("no_action",'Gagal Eksekusi', '',9);
                    document.getElementById("btn_login").innerHTML = icon_btn;
                }
            });

    
      
  }


  

  function konfirmasi_lupapassword(){
        var icon_btn=document.getElementById("kirim_lupa_password").innerHTML
        document.getElementById("kirim_lupa_password").innerHTML ='<i class="spinner-border spinner-border-sm"></i> Proses...';
        const data ={
                        "alasan_riset"              : window.btoa(document.getElementById("alasan_riset").value), 
                        "email_riset"               : window.btoa(document.getElementById("email_riset").value),
                     };

        $.ajax({
                url         : base_url+"/proses_konfirmasi_lupa_password",
                data        : { 'data': data },
                type        : 'POST',
                success     : function(responseFromServer){
                    var dataJSON = responseFromServer;
                    if (dataJSON.status){
                        msg("reload",'Transaksi Berhasil', dataJSON.msg,1);
                       
                    } else {
                        msg("no_action",'Transaksi Gagal', dataJSON.msg,3);
                    }
                    document.getElementById("kirim_lupa_password").innerHTML = icon_btn;
                },
                error: function(e){
                    msg("no_action",'Gagal Eksekusi', '',9);
                    document.getElementById("kirim_lupa_password").innerHTML = icon_btn;
                }
            });
  }


  var index_pass=0;
  function cek(){
      password=document.getElementById("pass_balance").type;
      if (index_pass==0){
        document.getElementById("pass_balance").type="text"; 
        document.getElementById("cek").innerHTML='<i class="fe fe-eye-off"></i>';
        index_pass=1; 
      }else {
        document.getElementById("pass_balance").type="password";  
        document.getElementById("cek").innerHTML='<i class="fe fe-eye"></i>';
        index_pass=0;
      }
  }
