var cQ = {

    addClass: function (element, className) {
        var classNames = element.className.split(' ');
        if (classNames.indexOf(className) == -1) {
            classNames.push(className);
        }
        return classNames.join(' ');
    },
    
    removeClass: function(element, className) {
        var classNames = element.className.split(' ');
        var index = classNames.indexOf(className)
        if ( index != -1) {
            classNames.splice(index, 1);
        }
        return classNames.join(' ');
    },

    resizeObserver: new ResizeObserver(entries => {
        for( var entry of entries ) {
            var el = entry.target;
            try {
                styles = el.getAttribute('cq-styles').split(',');
                breakpoints = el.getAttribute('cq-breakpoints').split(',');
                width = entry.contentRect.width;

                if (width <= parseInt(breakpoints[0])) {
                    el.className = cQ.addClass(el, styles[0]);
                } else {
                    el.className = cQ.removeClass(el, styles[0]);
                }

                if (breakpoints.length > 1) {
                    for (var i = 1; i < breakpoints.length; i++) {
                        if (width > parseInt(breakpoints[i - 1]) && width <= parseInt(breakpoints[i])) {
                            el.className = cQ.addClass(el, styles[i]);
                        } else {
                            el.className = cQ.removeClass(el, styles[i]);
                        }
                    }
                }

                if (width > (breakpoints[breakpoints.length - 1])) {
                    el.className = cQ.addClass(el, styles[styles.length - 1]);
                } else {
                    el.className = cQ.removeClass(el, styles[styles.length - 1]);
                }
                
            } catch(e) {
                console.log(e);
            }
        }
    }),


    init: function() {

        document.querySelectorAll('[cq-styles]').forEach(el => {
            cQ.resizeObserver.observe(el);
        });
        

        // also use MutationObserver to look for changes to the DOM to capture dynamically added elements

    }

}

