// Compiled by ClojureScript 1.10.238 {}
goog.provide('examples.clogn');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('debux.cs.core');
examples.clogn.foo = (function examples$clogn$foo(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22807 = arguments.length;
var i__4500__auto___22808 = (0);
while(true){
if((i__4500__auto___22808 < len__4499__auto___22807)){
args__4502__auto__.push((arguments[i__4500__auto___22808]));

var G__22809 = (i__4500__auto___22808 + (1));
i__4500__auto___22808 = G__22809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return examples.clogn.foo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

examples.clogn.foo.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,p__22803){
var vec__22804 = p__22803;
var c = cljs.core.nth.call(null,vec__22804,(0),null);
if(cljs.core.truth_(c)){
return ((a * b) * c);
} else {
return ((a * b) * (100));
}
});

examples.clogn.foo.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
examples.clogn.foo.cljs$lang$applyTo = (function (seq22800){
var G__22801 = cljs.core.first.call(null,seq22800);
var seq22800__$1 = cljs.core.next.call(null,seq22800);
var G__22802 = cljs.core.first.call(null,seq22800__$1);
var seq22800__$2 = cljs.core.next.call(null,seq22800__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22801,G__22802,seq22800__$2);
});

examples.clogn.foo.call(null,(2),(3));
examples.clogn.foo.call(null,(2),(3),(10));
/**
 * my-function doc string
 */
examples.clogn.my_function = (function examples$clogn$my_function(x){
return ((x * x) * x);
});
examples.clogn.my_function.call(null,(10));
/**
 * add doc string
 */
examples.clogn.add = (function examples$clogn$add(a,b){
return (a + b);
});
examples.clogn.add.call(null,(10),(20));
/**
 * my-add doc string
 */
examples.clogn.my_add = (function examples$clogn$my_add(var_args){
var G__22814 = arguments.length;
switch (G__22814) {
case 0:
return examples.clogn.my_add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return examples.clogn.my_add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return examples.clogn.my_add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___22816 = arguments.length;
var i__4500__auto___22817 = (0);
while(true){
if((i__4500__auto___22817 < len__4499__auto___22816)){
args_arr__4514__auto__.push((arguments[i__4500__auto___22817]));

var G__22818 = (i__4500__auto___22817 + (1));
i__4500__auto___22817 = G__22818;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return examples.clogn.my_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

examples.clogn.my_add.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
});

examples.clogn.my_add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

examples.clogn.my_add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (a + b);
});

examples.clogn.my_add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.apply.call(null,cljs.core._PLUS_,a,b,more);
});

/** @this {Function} */
examples.clogn.my_add.cljs$lang$applyTo = (function (seq22811){
var G__22812 = cljs.core.first.call(null,seq22811);
var seq22811__$1 = cljs.core.next.call(null,seq22811);
var G__22813 = cljs.core.first.call(null,seq22811__$1);
var seq22811__$2 = cljs.core.next.call(null,seq22811__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22812,G__22813,seq22811__$2);
});

examples.clogn.my_add.cljs$lang$maxFixedArity = (2);

examples.clogn.my_add.call(null);
examples.clogn.my_add.call(null,(10));
examples.clogn.my_add.call(null,(10),(20));
examples.clogn.my_add.call(null,(10),(20),(30),(40));
examples.clogn.calc1 = (function examples$clogn$calc1(a1,a2){
return (a1 + a2);
});
examples.clogn.calc2 = (function examples$clogn$calc2(s1,s2){
return ((100) - examples.clogn.calc1.call(null,s1,s2));
});
examples.clogn.calc3 = (function examples$clogn$calc3(m1,m2){
return ((10) * examples.clogn.calc2.call(null,m1,m2));
});
examples.clogn.calc3.call(null,(2),(5));
/**
 * attr-map-fn doc-string
 */
examples.clogn.add_pos = (function examples$clogn$add_pos(a,b){
if((((a > (0))) && ((b > (0))))){
} else {
throw (new Error("Assert failed: (and (pos? a) (pos? b))"));
}

var _PERCENT_ = (a + b);
if((_PERCENT_ > (0))){
} else {
throw (new Error("Assert failed: (pos? %)"));
}

return _PERCENT_;
});
examples.clogn.add_pos.call(null,(10),(20));
/**
 * attr-map-fn doc-string
 */
examples.clogn.add_pos2 = (function examples$clogn$add_pos2(var_args){
var G__22820 = arguments.length;
switch (G__22820) {
case 1:
return examples.clogn.add_pos2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return examples.clogn.add_pos2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

examples.clogn.add_pos2.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a > (0))){
} else {
throw (new Error("Assert failed: (pos? a)"));
}

var _PERCENT_ = (a + (100));
if((_PERCENT_ > (0))){
} else {
throw (new Error("Assert failed: (pos? %)"));
}

return _PERCENT_;
});

