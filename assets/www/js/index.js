var app = {
    initialize: function() {
        // TODO: put PhoneGap initialization here
        // alert("Hello World!");
		$('#submit').click(function(){
			var user = $('#user').val();
			var pass = $('#pass').val();
			var brand = $('#brand').val();
			alert('Username: '+user+', Password: '+pass+', Brand: '+brand);
		});
    },
};
