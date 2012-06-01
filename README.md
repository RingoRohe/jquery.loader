#jQuery loader plugin

This is a simple jQuery plugin for managing a loading icon.

##basic usage

	var ldr = $.loader({
		image: 'loader_black.gif'
	});

	ldr.show();

You can pass an options object to the plugin with several parameters. At the momente these parameters are:

- image - (url of an image)
- backgroundClass - (class of the background element)
- loaderClass - (the class name of the loader element)

You can also pass a options object to the show and hide function that can contain pretty neat things like

- elements - a jQuery object (or a array of objects) that will be overlayed by the loader
- after - a function that will be executet right after the function finishes

##Example

	var ldr = $.loader({
		image: 'loader_black.gif'
	});

	ldr.show({
		elements: [$('body'), $(#myElement)],
		after: function() {
			window.setTimeout(
				function() {ldr.hide();},
				3000
			);
		}
	});

or a little more complex:

	var ldr = $.loader({
		image: 'loader_black.gif'
	});

	ldr.show({
		elements: $('pre'),
		after: function() {
			window.setTimeout(function() {
				ldr.hide({
					after: function() {alert('finished loading');}
				});
			}, 3000);
		}
	});

##Demo

[demo link](http://scripts.madewithco.de/jquery.loader#demo)