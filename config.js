/*** USE THIS FILE TO SET OPTIONS ***/

var graphFiles = ["./data/Female_2003.gexf", "./data/Female_2005.gexf", "./data/Female_2007.gexf", "./data/Female_2009.gexf", "./data/Female_2011.gexf", "./data/Female_2013.gexf", "./data/Female_AG1.gexf", "./data/Female_AG2.gexf", "./data/Female_AG3.gexf", "./data/Female_AG4.gexf", "./data/Female_AG5.gexf", "./data/Female_AG6.gexf", "./data/Female_AG7.gexf", "./data/Female_AG8.gexf", "./data/Male_2003.gexf", "./data/Male_2005.gexf", "./data/Male_2007.gexf", "./data/Male_2009.gexf", "./data/Male_2011.gexf", "./data/Male_2013.gexf", "./data/Male_AG1.gexf", "./data/Male_AG2.gexf", "./data/Male_AG3.gexf", "./data/Male_AG4.gexf", "./data/Male_AG5.gexf", "./data/Male_AG6.gexf", "./data/Male_AG7.gexf", "./data/Male_AG8.gexf"];
var graphFile = graphFiles[0];


// graphFiles.push("Graph_Male_agegroup4.gexf");
// graphFiles.push("Graph_Male_Blocks_2003.gexf");


function getFileList(path) {

    var fileList = [];
    var win = window

// get auto-generated page
    $.ajax({url: path}).then(function(html) {
        // create temporary DOM element
        var document = $(html);

        // find all links ending with .pdf
        document.find('a[href$=".gexf"]').each(function() {
            var pdfName = "./data/" + $(this).text();

            // do what you want here
            fileList.push(pdfName);
        })
        console.log(fileList)

        graphFiles = fileList;
        graphFile = fileList[0];

        GexfJS.setParams(
            gparams
        );
        console.log(window)
        win.onhashchange
    });

}


const gparams = {
    graphFile : graphFile,
    /*
        The GEXF file to show ! -- can be overriden by adding
        a hash to the document location, e.g. index.html#celegans.gexf
        GEXF files can now be replaced by pre-processed JSON files (use gexf2json.py)
        for faster load time
    */
    showEdges : true,
    /*
        Default state of the "show edges" button. Set to null to disable button.
    */
    useLens : false,
    /*
        Default state of the "use lens" button. Set to null to disable button.
    */
    zoomLevel : 0,
    /*
        Default zoom level. At zoom = 0, the graph should fill a 800x700px zone
     */
    curvedEdges : true,
    /*
        False for curved edges, true for straight edges
        this setting can't be changed from the User Interface
    */
    edgeWidthFactor : 1,
    /*
        Change this parameter for wider or narrower edges
        this setting can't be changed from the User Interface
    */
    minEdgeWidth : 1,
    maxEdgeWidth : 50,
    textDisplayThreshold: 9,
    fontSizeFactor : 1,
    nodeSizeFactor : 1,
    /*
        Change this parameter for smaller or larger nodes
       this setting can't be changed from the User Interface
    */
    replaceUrls : true,
    /*
        Enable the replacement of Urls by Hyperlinks
        this setting can't be changed from the User Interface
    */
    showEdgeWeight : true,
    /*
        Show the weight of edges in the list
        this setting can't be changed from the User Interface
    */
    showEdgeLabel : true,
    sortNodeAttributes: true,
    /*
        Alphabetically sort node attributes
     */
    showId : true,
    /*
        Show the id of the node in the list
        this setting can't be changed from the User Interface
    */
    showEdgeArrow : true,
    /*
        Show the edge arrows when the edge is directed
        this setting can't be changed from the User Interface
    */
    language: false,
    /*
        Set to an ISO language code to switch the interface to that language.
        Available languages are:
        - German [de]
        - English [en]
        - French [fr]
        - Spanish [es]
        - Italian [it]
        - Finnish [fi]
        - Turkish [tr]
        - Greek [el]
        - Dutch [nl]
        If set to false, the language will be that of the user's browser.
    */
}


GexfJS.setParams(
    gparams
);

function changeGraph(selection)
{
    gparams.graphFile = graphFiles[selection];
    console.log(gparams)

    GexfJS.setParams(
        gparams
    );
    window.onhashchange()
}

function setupSelector() {
    var x = document.getElementById("graphselector");

    for(let i=0; i<graphFiles.length; i++)
    {
        var option = document.createElement("option");
        var txt = graphFiles[i];
        var ntxt = txt.replace("./data/", "");
        option.text = ntxt;
        option.value = i;
        x.add(option);
    }

}