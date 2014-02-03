$(document).ready(function () {
    App($, ko);
});
function App ($, ko) {
    
    // Define Track, Chapter and Page models.
    var Track = function (id, title, chapters, config) {
        var self = this;
        
        this.id     = ko.observable(id     || "");
        this.title  = ko.observable(title  || "New Title");
        this.config = ko.observable(config || {});
        this.chapters = ko.observableArray(chapters || []);
        
        this.addChapter = function () {
            self.chapters.push(new Chapter());
        }
        this.removeChapter = function (chapter) {
            self.chapters.remove(chapter);
        }
    };
    
    var Chapter = function (id, title, pages, config) {
        var self = this;
        
        this.id     = ko.observable(id || "");
        this.title  = ko.observable(title || "New Chapter");
        this.pages  = ko.observableArray(pages || []);
        this.config = config || {};
        
        this.addPage = function () {
            self.pages.push(new Page());
        };
        
        this.removePage = function (page) {
            self.pages.remove(page);
        };
    };
    
    var Page = function (id, title, path, config) {
        var self = this;
        
        this.id     = ko.observable(id || "");
        this.config = config || {};
        this.title  = ko.observable(title || "New Page");
        this.path   = ko.observable(path || "path/to/content/");
    }
    
    // Define dummy model.
    var CourseModel = function () {
        this.selectedTrack   = ko.observable();
        this.selectedChapter = ko.observable();
        this.selectedPage    = ko.observable();
        
        this.tracks = ko.observableArray([
            new Track("main", "Main Track", [
                new Chapter("01", "Chapter 01", [
                    new Page("0101")
                ])
            ])
        ]);
        
        this.addTrack = function () {
            this.tracks.push(new Track());
        };
        
        this.removeTrack = function (track) {
            this.tracks.remove(track);
        };
    }
    
    ko.applyBindings(CourseModel);
}
// 6089080149487118
// 61323843