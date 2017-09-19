
$(document).ready(function(){
        $('#addBtn').click(
            function(){
                var toAdd = $('input[name=task]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
});  
