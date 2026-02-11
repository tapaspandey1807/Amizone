
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/


    $('#loginform').on('submit', function () {
       
        var check = true;
        var input = $(this).find('.validate-input .input100');
        
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('#ForgetForm').on('submit', function () {
        
        var check = true;
        var input = $(this).find('.validate-input .input100');
        
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        // debugger;
        if ($(input).attr('type') == 'text' || $(input).attr('type') == 'password') {                        
            if ($(input).val().trim() == "") {            
                return false;
            }
        }
        else {

            if ($(input).val().trim() == '') {

                return false;
            }
        }
    }



    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);

