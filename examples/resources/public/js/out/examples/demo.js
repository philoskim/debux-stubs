// Compiled by ClojureScript 1.10.238 {}
goog.provide('examples.demo');
goog.require('cljs.core');
goog.require('debux.cs.core');
var a_19677 = (10);
var b_19678 = (a_19677 + (10));
(a_19677 + b_19678);
cljs.core.repeat.call(null,(5),"x");
cljs.core.repeat.call(null,(5),cljs.core.repeat.call(null,(5),"x"));
((10) + (20));
((10) + (20));
((10) + (20));
((10) + (20));
((10) + (20));
debux.cs.core.merge_styles.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),"background: #9400D3; color: white",new cljs.core.Keyword(null,"love","love",-1345468865),"background: #FF1493; color: white"], null));
((10) + (20));
((10) + (20));
((10) + (20));
examples.demo.a = cljs.core.atom.call(null,(10));
cljs.core.deref.call(null,examples.demo.a);
cljs.core.deref.call(null,examples.demo.a);
cljs.core.reset_BANG_.call(null,examples.demo.a,(20));
cljs.core.deref.call(null,examples.demo.a);
cljs.core.deref.call(null,examples.demo.a);
new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(10),new cljs.core.Keyword(null,"b","b",1482224470),(20)], null);
examples.demo.my_fun2 = (function examples$demo$my_fun2(a,p__19679,p__19680){
var map__19681 = p__19679;
var map__19681__$1 = ((((!((map__19681 == null)))?(((((map__19681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19681):map__19681);
var b = cljs.core.get.call(null,map__19681__$1,new cljs.core.Keyword(null,"b","b",1482224470),(20));
var c = cljs.core.get.call(null,map__19681__$1,new cljs.core.Keyword(null,"c","c",-1763192079),(30));
var d = cljs.core.get.call(null,map__19681__$1,new cljs.core.Keyword(null,"d","d",1972142424),(10));
var vec__19682 = p__19680;
var seq__19683 = cljs.core.seq.call(null,vec__19682);
var first__19684 = cljs.core.first.call(null,seq__19683);
var seq__19683__$1 = cljs.core.next.call(null,seq__19683);
var e = first__19684;
var first__19684__$1 = cljs.core.first.call(null,seq__19683__$1);
var seq__19683__$2 = cljs.core.next.call(null,seq__19683__$1);
var f = first__19684__$1;
var first__19684__$2 = cljs.core.first.call(null,seq__19683__$2);
var seq__19683__$3 = cljs.core.next.call(null,seq__19683__$2);
var g = first__19684__$2;
var h = seq__19683__$3;

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
});
examples.demo.my_fun2.call(null,cljs.core.take.call(null,(5),cljs.core.range.call(null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),(50),new cljs.core.Keyword(null,"d","d",1972142424),(100)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e"], null));
examples.demo.my_fun3 = (function examples$demo$my_fun3(){
var a = (10);
var b = (20);
var n__4376__auto__ = (1000);
var i = (0);
while(true){
if((i < n__4376__auto__)){

var G__19686 = (i + (1));
i = G__19686;
continue;
} else {
return null;
}
break;
}
});
examples.demo.my_fun3.call(null);

//# sourceMappingURL=demo.js.map?rel=1628501138108
