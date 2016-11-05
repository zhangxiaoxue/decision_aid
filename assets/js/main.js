(function(){
    var router = KiRouter.router();
    var $pageMain = $('#page-main');
    var medicineCount = 11;
    var activeMedicine = {};
    var activeIssues = {};

    //initiate active medicine object
    for(var i = 0; i <= medicineCount; i++){
        activeMedicine[i] = false;
    }

    //fast click
    FastClick.attach(document.body);

    //state page
    router.add("/", function () {
        $pageMain.html(template('starter'));
        addStarterEventListener();
    });

    //main page
    router.add("/index", function () {

        activeMedicine = Cookies.getJSON('activeMedicine') || {};

        if(Cookies.getJSON('activeIssues')){
            var isSummaryActive = false;
            activeIssues = Cookies.getJSON('activeIssues') || {};

            $.each(activeMedicine, function(key, value){
                if(value){
                    isSummaryActive = true;
                    return;
                }
            });
            $pageMain.html(template('main/header', {activeIssues: activeIssues, isSummaryActive: isSummaryActive}));

            if($('#card-container').length < 1){
                $pageMain.append(template('main/content', {activeMedicine: activeMedicine}));
            }

            $.each(activeIssues, function(key, value){
                if(value){
                    $('#card-container').append(template('cards/' + key, {activeMedicine: activeMedicine}));
                }
            });
        }else{
            if(!$('#header').length){
                $pageMain.html(template('main/header'));
                $pageMain.append(template('main/empty'));
            }
        }

        addIndexHeaderEvent();
        addIndexMainEvent();
    });

    //summary page
    router.add("/summary/", function () {

        $pageMain.html(template('summary/header'));
        $pageMain.append(template('summary/empty'));


        addSummaryEventListener();

    });

    //summary page
    router.add("/summary/:index", function (params) {

        var indexs = params.index.split(',');

        activeIssues = Cookies.getJSON('activeIssues') || {};

        $.getJSON('./data/medicines.json', function(resp){
            var data = resp;
            var activeData = [];

            indexs.forEach(function(index){
                var currentIndex = index;
                resp.groups.forEach(function(group){
                    group.medicines.forEach(function(medicine){
                        if(medicine.index == currentIndex){
                            activeData.push(medicine);
                        }
                    });
                });
            });

            $pageMain.append(template('summary/summary', {list: activeData, activeIssues: activeIssues}));
            addSummaryEventListener();

        });
        $pageMain.html(template('summary/header'));

    });


    //router.serverSupportsEscapedFragment = true;
    router.fallbackRoute = function (url) { window.location.href = '#!/'; };
    //router.transparentRouting();
    router.hashbangRouting();


    function addStarterEventListener(){
        $('#btn-next').on('click', function(e){
            e.preventDefault();

            //clear cookie
            Cookies.remove('activeMedicine', { path: './' });
            Cookies.remove('activeIssues', { path: './' });

            window.location.href = '#!/index';
        })
    }
    function addIndexHeaderEvent(){
        //choose issue
        var $header = $('#header');
        $header.on('click', '.menu a', function(e){
            e.preventDefault();

            var $this = $(this);
            var type = $this.data('type');

            if($this.hasClass('active')){
                //remove card
                $this.removeClass('active');
                updateActiveIssues(activeIssues, type, false);

                if($('#card-' + type).length > 0){
                    $('#card-' + type).remove();
                }
            }else{
                var $cardContainer = $('#card-container');
                //error message
                if($header.find('.menu .item-issue.active').length > 2 && $this.hasClass('item-issue')){
                    /*var n = noty({
                        theme: 'customize',
                        layout: 'topRight',
                        type: 'error',
                        text: '<div class="noty_message"><span class="noty_text">You can choose less than 3 issues. Please remove one of the current issues first and then choose a new one.</span><div class="noty_close"></div></div>',
                        timeout: 3000,
                        animation: {
                            open: {opacity: 'toggle'},
                            close: {opacity: 'toggle'},
                            easing: 'swing',
                            speed: 500
                        }
                    });
                    return;*/

                    //remove the first card
                    var $firstCard = $cardContainer.find('.card').eq(0);
                    var firstType = $firstCard.data('type');

                    updateActiveIssues(activeIssues, firstType, false);
                    $firstCard.remove();
                    //de-active menu item
                    $header.find('.item-' + firstType).removeClass('active');
                }
                //add card
                $this.addClass('active');
                updateActiveIssues(activeIssues, type, true);
                if($cardContainer.length < 1){
                    $('#content').remove();
                    $pageMain.append(template('main/content'));
                    $('#card-container').append(template('cards/' + type, {activeMedicine: activeMedicine}));
                    addIndexMainEvent();
                }else{
                    $cardContainer.append(template('cards/' + type, {activeMedicine: activeMedicine}));
                    updateCardEvent();
                }
            }

        });
       /* $header.on('click', '.goback', function(e){
            e.preventDefault();

            window.history.back();
        });*/

        $header.on('click', '.gohome', function(e){
            e.preventDefault();

            window.location.href = '#!/';
        });

        $('#btn-summary').on('click', function(e){
            e.preventDefault();

            if($(this).hasClass('disabled')){
                return false;
            }

            var indexStr = '';
            for(var i = 0; i <= medicineCount; i++){
                if(activeMedicine[i] === true){
                    indexStr += indexStr === '' ? i : ',' + i;
                }
            }

            window.location.href = '#!/summary/' + indexStr;
        });
    }

    function addIndexMainEvent(){
        //choose medicine
        updateCardEvent();

        $('#control-fold').on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            $this.toggleClass('active');
            $('#card-mind').toggleClass('active');

        });
    }

    function updateCardEvent(){
        $('.zebra-control').off('click');
        $('.zebra-control').on('click', '.row', function(e){
            e.preventDefault();
            var $this = $(this);
            var index = $this.data('index');

            if($this.hasClass('active')){
                $('.zebra-control .row:nth-child(' + (index + 1) + ')').removeClass('active');
                $('.zebra .row:nth-child(' + (index + 1) + ')').removeClass('active');
                //update active medicine object
                updateActiveMedicine(activeMedicine, index, false);
            }else{
                $('.zebra-control .row:nth-child(' + (index + 1) + ')').addClass('active');
                $('.zebra .row:nth-child(' + (index + 1) + ')').addClass('active');
                //update active medicine object
                updateActiveMedicine(activeMedicine, index, true);
            }

            //updateSummaryBtn(activeMedicine);
        });

        var updateSummaryBtn = function(activeMedicine){
            var $summaryBtn = $('#btn-summary');

            for(var i = 0; i <= medicineCount; i++){
                if(activeMedicine[i] === true){
                    $summaryBtn.removeClass('disabled');
                    return;
                }
            }
            $summaryBtn.addClass('disabled');

        };
    }

    function addSummaryEventListener(){
        var $header = $('#header');
        $header.on('click', '.goback', function(e){
            e.preventDefault();

            window.history.back();
        });

        $('#btn-home').on('click', function(e){
            e.preventDefault();

            //clear cookie
            Cookies.remove('activeMedicine', { path: './' });
            Cookies.remove('activeIssues', { path: './' });

            window.location.href = '#!/';
        });

        $('#btn-print').on('click', function(e){
            e.preventDefault();
            window.print();
        });

        $('#summary').on('click', '.medicine, .checkbox', function(e){
            e.preventDefault();

            var $this = $(this);
            $this.parent().find('.checkbox').toggleClass('active');
        })
    }

    function updateActiveIssues(activeIssues, type, boolen){
        activeIssues[type] = boolen;

        Cookies.set("activeIssues", activeIssues, { expires: 1, path: './'});
    }

    function updateActiveMedicine(activeMedicine, index, boolen){
        activeMedicine[index] = boolen;
        Cookies.set("activeMedicine", activeMedicine, { expires: 1, path: './'});
    }
})();