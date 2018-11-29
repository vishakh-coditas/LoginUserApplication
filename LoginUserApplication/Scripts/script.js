
function checkFormValidation() {
    //All field values;
    //debugger;
    var firstName = $("FirstName").val;
    var lastName = $("lastname").val;

    if (firstName === "" && lastName === "") {
        e.stopPropagation();
        $("#FirstName").css("border-color", "#FF0000");
        $("#lastname").css("border-color", "#FF0000");
        //alert("please enter values..");
        return false;
    } else {
        alert("Field has values..");
    }
}


$(document).ready(function () {
    

    $("#username").focusout(function () {

        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            //  $('#submit').attr('disabled',false);
            $("#error_username").text("");
        }


    });

    $("#password").focusout(function () {

        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            //  $('#submit').attr('disabled',false);
            $("#error_password").text("");
        }


    });

    $("#confirm_password").focusout(function () {

        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            //  $('#submit').attr('disabled',false);
            $("#error_comfirm_password").text("");
        }


    });

    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() === $('#confirm_password').val()) {
            $('#error_comfirm_password').html('Password Matching').css('color', 'green');
        } else
            $('#error_comfirm_password').html('Password Not Matching').css('color', 'red');

    });

    //for firstname
    $("#FirstName").focusout(function () {

        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            //  $('#submit').attr('disabled',false);
            $("#error_name").text("");
        }


    });


    $('#FirstName').on('keypress', function (e) {
        var regex = new RegExp("^[a-zA-Z ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    });


    //for lastname
    $("#lastname").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            
        }
        else {
            
            $(this).css("border-color", "#2eb82e");
            $("#error_lastname").text("");
        }
    });


    $('#lastname').on('keypress', function (e) {
        var regex = new RegExp("^[a-zA-Z ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {

            return true;
        }
        e.preventDefault();
        return false;
    });

    //for dob
    $("#dob").focusout(function () {

        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            $("#error_dob").text("");
        }
    });

    //dob - disable future dates
    $(function () {
        var dtToday = new Date();

        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if (month < 10)
            month = '0' + month.toString();
        if (day < 10)
            day = '0' + day.toString();

        var maxDate = year + '-' + month + '-' + day;
        $('#dob').attr('max', maxDate);
    });

    
    $("#address").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            //   $('#submit').attr('disabled',true);
            //  flag=0;
            // $("#error_dob").text(" Enter your Date of Birth!");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            // $('#submit').attr('disabled',false);
            $("#error_address").text("");
        }
    });


    $("#dept_id").focusout(function () {
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            //   $('#submit').attr('disabled',true);
            //  flag=0;
            // $("#error_dob").text(" Enter your Date of Birth!");
        }
        else {
            $(this).css("border-color", "#2eb82e");
            // $('#submit').attr('disabled',false);
            $("#error_dept_id").text("");
        }
    });

    
    //for gender
    $("#gender").focusout(function () {
        $(this).css("border-color", "#2eb82e");

    });


    //for email
    $("#email").focusout(function () {
        var email = $("#email").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            e.preventDefault();
        }
        else if (!testEmail.test(email)) {
            $(this).css("border-color", "#FF0000");
            $("#error_email").text(" Enter Valid Email");
            e.preventDefault();
        }

        else if ($(this).val() !== '') {
            $(this).css("border-color", "#2eb82e");
            $("#error_email").text("");
        }
        

    });

    
    //for phone number
    $("#phone").focusout(function () {
        var phNumber = $("#phone").val();
        if ($(this).val() === '') {
            $(this).css("border-color", "#FF0000");
            // $('#submit').attr('disabled',true);
            //  flag=0;
            // $("#error_phone").text(" Enter your Phone Number!");
            e.preventDefault();

        }
        else if (phNumber.length !== 10) {
            $(this).css("border-color", "#FF0000");
            $("#error_phone").text(" Length of Phone Number Should Be Ten");
            e.preventDefault();

        }
            //else if (!$.isNumeric(phNumber)) {
            //    $(this).css("border-color", "#FF0000");
            //    // $('#submit').attr('disabled',true);
            //    //  flag=0;
            //    $("#error_phone").text(" Phone Number Should Be Numeric");
            //    e.preventDefault();

            //}
        else {
            $(this).css("border-color", "#2eb82e");
            // $('#submit').attr('disabled',false);
            $("#error_phone").text("");
        }
    });

    $('#phone').on('keypress', function (e) {
        var regex = new RegExp("^[0-9 ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {

            return true;
        }
        e.preventDefault();
        return false;
    });

    //for submit botton
    $("#submit").click(function (e) {
        
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var email = $("#email").val();
        var phNumber = $("#phone").val();

        //if ($("#FirstName").val() === '' || $("#lastname").val() === '' || $("#username").val() === '' || $("#password").val() === '' || $("#confirm_password").val() === '' || $("#dob").val() === '' || $("#email").val() === '' || $("#dept_id").val() === '' || $("#phone").val() === '' || $("#address").val() === '') {
        //    $("#FirstName").css("border-color", "#FF0000");
        //    $("#lastname").css("border-color", "#FF0000");
        //    $("#username").css("border-color", "#FF0000");
        //    $("#password").css("border-color", "#FF0000");
        //    $("#confirm_password").css("border-color", "#FF0000");
        //    $("#dept_id").css("border-color", "#FF0000");
        //    $("#dob").css("border-color", "#FF0000");
        //    $("#email").css("border-color", "#FF0000");
        //    $("#phone").css("border-color", "#FF0000");
        //    $("#gender").css("border-color", "#FF0000");
        //    $("#address").css("border-color", "#FF0000");
        //    e.preventDefault();

        //}
        //else if (testEmail.test(email) === false) {
        //    $('.container').css("display", "block");
        //    e.preventDefault();
        //}

        if ($("#FirstName").val() === '') {
            $("#FirstName").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#lastname").val() === '') {
            $("#lastname").css("border-color", "#FF0000");
            e.preventDefault();
        }
         if ($("#username").val() === '') {
            $("#username").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#password").val() === '') {
            $("#password").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#confirm_password").val() === '') {
            $("#confirm_password").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#dept_id").val() === '') {
            $("#dept_id").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#dob").val() === '') {
            $("#dob").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#email").val() === '' || testEmail.test(email) === false) {
            $("#email").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#gender").val() === '') {
            $("#gender").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#address").val() === '') {
            $("#address").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#phone").val() === '' || $("#phone").length() !== 10) {
            $("#phone").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($('#password').val() !== $('#confirm_password').val()) {
            $("#address").css("border-color", "#FF0000");
            $('#error_comfirm_password').html('Password Not Matching').css('color', 'red');
            e.preventDefault();

        }
        //if (testEmail.test(email) === false) {
        //    $("#email").css("border-color", "#FF0000");
        //    e.preventDefault();
        //}
        
     
    });

    $("#login").click(function (e) {
     
        
        if ($("#username").val() === '') {
            $("#username").css("border-color", "#FF0000");
            e.preventDefault();
        }
        if ($("#password").val() === '') {
            $("#password").css("border-color", "#FF0000");
            e.preventDefault();
        }
                
        
    });

    $("#reset").click(function () {
        $("#FirstName").css("border-color", "");
        $("#lastname").css("border-color", "");
        $("#username").css("border-color", "");
        $("#password").css("border-color", "");
        $("#confirm_password").css("border-color", "");
        $("#email").css("border-color", "");
        $("#dept_id").css("border-color", "");
        $("#dob").css("border-color", "");
        $("#gender").css("border-color", "");
        $("#phone").css("border-color", "");
        $("#address").css("border-color", "");

        $("#error_name").text("");
        $("#error_lastname").text("");
        $("#error_username").text("");
        $("#error_password").text("");
        $("#error_confirm_password").text("");
        $("#error_dob").text("");
        $("#error_dept_id").text("");
        $("#error_phone").text("");
        $("#error_address").text("");
        $("#error_email").text("");


    });


});


   

    function CheckValidity() {
        //var validationFailed = false;

        if ($("#FirstName").val() === "" && $("#lastname").val() === "" && $("#username").val() === "" && $("#password").val() === "" && $("#confirm_password").val() === "" && $("#dob").val() === "" && $("#dept_id").val() === "" && $("#email").val() === "" && $("#phone").val() === "" && $("#address").val() === "") {
            e.preventDefault();
            // do your validation here ...
         
            return false;
        }
        else {
            return true;
        }

    }

    function submitform() {
    var f = document.getElementsByTagName('myForm')[0];
    if (f.checkValidity()) {
        f.submit();
    } else {
        alert(document.getElementById('error_firstname').validationMessage);
    }
}

 
