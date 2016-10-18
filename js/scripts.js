function fetch_data()
      {  
           $.ajax({
                url:"person1.html",
                method:"POST",
                success:function(data){
                     $('#live_data').html(data);
                }
           });
      }
fetch_data();
