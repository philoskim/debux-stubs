// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26414){
var map__26415 = p__26414;
var map__26415__$1 = ((((!((map__26415 == null)))?(((((map__26415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26415):map__26415);
var m = map__26415__$1;
var n = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26417_26439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26418_26440 = null;
var count__26419_26441 = (0);
var i__26420_26442 = (0);
while(true){
if((i__26420_26442 < count__26419_26441)){
var f_26443 = cljs.core._nth.call(null,chunk__26418_26440,i__26420_26442);
cljs.core.println.call(null,"  ",f_26443);


var G__26444 = seq__26417_26439;
var G__26445 = chunk__26418_26440;
var G__26446 = count__26419_26441;
var G__26447 = (i__26420_26442 + (1));
seq__26417_26439 = G__26444;
chunk__26418_26440 = G__26445;
count__26419_26441 = G__26446;
i__26420_26442 = G__26447;
continue;
} else {
var temp__4657__auto___26448 = cljs.core.seq.call(null,seq__26417_26439);
if(temp__4657__auto___26448){
var seq__26417_26449__$1 = temp__4657__auto___26448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26417_26449__$1)){
var c__4319__auto___26450 = cljs.core.chunk_first.call(null,seq__26417_26449__$1);
var G__26451 = cljs.core.chunk_rest.call(null,seq__26417_26449__$1);
var G__26452 = c__4319__auto___26450;
var G__26453 = cljs.core.count.call(null,c__4319__auto___26450);
var G__26454 = (0);
seq__26417_26439 = G__26451;
chunk__26418_26440 = G__26452;
count__26419_26441 = G__26453;
i__26420_26442 = G__26454;
continue;
} else {
var f_26455 = cljs.core.first.call(null,seq__26417_26449__$1);
cljs.core.println.call(null,"  ",f_26455);


var G__26456 = cljs.core.next.call(null,seq__26417_26449__$1);
var G__26457 = null;
var G__26458 = (0);
var G__26459 = (0);
seq__26417_26439 = G__26456;
chunk__26418_26440 = G__26457;
count__26419_26441 = G__26458;
i__26420_26442 = G__26459;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26460 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26460);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26460)))?cljs.core.second.call(null,arglists_26460):arglists_26460));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26421_26461 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26422_26462 = null;
var count__26423_26463 = (0);
var i__26424_26464 = (0);
while(true){
if((i__26424_26464 < count__26423_26463)){
var vec__26425_26465 = cljs.core._nth.call(null,chunk__26422_26462,i__26424_26464);
var name_26466 = cljs.core.nth.call(null,vec__26425_26465,(0),null);
var map__26428_26467 = cljs.core.nth.call(null,vec__26425_26465,(1),null);
var map__26428_26468__$1 = ((((!((map__26428_26467 == null)))?(((((map__26428_26467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26428_26467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26428_26467):map__26428_26467);
var doc_26469 = cljs.core.get.call(null,map__26428_26468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26470 = cljs.core.get.call(null,map__26428_26468__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26466);

cljs.core.println.call(null," ",arglists_26470);

if(cljs.core.truth_(doc_26469)){
cljs.core.println.call(null," ",doc_26469);
} else {
}


var G__26471 = seq__26421_26461;
var G__26472 = chunk__26422_26462;
var G__26473 = count__26423_26463;
var G__26474 = (i__26424_26464 + (1));
seq__26421_26461 = G__26471;
chunk__26422_26462 = G__26472;
count__26423_26463 = G__26473;
i__26424_26464 = G__26474;
continue;
} else {
var temp__4657__auto___26475 = cljs.core.seq.call(null,seq__26421_26461);
if(temp__4657__auto___26475){
var seq__26421_26476__$1 = temp__4657__auto___26475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26421_26476__$1)){
var c__4319__auto___26477 = cljs.core.chunk_first.call(null,seq__26421_26476__$1);
var G__26478 = cljs.core.chunk_rest.call(null,seq__26421_26476__$1);
var G__26479 = c__4319__auto___26477;
var G__26480 = cljs.core.count.call(null,c__4319__auto___26477);
var G__26481 = (0);
seq__26421_26461 = G__26478;
chunk__26422_26462 = G__26479;
count__26423_26463 = G__26480;
i__26424_26464 = G__26481;
continue;
} else {
var vec__26430_26482 = cljs.core.first.call(null,seq__26421_26476__$1);
var name_26483 = cljs.core.nth.call(null,vec__26430_26482,(0),null);
var map__26433_26484 = cljs.core.nth.call(null,vec__26430_26482,(1),null);
var map__26433_26485__$1 = ((((!((map__26433_26484 == null)))?(((((map__26433_26484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26433_26484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26433_26484):map__26433_26484);
var doc_26486 = cljs.core.get.call(null,map__26433_26485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26487 = cljs.core.get.call(null,map__26433_26485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26483);

cljs.core.println.call(null," ",arglists_26487);

if(cljs.core.truth_(doc_26486)){
cljs.core.println.call(null," ",doc_26486);
} else {
}


var G__26488 = cljs.core.next.call(null,seq__26421_26476__$1);
var G__26489 = null;
var G__26490 = (0);
var G__26491 = (0);
seq__26421_26461 = G__26488;
chunk__26422_26462 = G__26489;
count__26423_26463 = G__26490;
i__26424_26464 = G__26491;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__26435 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26436 = null;
var count__26437 = (0);
var i__26438 = (0);
while(true){
if((i__26438 < count__26437)){
var role = cljs.core._nth.call(null,chunk__26436,i__26438);
var temp__4657__auto___26492__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___26492__$1)){
var spec_26493 = temp__4657__auto___26492__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26493));
} else {
}


var G__26494 = seq__26435;
var G__26495 = chunk__26436;
var G__26496 = count__26437;
var G__26497 = (i__26438 + (1));
seq__26435 = G__26494;
chunk__26436 = G__26495;
count__26437 = G__26496;
i__26438 = G__26497;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__26435);
if(temp__4657__auto____$1){
var seq__26435__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26435__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26435__$1);
var G__26498 = cljs.core.chunk_rest.call(null,seq__26435__$1);
var G__26499 = c__4319__auto__;
var G__26500 = cljs.core.count.call(null,c__4319__auto__);
var G__26501 = (0);
seq__26435 = G__26498;
chunk__26436 = G__26499;
count__26437 = G__26500;
i__26438 = G__26501;
continue;
} else {
var role = cljs.core.first.call(null,seq__26435__$1);
var temp__4657__auto___26502__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___26502__$2)){
var spec_26503 = temp__4657__auto___26502__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26503));
} else {
}


var G__26504 = cljs.core.next.call(null,seq__26435__$1);
var G__26505 = null;
var G__26506 = (0);
var G__26507 = (0);
seq__26435 = G__26504;
chunk__26436 = G__26505;
count__26437 = G__26506;
i__26438 = G__26507;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1628501146340
