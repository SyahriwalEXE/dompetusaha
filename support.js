    var TokenDelete="";
    function HapusItem(token,callback){
        TokenDelete=token;
        konfirmasi(callback);
    }

    var urlGo ="";
    function GetUrlGo(){
            location.replace(urlGo);
            
    }
    
      function msg(CallBack,title,text,icon){
          var ico="";
          var color="";
          if (icon==1){
              ico="success";
              color="#5fb62e";
          } else if (icon==2){
              ico="info";
              color="#10a2d2";
          } else if (icon==3){
              ico="warning";
              color="#fa963f";
          } else{
              text  = "Maaf, sepertinya ada beberapa kesalahan yang terdeteksi, silakan coba lagi !"
              ico   = "error";
              color = "#f55757";
          }

          Swal.fire({
              icon                : ico,
              title               : title,
              text                : text,
              confirmButtonText   : 'Oke saya mengerti !',
              confirmButtonColor  : color,
              footer              : '<a href="https://api.whatsapp.com/send?phone=6282273549791" target="_blank">Apakah anda butuh bantuan ?</a>',
          }).then(function(){ 
              if (CallBack=="reload"){
                  window.location.reload(true);
              }  else if (CallBack!="no_action"){
                 CallBack();
              } 
              
          });

          
      }



      function konfirmasi(CallBack){
          Swal.fire({
              title: 'konfirmasi ?',
              text: "Yakin kah anda ingin melanjutkan proses ini ?",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#5BCFC5',
              cancelButtonColor: '#fa963f',
              confirmButtonText: 'Yakin!',
              cancelButtonText: "Tidak!",
          }).then((result) => {
            if (result.isConfirmed) {
               CallBack();
            }
          });
     }

     function CR_(element){
                var index = document.getElementById(element.id);
                var angka=index.value;
                
               
                var number_string = angka.replace(/[^,\d]/g, '').toString(),
                split           = number_string.split(','),
                sisa            = split[0].length % 3,
                rupiah          = split[0].substr(0, sisa),
                ribuan          = split[0].substr(sisa).match(/\d{3}/gi);
     
                if(ribuan){
                    separator = sisa ? '.' : '';
                    rupiah += separator + ribuan.join('.');
                }
     
                rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

                index.value=rupiah;
                
                
            }
            
    function REP_CR(angka){
            var number_string = angka.replace(/[^,\d]/g, '').toString();
            number_string = number_string.replace(",", ".").toString();
            return number_string;
    }
    

      function ResizeFile(id,output) {
            const data ={"Original" : '', "Medium" : '',"Small" : ''};
          
            var filesToUploads = document.getElementById(id).files;
            var file = filesToUploads[0];
           
            if (file) {
                var type=file.type;
                var res = type.substring(0, 5);
                
               
                
                var reader = new FileReader();
              
                reader.onload = function(e) {
                    
                if (res=="image"){
                        var img = document.createElement("img");
                        img.src = e.target.result;
                          var canvas = document.createElement("canvas");
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0);
        
                        var MAX_WIDTH = 60;
                        var MAX_HEIGHT = 60;
                        var width = img.width;
                        var height = img.height;
        
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);
        
                        data.Small = canvas.toDataURL(file.type);
                        
                        
                        var MAX_WIDTH = 300;
                        var MAX_HEIGHT = 300;
                        var width = img.width;
                        var height = img.height;
        
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);
        
                        data.Medium = canvas.toDataURL(file.type);
                        
                        
                        
                        var MAX_WIDTH = 1000;
                        var MAX_HEIGHT = 1000;
                        var width = img.width;
                        var height = img.height;
        
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);
        
                        data.Original = canvas.toDataURL(file.type);
                        
                        if (data.Small==="data:," || data.Small===""){
                             ResizeFile(id,output);
                        } 
                        
                       
                        
                        
                        
                    }  else {
                        data.Original  =  e.target.result;
                    }

                    document.getElementById("text_"+id).value=JSON.stringify(data);

                    if (output==="1"){
                         document.getElementById("file_"+id).src=data.Original;
                    }
                   
                };
                reader.readAsDataURL(file);
            }
        }
