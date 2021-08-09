// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24941_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24941_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24942 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24943 = null;
var count__24944 = (0);
var i__24945 = (0);
while(true){
if((i__24945 < count__24944)){
var n = cljs.core._nth.call(null,chunk__24943,i__24945);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24946 = seq__24942;
var G__24947 = chunk__24943;
var G__24948 = count__24944;
var G__24949 = (i__24945 + (1));
seq__24942 = G__24946;
chunk__24943 = G__24947;
count__24944 = G__24948;
i__24945 = G__24949;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24942);
if(temp__4657__auto__){
var seq__24942__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24942__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24942__$1);
var G__24950 = cljs.core.chunk_rest.call(null,seq__24942__$1);
var G__24951 = c__4319__auto__;
var G__24952 = cljs.core.count.call(null,c__4319__auto__);
var G__24953 = (0);
seq__24942 = G__24950;
chunk__24943 = G__24951;
count__24944 = G__24952;
i__24945 = G__24953;
continue;
} else {
var n = cljs.core.first.call(null,seq__24942__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24954 = cljs.core.next.call(null,seq__24942__$1);
var G__24955 = null;
var G__24956 = (0);
var G__24957 = (0);
seq__24942 = G__24954;
chunk__24943 = G__24955;
count__24944 = G__24956;
i__24945 = G__24957;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__24958){
var vec__24959 = p__24958;
var _ = cljs.core.nth.call(null,vec__24959,(0),null);
var v = cljs.core.nth.call(null,vec__24959,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__24962){
var vec__24963 = p__24962;
var k = cljs.core.nth.call(null,vec__24963,(0),null);
var v = cljs.core.nth.call(null,vec__24963,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24975_24983 = cljs.core.seq.call(null,deps);
var chunk__24976_24984 = null;
var count__24977_24985 = (0);
var i__24978_24986 = (0);
while(true){
if((i__24978_24986 < count__24977_24985)){
var dep_24987 = cljs.core._nth.call(null,chunk__24976_24984,i__24978_24986);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_24987;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_24987));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_24987,(depth + (1)),state);
} else {
}


var G__24988 = seq__24975_24983;
var G__24989 = chunk__24976_24984;
var G__24990 = count__24977_24985;
var G__24991 = (i__24978_24986 + (1));
seq__24975_24983 = G__24988;
chunk__24976_24984 = G__24989;
count__24977_24985 = G__24990;
i__24978_24986 = G__24991;
continue;
} else {
var temp__4657__auto___24992 = cljs.core.seq.call(null,seq__24975_24983);
if(temp__4657__auto___24992){
var seq__24975_24993__$1 = temp__4657__auto___24992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24975_24993__$1)){
var c__4319__auto___24994 = cljs.core.chunk_first.call(null,seq__24975_24993__$1);
var G__24995 = cljs.core.chunk_rest.call(null,seq__24975_24993__$1);
var G__24996 = c__4319__auto___24994;
var G__24997 = cljs.core.count.call(null,c__4319__auto___24994);
var G__24998 = (0);
seq__24975_24983 = G__24995;
chunk__24976_24984 = G__24996;
count__24977_24985 = G__24997;
i__24978_24986 = G__24998;
continue;
} else {
var dep_24999 = cljs.core.first.call(null,seq__24975_24993__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_24999;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_24999));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_24999,(depth + (1)),state);
} else {
}


var G__25000 = cljs.core.next.call(null,seq__24975_24993__$1);
var G__25001 = null;
var G__25002 = (0);
var G__25003 = (0);
seq__24975_24983 = G__25000;
chunk__24976_24984 = G__25001;
count__24977_24985 = G__25002;
i__24978_24986 = G__25003;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24979){
var vec__24980 = p__24979;
var seq__24981 = cljs.core.seq.call(null,vec__24980);
var first__24982 = cljs.core.first.call(null,seq__24981);
var seq__24981__$1 = cljs.core.next.call(null,seq__24981);
var x = first__24982;
var xs = seq__24981__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24980,seq__24981,first__24982,seq__24981__$1,x,xs,get_deps__$1){
return (function (p1__24966_SHARP_){
return clojure.set.difference.call(null,p1__24966_SHARP_,x);
});})(vec__24980,seq__24981,first__24982,seq__24981__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25004 = cljs.core.seq.call(null,provides);
var chunk__25005 = null;
var count__25006 = (0);
var i__25007 = (0);
while(true){
if((i__25007 < count__25006)){
var prov = cljs.core._nth.call(null,chunk__25005,i__25007);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25008_25016 = cljs.core.seq.call(null,requires);
var chunk__25009_25017 = null;
var count__25010_25018 = (0);
var i__25011_25019 = (0);
while(true){
if((i__25011_25019 < count__25010_25018)){
var req_25020 = cljs.core._nth.call(null,chunk__25009_25017,i__25011_25019);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25020,prov);


var G__25021 = seq__25008_25016;
var G__25022 = chunk__25009_25017;
var G__25023 = count__25010_25018;
var G__25024 = (i__25011_25019 + (1));
seq__25008_25016 = G__25021;
chunk__25009_25017 = G__25022;
count__25010_25018 = G__25023;
i__25011_25019 = G__25024;
continue;
} else {
var temp__4657__auto___25025 = cljs.core.seq.call(null,seq__25008_25016);
if(temp__4657__auto___25025){
var seq__25008_25026__$1 = temp__4657__auto___25025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25008_25026__$1)){
var c__4319__auto___25027 = cljs.core.chunk_first.call(null,seq__25008_25026__$1);
var G__25028 = cljs.core.chunk_rest.call(null,seq__25008_25026__$1);
var G__25029 = c__4319__auto___25027;
var G__25030 = cljs.core.count.call(null,c__4319__auto___25027);
var G__25031 = (0);
seq__25008_25016 = G__25028;
chunk__25009_25017 = G__25029;
count__25010_25018 = G__25030;
i__25011_25019 = G__25031;
continue;
} else {
var req_25032 = cljs.core.first.call(null,seq__25008_25026__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25032,prov);


var G__25033 = cljs.core.next.call(null,seq__25008_25026__$1);
var G__25034 = null;
var G__25035 = (0);
var G__25036 = (0);
seq__25008_25016 = G__25033;
chunk__25009_25017 = G__25034;
count__25010_25018 = G__25035;
i__25011_25019 = G__25036;
continue;
}
} else {
}
}
break;
}


