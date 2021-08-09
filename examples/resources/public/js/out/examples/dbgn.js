// Compiled by ClojureScript 1.10.238 {}
goog.provide('examples.dbgn');
goog.require('cljs.core');
goog.require('debux.cs.core');
examples.dbgn.foo = (function examples$dbgn$foo(var_args){
var args__4502__auto__ = [];
var len__4499__auto___19844 = arguments.length;
var i__4500__auto___19845 = (0);
while(true){
if((i__4500__auto___19845 < len__4499__auto___19844)){
args__4502__auto__.push((arguments[i__4500__auto___19845]));

var G__19846 = (i__4500__auto___19845 + (1));
i__4500__auto___19845 = G__19846;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return examples.dbgn.foo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

examples.dbgn.foo.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,p__19840){
var vec__19841 = p__19840;
var c = cljs.core.nth.call(null,vec__19841,(0),null);
if(cljs.core.truth_(c)){
return ((a * b) * c);
} else {
return ((a * b) * (100));
}
});

examples.dbgn.foo.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
examples.dbgn.foo.cljs$lang$applyTo = (function (seq19837){
var G__19838 = cljs.core.first.call(null,seq19837);
var seq19837__$1 = cljs.core.next.call(null,seq19837);
var G__19839 = cljs.core.first.call(null,seq19837__$1);
var seq19837__$2 = cljs.core.next.call(null,seq19837__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19838,G__19839,seq19837__$2);
});

examples.dbgn.foo.call(null,(2),(3));
examples.dbgn.foo.call(null,(2),(3),(10));
/**
 * my-function doc string
 */
examples.dbgn.my_function = (function examples$dbgn$my_function(x){
return ((x * x) * x);
});
examples.dbgn.my_function.call(null,(10));
/**
 * my-function doc string
 */
examples.dbgn.my_function_2 = (function examples$dbgn$my_function_2(x){
return ((x * x) * x);
});
examples.dbgn.my_function_2.call(null,(10));
/**
 * add doc string
 */
examples.dbgn.add = (function examples$dbgn$add(a,b){
return (a + b);
});
examples.dbgn.add.call(null,(10),(20));
/**
 * my-add doc string
 */
examples.dbgn.my_add = (function examples$dbgn$my_add(var_args){
var G__19851 = arguments.length;
switch (G__19851) {
case 0:
return examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___19853 = arguments.length;
var i__4500__auto___19854 = (0);
while(true){
if((i__4500__auto___19854 < len__4499__auto___19853)){
args_arr__4514__auto__.push((arguments[i__4500__auto___19854]));

var G__19855 = (i__4500__auto___19854 + (1));
i__4500__auto___19854 = G__19855;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
});

examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (a + b);
});

examples.dbgn.my_add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.apply.call(null,cljs.core._PLUS_,a,b,more);
});

/** @this {Function} */
examples.dbgn.my_add.cljs$lang$applyTo = (function (seq19848){
var G__19849 = cljs.core.first.call(null,seq19848);
var seq19848__$1 = cljs.core.next.call(null,seq19848);
var G__19850 = cljs.core.first.call(null,seq19848__$1);
var seq19848__$2 = cljs.core.next.call(null,seq19848__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19849,G__19850,seq19848__$2);
});

examples.dbgn.my_add.cljs$lang$maxFixedArity = (2);

examples.dbgn.my_add.call(null);
examples.dbgn.my_add.call(null,(10));
examples.dbgn.my_add.call(null,(10),(20));
examples.dbgn.my_add.call(null,(10),(20),(30),(40));
examples.dbgn.calc1 = (function examples$dbgn$calc1(a1,a2){
return (a1 + a2);
});
examples.dbgn.calc2 = (function examples$dbgn$calc2(s1,s2){
return ((100) - examples.dbgn.calc1.call(null,s1,s2));
});
examples.dbgn.calc3 = (function examples$dbgn$calc3(m1,m2){
return ((10) * examples.dbgn.calc2.call(null,m1,m2));
});
examples.dbgn.calc3.call(null,(2),(5));
cljs.core.reduce.call(null,(function (acc,i){
return (acc + i);
}),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9)], null));
cljs.core.map.call(null,(function (p1__19856_SHARP_){
return (p1__19856_SHARP_ * (10));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9)], null));
var a_19860 = ((1) + (2));
var vec__19857_19861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a_19860 + (10)),(a_19860 * (2))], null);
var b_19862 = cljs.core.nth.call(null,vec__19857_19861,(0),null);
var c_19863 = cljs.core.nth.call(null,vec__19857_19861,(1),null);
((a_19860 + b_19862) - c_19863);
var twice = (function examples$dbgn$twice(x){
return (x * (2));
});
var six_times = (function examples$dbgn$six_times(y){
return (twice.call(null,y) * (3));
});
six_times.call(null,(15));
var iter__4292__auto___19868 = (function examples$dbgn$iter__19864(s__19865){
return (new cljs.core.LazySeq(null,(function (){
var s__19865__$1 = s__19865;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19865__$1);
if(temp__4657__auto__){
var s__19865__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19865__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__19865__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__19867 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__19866 = (0);
while(true){
if((i__19866 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__19866);
var y = (x * (3));
if(cljs.core.even_QMARK_.call(null,y)){
cljs.core.chunk_append.call(null,b__19867,y);

var G__19869 = (i__19866 + (1));
i__19866 = G__19869;
continue;
} else {
var G__19870 = (i__19866 + (1));
i__19866 = G__19870;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19867),examples$dbgn$iter__19864.call(null,cljs.core.chunk_rest.call(null,s__19865__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19867),null);
}
} else {
var x = cljs.core.first.call(null,s__19865__$2);
var y = (x * (3));
if(cljs.core.even_QMARK_.call(null,y)){
return cljs.core.cons.call(null,y,examples$dbgn$iter__19864.call(null,cljs.core.rest.call(null,s__19865__$2)));
} else {
var G__19871 = cljs.core.rest.call(null,s__19865__$2);
s__19865__$1 = G__19871;
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
iter__4292__auto___19868.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null));
var mystr_19873 = "hello";
var G__19872_19874 = mystr_19873;
switch (G__19872_19874) {
case "":

break;
case "hello":
cljs.core.count.call(null,mystr_19873);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19872_19874)].join('')));

}
var G__19876_19877 = new cljs.core.Symbol(null,"a","a",-482876059,null);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null),G__19876_19877)){
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"y","y",-117328249,null),G__19876_19877)){
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"z","z",851004344,null),G__19876_19877)){
} else {

}
}
}
var n_19878 = (0);
var n_19879__$1 = (n_19878 + (1));
(n_19879__$1 + (1));
var xs_19880 = [(1),(2),(3)];
var a__4373__auto___19881 = xs_19880;
var l__4374__auto___19882 = a__4373__auto___19881.length;
var i_19883 = (0);
var ret_19884 = (0);
while(true){
if((i_19883 < l__4374__auto___19882)){
var G__19885 = (i_19883 + (1));
var G__19886 = (ret_19884 + (xs_19880[i_19883]));
i_19883 = G__19885;
ret_19884 = G__19886;
continue;
} else {
}
break;
}
if(typeof examples.dbgn.greeting !== 'undefined'){
} else {
examples.dbgn.greeting = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"examples.dbgn","greeting"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (x){
return new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,examples.dbgn.greeting,new cljs.core.Keyword(null,"english","english",1087501909),(function (map){
return ["English greeting: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(map))].join('');
}));
cljs.core._add_method.call(null,examples.dbgn.greeting,new cljs.core.Keyword(null,"french","french",203466333),(function (map){
return ["French greeting: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(map))].join('');
}));
examples.dbgn.english_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"english","english",1087501909),new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello!"], null);
examples.dbgn.french_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"french","french",203466333),new cljs.core.Keyword(null,"greeting","greeting",462222107),"Bonjour!"], null);
examples.dbgn.greeting.call(null,examples.dbgn.english_map);
examples.dbgn.greeting.call(null,examples.dbgn.french_map);
cljs.core.first.call(null,"a b c d".toUpperCase().replace("A","X").split(" "));
"a b c d".toUpperCase().replace("A","X");
var x_19888 = (1);
var y_19889 = (2);
var G__19887_19890 = cljs.core.PersistentVector.EMPTY;
var G__19887_19891__$1 = ((cljs.core.odd_QMARK_.call(null,x_19888))?cljs.core.conj.call(null,G__19887_19890,"x is odd"):G__19887_19890);
var G__19887_19892__$2 = (((cljs.core.rem.call(null,y_19889,(3)) === (0)))?cljs.core.conj.call(null,G__19887_19891__$1,"y is divisible by 3"):G__19887_19891__$1);
if(cljs.core.even_QMARK_.call(null,y_19889)){
cljs.core.conj.call(null,G__19887_19892__$2,"y is even");
} else {
}
(new Date()).getMonth();
var acc_19893 = (1);
var n_19894 = (3);
while(true){
if((n_19894 === (0))){
} else {
var G__19895 = (acc_19893 * n_19894);
var G__19896 = (n_19894 - (1));
acc_19893 = G__19895;
n_19894 = G__19896;
continue;
}
break;
}
examples.dbgn.fact = (function examples$dbgn$fact(num){
var acc = (1);
var n = num;
while(true){
if((n === (0))){
return acc;
} else {
var G__19897 = (acc * n);
var G__19898 = (n - (1));
acc = G__19897;
n = G__19898;
continue;
}
break;
}
});
examples.dbgn.fact.call(null,(3));
examples.dbgn.factorial = (function examples$dbgn$factorial(acc,n){
if((n === (0))){
return acc;
} else {
return examples.dbgn.factorial.call(null,(acc * n),(n - (1)));
}
});
examples.dbgn.factorial.call(null,(1),(3));
var a_19899 = (10);
var b_19900 = (a_19899 + (10));
(a_19899 + b_19900);

//# sourceMappingURL=dbgn.js.map?rel=1628501138538
