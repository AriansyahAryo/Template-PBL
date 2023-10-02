/*=========================================================================================
    File Name: advance-cards.js
    Description: intialize advance cards
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Version: 3.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
    // Area chart
// ------------------------------
$(window).on("load", function(){
    var recent_buyers = new PerfectScrollbar("#recent-buyers", {
        wheelPropagation: true
     });
	 
	 /********************************************
    *               gasan grafik uji teknis dan uji ulang             *
    ********************************************/
    
    ambilMydata();

    function ambilMydata(){
        $.ajax ({
            type : 'POST',
            url : 'ViewData/ambilMydata',
            dataType :'json',
            success : function(e){
                console.log(e); 
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                Morris.Area({
                    element: 'grafik-uji',
                    data: [{
                        month: e[0].month,
						lulus: e[0].lulus,
                        ujiulang: e[0].ujiulang
                        
                    }, {
                        month: e[1].month,
						lulus: e[1].lulus,
                        ujiulang: e[1].ujiulang
                        
                    }, {
                        month: e[2].month,
						lulus: e[2].lulus,
                        ujiulang: e[2].ujiulang
                    }, {
                        month: e[3].month,
						lulus: e[3].lulus,
                        ujiulang: e[3].ujiulang
                    }, {
                        month: e[4].month,
						lulus: e[4].lulus,
                        ujiulang: e[4].ujiulang
                    }, {
                        month: e[5].month,
						lulus: e[5].lulus,
                        ujiulang: e[5].ujiulang
                    }, {
                        month: e[6].month,
						lulus: e[6].lulus,
                        ujiulang: e[6].ujiulang
                    },{
                        month: e[7].month,
						lulus: e[7].lulus,
                        ujiulang: e[7].ujiulang
                    },{
                       month: e[8].month,
						lulus: e[8].lulus,
                        ujiulang: e[8].ujiulang
                    },{
                        month: e[9].month,
						lulus: e[9].lulus,
                        ujiulang: e[9].ujiulang
                    },{
                        month: e[10].month,
						lulus: e[10].lulus,
                        ujiulang: e[10].ujiulang
                    },{
                        month: e[11].month,
						lulus: e[11].lulus,
                        ujiulang: e[11].ujiulang
                    }],
                    xkey: 'month',
                    ykeys: ['lulus','ujiulang'],
                    labels: ['lulus', 'ujiulang'],
                    xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
                        var month = months[x.getMonth()];
                        return month;
                    },
                    dateFormat: function(x) {
                        var month = months[new Date(x).getMonth()];
                        return month;
                    },
                    behaveLikeLine: true,
                    ymax: 500,
                    resize: true,
                    pointSize: 0,
                    pointStrokeColors:['#00B5B8', '#FA8E57', '#F25E75'],
                    smooth: true,
                    gridLineColor: '#E4E7ED',
                    numLines: 6,
                    gridtextSize: 14,
                    lineWidth: 0,
                    fillOpacity: 0.9,
                    hideHover: 'auto',
                    lineColors: ['#00B5B8', '#FA8E57', '#F25E75']
                });
            }
        });
    };
   
	
    /********************************************
    *               PRODUCTS SALES              *
    ********************************************/
   ambilData();

    function ambilData(){
        $.ajax ({
            type : 'POST',
            url : 'home/ambildata',
            dataType :'json',
            success : function(e){
                console.log(e); 
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                Morris.Area({
                    element: 'products-sales',
                    data: [{
                        month: e[0].month,
                        ujiberkala: e[0].ub,
                        ujipertama: e[0].up,
                        numpanguji: e[0].nuk
                    }, {
                        month: e[1].month,
                        ujiberkala: e[1].ub,
                        numpanguji: e[1].nuk,
                        ujipertama: e[1].up
                    }, {
                        month: e[2].month,
                        ujiberkala: e[2].ub,
                        numpanguji: e[2].nuk,
                        ujipertama: e[2].up
                    }, {
                        month: e[3].month,
                        ujiberkala: e[3].ub,
                        numpanguji: e[3].nuk,
                        ujipertama: e[3].up
                    }, {
                        month: e[4].month,
                        ujiberkala: e[4].ub,
                        numpanguji: e[4].nuk,
                        ujipertama: e[4].up
                    }, {
                        month: e[5].month,
                        ujiberkala: e[5].ub,
                        numpanguji: e[5].nuk,
                        ujipertama: e[5].up
                    }, {
                        month: e[6].month,
                        ujiberkala: e[6].ub,
                        numpanguji: e[6].nuk,
                        ujipertama: e[6].up
                    },{
                        month: e[7].month,
                        ujiberkala: e[7].ub,
                        numpanguji: e[7].nuk,
                        ujipertama: e[7].up
                    },{
                        month: e[8].month,
                        ujiberkala: e[8].ub,
                        numpanguji: e[8].nuk,
                        ujipertama: e[8].up
                    },{
                        month: e[9].month,
                        ujiberkala: e[9].ub,
                        numpanguji: e[9].nuk,
                        ujipertama: e[9].up
                    },{
                        month: e[10].month,
                        ujiberkala: e[10].ub,
                        numpanguji: e[10].nuk,
                        ujipertama: e[10].up
                    },{
                        month: e[11].month,
                        ujiberkala: e[11].ub,
                        numpanguji: e[11].nuk,
                        ujipertama: e[11].up
                    }],
                    xkey: 'month',
                    ykeys: ['ujiberkala','numpanguji', 'ujipertama'  ],
                    labels: ['ujiberkala', 'numpanguji', 'ujipertama'  ],
                    xLabelFormat: function(x) { // <--- x.getMonth() returns valid index
                        var month = months[x.getMonth()];
                        return month;
                    },
                    dateFormat: function(x) {
                        var month = months[new Date(x).getMonth()];
                        return month;
                    },
                    behaveLikeLine: true,
                    ymax: 350,
                    resize: true,
                    pointSize: 0,
                    pointStrokeColors:['#00B5B8', '#FA8E57', '#F25E75'],
                    smooth: true,
                    gridLineColor: '#E4E7ED',
                    numLines: 6,
                    gridtextSize: 14,
                    lineWidth: 0,
                    fillOpacity: 0.9,
                    hideHover: 'auto',
                    lineColors: ['#00B5B8', '#FA8E57', '#F25E75']
                });
            }
        });
    };
   
    
    /********************************************
    *               Monthly Sales               *
    ********************************************/
   ambilDataRealisasi();
   function ambilDataRealisasi(){
    $.ajax ({
        type : 'POST',
        url : 'home/ambildataRealisasi',
        dataType :'json',
        success : function(e){
            console.log(e); 
            Morris.Bar({
                element: 'monthly-sales',
                data: [{month: 'Jan', Realisasi: e[0].jRet }, {month: 'Feb', Realisasi: e[1].jRet }, {month: 'Mar', Realisasi: e[2].jRet }, {month: 'Apr', Realisasi: e[3].jRet }, {month: 'May', Realisasi: e[4].jRet }, {month: 'Jun', Realisasi: e[5].jRet }, {month: 'Jul', Realisasi: e[6].jRet }, {month: 'Aug', Realisasi: e[7].jRet }, {month: 'Sep', Realisasi: e[8].jRet }, {month: 'Oct', Realisasi: e[9].jRet }, {month: 'Nov', Realisasi: e[10].jRet }, {month: 'Dec', Realisasi: e[11].jRet }],
                xkey: 'month',
                ykeys: ['Realisasi'],
                labels: ['Realisasi'],
                barGap: 4,
                barSizeRatio: 0.3,
                gridTextColor: '#bfbfbf',
                gridLineColor: '#E4E7ED',
                numLines: 5,
                gridtextSize: 14,
                resize: true,
                barColors: ['#00B5B8'],
                hideHover: 'auto',
            });
        }
    });
};



   
    Morris.Bar.prototype.fillForSeries = function(i) {
      var color;
      return "0-#fff-#f00:20-#000";
    };

    
    
    /************************************************************
    *               Social Cards Content Slider                 *
    ************************************************************/
    // RTL Support
    var rtl = false;
    if($('html').data('textdirection') == 'rtl'){
        rtl = true;
    }
    if(rtl === true)
        $(".tweet-slider").attr('dir', 'rtl');
    if(rtl === true)
        $(".fb-post-slider").attr('dir', 'rtl');

    // Tweet Slider
    $(".tweet-slider").unslider({
        autoplay: true,
        delay:3500,
        arrows: false,
        nav: false,
        infinite: true
    });

    // FB Post Slider
    $(".fb-post-slider").unslider({
        autoplay: true,
        delay:4500,
        arrows: false,
        nav: false,
        infinite: true
    });
	
	
	
	
	
});

