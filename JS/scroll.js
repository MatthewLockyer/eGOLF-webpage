var controller = new ScrollMagic.Controller();


// PES TEXT SCROLL - FADE IN  & OUT

const pesSectionInfoText = document.querySelector('.pesSectionInfo')
var pesSectionInfoScroll = new TimelineMax()

pesSectionInfoScroll
.from(pesSectionInfoText, 3, {opacity: 0})
.to(pesSectionInfoText, 3, {opacity: 1})
.to(pesSectionInfoText, 3, {opacity: 0})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.pesSectionInfo',
    duration: 800,
    triggerHook: .75,
})
.setTween(pesSectionInfoScroll)
.addTo(controller)





// DESIGN EXTERIOR TEXT SCROLL - FADE IN

const designExteriorText = document.querySelector('.designExterior')
var designExteriorScroll = new TimelineMax()

designExteriorScroll
.from(designExteriorText, 3, {opacity: 0})
.to(designExteriorText, 3, {opacity: 1})


var scene3 = new ScrollMagic.Scene({
    triggerElement: '.designExterior',
    duration: 800,
    triggerHook: .75,
})
.setTween(designExteriorScroll)
.addTo(controller)




// DESIGN INTERIOR TEXT SCROLL - FADE IN

const designInteriorText = document.querySelector('.designInterior')
var designInteriorScroll = new TimelineMax()

designInteriorScroll
.from(designInteriorText, 3, {opacity: 0})
.to(designInteriorText, 3, {opacity: 1})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.designInterior',
    duration: 800,
    triggerHook: .75,
})
.setTween(designInteriorScroll)
.addTo(controller)





// DESIGN LIGHTS TEXT SCROLL - FADE IN

const designLightsText = document.querySelector('.designLights')
var designLightsScroll = new TimelineMax()

designLightsScroll
.from(designLightsText, 3, {opacity: 0})
.to(designLightsText, 3, {opacity: 1})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.designLights',
    duration: 800,
    triggerHook: .75,
})
.setTween(designLightsScroll)
.addTo(controller)




// DESIGN WHEELS TEXT SCROLL - FADE IN  & OUT

const designWheelsText = document.querySelector('.designWheels')
var designWheelsScroll = new TimelineMax()

designWheelsScroll
.from(designWheelsText, 3, {opacity: 0})
.to(designWheelsText, 3, {opacity: 1})
.to(designWheelsText, 3, {opacity: 0})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.designWheels',
    duration: 800,
    triggerHook: .75,
})
.setTween(designWheelsScroll)
.addTo(controller)


// COLOUR CHOOSER TEXT SCROLL - FADE IN & OUT

const colourChoiceChooseText = document.querySelector('.colourChoiceChoose')
var colourChoiceChooseScroll = new TimelineMax()

colourChoiceChooseScroll
.from(colourChoiceChooseText, 3, {opacity: 0})
.to(colourChoiceChooseText, 3, {opacity: 1})
.to(colourChoiceChooseText, 3, {opacity: 0})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.colourChoiceChoose',
    duration: 500,
    triggerHook: .85,
})
.setTween(colourChoiceChooseScroll)
.addTo(controller)


// COLOUR RANGE TEXT SCROLL - FADE IN & OUT

const colourChoiceRangeText = document.querySelector('.colourChoiceRange')
var colourChoiceRangeScroll = new TimelineMax()

colourChoiceRangeScroll
.from(colourChoiceRangeText, 3, {opacity: 0})
.to(colourChoiceRangeText, 3, {opacity: 1})
.to(colourChoiceRangeText, 3, {opacity: 0})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.colourChoiceRange',
    duration: 500,
    triggerHook: .85,
})
.setTween(colourChoiceRangeScroll)
.addTo(controller)


// COLOUR CTA TEXT SCROLL - FADE IN & OUT

const colourChoiceCTAText = document.querySelector('.colourChoiceCTA')
var colourChoiceCTAScroll = new TimelineMax()

