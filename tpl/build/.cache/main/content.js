/*TMODJS:{"version":95,"md5":"ddfebbae0a7b4e5c2536b51f60c8cc53"}*/
template('main/content',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,activeMedicine=$data.activeMedicine,$out='';$out+='<div class="content" id="content"> <div class="zebra"> <div class="row odd ';
if(activeMedicine && activeMedicine[0]){
$out+='active';
}
$out+='" data-index="0"></div> <div class="row even ';
if(activeMedicine && activeMedicine[1]){
$out+='active';
}
$out+='" data-index="1"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[2]){
$out+='active';
}
$out+='" data-index="2"></div> <div class="row even ';
if(activeMedicine && activeMedicine[3]){
$out+='active';
}
$out+='" data-index="3"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[4]){
$out+='active';
}
$out+='" data-index="4"></div> <div class="row even ';
if(activeMedicine && activeMedicine[5]){
$out+='active';
}
$out+='" data-index="5"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[6]){
$out+='active';
}
$out+='" data-index="6"></div> <div class="row even ';
if(activeMedicine && activeMedicine[7]){
$out+='active';
}
$out+='" data-index="7"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[8]){
$out+='active';
}
$out+='" data-index="8"></div> <div class="row even ';
if(activeMedicine && activeMedicine[9]){
$out+='active';
}
$out+='" data-index="9"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[10]){
$out+='active';
}
$out+='" data-index="10"></div> <div class="row even row-2 ';
if(activeMedicine && activeMedicine[11]){
$out+='active';
}
$out+='" data-index="11"></div> </div> <div class="medicine"> <div class="medicine-group medicine-group-6"> <div class="medicine-group-name"> SSRIs </div> <div class="group-bracket"></div> <ul> <li> <p class="medicine-name">Citalopram</p> <p class="medicine-brand">(Celexa®)</p> </li> <li> <p class="medicine-name">Escitalopram</p> <p class="medicine-brand">(Lexapro®)</p> </li> <li> <p class="medicine-name">Fluoxetine</p> <p class="medicine-brand">(Prozac®)</p> </li> <li> <p class="medicine-name">Fluvoxamine</p> <p class="medicine-brand">(Luvox®)</p> </li> <li> <p class="medicine-name">Paroxetine</p> <p class="medicine-brand">(Paxil®)</p> </li> <li> <p class="medicine-name">Sertraline</p> <p class="medicine-brand">(Zoloft®)</p> </li> </ul> </div> <div class="medicine-group medicine-group-3"> <div class="medicine-group-name"> SNRIs </div> <div class="group-bracket"></div> <ul> <li> <p class="medicine-name">Desvenlafaxine</p> <p class="medicine-brand">(Pristiq®)</p> </li> <li> <p class="medicine-name">Duloxetine</p> <p class="medicine-brand">(Cymbalta®)</p> </li> <li> <p class="medicine-name">Venlafaxine</p> <p class="medicine-brand">(Effexor®)</p> </li> </ul> </div> <div class="medicine-group medicine-group-2"> <div class="medicine-group-name"> SNRIs </div> <div class="group-bracket"></div> <ul> <li> <p class="medicine-name">Bupropion</p> <p class="medicine-brand">(Wellbutrin®)</p> </li> <li> <p class="medicine-name">Mirtazapine</p> <p class="medicine-brand">(Remeron®)</p> </li> </ul> </div> <div class="medicine-group medicine-group-1"> <div class="medicine-group-name"> SNRIs </div> <div class="group-bracket"></div> <ul> <li> <p class="medicine-name">Amiptriptyline or Nortriptyline</p> <p class="medicine-brand">(Elavil® or Aventyl HCI®)</p> </li> </ul> </div> </div> <div class="card-container" id="card-container"> </div> <div class="card card-mind" id="card-mind"> <a href="javascript:;" class="control-fold" id="control-fold"> <div class="control-fold-cnt"> <span class="control-show"><i class="icon-arrow icon-left-open-big"></i><i class="icon-arrow icon-left-open-big arrow-aside"></i></span> <span class="control-hidden"><i class="icon-arrow icon-right-open-big"></i><i class="icon-arrow icon-right-open-big arrow-aside"></i></span> </div> </a> <div class="zebra"> <div class="row odd ';
if(activeMedicine && activeMedicine[0]){
$out+='active';
}
$out+='" data-index="0"></div> <div class="row even ';
if(activeMedicine && activeMedicine[1]){
$out+='active';
}
$out+='" data-index="1"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[2]){
$out+='active';
}
$out+='" data-index="2"></div> <div class="row even ';
if(activeMedicine && activeMedicine[3]){
$out+='active';
}
$out+='" data-index="3"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[4]){
$out+='active';
}
$out+='" data-index="4"></div> <div class="row even ';
if(activeMedicine && activeMedicine[5]){
$out+='active';
}
$out+='" data-index="5"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[6]){
$out+='active';
}
$out+='" data-index="6"></div> <div class="row even ';
if(activeMedicine && activeMedicine[7]){
$out+='active';
}
$out+='" data-index="7"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[8]){
$out+='active';
}
$out+='" data-index="8"></div> <div class="row even ';
if(activeMedicine && activeMedicine[9]){
$out+='active';
}
$out+='" data-index="9"></div> <div class="row odd ';
if(activeMedicine && activeMedicine[10]){
$out+='active';
}
$out+='" data-index="10"></div> <div class="row even row-2 ';
if(activeMedicine && activeMedicine[11]){
$out+='active';
}
$out+='" data-index="11"></div> </div> <div class="zebra-control"> <div class="row ';
if(activeMedicine && activeMedicine[0]){
$out+='active';
}
$out+='" data-index="0"></div> <div class="row ';
if(activeMedicine && activeMedicine[1]){
$out+='active';
}
$out+='" data-index="1"></div> <div class="row ';
if(activeMedicine && activeMedicine[2]){
$out+='active';
}
$out+='" data-index="2"></div> <div class="row ';
if(activeMedicine && activeMedicine[3]){
$out+='active';
}
$out+='" data-index="3"></div> <div class="row ';
if(activeMedicine && activeMedicine[4]){
$out+='active';
}
$out+='" data-index="4"></div> <div class="row ';
if(activeMedicine && activeMedicine[5]){
$out+='active';
}
$out+='" data-index="5"></div> <div class="row ';
if(activeMedicine && activeMedicine[6]){
$out+='active';
}
$out+='" data-index="6"></div> <div class="row ';
if(activeMedicine && activeMedicine[7]){
$out+='active';
}
$out+='" data-index="7"></div> <div class="row ';
if(activeMedicine && activeMedicine[8]){
$out+='active';
}
$out+='" data-index="8"></div> <div class="row ';
if(activeMedicine && activeMedicine[9]){
$out+='active';
}
$out+='" data-index="9"></div> <div class="row ';
if(activeMedicine && activeMedicine[10]){
$out+='active';
}
$out+='" data-index="10"></div> <div class="row row-2 ';
if(activeMedicine && activeMedicine[11]){
$out+='active';
}
$out+='" data-index="11"></div> </div> <div class="card-header"> <h4>Keep in Mind</h4> </div> <div class="card-legend"> <div class="card-ruler"> Additional considerations </div> </div> <div class="card-content"> <div class="row"> <p>Can cause problems with your heart</p> </div> <div class="row"> <p>Currently no other issues</p> </div> <div class="row"> <p>More likely to interact with other drugs when you are taking</p> </div> <div class="row"> <p>More likely to cause diarrhea or nausea; Not an official treatment</p> </div> <div class="row"> <p>More likely to cause problems with your unborn child if you are pregnant </p> </div> <div class="row"> <p>More likely to cause diarrhea</p> </div> <div class="row"> <p>Tell your doctor if you have high blood pressure </p> </div> <div class="row"> <p>Can help with pain; Tell your doctor if you have high blood pressure</p> </div> <div class="row"> <p>More likely to cause nausea and vomitting; Can cause heart problems</p> </div> <div class="row"> <p>Higher risk of seizures</p> </div> <div class="row"> <p>Starts to work more quickly</p> </div> <div class="row row-2"> <p>More likely to cause constipation, diarrhea or nausea; Not the best option for elderly</p> </div> </div> </div> </div>';
return new String($out);
});