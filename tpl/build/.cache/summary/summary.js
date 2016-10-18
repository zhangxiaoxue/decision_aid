/*TMODJS:{"version":18,"md5":"8fae97082633431461387e75e730ad15"}*/
template('summary/summary',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,activeIssues=$data.activeIssues,$out='';$out+='<div class="summary" id="summary"> <div class="summary-container"> <table width="100%"> ';
$each(list,function($value,$index){
$out+=' <tr> <td colspan="6"> <i id="m-';
$out+=$escape($value.name);
$out+='" class="icon icon-ok-circled active checkbox" /></i> <label class="medicine" for="m-';
$out+=$escape($value.name);
$out+='"> <span class="medicine-name">';
$out+=$escape($value.name);
$out+='</span> <span class="medicine-brand">';
$out+=$escape($value.brand);
$out+='</span> </label> </td> </tr> <tr> <td> <div class="scard scard-sleep ';
if(activeIssues && activeIssues.sleep){
$out+='active';
}
$out+='"> <div class="scard-header"> Sleep </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.sleep.name);
$out+='</p> </div> </div> </td> <td> <div class="scard scard-weight ';
if(activeIssues && activeIssues.weight){
$out+='active';
}
$out+='"> <div class="scard-header"> Weight Change </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.weight.name);
$out+='</p> </div> </div> </td> <td> <div class="scard scard-stop ';
if(activeIssues && activeIssues.stop){
$out+='active';
}
$out+='"> <div class="scard-header"> Stopping Approach </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.stop.name);
$out+='</p> </div> </div> </td> <td> <div class="scard scard-sex ';
if(activeIssues && activeIssues.sex){
$out+='active';
}
$out+='"> <div class="scard-header"> Sexual Issues </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.sex.name);
$out+='</p> </div> </div> </td> <td> <div class="scard scard-cost ';
if(activeIssues && activeIssues.cost){
$out+='active';
}
$out+='"> <div class="scard-header"> Cost </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.cost.name);
$out+='</p> </div> </div> </td> <td> <div class="scard scard-mind active"> <div class="scard-header"> Keep In Mind </div> <div class="scard-cnt"> <p>';
$out+=$escape($value.mind.name);
$out+='</p> </div> </div> </td> </tr> ';
});
$out+=' </table> </div> </div>';
return new String($out);
});