/*TMODJS:{"version":21,"md5":"25118c2324157f9755a01cdaf1c1844a"}*/
template('main/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,activeIssues=$data.activeIssues,isSummaryActive=$data.isSummaryActive,$out='';$out+='<div class="header" id="header"> <div class="header-bar" id="header-bar"> <div class="left bar-control"> <a href="javascript:;" class="gohome"><i class="icon icon-left-open-big"></i>HOME</a> </div> <ul class="menu"> <li><a href="javascript:;" class="item item-issue item-sleep ';
if(activeIssues && activeIssues.sleep){
$out+='active';
}
$out+='" data-type="sleep">Sleep</a></li> <li><a href="javascript:;" class="item item-issue item-stop ';
if(activeIssues && activeIssues.stop){
$out+='active';
}
$out+='" data-type="stop">Stopping Approach</a></li> <li><a href="javascript:;" class="item item-issue item-weight ';
if(activeIssues && activeIssues.weight){
$out+='active';
}
$out+='" data-type="weight">Weight Change</a></li> <li><a href="javascript:;" class="item item-issue item-sex ';
if(activeIssues && activeIssues.sex){
$out+='active';
}
$out+='" data-type="sex">Sexual Issues</a></li> <li><a href="javascript:;" class="item item-issue item-cost ';
if(activeIssues && activeIssues.cost){
$out+='active';
}
$out+='" data-type="cost">Cost</a></li>  <!--<li><a href="javascript:;" class="item item-mind ';
if(activeIssues && activeIssues.mind){
$out+='active';
}
$out+='" data-type="mind">Keep In Mind</a></li>--> </ul> <div class="right bar-control"> <!--<a href="javascript:;" class="';
if(!isSummaryActive){
$out+='disabled';
}
$out+='" id="btn-summary">Summary <i class="icon icon-right-open-big"></i></a>--> <a href="javascript:;" id="btn-summary">SUMMARY <i class="icon icon-right-open-big"></i></a> </div> </div> </div> ';
return new String($out);
});