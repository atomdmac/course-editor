$(document).ready(function () {
    App($, ko);
});
function App ($, ko) {
    
    var Model = {
        things: ko.observableArray([
            {
                name: /*ko.observable(*/"banana"/*)*/,
                cost: ko.observable(29.39)
            },
            {
                name: ko.observable("bat hair"),
                cost: ko.observable(0.99)
            },
            {
                name: ko.observable("beer coozy"),
                cost: ko.observable(4.99)
            }
        ])
    };
    
    ko.applyBindings(Model);
}
// 6089080149487118
// 61323843