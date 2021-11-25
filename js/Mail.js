


        
$(document).ready(function() {
    if (document.documentElement.clientWidth >=1024) {
            $("#sendMail_burger").on("click", function(){
                var name = $("#name_burger").val().trim();
                var phone = $("#phone_burger").val().trim();
                var company = $("#company_burger").val().trim();
                if(name == ""){
                alert("Введите имя")
                }else if(phone == ""){
                    alert("Введите телефон")
                }else if(company == ""){
                    alert("Введите название компании")
                }
                else{
                $.ajax({
                    url: 'mail.php',
                    type: 'POST',
                    cache: false,
                    data: { 'name': name, 'phone': phone, 'company': company },
                    dataType: 'html',
                    beforeSend: function(){
                        $("#sendMail_burger").prop("disabled", true);
                    },
                    success: function(data){
                        var success = document.querySelector('#Success_burger')
                        success.style.opacity = "1"
                        setTimeout(function(){
                            $("#MailForm_burger").trigger("reset");
                            $("#sendMail_burger").prop("disabled", false);
                            success.style.opacity = "0"
                        }, 10000)
                    }
                })
                }
            })
            
            $("#sendMail").on("click", function(){
                var name = $("#name").val().trim();
                var phone = $("#phone").val().trim();
                var company = $("#company").val().trim();
                if(name == ""){
                alert("Введите имя")
                }else if(phone == ""){
                    alert("Введите телефон")
                }else if(company == ""){
                    alert("Введите название компании")
                }
                else{
                $.ajax({
                    url: 'mail.php',
                    type: 'POST',
                    cache: false,
                    data: { 'name': name, 'phone': phone, 'company': company },
                    dataType: 'html',
                    beforeSend: function(){
                        $("#sendMail").prop("disabled", true);
                    },
                    success: function(data){
                        var success = document.querySelector('#Success')
                        success.style.opacity = "1"
                        setTimeout(function(){
                            $("#MailForm").trigger("reset");
                            $("#sendMail").prop("disabled", false);
                            success.style.opacity = "0"
                        }, 10000)
                    }
                })
                }
            })
    }


    if (document.documentElement.clientWidth <=1024) {
        $("#sendMail").on("click", function(){
            var name = $("#name").val().trim();
            var phone = $("#phone").val().trim();
            var company = $("#company").val().trim();
            if(name == ""){
            alert("Введите имя")
            }else if(phone == ""){
                alert("Введите телефон")
            }else if(company == ""){
                alert("Введите название компании")
            }
            else{
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                cache: false,
                data: { 'name': name, 'phone': phone, 'company': company },
                dataType: 'html',
                beforeSend: function(){
                    // $("#sendMail").prop("disabled", true);
                    var buttonSend = document.querySelector('#sendMail')
                    buttonSend.style.opacity = "0"
                },
                success: function(data){
                    var success = document.querySelector('#Success')
                    success.style.display = "block"
                    setTimeout(function(){
                        success.style.opacity = "1"
                    },200)
                }
            })
            }
        })
    }
});