examples.clogn.add_pos2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((((a > (0))) && ((b > (0))))){
} else {
throw (new Error("Assert failed: (and (pos? a) (pos? b))"));
}

var _PERCENT_ = (a + b);
if((_PERCENT_ > (0))){
} else {
throw (new Error("Assert failed: (pos? %)"));
}

return _PERCENT_;
});

examples.clogn.add_pos2.cljs$lang$maxFixedArity = 2;

examples.clogn.add_pos2.call(null,(10));
examples.clogn.add_pos2.call(null,(10),(20));
cljs.core.reduce.call(null,(function (acc,i){
return (acc + i);
}),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9)], null));
cljs.core.map.call(null,(function (p1__22822_SHARP_){
return (p1__22822_SHARP_ * (10));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9)], null));
var a_22826 = ((1) + (2));
var vec__22823_22827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a_22826 + (10)),(a_22826 * (2))], null);
var b_22828 = cljs.core.nth.call(null,vec__22823_22827,(0),null);
var c_22829 = cljs.core.nth.call(null,vec__22823_22827,(1),null);
((a_22826 + b_22828) - c_22829);
var temp__4655__auto___22830 = null;
if(cljs.core.truth_(temp__4655__auto___22830)){
var user_json_22831 = temp__4655__auto___22830;
} else {
}
var temp__4659__auto___22832 = null;
if((temp__4659__auto___22832 == null)){
} else {
var user_json_22833 = temp__4659__auto___22832;
}
var twice = (function examples$clogn$twice(x){
return (x * (2));
});
var six_times = (function examples$clogn$six_times(y){
return (twice.call(null,y) * (3));
});
six_times.call(null,(15));
var iter__4292__auto___22838 = (function examples$clogn$iter__22834(s__22835){
return (new cljs.core.LazySeq(null,(function (){
var s__22835__$1 = s__22835;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22835__$1);
if(temp__4657__auto__){
var s__22835__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22835__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22835__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22837 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22836 = (0);
while(true){
if((i__22836 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__22836);
var y = (x * (3));
if(cljs.core.even_QMARK_.call(null,y)){
cljs.core.chunk_append.call(null,b__22837,y);

var G__22839 = (i__22836 + (1));
i__22836 = G__22839;
continue;
} else {
var G__22840 = (i__22836 + (1));
i__22836 = G__22840;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22837),examples$clogn$iter__22834.call(null,cljs.core.chunk_rest.call(null,s__22835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22837),null);
}
} else {
var x = cljs.core.first.call(null,s__22835__$2);
var y = (x * (3));
if(cljs.core.even_QMARK_.call(null,y)){
return cljs.core.cons.call(null,y,examples$clogn$iter__22834.call(null,cljs.core.rest.call(null,s__22835__$2)));
} else {
var G__22841 = cljs.core.rest.call(null,s__22835__$2);
s__22835__$1 = G__22841;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4292__auto___22838.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null));
var mystr_22843 = "hello";
var G__22842_22844 = mystr_22843;
switch (G__22842_22844) {
case "":

break;
case "hello":
cljs.core.count.call(null,mystr_22843);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22842_22844)].join('')));

}
var G__22846_22847 = new cljs.core.Symbol(null,"a","a",-482876059,null);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null),G__22846_22847)){
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null),G__22846_22847)){
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"z","z",851004344,null),G__22846_22847)){
} else {

}
}
}
var n_22848 = (0);
var n_22849__$1 = (n_22848 + (1));
(n_22849__$1 + (1));
var xs_22850 = [(1),(2),(3)];
var a__4373__auto___22851 = xs_22850;
var l__4374__auto___22852 = a__4373__auto___22851.length;
var i_22853 = (0);
var ret_22854 = (0);
while(true){
if((i_22853 < l__4374__auto___22852)){
var G__22855 = (i_22853 + (1));
var G__22856 = (ret_22854 + (xs_22850[i_22853]));
i_22853 = G__22855;
ret_22854 = G__22856;
continue;
} else {
}
break;
}
if(typeof examples.clogn.greeting !== 'undefined'){
} else {
examples.clogn.greeting = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"examples.clogn","greeting"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (x){
return new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,examples.clogn.greeting,new cljs.core.Keyword(null,"english","english",1087501909),(function (map){
return ["English greeting: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(map))].join('');
}));
cljs.core._add_method.call(null,examples.clogn.greeting,new cljs.core.Keyword(null,"french","french",203466333),(function (map){
return ["French greeting: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(map))].join('');
}));
examples.clogn.english_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"english","english",1087501909),new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello!"], null);
examples.clogn.french_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"french","french",203466333),new cljs.core.Keyword(null,"greeting","greeting",462222107),"Bonjour!"], null);
examples.clogn.greeting.call(null,examples.clogn.english_map);
examples.clogn.greeting.call(null,examples.clogn.french_map);
cljs.core.first.call(null,"a b c d".toUpperCase().replace("A","X").split(" "));
"a b c d".toUpperCase().replace("A","X");
var x_22858 = (1);
var y_22859 = (2);
var G__22857_22860 = cljs.core.PersistentVector.EMPTY;
var G__22857_22861__$1 = ((cljs.core.odd_QMARK_.call(null,x_22858))?cljs.core.conj.call(null,G__22857_22860,"x is odd"):G__22857_22860);
var G__22857_22862__$2 = (((cljs.core.rem.call(null,y_22859,(3)) === (0)))?cljs.core.conj.call(null,G__22857_22861__$1,"y is divisible by 3"):G__22857_22861__$1);
if(cljs.core.even_QMARK_.call(null,y_22859)){
cljs.core.conj.call(null,G__22857_22862__$2,"y is even");
} else {
}
(new Date()).getMonth();
window.closed;
var acc_22863 = (1);
var n_22864 = (3);
while(true){
if((n_22864 === (0))){
} else {
var G__22865 = (acc_22863 * n_22864);
var G__22866 = (n_22864 - (1));
acc_22863 = G__22865;
n_22864 = G__22866;
continue;
}
break;
}
examples.clogn.fact = (function examples$clogn$fact(num){
var acc = (1);
var n = num;
while(true){
if((n === (0))){
return acc;
} else {
var G__22867 = (acc * n);
var G__22868 = (n - (1));
acc = G__22867;
n = G__22868;
continue;
}
break;
}
});
examples.clogn.fact.call(null,(3));
examples.clogn.factorial = (function examples$clogn$factorial(acc,n){
if((n === (0))){
return acc;
} else {
return examples.clogn.factorial.call(null,(acc * n),(n - (1)));
}
});
examples.clogn.factorial.call(null,(1),(3));
var a_22869 = (10);
var b_22870 = (a_22869 + (10));
(a_22869 + b_22870);
var seq__22871_22875 = cljs.core.seq.call(null,cljs.core.range.call(null,(10)));
var chunk__22872_22876 = null;
var count__22873_22877 = (0);
var i__22874_22878 = (0);
while(true){
if((i__22874_22878 < count__22873_22877)){
var n_22879 = cljs.core._nth.call(null,chunk__22872_22876,i__22874_22878);
((20) + (n_22879 * (10)));


var G__22880 = seq__22871_22875;
var G__22881 = chunk__22872_22876;
var G__22882 = count__22873_22877;
var G__22883 = (i__22874_22878 + (1));
seq__22871_22875 = G__22880;
chunk__22872_22876 = G__22881;
count__22873_22877 = G__22882;
i__22874_22878 = G__22883;
continue;
} else {
var temp__4657__auto___22884 = cljs.core.seq.call(null,seq__22871_22875);
if(temp__4657__auto___22884){
var seq__22871_22885__$1 = temp__4657__auto___22884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22871_22885__$1)){
var c__4319__auto___22886 = cljs.core.chunk_first.call(null,seq__22871_22885__$1);
var G__22887 = cljs.core.chunk_rest.call(null,seq__22871_22885__$1);
var G__22888 = c__4319__auto___22886;
var G__22889 = cljs.core.count.call(null,c__4319__auto___22886);
var G__22890 = (0);
seq__22871_22875 = G__22887;
chunk__22872_22876 = G__22888;
count__22873_22877 = G__22889;
i__22874_22878 = G__22890;
continue;
} else {
var n_22891 = cljs.core.first.call(null,seq__22871_22885__$1);
((20) + (n_22891 * (10)));


var G__22892 = cljs.core.next.call(null,seq__22871_22885__$1);
var G__22893 = null;
var G__22894 = (0);
var G__22895 = (0);
seq__22871_22875 = G__22892;
chunk__22872_22876 = G__22893;
count__22873_22877 = G__22894;
i__22874_22878 = G__22895;
continue;
}
} else {
}
}
break;
}
examples.clogn.person = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mark Volkmann",new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"644 Glen Summit",new cljs.core.Keyword(null,"city","city",-393302614),"St. Charles",new cljs.core.Keyword(null,"state","state",-1988618099),"Missouri",new cljs.core.Keyword(null,"zip","zip",678448180),(63304)], null),new cljs.core.Keyword(null,"employer","employer",756886146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Object Computing, Inc.",new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"12140 Woodcrest Dr.",new cljs.core.Keyword(null,"city","city",-393302614),"Creve Coeur",new cljs.core.Keyword(null,"state","state",-1988618099),"Missouri",new cljs.core.Keyword(null,"zip","zip",678448180),(63141)], null)], null)], null);
new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"employer","employer",756886146).cljs$core$IFn$_invoke$arity$1(examples.clogn.person)));
cljs.core.range.call(null,(5));
["Clojure ","language"].join('');

//# sourceMappingURL=clogn.js.map?rel=1628501140416
