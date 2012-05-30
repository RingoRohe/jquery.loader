#jQuery loader plugin

This is a simple jQuery plugin for managing a loading icon.

##basic usage

	var ldr = $('body').loader({
		image: 'loader_black.gif'
	});

	ldr.show();

You can pass an options object to the plugin with several parameters. At the momente these parameters are:

- image - (url of an image)
- cssClass - (the class name of the loader element)

You can also pass a function to the show and hide function that will be executed right after it has finished.

	var ldr = $('body').loader({
		image: 'loader_black.gif'
	});

	ldr.show(function() {
		window.setTimeout(
			function() {ldr.hide();},
			3000
		);
	});

or a little more complex:

	var ldr = $('body').loader({
		image: 'loader_black.gif'
	});

	ldr.show(function() {
		window.setTimeout(
			function() {ldr.hide(function() {
				alert('finished loading');
			});},
			3000
		);
	});