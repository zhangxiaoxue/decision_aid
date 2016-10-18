/*TMODJS:{"version":24,"md5":"27e7debe78d9ac2852152db1d429aeae"}*/
template('cards/mind',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,activeMedicine=$data.activeMedicine,$out='';$out+='<div class="card card-mind" id="card-mind" data-type="mind"> <div class="zebra"> <div class="row odd ';
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
$out+='" data-index="11"></div> </div> <div class="card-ruler"> <div class="ruler-word"> <div class="left"><strong>Additional considerations</strong></div> </div> <div class="ruler"> </div> </div> <div class="card-content"> <div class="row"> <p>Can cause problems with your heart</p> </div> <div class="row"> <p>Currently no other issues</p> </div> <div class="row"> <p>More likely to interact with other drugs you are taking</p> </div> <div class="row"> <p>More likely to cause constipation, diarrhea or nausea</p> <p>Not officially recognized as a treatment for Major Depressive Disorder</p> </div> <div class="row"> <p>If you are pregnant, this medicine is more likely to cause problems with your unborn child </p> </div> <div class="row"> <p>More likely to cause diarrhea</p> </div> <div class="row"> <p>Tell your doctor if you have high blood pressure </p> </div> <div class="row"> <p>Can help with pain</p> <p>Tell your doctor if you have high blood pressure</p> </div> <div class="row"> <p>More likely to cause nausea and vomiting</p> <p>Can cause problems with your heart</p> <p>Tell your doctor if you have high blood pressure</p> </div> <div class="row"> <p>Higher risk of seizures</p> </div> <div class="row"> <p>Starts to work more quickly</p> </div> <div class="row row-2"> <p>More likely to cause constipation, diarrhea or nausea; Not the best option for elderly</p> </div> </div> </div> ';
return new String($out);
});