var G__25037 = seq__25004;
var G__25038 = chunk__25005;
var G__25039 = count__25006;
var G__25040 = (i__25007 + (1));
seq__25004 = G__25037;
chunk__25005 = G__25038;
count__25006 = G__25039;
i__25007 = G__25040;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25004);
if(temp__4657__auto__){
var seq__25004__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25004__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25004__$1);
var G__25041 = cljs.core.chunk_rest.call(null,seq__25004__$1);
var G__25042 = c__4319__auto__;
var G__25043 = cljs.core.count.call(null,c__4319__auto__);
var G__25044 = (0);
seq__25004 = G__25041;
chunk__25005 = G__25042;
count__25006 = G__25043;
i__25007 = G__25044;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25004__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25012_25045 = cljs.core.seq.call(null,requires);
var chunk__25013_25046 = null;
var count__25014_25047 = (0);
var i__25015_25048 = (0);
while(true){
if((i__25015_25048 < count__25014_25047)){
var req_25049 = cljs.core._nth.call(null,chunk__25013_25046,i__25015_25048);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25049,prov);


var G__25050 = seq__25012_25045;
var G__25051 = chunk__25013_25046;
var G__25052 = count__25014_25047;
var G__25053 = (i__25015_25048 + (1));
seq__25012_25045 = G__25050;
chunk__25013_25046 = G__25051;
count__25014_25047 = G__25052;
i__25015_25048 = G__25053;
continue;
} else {
var temp__4657__auto___25054__$1 = cljs.core.seq.call(null,seq__25012_25045);
if(temp__4657__auto___25054__$1){
var seq__25012_25055__$1 = temp__4657__auto___25054__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25012_25055__$1)){
var c__4319__auto___25056 = cljs.core.chunk_first.call(null,seq__25012_25055__$1);
var G__25057 = cljs.core.chunk_rest.call(null,seq__25012_25055__$1);
var G__25058 = c__4319__auto___25056;
var G__25059 = cljs.core.count.call(null,c__4319__auto___25056);
var G__25060 = (0);
seq__25012_25045 = G__25057;
chunk__25013_25046 = G__25058;
count__25014_25047 = G__25059;
i__25015_25048 = G__25060;
continue;
} else {
var req_25061 = cljs.core.first.call(null,seq__25012_25055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25061,prov);


var G__25062 = cljs.core.next.call(null,seq__25012_25055__$1);
var G__25063 = null;
var G__25064 = (0);
var G__25065 = (0);
seq__25012_25045 = G__25062;
chunk__25013_25046 = G__25063;
count__25014_25047 = G__25064;
i__25015_25048 = G__25065;
continue;
}
} else {
}
}
break;
}


