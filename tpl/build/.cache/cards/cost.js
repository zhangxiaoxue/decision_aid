/*TMODJS:{"version":37,"md5":"4e62b6252ff812065929ba99549d9fae"}*/
template('cards/cost',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,activeMedicine=$data.activeMedicine,$out='';$out+='<div class="card card-cost" id="card-cost" data-type="cost"> <div class="zebra"> <div class="row odd ';
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
$out+='" data-index="11"></div> </div> <div class="card-header"> <h4>Cost</h4> </div> <div class="card-legend"> <div class="card-ruler"> <div class="ruler-word"> <div class="right">More cost</div> <div class="left">$ 0</div> </div> <div class="ruler"> <span class="center"></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div> </div> </div> <div class="card-content"> <div class="row"> <div class="price">$4/month</div> <span class="center active"></span> <span class="first"></span> <span class="second"></span> <span class="third"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$113/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$4/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$80/month</div> <span class="center active"></span> <span class="first"></span> <span class="second"></span> <span class="third"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$4/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second"></span> <span class="third"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$29/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$147/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$154/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$130/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$100/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third active"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row"> <div class="price">$50/month</div> <span class="center active"></span> <span class="first active"></span> <span class="second active"></span> <span class="third"></span> <span class="fourth"></span> <span class="fifth"></span> </div> <div class="row row-2"> <div class="price">$4/month</div> <span class="center active"></span> <span class="first"></span> <span class="second"></span> <span class="third"></span> <span class="fourth"></span> <span class="fifth"></span> </div> </div> </div> ';
return new String($out);
});