colourChoiceCTAScroll
.from(colourChoiceCTAText, 3, {opacity: 0})
.to(colourChoiceCTAText, 3, {opacity: 1})
.to(colourChoiceCTAText, 3, {opacity: 0})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.colourChoiceCTA',
    duration: 500,
    triggerHook: .85,
})
.setTween(colourChoiceCTAScroll)
.addTo(controller)


// GALLERY BACKGROUND CHANGE FROM WHITE TO BLACK
const gallerySectionBackground = document.querySelector('.gallerySection')
var gallerySectionScroll = new TimelineMax()

gallerySectionScroll
.from(gallerySectionBackground, 3, {opacity: 0})
.to(gallerySectionBackground, 3, {opacity: 1})

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.gallerySection',
    duration: 1000,
    triggerHook: .75,
})
.setTween(gallerySectionScroll)
.addTo(controller)




// SHOWCASE ITEM 1 TEXT SCROLL - FADE IN & OUT

const showcaseItemOneText = document.querySelector('.showcaseItemOne')
var showcaseItemOneScroll = new TimelineMax()

showcaseItemOneScroll
.from(showcaseItemOneText, 3, {opacity: 0})
.to(showcaseItemOneText, 3, {opacity: 1})
.to(showcaseItemOneText, 3, {opacity: 0})

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.showcaseItemOne',
    duration: 800,
    triggerHook: .5,
})
.setTween(showcaseItemOneScroll)
.addTo(controller)




// SHOWCASE ITEM 2 TEXT SCROLL - FADE IN & OUT

const showcaseItemTwoText = document.querySelector('.showcaseItemTwo')
var showcaseItemTwoScroll = new TimelineMax()

showcaseItemTwoScroll
.from(showcaseItemTwoText, 3, {opacity: 0})
.to(showcaseItemTwoText, 3, {opacity: 1})
.to(showcaseItemTwoText, 3, {opacity: 0})

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.showcaseItemTwo',
    duration: 800,
    triggerHook: .5,
})
.setTween(showcaseItemTwoScroll)
.addTo(controller)




// SHOWCASE ITEM 3 TEXT SCROLL - FADE IN & OUT

const showcaseItemThreeText = document.querySelector('.showcaseItemThree')
var showcaseItemThreeScroll = new TimelineMax()

showcaseItemThreeScroll
.from(showcaseItemThreeText, 3, {opacity: 0})
.to(showcaseItemThreeText, 3, {opacity: 1})
.to(showcaseItemThreeText, 3, {opacity: 0})

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.showcaseItemThree',
    duration: 800,
    triggerHook: .5,
})
.setTween(showcaseItemThreeScroll)
.addTo(controller)




// SHOWCASE ITEM 4 TEXT SCROLL - FADE IN & OUT

const showcaseItemFourText = document.querySelector('.showcaseItemFour')
var showcaseItemFourScroll = new TimelineMax()

showcaseItemFourScroll
.from(showcaseItemFourText, 3, {opacity: 0})
.to(showcaseItemFourText, 3, {opacity: 1})
.to(showcaseItemFourText, 3, {opacity: 0})

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.showcaseItemFour',
    duration: 800,
    triggerHook: .5,
})
.setTween(showcaseItemFourScroll)
.addTo(controller)




// OTHER ELECTRIC CARS TEXT - FADE IN & OUT

const oECTitleText = document.querySelector('.oECTitle')
var oECTitleScroll = new TimelineMax()

oECTitleScroll
.from(oECTitleText, 3, {opacity: 0})
.to(oECTitleText, 3, {opacity: 1})
.to(oECTitleText, 3, {opacity: 0})

var scene4 = new ScrollMagic.Scene({
    triggerElement: '.oECTitle',
    duration: 800,
    triggerHook: .75,
})
.setTween(oECTitleScroll)
.addTo(controller)