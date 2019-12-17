$(document).ready(function(){
    $("#contactMe").click(function() {
        $("#contactMe").hide();
        $("#closeForm").show();
        $("#floatingForm").show(function() {
            $("section:not(#floatingFormSection)").css("filter", "blur(2px)");
        });
    });
    $("#closeForm").click(function() {
        $("#closeForm").hide();
        $("#contactMe").show();
        $("#floatingForm").hide("fast", function() {
            $("section:not(#floatingFormSection)").css("filter", "");
        });
    });
});