var G__25066 = cljs.core.next.call(null,seq__25004__$1);
var G__25067 = null;
var G__25068 = (0);
var G__25069 = (0);
seq__25004 = G__25066;
chunk__25005 = G__25067;
count__25006 = G__25068;
i__25007 = G__25069;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25070_25074 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25071_25075 = null;
var count__25072_25076 = (0);
var i__25073_25077 = (0);
while(true){
if((i__25073_25077 < count__25072_25076)){
var ns_25078 = cljs.core._nth.call(null,chunk__25071_25075,i__25073_25077);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25078);


var G__25079 = seq__25070_25074;
var G__25080 = chunk__25071_25075;
var G__25081 = count__25072_25076;
var G__25082 = (i__25073_25077 + (1));
seq__25070_25074 = G__25079;
chunk__25071_25075 = G__25080;
count__25072_25076 = G__25081;
i__25073_25077 = G__25082;
continue;
} else {
var temp__4657__auto___25083 = cljs.core.seq.call(null,seq__25070_25074);
if(temp__4657__auto___25083){
var seq__25070_25084__$1 = temp__4657__auto___25083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25070_25084__$1)){
var c__4319__auto___25085 = cljs.core.chunk_first.call(null,seq__25070_25084__$1);
var G__25086 = cljs.core.chunk_rest.call(null,seq__25070_25084__$1);
var G__25087 = c__4319__auto___25085;
var G__25088 = cljs.core.count.call(null,c__4319__auto___25085);
var G__25089 = (0);
seq__25070_25074 = G__25086;
chunk__25071_25075 = G__25087;
count__25072_25076 = G__25088;
i__25073_25077 = G__25089;
continue;
} else {
var ns_25090 = cljs.core.first.call(null,seq__25070_25084__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25090);


var G__25091 = cljs.core.next.call(null,seq__25070_25084__$1);
var G__25092 = null;
var G__25093 = (0);
var G__25094 = (0);
seq__25070_25074 = G__25091;
chunk__25071_25075 = G__25092;
count__25072_25076 = G__25093;
i__25073_25077 = G__25094;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25095__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25096__i = 0, G__25096__a = new Array(arguments.length -  0);
while (G__25096__i < G__25096__a.length) {G__25096__a[G__25096__i] = arguments[G__25096__i + 0]; ++G__25096__i;}
  args = new cljs.core.IndexedSeq(G__25096__a,0,null);
} 
return G__25095__delegate.call(this,args);};
G__25095.cljs$lang$maxFixedArity = 0;
G__25095.cljs$lang$applyTo = (function (arglist__25097){
var args = cljs.core.seq(arglist__25097);
return G__25095__delegate(args);
});
G__25095.cljs$core$IFn$_invoke$arity$variadic = G__25095__delegate;
return G__25095;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__25098_SHARP_,p2__25099_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25098_SHARP_)].join('')),p2__25099_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__25100_SHARP_,p2__25101_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25100_SHARP_)].join(''),p2__25101_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25102 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25102.addCallback(((function (G__25102){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25102))
);

G__25102.addErrback(((function (G__25102){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25102))
);

return G__25102;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25103){if((e25103 instanceof Error)){
var e = e25103;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25103;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25104){if((e25104 instanceof Error)){
var e = e25104;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25104;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25105 = cljs.core._EQ_;
var expr__25106 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25105.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25106))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25105.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25106))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25105.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25106))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25105,expr__25106){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25105,expr__25106))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25108,callback){
var map__25109 = p__25108;
var map__25109__$1 = ((((!((map__25109 == null)))?(((((map__25109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25109):map__25109);
var file_msg = map__25109__$1;
var request_url = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25109,map__25109__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25109,map__25109__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__){
return (function (state_25147){
var state_val_25148 = (state_25147[(1)]);
if((state_val_25148 === (7))){
var inst_25143 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25149_25175 = state_25147__$1;
(statearr_25149_25175[(2)] = inst_25143);

(statearr_25149_25175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (1))){
var state_25147__$1 = state_25147;
var statearr_25150_25176 = state_25147__$1;
(statearr_25150_25176[(2)] = null);

(statearr_25150_25176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (4))){
var inst_25113 = (state_25147[(7)]);
var inst_25113__$1 = (state_25147[(2)]);
var state_25147__$1 = (function (){var statearr_25151 = state_25147;
(statearr_25151[(7)] = inst_25113__$1);

return statearr_25151;
})();
if(cljs.core.truth_(inst_25113__$1)){
var statearr_25152_25177 = state_25147__$1;
(statearr_25152_25177[(1)] = (5));

} else {
var statearr_25153_25178 = state_25147__$1;
(statearr_25153_25178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (15))){
var inst_25128 = (state_25147[(8)]);
var inst_25126 = (state_25147[(9)]);
var inst_25130 = inst_25128.call(null,inst_25126);
var state_25147__$1 = state_25147;
var statearr_25154_25179 = state_25147__$1;
(statearr_25154_25179[(2)] = inst_25130);

(statearr_25154_25179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (13))){
var inst_25137 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25155_25180 = state_25147__$1;
(statearr_25155_25180[(2)] = inst_25137);

(statearr_25155_25180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (6))){
var state_25147__$1 = state_25147;
var statearr_25156_25181 = state_25147__$1;
(statearr_25156_25181[(2)] = null);

(statearr_25156_25181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (17))){
var inst_25134 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
var statearr_25157_25182 = state_25147__$1;
(statearr_25157_25182[(2)] = inst_25134);

(statearr_25157_25182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (3))){
var inst_25145 = (state_25147[(2)]);
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25147__$1,inst_25145);
} else {
if((state_val_25148 === (12))){
var state_25147__$1 = state_25147;
var statearr_25158_25183 = state_25147__$1;
(statearr_25158_25183[(2)] = null);

(statearr_25158_25183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (2))){
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25147__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25148 === (11))){
var inst_25118 = (state_25147[(10)]);
var inst_25124 = figwheel.client.file_reloading.blocking_load.call(null,inst_25118);
var state_25147__$1 = state_25147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25147__$1,(14),inst_25124);
} else {
if((state_val_25148 === (9))){
var inst_25118 = (state_25147[(10)]);
var state_25147__$1 = state_25147;
if(cljs.core.truth_(inst_25118)){
var statearr_25159_25184 = state_25147__$1;
(statearr_25159_25184[(1)] = (11));

} else {
var statearr_25160_25185 = state_25147__$1;
(statearr_25160_25185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (5))){
var inst_25113 = (state_25147[(7)]);
var inst_25119 = (state_25147[(11)]);
var inst_25118 = cljs.core.nth.call(null,inst_25113,(0),null);
var inst_25119__$1 = cljs.core.nth.call(null,inst_25113,(1),null);
var state_25147__$1 = (function (){var statearr_25161 = state_25147;
(statearr_25161[(10)] = inst_25118);

(statearr_25161[(11)] = inst_25119__$1);

return statearr_25161;
})();
if(cljs.core.truth_(inst_25119__$1)){
var statearr_25162_25186 = state_25147__$1;
(statearr_25162_25186[(1)] = (8));

} else {
var statearr_25163_25187 = state_25147__$1;
(statearr_25163_25187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (14))){
var inst_25128 = (state_25147[(8)]);
var inst_25118 = (state_25147[(10)]);
var inst_25126 = (state_25147[(2)]);
var inst_25127 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25128__$1 = cljs.core.get.call(null,inst_25127,inst_25118);
var state_25147__$1 = (function (){var statearr_25164 = state_25147;
(statearr_25164[(8)] = inst_25128__$1);

(statearr_25164[(9)] = inst_25126);

return statearr_25164;
})();
if(cljs.core.truth_(inst_25128__$1)){
var statearr_25165_25188 = state_25147__$1;
(statearr_25165_25188[(1)] = (15));

} else {
var statearr_25166_25189 = state_25147__$1;
(statearr_25166_25189[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (16))){
var inst_25126 = (state_25147[(9)]);
var inst_25132 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25126);
var state_25147__$1 = state_25147;
var statearr_25167_25190 = state_25147__$1;
(statearr_25167_25190[(2)] = inst_25132);

(statearr_25167_25190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (10))){
var inst_25139 = (state_25147[(2)]);
var state_25147__$1 = (function (){var statearr_25168 = state_25147;
(statearr_25168[(12)] = inst_25139);

return statearr_25168;
})();
var statearr_25169_25191 = state_25147__$1;
(statearr_25169_25191[(2)] = null);

(statearr_25169_25191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25148 === (8))){
var inst_25119 = (state_25147[(11)]);
var inst_25121 = eval(inst_25119);
var state_25147__$1 = state_25147;
var statearr_25170_25192 = state_25147__$1;
(statearr_25170_25192[(2)] = inst_25121);

(statearr_25170_25192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20872__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20784__auto__ = null;
var figwheel$client$file_reloading$state_machine__20784__auto____0 = (function (){
var statearr_25171 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25171[(0)] = figwheel$client$file_reloading$state_machine__20784__auto__);

(statearr_25171[(1)] = (1));

return statearr_25171;
});
var figwheel$client$file_reloading$state_machine__20784__auto____1 = (function (state_25147){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_25147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e25172){if((e25172 instanceof Object)){
var ex__20787__auto__ = e25172;
var statearr_25173_25193 = state_25147;
(statearr_25173_25193[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25194 = state_25147;
state_25147 = G__25194;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20784__auto__ = function(state_25147){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20784__auto____1.call(this,state_25147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20784__auto____0;
figwheel$client$file_reloading$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20784__auto____1;
return figwheel$client$file_reloading$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__))
})();
var state__20874__auto__ = (function (){var statearr_25174 = f__20873__auto__.call(null);
(statearr_25174[(6)] = c__20872__auto__);

return statearr_25174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__))
);

return c__20872__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25196 = arguments.length;
switch (G__25196) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25198,callback){
var map__25199 = p__25198;
var map__25199__$1 = ((((!((map__25199 == null)))?(((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);
var file_msg = map__25199__$1;
var namespace = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25199,map__25199__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25199,map__25199__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25201){
var map__25202 = p__25201;
var map__25202__$1 = ((((!((map__25202 == null)))?(((((map__25202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25202):map__25202);
var file_msg = map__25202__$1;
var namespace = cljs.core.get.call(null,map__25202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25204){
var map__25205 = p__25204;
var map__25205__$1 = ((((!((map__25205 == null)))?(((((map__25205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25205):map__25205);
var file_msg = map__25205__$1;
var namespace = cljs.core.get.call(null,map__25205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25207,callback){
var map__25208 = p__25207;
var map__25208__$1 = ((((!((map__25208 == null)))?(((((map__25208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25208):map__25208);
var file_msg = map__25208__$1;
var request_url = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20872__auto___25258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___25258,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___25258,out){
return (function (state_25243){
var state_val_25244 = (state_25243[(1)]);
if((state_val_25244 === (1))){
var inst_25217 = cljs.core.seq.call(null,files);
var inst_25218 = cljs.core.first.call(null,inst_25217);
var inst_25219 = cljs.core.next.call(null,inst_25217);
var inst_25220 = files;
var state_25243__$1 = (function (){var statearr_25245 = state_25243;
(statearr_25245[(7)] = inst_25219);

(statearr_25245[(8)] = inst_25218);

(statearr_25245[(9)] = inst_25220);

return statearr_25245;
})();
var statearr_25246_25259 = state_25243__$1;
(statearr_25246_25259[(2)] = null);

(statearr_25246_25259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (2))){
var inst_25226 = (state_25243[(10)]);
var inst_25220 = (state_25243[(9)]);
var inst_25225 = cljs.core.seq.call(null,inst_25220);
var inst_25226__$1 = cljs.core.first.call(null,inst_25225);
var inst_25227 = cljs.core.next.call(null,inst_25225);
var inst_25228 = (inst_25226__$1 == null);
var inst_25229 = cljs.core.not.call(null,inst_25228);
var state_25243__$1 = (function (){var statearr_25247 = state_25243;
(statearr_25247[(11)] = inst_25227);

(statearr_25247[(10)] = inst_25226__$1);

return statearr_25247;
})();
if(inst_25229){
var statearr_25248_25260 = state_25243__$1;
(statearr_25248_25260[(1)] = (4));

} else {
var statearr_25249_25261 = state_25243__$1;
(statearr_25249_25261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (3))){
var inst_25241 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25243__$1,inst_25241);
} else {
if((state_val_25244 === (4))){
var inst_25226 = (state_25243[(10)]);
var inst_25231 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25226);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25243__$1,(7),inst_25231);
} else {
if((state_val_25244 === (5))){
var inst_25237 = cljs.core.async.close_BANG_.call(null,out);
var state_25243__$1 = state_25243;
var statearr_25250_25262 = state_25243__$1;
(statearr_25250_25262[(2)] = inst_25237);

(statearr_25250_25262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (6))){
var inst_25239 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25251_25263 = state_25243__$1;
(statearr_25251_25263[(2)] = inst_25239);

(statearr_25251_25263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (7))){
var inst_25227 = (state_25243[(11)]);
var inst_25233 = (state_25243[(2)]);
var inst_25234 = cljs.core.async.put_BANG_.call(null,out,inst_25233);
var inst_25220 = inst_25227;
var state_25243__$1 = (function (){var statearr_25252 = state_25243;
(statearr_25252[(12)] = inst_25234);

(statearr_25252[(9)] = inst_25220);

return statearr_25252;
})();
var statearr_25253_25264 = state_25243__$1;
(statearr_25253_25264[(2)] = null);

(statearr_25253_25264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20872__auto___25258,out))
;
return ((function (switch__20783__auto__,c__20872__auto___25258,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____0 = (function (){
var statearr_25254 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25254[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__);

(statearr_25254[(1)] = (1));

return statearr_25254;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____1 = (function (state_25243){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_25243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e25255){if((e25255 instanceof Object)){
var ex__20787__auto__ = e25255;
var statearr_25256_25265 = state_25243;
(statearr_25256_25265[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25266 = state_25243;
state_25243 = G__25266;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__ = function(state_25243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____1.call(this,state_25243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___25258,out))
})();
var state__20874__auto__ = (function (){var statearr_25257 = f__20873__auto__.call(null);
(statearr_25257[(6)] = c__20872__auto___25258);

return statearr_25257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___25258,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25267,opts){
var map__25268 = p__25267;
var map__25268__$1 = ((((!((map__25268 == null)))?(((((map__25268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25268):map__25268);
var eval_body = cljs.core.get.call(null,map__25268__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25268__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25270){var e = e25270;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25271_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25271_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25272){
var vec__25273 = p__25272;
var k = cljs.core.nth.call(null,vec__25273,(0),null);
var v = cljs.core.nth.call(null,vec__25273,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25276){
var vec__25277 = p__25276;
var k = cljs.core.nth.call(null,vec__25277,(0),null);
var v = cljs.core.nth.call(null,vec__25277,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25283,p__25284){
var map__25285 = p__25283;
var map__25285__$1 = ((((!((map__25285 == null)))?(((((map__25285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25285):map__25285);
var opts = map__25285__$1;
var before_jsload = cljs.core.get.call(null,map__25285__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25285__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25285__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25286 = p__25284;
var map__25286__$1 = ((((!((map__25286 == null)))?(((((map__25286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25286):map__25286);
var msg = map__25286__$1;
var files = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25286__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25440){
var state_val_25441 = (state_25440[(1)]);
if((state_val_25441 === (7))){
var inst_25301 = (state_25440[(7)]);
var inst_25300 = (state_25440[(8)]);
var inst_25302 = (state_25440[(9)]);
var inst_25303 = (state_25440[(10)]);
var inst_25308 = cljs.core._nth.call(null,inst_25301,inst_25303);
var inst_25309 = figwheel.client.file_reloading.eval_body.call(null,inst_25308,opts);
var inst_25310 = (inst_25303 + (1));
var tmp25442 = inst_25301;
var tmp25443 = inst_25300;
var tmp25444 = inst_25302;
var inst_25300__$1 = tmp25443;
var inst_25301__$1 = tmp25442;
var inst_25302__$1 = tmp25444;
var inst_25303__$1 = inst_25310;
var state_25440__$1 = (function (){var statearr_25445 = state_25440;
(statearr_25445[(7)] = inst_25301__$1);

(statearr_25445[(8)] = inst_25300__$1);

(statearr_25445[(9)] = inst_25302__$1);

(statearr_25445[(11)] = inst_25309);

(statearr_25445[(10)] = inst_25303__$1);

return statearr_25445;
})();
var statearr_25446_25529 = state_25440__$1;
(statearr_25446_25529[(2)] = null);

(statearr_25446_25529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (20))){
var inst_25343 = (state_25440[(12)]);
var inst_25351 = figwheel.client.file_reloading.sort_files.call(null,inst_25343);
var state_25440__$1 = state_25440;
var statearr_25447_25530 = state_25440__$1;
(statearr_25447_25530[(2)] = inst_25351);

(statearr_25447_25530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (27))){
var state_25440__$1 = state_25440;
var statearr_25448_25531 = state_25440__$1;
(statearr_25448_25531[(2)] = null);

(statearr_25448_25531[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (1))){
var inst_25292 = (state_25440[(13)]);
var inst_25289 = before_jsload.call(null,files);
var inst_25290 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25291 = (function (){return ((function (inst_25292,inst_25289,inst_25290,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25280_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25280_SHARP_);
});
;})(inst_25292,inst_25289,inst_25290,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25292__$1 = cljs.core.filter.call(null,inst_25291,files);
var inst_25293 = cljs.core.not_empty.call(null,inst_25292__$1);
var state_25440__$1 = (function (){var statearr_25449 = state_25440;
(statearr_25449[(13)] = inst_25292__$1);

(statearr_25449[(14)] = inst_25290);

(statearr_25449[(15)] = inst_25289);

return statearr_25449;
})();
if(cljs.core.truth_(inst_25293)){
var statearr_25450_25532 = state_25440__$1;
(statearr_25450_25532[(1)] = (2));

} else {
var statearr_25451_25533 = state_25440__$1;
(statearr_25451_25533[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (24))){
var state_25440__$1 = state_25440;
var statearr_25452_25534 = state_25440__$1;
(statearr_25452_25534[(2)] = null);

(statearr_25452_25534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (39))){
var inst_25393 = (state_25440[(16)]);
var state_25440__$1 = state_25440;
var statearr_25453_25535 = state_25440__$1;
(statearr_25453_25535[(2)] = inst_25393);

(statearr_25453_25535[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (46))){
var inst_25435 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25454_25536 = state_25440__$1;
(statearr_25454_25536[(2)] = inst_25435);

(statearr_25454_25536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (4))){
var inst_25337 = (state_25440[(2)]);
var inst_25338 = cljs.core.List.EMPTY;
var inst_25339 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25338);
var inst_25340 = (function (){return ((function (inst_25337,inst_25338,inst_25339,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25281_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25281_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25281_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25281_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_25337,inst_25338,inst_25339,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25341 = cljs.core.filter.call(null,inst_25340,files);
var inst_25342 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25343 = cljs.core.concat.call(null,inst_25341,inst_25342);
var state_25440__$1 = (function (){var statearr_25455 = state_25440;
(statearr_25455[(12)] = inst_25343);

(statearr_25455[(17)] = inst_25339);

(statearr_25455[(18)] = inst_25337);

return statearr_25455;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25456_25537 = state_25440__$1;
(statearr_25456_25537[(1)] = (16));

} else {
var statearr_25457_25538 = state_25440__$1;
(statearr_25457_25538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (15))){
var inst_25327 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25458_25539 = state_25440__$1;
(statearr_25458_25539[(2)] = inst_25327);

(statearr_25458_25539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (21))){
var inst_25353 = (state_25440[(19)]);
var inst_25353__$1 = (state_25440[(2)]);
var inst_25354 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25353__$1);
var state_25440__$1 = (function (){var statearr_25459 = state_25440;
(statearr_25459[(19)] = inst_25353__$1);

return statearr_25459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25440__$1,(22),inst_25354);
} else {
if((state_val_25441 === (31))){
var inst_25438 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25440__$1,inst_25438);
} else {
if((state_val_25441 === (32))){
var inst_25393 = (state_25440[(16)]);
var inst_25398 = inst_25393.cljs$lang$protocol_mask$partition0$;
var inst_25399 = (inst_25398 & (64));
var inst_25400 = inst_25393.cljs$core$ISeq$;
var inst_25401 = (cljs.core.PROTOCOL_SENTINEL === inst_25400);
var inst_25402 = ((inst_25399) || (inst_25401));
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25402)){
var statearr_25460_25540 = state_25440__$1;
(statearr_25460_25540[(1)] = (35));

} else {
var statearr_25461_25541 = state_25440__$1;
(statearr_25461_25541[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (40))){
var inst_25415 = (state_25440[(20)]);
var inst_25414 = (state_25440[(2)]);
var inst_25415__$1 = cljs.core.get.call(null,inst_25414,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25416 = cljs.core.get.call(null,inst_25414,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25417 = cljs.core.not_empty.call(null,inst_25415__$1);
var state_25440__$1 = (function (){var statearr_25462 = state_25440;
(statearr_25462[(20)] = inst_25415__$1);

(statearr_25462[(21)] = inst_25416);

return statearr_25462;
})();
if(cljs.core.truth_(inst_25417)){
var statearr_25463_25542 = state_25440__$1;
(statearr_25463_25542[(1)] = (41));

} else {
var statearr_25464_25543 = state_25440__$1;
(statearr_25464_25543[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (33))){
var state_25440__$1 = state_25440;
var statearr_25465_25544 = state_25440__$1;
(statearr_25465_25544[(2)] = false);

(statearr_25465_25544[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (13))){
var inst_25313 = (state_25440[(22)]);
var inst_25317 = cljs.core.chunk_first.call(null,inst_25313);
var inst_25318 = cljs.core.chunk_rest.call(null,inst_25313);
var inst_25319 = cljs.core.count.call(null,inst_25317);
var inst_25300 = inst_25318;
var inst_25301 = inst_25317;
var inst_25302 = inst_25319;
var inst_25303 = (0);
var state_25440__$1 = (function (){var statearr_25466 = state_25440;
(statearr_25466[(7)] = inst_25301);

(statearr_25466[(8)] = inst_25300);

(statearr_25466[(9)] = inst_25302);

(statearr_25466[(10)] = inst_25303);

return statearr_25466;
})();
var statearr_25467_25545 = state_25440__$1;
(statearr_25467_25545[(2)] = null);

(statearr_25467_25545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (22))){
var inst_25356 = (state_25440[(23)]);
var inst_25357 = (state_25440[(24)]);
var inst_25361 = (state_25440[(25)]);
var inst_25353 = (state_25440[(19)]);
var inst_25356__$1 = (state_25440[(2)]);
var inst_25357__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25356__$1);
var inst_25358 = (function (){var all_files = inst_25353;
var res_SINGLEQUOTE_ = inst_25356__$1;
var res = inst_25357__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25356,inst_25357,inst_25361,inst_25353,inst_25356__$1,inst_25357__$1,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25282_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25282_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25356,inst_25357,inst_25361,inst_25353,inst_25356__$1,inst_25357__$1,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25359 = cljs.core.filter.call(null,inst_25358,inst_25356__$1);
var inst_25360 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25361__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25360);
var inst_25362 = cljs.core.not_empty.call(null,inst_25361__$1);
var state_25440__$1 = (function (){var statearr_25468 = state_25440;
(statearr_25468[(23)] = inst_25356__$1);

(statearr_25468[(24)] = inst_25357__$1);

(statearr_25468[(25)] = inst_25361__$1);

(statearr_25468[(26)] = inst_25359);

return statearr_25468;
})();
if(cljs.core.truth_(inst_25362)){
var statearr_25469_25546 = state_25440__$1;
(statearr_25469_25546[(1)] = (23));

} else {
var statearr_25470_25547 = state_25440__$1;
(statearr_25470_25547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (36))){
var state_25440__$1 = state_25440;
var statearr_25471_25548 = state_25440__$1;
(statearr_25471_25548[(2)] = false);

(statearr_25471_25548[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (41))){
var inst_25415 = (state_25440[(20)]);
var inst_25419 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25420 = cljs.core.map.call(null,inst_25419,inst_25415);
var inst_25421 = cljs.core.pr_str.call(null,inst_25420);
var inst_25422 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25421)].join('');
var inst_25423 = figwheel.client.utils.log.call(null,inst_25422);
var state_25440__$1 = state_25440;
var statearr_25472_25549 = state_25440__$1;
(statearr_25472_25549[(2)] = inst_25423);

(statearr_25472_25549[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (43))){
var inst_25416 = (state_25440[(21)]);
var inst_25426 = (state_25440[(2)]);
var inst_25427 = cljs.core.not_empty.call(null,inst_25416);
var state_25440__$1 = (function (){var statearr_25473 = state_25440;
(statearr_25473[(27)] = inst_25426);

return statearr_25473;
})();
if(cljs.core.truth_(inst_25427)){
var statearr_25474_25550 = state_25440__$1;
(statearr_25474_25550[(1)] = (44));

} else {
var statearr_25475_25551 = state_25440__$1;
(statearr_25475_25551[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (29))){
var inst_25356 = (state_25440[(23)]);
var inst_25357 = (state_25440[(24)]);
var inst_25361 = (state_25440[(25)]);
var inst_25353 = (state_25440[(19)]);
var inst_25393 = (state_25440[(16)]);
var inst_25359 = (state_25440[(26)]);
var inst_25389 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25392 = (function (){var all_files = inst_25353;
var res_SINGLEQUOTE_ = inst_25356;
var res = inst_25357;
var files_not_loaded = inst_25359;
var dependencies_that_loaded = inst_25361;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25393,inst_25359,inst_25389,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25391){
var map__25476 = p__25391;
var map__25476__$1 = ((((!((map__25476 == null)))?(((((map__25476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25476):map__25476);
var namespace = cljs.core.get.call(null,map__25476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25393,inst_25359,inst_25389,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25393__$1 = cljs.core.group_by.call(null,inst_25392,inst_25359);
var inst_25395 = (inst_25393__$1 == null);
var inst_25396 = cljs.core.not.call(null,inst_25395);
var state_25440__$1 = (function (){var statearr_25478 = state_25440;
(statearr_25478[(28)] = inst_25389);

(statearr_25478[(16)] = inst_25393__$1);

return statearr_25478;
})();
if(inst_25396){
var statearr_25479_25552 = state_25440__$1;
(statearr_25479_25552[(1)] = (32));

} else {
var statearr_25480_25553 = state_25440__$1;
(statearr_25480_25553[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (44))){
var inst_25416 = (state_25440[(21)]);
var inst_25429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25416);
var inst_25430 = cljs.core.pr_str.call(null,inst_25429);
var inst_25431 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25430)].join('');
var inst_25432 = figwheel.client.utils.log.call(null,inst_25431);
var state_25440__$1 = state_25440;
var statearr_25481_25554 = state_25440__$1;
(statearr_25481_25554[(2)] = inst_25432);

(statearr_25481_25554[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (6))){
var inst_25334 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25482_25555 = state_25440__$1;
(statearr_25482_25555[(2)] = inst_25334);

(statearr_25482_25555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (28))){
var inst_25359 = (state_25440[(26)]);
var inst_25386 = (state_25440[(2)]);
var inst_25387 = cljs.core.not_empty.call(null,inst_25359);
var state_25440__$1 = (function (){var statearr_25483 = state_25440;
(statearr_25483[(29)] = inst_25386);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25387)){
var statearr_25484_25556 = state_25440__$1;
(statearr_25484_25556[(1)] = (29));

} else {
var statearr_25485_25557 = state_25440__$1;
(statearr_25485_25557[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (25))){
var inst_25357 = (state_25440[(24)]);
var inst_25373 = (state_25440[(2)]);
var inst_25374 = cljs.core.not_empty.call(null,inst_25357);
var state_25440__$1 = (function (){var statearr_25486 = state_25440;
(statearr_25486[(30)] = inst_25373);

return statearr_25486;
})();
if(cljs.core.truth_(inst_25374)){
var statearr_25487_25558 = state_25440__$1;
(statearr_25487_25558[(1)] = (26));

} else {
var statearr_25488_25559 = state_25440__$1;
(statearr_25488_25559[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (34))){
var inst_25409 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25409)){
var statearr_25489_25560 = state_25440__$1;
(statearr_25489_25560[(1)] = (38));

} else {
var statearr_25490_25561 = state_25440__$1;
(statearr_25490_25561[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (17))){
var state_25440__$1 = state_25440;
var statearr_25491_25562 = state_25440__$1;
(statearr_25491_25562[(2)] = recompile_dependents);

(statearr_25491_25562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (3))){
var state_25440__$1 = state_25440;
var statearr_25492_25563 = state_25440__$1;
(statearr_25492_25563[(2)] = null);

(statearr_25492_25563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (12))){
var inst_25330 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25493_25564 = state_25440__$1;
(statearr_25493_25564[(2)] = inst_25330);

(statearr_25493_25564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (2))){
var inst_25292 = (state_25440[(13)]);
var inst_25299 = cljs.core.seq.call(null,inst_25292);
var inst_25300 = inst_25299;
var inst_25301 = null;
var inst_25302 = (0);
var inst_25303 = (0);
var state_25440__$1 = (function (){var statearr_25494 = state_25440;
(statearr_25494[(7)] = inst_25301);

(statearr_25494[(8)] = inst_25300);

(statearr_25494[(9)] = inst_25302);

(statearr_25494[(10)] = inst_25303);

return statearr_25494;
})();
var statearr_25495_25565 = state_25440__$1;
(statearr_25495_25565[(2)] = null);

(statearr_25495_25565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (23))){
var inst_25356 = (state_25440[(23)]);
var inst_25357 = (state_25440[(24)]);
var inst_25361 = (state_25440[(25)]);
var inst_25353 = (state_25440[(19)]);
var inst_25359 = (state_25440[(26)]);
var inst_25364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25366 = (function (){var all_files = inst_25353;
var res_SINGLEQUOTE_ = inst_25356;
var res = inst_25357;
var files_not_loaded = inst_25359;
var dependencies_that_loaded = inst_25361;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25364,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25365){
var map__25496 = p__25365;
var map__25496__$1 = ((((!((map__25496 == null)))?(((((map__25496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25496):map__25496);
var request_url = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25364,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25367 = cljs.core.reverse.call(null,inst_25361);
var inst_25368 = cljs.core.map.call(null,inst_25366,inst_25367);
var inst_25369 = cljs.core.pr_str.call(null,inst_25368);
var inst_25370 = figwheel.client.utils.log.call(null,inst_25369);
var state_25440__$1 = (function (){var statearr_25498 = state_25440;
(statearr_25498[(31)] = inst_25364);

return statearr_25498;
})();
var statearr_25499_25566 = state_25440__$1;
(statearr_25499_25566[(2)] = inst_25370);

(statearr_25499_25566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (35))){
var state_25440__$1 = state_25440;
var statearr_25500_25567 = state_25440__$1;
(statearr_25500_25567[(2)] = true);

(statearr_25500_25567[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (19))){
var inst_25343 = (state_25440[(12)]);
var inst_25349 = figwheel.client.file_reloading.expand_files.call(null,inst_25343);
var state_25440__$1 = state_25440;
var statearr_25501_25568 = state_25440__$1;
(statearr_25501_25568[(2)] = inst_25349);

(statearr_25501_25568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (11))){
var state_25440__$1 = state_25440;
var statearr_25502_25569 = state_25440__$1;
(statearr_25502_25569[(2)] = null);

(statearr_25502_25569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (9))){
var inst_25332 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25503_25570 = state_25440__$1;
(statearr_25503_25570[(2)] = inst_25332);

(statearr_25503_25570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (5))){
var inst_25302 = (state_25440[(9)]);
var inst_25303 = (state_25440[(10)]);
var inst_25305 = (inst_25303 < inst_25302);
var inst_25306 = inst_25305;
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25306)){
var statearr_25504_25571 = state_25440__$1;
(statearr_25504_25571[(1)] = (7));

} else {
var statearr_25505_25572 = state_25440__$1;
(statearr_25505_25572[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (14))){
var inst_25313 = (state_25440[(22)]);
var inst_25322 = cljs.core.first.call(null,inst_25313);
var inst_25323 = figwheel.client.file_reloading.eval_body.call(null,inst_25322,opts);
var inst_25324 = cljs.core.next.call(null,inst_25313);
var inst_25300 = inst_25324;
var inst_25301 = null;
var inst_25302 = (0);
var inst_25303 = (0);
var state_25440__$1 = (function (){var statearr_25506 = state_25440;
(statearr_25506[(7)] = inst_25301);

(statearr_25506[(8)] = inst_25300);

(statearr_25506[(9)] = inst_25302);

(statearr_25506[(10)] = inst_25303);

(statearr_25506[(32)] = inst_25323);

return statearr_25506;
})();
var statearr_25507_25573 = state_25440__$1;
(statearr_25507_25573[(2)] = null);

(statearr_25507_25573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (45))){
var state_25440__$1 = state_25440;
var statearr_25508_25574 = state_25440__$1;
(statearr_25508_25574[(2)] = null);

(statearr_25508_25574[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (26))){
var inst_25356 = (state_25440[(23)]);
var inst_25357 = (state_25440[(24)]);
var inst_25361 = (state_25440[(25)]);
var inst_25353 = (state_25440[(19)]);
var inst_25359 = (state_25440[(26)]);
var inst_25376 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25378 = (function (){var all_files = inst_25353;
var res_SINGLEQUOTE_ = inst_25356;
var res = inst_25357;
var files_not_loaded = inst_25359;
var dependencies_that_loaded = inst_25361;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25376,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25377){
var map__25509 = p__25377;
var map__25509__$1 = ((((!((map__25509 == null)))?(((((map__25509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var namespace = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25376,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25379 = cljs.core.map.call(null,inst_25378,inst_25357);
var inst_25380 = cljs.core.pr_str.call(null,inst_25379);
var inst_25381 = figwheel.client.utils.log.call(null,inst_25380);
var inst_25382 = (function (){var all_files = inst_25353;
var res_SINGLEQUOTE_ = inst_25356;
var res = inst_25357;
var files_not_loaded = inst_25359;
var dependencies_that_loaded = inst_25361;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25376,inst_25378,inst_25379,inst_25380,inst_25381,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25356,inst_25357,inst_25361,inst_25353,inst_25359,inst_25376,inst_25378,inst_25379,inst_25380,inst_25381,state_val_25441,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25383 = setTimeout(inst_25382,(10));
var state_25440__$1 = (function (){var statearr_25511 = state_25440;
(statearr_25511[(33)] = inst_25376);

(statearr_25511[(34)] = inst_25381);

return statearr_25511;
})();
var statearr_25512_25575 = state_25440__$1;
(statearr_25512_25575[(2)] = inst_25383);

(statearr_25512_25575[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (16))){
var state_25440__$1 = state_25440;
var statearr_25513_25576 = state_25440__$1;
(statearr_25513_25576[(2)] = reload_dependents);

(statearr_25513_25576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (38))){
var inst_25393 = (state_25440[(16)]);
var inst_25411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25393);
var state_25440__$1 = state_25440;
var statearr_25514_25577 = state_25440__$1;
(statearr_25514_25577[(2)] = inst_25411);

(statearr_25514_25577[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (30))){
var state_25440__$1 = state_25440;
var statearr_25515_25578 = state_25440__$1;
(statearr_25515_25578[(2)] = null);

(statearr_25515_25578[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (10))){
var inst_25313 = (state_25440[(22)]);
var inst_25315 = cljs.core.chunked_seq_QMARK_.call(null,inst_25313);
var state_25440__$1 = state_25440;
if(inst_25315){
var statearr_25516_25579 = state_25440__$1;
(statearr_25516_25579[(1)] = (13));

} else {
var statearr_25517_25580 = state_25440__$1;
(statearr_25517_25580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (18))){
var inst_25347 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25347)){
var statearr_25518_25581 = state_25440__$1;
(statearr_25518_25581[(1)] = (19));

} else {
var statearr_25519_25582 = state_25440__$1;
(statearr_25519_25582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (42))){
var state_25440__$1 = state_25440;
var statearr_25520_25583 = state_25440__$1;
(statearr_25520_25583[(2)] = null);

(statearr_25520_25583[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (37))){
var inst_25406 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25521_25584 = state_25440__$1;
(statearr_25521_25584[(2)] = inst_25406);

(statearr_25521_25584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (8))){
var inst_25300 = (state_25440[(8)]);
var inst_25313 = (state_25440[(22)]);
var inst_25313__$1 = cljs.core.seq.call(null,inst_25300);
var state_25440__$1 = (function (){var statearr_25522 = state_25440;
(statearr_25522[(22)] = inst_25313__$1);

return statearr_25522;
})();
if(inst_25313__$1){
var statearr_25523_25585 = state_25440__$1;
(statearr_25523_25585[(1)] = (10));

} else {
var statearr_25524_25586 = state_25440__$1;
(statearr_25524_25586[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20783__auto__,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____0 = (function (){
var statearr_25525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25525[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__);

(statearr_25525[(1)] = (1));

return statearr_25525;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____1 = (function (state_25440){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_25440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e25526){if((e25526 instanceof Object)){
var ex__20787__auto__ = e25526;
var statearr_25527_25587 = state_25440;
(statearr_25527_25587[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25588 = state_25440;
state_25440 = G__25588;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20874__auto__ = (function (){var statearr_25528 = f__20873__auto__.call(null);
(statearr_25528[(6)] = c__20872__auto__);

return statearr_25528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__,map__25285,map__25285__$1,opts,before_jsload,on_jsload,reload_dependents,map__25286,map__25286__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20872__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25591,link){
var map__25592 = p__25591;
var map__25592__$1 = ((((!((map__25592 == null)))?(((((map__25592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25592):map__25592);
var file = cljs.core.get.call(null,map__25592__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25592,map__25592__$1,file){
return (function (p1__25589_SHARP_,p2__25590_SHARP_){
if(cljs.core._EQ_.call(null,p1__25589_SHARP_,p2__25590_SHARP_)){
return p1__25589_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25592,map__25592__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25595){
var map__25596 = p__25595;
var map__25596__$1 = ((((!((map__25596 == null)))?(((((map__25596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25596):map__25596);
var match_length = cljs.core.get.call(null,map__25596__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25596__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25594_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25594_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25598_SHARP_,p2__25599_SHARP_){
return cljs.core.assoc.call(null,p1__25598_SHARP_,cljs.core.get.call(null,p2__25599_SHARP_,key),p2__25599_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_25600 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25600);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25600);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25601,p__25602){
var map__25603 = p__25601;
var map__25603__$1 = ((((!((map__25603 == null)))?(((((map__25603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25603):map__25603);
var on_cssload = cljs.core.get.call(null,map__25603__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25604 = p__25602;
var map__25604__$1 = ((((!((map__25604 == null)))?(((((map__25604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25604):map__25604);
var files_msg = map__25604__$1;
var files = cljs.core.get.call(null,map__25604__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1628501144616
