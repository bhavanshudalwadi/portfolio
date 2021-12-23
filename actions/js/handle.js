$(document).ready(function() {
    // Send Reply
    // Shop Blog Reply
    $('#btnshopsubmit').on('click', function() {
        $blogname = 'Shop Blog';
        $name_shop = $('#name_shop').val();
        $email_shop = $('#email_shop').val();
        $web_shop = $('#web_shop').val();
        $comment_shop = $('#comment_shop').val();

        $('#loader').modal('show');
        
        $.ajax({
            type: 'POST',
            url: 'https://bhavanshuprogrammer.000webhostapp.com/actions/save_reply.php',
            data: {
                    blog_blogname: $blogname,
                    blog_name: $name_shop,
                    blog_email: $email_shop,
                    blog_web: $web_shop,
                    blog_comment: $comment_shop
                },
                success: function(response) {
                    if(response == "Success") {
                        $('#loader').modal('hide');
                        $('#replayModel').modal('show');
                        setTimeout(function() { window.location = "/"; }, 2000);
                    }else {
                        $('#loader').modal('hide');
                        alert('Soory!, Something wants wrong...');
                        console.log(response);
                    }
                }
        });
    });
    $('#btnportfoliosubmit').on('click', function() {
        $blogname = 'Portfolio Blog';
        $name_portfolio = $('#name_portfolio').val();
        $email_portfolio = $('#email_portfolio').val();
        $web_portfolio = $('#web_portfolio').val();
        $comment_portfolio = $('#comment_portfolio').val();
        
        $('#loader').modal('show');
        
        $.ajax({
            type: 'POST',
            url: 'https://bhavanshuprogrammer.000webhostapp.com/actions/save_reply.php',
            data: {
                    blog_blogname: $blogname,
                    blog_name: $name_portfolio,
                    blog_email: $email_portfolio,
                    blog_web: $web_portfolio,
                    blog_comment: $comment_portfolio
                },
                success: function(response) {
                    if(response == "Success") {
                        $('#loader').modal('hide');
                        $('#replayModel').modal('show');
                        setTimeout(function() { window.location = "/"; }, 2000);
                    }else {
                        $('#loader').modal('hide');
                        alert('Soory!, Something wants wrong...');
                        console.log(response);
                    }
                }
        });
    });
    $('#btnbillbooksubmit').on('click', function() {
        $blogname = 'Bill Book Blog';
        $name_billbook = $('#name_billbook').val();
        $email_billbook = $('#email_billbook').val();
        $web_billbook = $('#web_billbook').val();
        $comment_billbook = $('#comment_billbook').val();

        $('#loader').modal('show');

        $.ajax({
            type: 'POST',
            url: 'https://bhavanshuprogrammer.000webhostapp.com/actions/save_reply.php',
            data: {
                    blog_blogname: $blogname,
                    blog_name: $name_billbook,
                    blog_email: $email_billbook,
                    blog_web: $web_billbook,
                    blog_comment: $comment_billbook
                },
                success: function(response) {
                    if(response == "Success") {
                        $('#loader').modal('hide');
                        $('#replayModel').modal('show');
                        setTimeout(function() { window.location = "/"; }, 2000);
                    }else {
                        $('#loader').modal('hide');
                        alert('Soory!, Something wants wrong...');
                        console.log(response);
                    }
                }
        });
    });

    // Save Contect 
    $('#btnsendmsg').on('click', function() {
        $('#loader').modal('show');
        
        $con_name = $('#con_name').val();
        $con_phone = $('#con_phone').val();
        $con_email = $('#con_email').val();
        $con_subject = $('#con_subject').val();
        $con_msg = $('#con_msg').val();

        $.ajax({
            type: 'POST',
            url: 'https://bhavanshuprogrammer.000webhostapp.com/actions/save_contects.php',
            data: {
                    con_name: $con_name,
                    con_phone: $con_phone,
                    con_email: $con_email,
                    con_subject: $con_subject,
                    con_msg: $con_msg
                },
                success: function(response) {
                    if(response == "Success") {
                        $('#loader').modal('hide');
                        $('#contectModel').modal('show');
                        setTimeout(function() { window.location = "/"; }, 2000);
                    }else {
                        $('#loader').modal('hide');
                        alert('Soory!, Something wants wrong...');
                        console.log(response);
                    }
                }
        });
    });

});
