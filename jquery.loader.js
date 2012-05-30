(function ($) {

	var Loader = function(options) {
		this.options = options;
		this.init();
	}

	Loader.prototype.init = function() {
		this.container = $('<div>')
			.attr('id', 'loader_background')
			.css('width', '100%')
			.css('height', '100%')
			.css('position', 'fixed')
			.css('top', '0px')
			.css('left', '0px');

		this.inner = $('<div>')
			.attr('id', 'loader_inner')
			.addClass(this.options.cssClass);

		this.image = $('<img>')
			.attr('src', this.options.image);

		this.inner.append(this.image);
		this.container.append(this.inner);

		this.container.hide();
		$('body').append(this.container);
	}

	Loader.prototype.show = function(after) {
		this.container.fadeIn(200, function() {
			if(after && typeof(after) == 'function') {
				after();
			}
		});
	}

	Loader.prototype.hide = function(after) {
		this.container.fadeOut(200, function() {
			if(after && typeof(after) == 'function') {
				after();
			}
		});
	}

	$.fn.loader = function (options) {
		var opts = $.extend({}, $.fn.loader.defaults, options);
		
		return new Loader(opts);
		
	};

	$.fn.loader.defaults = {
		image: 'http://www.ajaxload.info/cache/FF/FF/FF/00/00/00/4-0.gif',
		cssClass: 'loader_inner'
	};

}(jQuery));