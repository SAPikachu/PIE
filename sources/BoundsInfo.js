/**
 * Handles calculating, caching, and detecting changes to size and position of the element.
 * @constructor
 * @param {Element} el the target element
 */
PIE.BoundsInfo = function( el ) {
    this.targetElement = el;
};
PIE.BoundsInfo.prototype = {

    _locked: 0,

    positionChanged: function() {
        var last = this._lastBounds,
            bounds;
        return !last || ( ( bounds = this.getBounds() ) && ( last.x !== bounds.x || last.y !== bounds.y ) );
    },

    sizeChanged: function() {
        var last = this._lastBounds,
            bounds;
        return !last || ( ( bounds = this.getBounds() ) && ( last.w !== bounds.w || last.h !== bounds.h ) );
    },

    _getLiveBoundsImpl: function(target) {
        var el = target || this.targetElement,
            rect = el.getBoundingClientRect(),
            isIE9 = PIE.ieDocMode === 9,
            isIE7 = PIE.ieVersion === 7,
            width = rect.right - rect.left;

        return {
            x: rect.left,
            y: rect.top,
            // In some cases scrolling the page will cause IE9 to report incorrect dimensions
            // in the rect returned by getBoundingClientRect, so we must query offsetWidth/Height
            // instead. Also IE7 is inconsistent in using logical vs. device pixels in measurements
            // so we must calculate the ratio and use it in certain places as a position adjustment.
            w: isIE9 || isIE7 ? el.offsetWidth : width,
            h: isIE9 || isIE7 ? el.offsetHeight : rect.bottom - rect.top,
            logicalZoomRatio: ( isIE7 && width ) ? el.offsetWidth / width : 1
        };
    },

    getLiveBounds: function() {
        return this._getLiveBoundsImpl();
    },

    getClipString: function() {
        var bounds = null;

        var clippingEl = el.parentNode;
        while (clippingEl.nodeName.toUpperCase() !== "BODY") {
            if (clippingEl.currentStyle.getAttribute("overflow") === "hidden") {
                var clippingElBounds = this._getLiveBoundsImpl(clippingEl);
                if (!bounds) {
                    bounds = clippingElBounds;
                    continue;
                }

                if (bounds.x < clippingElBounds.x) {
                    bounds.w -= clippingElBounds.x - bounds.x;
                    bounds.x = clippingElBounds.x;
                }
                if (bounds.y < clippingElBounds.y) {
                    bounds.h -= clippingElBounds.y - bounds.y;
                    bounds.y = clippingElBounds.y;
                }
                bounds.w = Math.max(0, 
                    Math.min(
                        bounds.w, 
                        clippingElBounds.w - (bounds.x - clippingElBounds.x)
                    )
                );
                bounds.h = Math.max(0,
                    Math.min(
                        bounds.h,
                        clippingElBounds.h - (bounds.y - clippingElBounds.y)
                    )
                );
            }
            clippingEl = clippingEl.parentNode;
        }

        if (!bounds) {
            return "";
        }

        var elementBounds = this._getLiveBoundsImpl();
        return "rect(" + 
            ((bounds.y - elementBounds.y) * bounds.logicalZoomRatio) + "px, " +
            ((bounds.x + bounds.w - elementBounds.x) * bounds.logicalZoomRatio) + "px, " +
            ((bounds.y + bounds.h - elementBounds.y) * bounds.logicalZoomRatio) + "px, " +
            ((bounds.x - elementBounds.x) * bounds.logicalZoomRatio) + "px)";
    },

    getBounds: function() {
        return this._locked ? 
                ( this._lockedBounds || ( this._lockedBounds = this.getLiveBounds() ) ) :
                this.getLiveBounds();
    },

    hasBeenQueried: function() {
        return !!this._lastBounds;
    },

    lock: function() {
        ++this._locked;
    },

    unlock: function() {
        if( !--this._locked ) {
            if( this._lockedBounds ) this._lastBounds = this._lockedBounds;
            this._lockedBounds = null;
        }
    }

};
