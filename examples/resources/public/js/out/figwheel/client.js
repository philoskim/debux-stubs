// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e26510){if((e26510 instanceof Error)){
var e = e26510;
return "Error: Unable to stringify";
} else {
throw e26510;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26513 = arguments.length;
switch (G__26513) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26511_SHARP_){
if(typeof p1__26511_SHARP_ === 'string'){
return p1__26511_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26511_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26516 = arguments.length;
var i__4500__auto___26517 = (0);
while(true){
if((i__4500__auto___26517 < len__4499__auto___26516)){
args__4502__auto__.push((arguments[i__4500__auto___26517]));

var G__26518 = (i__4500__auto___26517 + (1));
i__4500__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26515){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26515));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26520 = arguments.length;
var i__4500__auto___26521 = (0);
while(true){
if((i__4500__auto___26521 < len__4499__auto___26520)){
args__4502__auto__.push((arguments[i__4500__auto___26521]));

var G__26522 = (i__4500__auto___26521 + (1));
i__4500__auto___26521 = G__26522;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26519){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26519));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26523){
var map__26524 = p__26523;
var map__26524__$1 = ((((!((map__26524 == null)))?(((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var message = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20872__auto___26603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___26603,ch){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___26603,ch){
return (function (state_26575){
var state_val_26576 = (state_26575[(1)]);
if((state_val_26576 === (7))){
var inst_26571 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26577_26604 = state_26575__$1;
(statearr_26577_26604[(2)] = inst_26571);

(statearr_26577_26604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (1))){
var state_26575__$1 = state_26575;
var statearr_26578_26605 = state_26575__$1;
(statearr_26578_26605[(2)] = null);

(statearr_26578_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (4))){
var inst_26528 = (state_26575[(7)]);
var inst_26528__$1 = (state_26575[(2)]);
var state_26575__$1 = (function (){var statearr_26579 = state_26575;
(statearr_26579[(7)] = inst_26528__$1);

return statearr_26579;
})();
if(cljs.core.truth_(inst_26528__$1)){
var statearr_26580_26606 = state_26575__$1;
(statearr_26580_26606[(1)] = (5));

} else {
var statearr_26581_26607 = state_26575__$1;
(statearr_26581_26607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (15))){
var inst_26535 = (state_26575[(8)]);
var inst_26550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26535);
var inst_26551 = cljs.core.first.call(null,inst_26550);
var inst_26552 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26551);
var inst_26553 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26552)].join('');
var inst_26554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26553);
var state_26575__$1 = state_26575;
var statearr_26582_26608 = state_26575__$1;
(statearr_26582_26608[(2)] = inst_26554);

(statearr_26582_26608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (13))){
var inst_26559 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26583_26609 = state_26575__$1;
(statearr_26583_26609[(2)] = inst_26559);

(statearr_26583_26609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (6))){
var state_26575__$1 = state_26575;
var statearr_26584_26610 = state_26575__$1;
(statearr_26584_26610[(2)] = null);

(statearr_26584_26610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (17))){
var inst_26557 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26585_26611 = state_26575__$1;
(statearr_26585_26611[(2)] = inst_26557);

(statearr_26585_26611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (3))){
var inst_26573 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26575__$1,inst_26573);
} else {
if((state_val_26576 === (12))){
var inst_26534 = (state_26575[(9)]);
var inst_26548 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26534,opts);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26548)){
var statearr_26586_26612 = state_26575__$1;
(statearr_26586_26612[(1)] = (15));

} else {
var statearr_26587_26613 = state_26575__$1;
(statearr_26587_26613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (2))){
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26575__$1,(4),ch);
} else {
if((state_val_26576 === (11))){
var inst_26535 = (state_26575[(8)]);
var inst_26540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26541 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26535);
var inst_26542 = cljs.core.async.timeout.call(null,(1000));
var inst_26543 = [inst_26541,inst_26542];
var inst_26544 = (new cljs.core.PersistentVector(null,2,(5),inst_26540,inst_26543,null));
var state_26575__$1 = state_26575;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26575__$1,(14),inst_26544);
} else {
if((state_val_26576 === (9))){
var inst_26535 = (state_26575[(8)]);
var inst_26561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26562 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26535);
var inst_26563 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26562);
var inst_26564 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26563)].join('');
var inst_26565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26564);
var state_26575__$1 = (function (){var statearr_26588 = state_26575;
(statearr_26588[(10)] = inst_26561);

return statearr_26588;
})();
var statearr_26589_26614 = state_26575__$1;
(statearr_26589_26614[(2)] = inst_26565);

(statearr_26589_26614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (5))){
var inst_26528 = (state_26575[(7)]);
var inst_26530 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26531 = (new cljs.core.PersistentArrayMap(null,2,inst_26530,null));
var inst_26532 = (new cljs.core.PersistentHashSet(null,inst_26531,null));
var inst_26533 = figwheel.client.focus_msgs.call(null,inst_26532,inst_26528);
var inst_26534 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26533);
var inst_26535 = cljs.core.first.call(null,inst_26533);
var inst_26536 = figwheel.client.autoload_QMARK_.call(null);
var state_26575__$1 = (function (){var statearr_26590 = state_26575;
(statearr_26590[(9)] = inst_26534);

(statearr_26590[(8)] = inst_26535);

return statearr_26590;
})();
if(cljs.core.truth_(inst_26536)){
var statearr_26591_26615 = state_26575__$1;
(statearr_26591_26615[(1)] = (8));

} else {
var statearr_26592_26616 = state_26575__$1;
(statearr_26592_26616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (14))){
var inst_26546 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26593_26617 = state_26575__$1;
(statearr_26593_26617[(2)] = inst_26546);

(statearr_26593_26617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (16))){
var state_26575__$1 = state_26575;
var statearr_26594_26618 = state_26575__$1;
(statearr_26594_26618[(2)] = null);

(statearr_26594_26618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (10))){
var inst_26567 = (state_26575[(2)]);
var state_26575__$1 = (function (){var statearr_26595 = state_26575;
(statearr_26595[(11)] = inst_26567);

return statearr_26595;
})();
var statearr_26596_26619 = state_26575__$1;
(statearr_26596_26619[(2)] = null);

(statearr_26596_26619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (8))){
var inst_26534 = (state_26575[(9)]);
var inst_26538 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26534,opts);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26538)){
var statearr_26597_26620 = state_26575__$1;
(statearr_26597_26620[(1)] = (11));

} else {
var statearr_26598_26621 = state_26575__$1;
(statearr_26598_26621[(1)] = (12));

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
});})(c__20872__auto___26603,ch))
;
return ((function (switch__20783__auto__,c__20872__auto___26603,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____0 = (function (){
var statearr_26599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26599[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__);

(statearr_26599[(1)] = (1));

return statearr_26599;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____1 = (function (state_26575){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_26575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e26600){if((e26600 instanceof Object)){
var ex__20787__auto__ = e26600;
var statearr_26601_26622 = state_26575;
(statearr_26601_26622[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26623 = state_26575;
state_26575 = G__26623;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__ = function(state_26575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____1.call(this,state_26575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20784__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___26603,ch))
})();
var state__20874__auto__ = (function (){var statearr_26602 = f__20873__auto__.call(null);
(statearr_26602[(6)] = c__20872__auto___26603);

return statearr_26602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___26603,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26624_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26624_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26628 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26628){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_26626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_26627 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_26626,_STAR_print_fn_STAR_26627,sb,base_path_26628){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_26626,_STAR_print_fn_STAR_26627,sb,base_path_26628))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26627;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26626;
}}catch (e26625){if((e26625 instanceof Error)){
var e = e26625;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26628], null));
} else {
var e = e26625;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26628))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26629){
var map__26630 = p__26629;
var map__26630__$1 = ((((!((map__26630 == null)))?(((((map__26630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26630):map__26630);
var opts = map__26630__$1;
var build_id = cljs.core.get.call(null,map__26630__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26630,map__26630__$1,opts,build_id){
return (function (p__26632){
var vec__26633 = p__26632;
var seq__26634 = cljs.core.seq.call(null,vec__26633);
var first__26635 = cljs.core.first.call(null,seq__26634);
var seq__26634__$1 = cljs.core.next.call(null,seq__26634);
var map__26636 = first__26635;
var map__26636__$1 = ((((!((map__26636 == null)))?(((((map__26636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var msg = map__26636__$1;
var msg_name = cljs.core.get.call(null,map__26636__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26634__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26633,seq__26634,first__26635,seq__26634__$1,map__26636,map__26636__$1,msg,msg_name,_,map__26630,map__26630__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26633,seq__26634,first__26635,seq__26634__$1,map__26636,map__26636__$1,msg,msg_name,_,map__26630,map__26630__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26630,map__26630__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26638){
var vec__26639 = p__26638;
var seq__26640 = cljs.core.seq.call(null,vec__26639);
var first__26641 = cljs.core.first.call(null,seq__26640);
var seq__26640__$1 = cljs.core.next.call(null,seq__26640);
var map__26642 = first__26641;
var map__26642__$1 = ((((!((map__26642 == null)))?(((((map__26642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642):map__26642);
var msg = map__26642__$1;
var msg_name = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26640__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26644){
var map__26645 = p__26644;
var map__26645__$1 = ((((!((map__26645 == null)))?(((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26645):map__26645);
var on_compile_warning = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26645,map__26645__$1,on_compile_warning,on_compile_fail){
return (function (p__26647){
var vec__26648 = p__26647;
var seq__26649 = cljs.core.seq.call(null,vec__26648);
var first__26650 = cljs.core.first.call(null,seq__26649);
var seq__26649__$1 = cljs.core.next.call(null,seq__26649);
var map__26651 = first__26650;
var map__26651__$1 = ((((!((map__26651 == null)))?(((((map__26651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26651):map__26651);
var msg = map__26651__$1;
var msg_name = cljs.core.get.call(null,map__26651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26649__$1;
var pred__26653 = cljs.core._EQ_;
var expr__26654 = msg_name;
if(cljs.core.truth_(pred__26653.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26654))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26653.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26654))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26645,map__26645__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__,msg_hist,msg_names,msg){
return (function (state_26743){
var state_val_26744 = (state_26743[(1)]);
if((state_val_26744 === (7))){
var inst_26663 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26663)){
var statearr_26745_26792 = state_26743__$1;
(statearr_26745_26792[(1)] = (8));

} else {
var statearr_26746_26793 = state_26743__$1;
(statearr_26746_26793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (20))){
var inst_26737 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26747_26794 = state_26743__$1;
(statearr_26747_26794[(2)] = inst_26737);

(statearr_26747_26794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (27))){
var inst_26733 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26748_26795 = state_26743__$1;
(statearr_26748_26795[(2)] = inst_26733);

(statearr_26748_26795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (1))){
var inst_26656 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26656)){
var statearr_26749_26796 = state_26743__$1;
(statearr_26749_26796[(1)] = (2));

} else {
var statearr_26750_26797 = state_26743__$1;
(statearr_26750_26797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (24))){
var inst_26735 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26751_26798 = state_26743__$1;
(statearr_26751_26798[(2)] = inst_26735);

(statearr_26751_26798[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (4))){
var inst_26741 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26743__$1,inst_26741);
} else {
if((state_val_26744 === (15))){
var inst_26739 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26752_26799 = state_26743__$1;
(statearr_26752_26799[(2)] = inst_26739);

(statearr_26752_26799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (21))){
var inst_26692 = (state_26743[(2)]);
var inst_26693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26693);
var state_26743__$1 = (function (){var statearr_26753 = state_26743;
(statearr_26753[(7)] = inst_26692);

return statearr_26753;
})();
var statearr_26754_26800 = state_26743__$1;
(statearr_26754_26800[(2)] = inst_26694);

(statearr_26754_26800[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (31))){
var inst_26722 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26722)){
var statearr_26755_26801 = state_26743__$1;
(statearr_26755_26801[(1)] = (34));

} else {
var statearr_26756_26802 = state_26743__$1;
(statearr_26756_26802[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (32))){
var inst_26731 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26757_26803 = state_26743__$1;
(statearr_26757_26803[(2)] = inst_26731);

(statearr_26757_26803[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (33))){
var inst_26718 = (state_26743[(2)]);
var inst_26719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26719);
var state_26743__$1 = (function (){var statearr_26758 = state_26743;
(statearr_26758[(8)] = inst_26718);

return statearr_26758;
})();
var statearr_26759_26804 = state_26743__$1;
(statearr_26759_26804[(2)] = inst_26720);

(statearr_26759_26804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (13))){
var inst_26677 = figwheel.client.heads_up.clear.call(null);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(16),inst_26677);
} else {
if((state_val_26744 === (22))){
var inst_26698 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26699 = figwheel.client.heads_up.append_warning_message.call(null,inst_26698);
var state_26743__$1 = state_26743;
var statearr_26760_26805 = state_26743__$1;
(statearr_26760_26805[(2)] = inst_26699);

(statearr_26760_26805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (36))){
var inst_26729 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26761_26806 = state_26743__$1;
(statearr_26761_26806[(2)] = inst_26729);

(statearr_26761_26806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (29))){
var inst_26709 = (state_26743[(2)]);
var inst_26710 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26710);
var state_26743__$1 = (function (){var statearr_26762 = state_26743;
(statearr_26762[(9)] = inst_26709);

return statearr_26762;
})();
var statearr_26763_26807 = state_26743__$1;
(statearr_26763_26807[(2)] = inst_26711);

(statearr_26763_26807[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (6))){
var inst_26658 = (state_26743[(10)]);
var state_26743__$1 = state_26743;
var statearr_26764_26808 = state_26743__$1;
(statearr_26764_26808[(2)] = inst_26658);

(statearr_26764_26808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (28))){
var inst_26705 = (state_26743[(2)]);
var inst_26706 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26707 = figwheel.client.heads_up.display_warning.call(null,inst_26706);
var state_26743__$1 = (function (){var statearr_26765 = state_26743;
(statearr_26765[(11)] = inst_26705);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(29),inst_26707);
} else {
if((state_val_26744 === (25))){
var inst_26703 = figwheel.client.heads_up.clear.call(null);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(28),inst_26703);
} else {
if((state_val_26744 === (34))){
var inst_26724 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(37),inst_26724);
} else {
if((state_val_26744 === (17))){
var inst_26683 = (state_26743[(2)]);
var inst_26684 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26685 = figwheel.client.auto_jump_to_error.call(null,opts,inst_26684);
var state_26743__$1 = (function (){var statearr_26766 = state_26743;
(statearr_26766[(12)] = inst_26683);

return statearr_26766;
})();
var statearr_26767_26809 = state_26743__$1;
(statearr_26767_26809[(2)] = inst_26685);

(statearr_26767_26809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (3))){
var inst_26675 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26675)){
var statearr_26768_26810 = state_26743__$1;
(statearr_26768_26810[(1)] = (13));

} else {
var statearr_26769_26811 = state_26743__$1;
(statearr_26769_26811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (12))){
var inst_26671 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26770_26812 = state_26743__$1;
(statearr_26770_26812[(2)] = inst_26671);

(statearr_26770_26812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (2))){
var inst_26658 = (state_26743[(10)]);
var inst_26658__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26743__$1 = (function (){var statearr_26771 = state_26743;
(statearr_26771[(10)] = inst_26658__$1);

return statearr_26771;
})();
if(cljs.core.truth_(inst_26658__$1)){
var statearr_26772_26813 = state_26743__$1;
(statearr_26772_26813[(1)] = (5));

} else {
var statearr_26773_26814 = state_26743__$1;
(statearr_26773_26814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (23))){
var inst_26701 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26701)){
var statearr_26774_26815 = state_26743__$1;
(statearr_26774_26815[(1)] = (25));

} else {
var statearr_26775_26816 = state_26743__$1;
(statearr_26775_26816[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (35))){
var state_26743__$1 = state_26743;
var statearr_26776_26817 = state_26743__$1;
(statearr_26776_26817[(2)] = null);

(statearr_26776_26817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (19))){
var inst_26696 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26696)){
var statearr_26777_26818 = state_26743__$1;
(statearr_26777_26818[(1)] = (22));

} else {
var statearr_26778_26819 = state_26743__$1;
(statearr_26778_26819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (11))){
var inst_26667 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26779_26820 = state_26743__$1;
(statearr_26779_26820[(2)] = inst_26667);

(statearr_26779_26820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (9))){
var inst_26669 = figwheel.client.heads_up.clear.call(null);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(12),inst_26669);
} else {
if((state_val_26744 === (5))){
var inst_26660 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26743__$1 = state_26743;
var statearr_26780_26821 = state_26743__$1;
(statearr_26780_26821[(2)] = inst_26660);

(statearr_26780_26821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (14))){
var inst_26687 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26687)){
var statearr_26781_26822 = state_26743__$1;
(statearr_26781_26822[(1)] = (18));

} else {
var statearr_26782_26823 = state_26743__$1;
(statearr_26782_26823[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (26))){
var inst_26713 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26743__$1 = state_26743;
if(cljs.core.truth_(inst_26713)){
var statearr_26783_26824 = state_26743__$1;
(statearr_26783_26824[(1)] = (30));

} else {
var statearr_26784_26825 = state_26743__$1;
(statearr_26784_26825[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (16))){
var inst_26679 = (state_26743[(2)]);
var inst_26680 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26681 = figwheel.client.heads_up.display_exception.call(null,inst_26680);
var state_26743__$1 = (function (){var statearr_26785 = state_26743;
(statearr_26785[(13)] = inst_26679);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(17),inst_26681);
} else {
if((state_val_26744 === (30))){
var inst_26715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26716 = figwheel.client.heads_up.display_warning.call(null,inst_26715);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(33),inst_26716);
} else {
if((state_val_26744 === (10))){
var inst_26673 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26786_26826 = state_26743__$1;
(statearr_26786_26826[(2)] = inst_26673);

(statearr_26786_26826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (18))){
var inst_26689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26690 = figwheel.client.heads_up.display_exception.call(null,inst_26689);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(21),inst_26690);
} else {
if((state_val_26744 === (37))){
var inst_26726 = (state_26743[(2)]);
var state_26743__$1 = state_26743;
var statearr_26787_26827 = state_26743__$1;
(statearr_26787_26827[(2)] = inst_26726);

(statearr_26787_26827[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26744 === (8))){
var inst_26665 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26743__$1 = state_26743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26743__$1,(11),inst_26665);
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
});})(c__20872__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20783__auto__,c__20872__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____0 = (function (){
var statearr_26788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26788[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__);

(statearr_26788[(1)] = (1));

return statearr_26788;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____1 = (function (state_26743){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_26743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e26789){if((e26789 instanceof Object)){
var ex__20787__auto__ = e26789;
var statearr_26790_26828 = state_26743;
(statearr_26790_26828[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26829 = state_26743;
state_26743 = G__26829;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__ = function(state_26743){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____1.call(this,state_26743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__,msg_hist,msg_names,msg))
})();
var state__20874__auto__ = (function (){var statearr_26791 = f__20873__auto__.call(null);
(statearr_26791[(6)] = c__20872__auto__);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__,msg_hist,msg_names,msg))
);

return c__20872__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20872__auto___26858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___26858,ch){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___26858,ch){
return (function (state_26844){
var state_val_26845 = (state_26844[(1)]);
if((state_val_26845 === (1))){
var state_26844__$1 = state_26844;
var statearr_26846_26859 = state_26844__$1;
(statearr_26846_26859[(2)] = null);

(statearr_26846_26859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (2))){
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(4),ch);
} else {
if((state_val_26845 === (3))){
var inst_26842 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26844__$1,inst_26842);
} else {
if((state_val_26845 === (4))){
var inst_26832 = (state_26844[(7)]);
var inst_26832__$1 = (state_26844[(2)]);
var state_26844__$1 = (function (){var statearr_26847 = state_26844;
(statearr_26847[(7)] = inst_26832__$1);

return statearr_26847;
})();
if(cljs.core.truth_(inst_26832__$1)){
var statearr_26848_26860 = state_26844__$1;
(statearr_26848_26860[(1)] = (5));

} else {
var statearr_26849_26861 = state_26844__$1;
(statearr_26849_26861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (5))){
var inst_26832 = (state_26844[(7)]);
var inst_26834 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26832);
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(8),inst_26834);
} else {
if((state_val_26845 === (6))){
var state_26844__$1 = state_26844;
var statearr_26850_26862 = state_26844__$1;
(statearr_26850_26862[(2)] = null);

(statearr_26850_26862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (7))){
var inst_26840 = (state_26844[(2)]);
var state_26844__$1 = state_26844;
var statearr_26851_26863 = state_26844__$1;
(statearr_26851_26863[(2)] = inst_26840);

(statearr_26851_26863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26845 === (8))){
var inst_26836 = (state_26844[(2)]);
var state_26844__$1 = (function (){var statearr_26852 = state_26844;
(statearr_26852[(8)] = inst_26836);

return statearr_26852;
})();
var statearr_26853_26864 = state_26844__$1;
(statearr_26853_26864[(2)] = null);

(statearr_26853_26864[(1)] = (2));


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
});})(c__20872__auto___26858,ch))
;
return ((function (switch__20783__auto__,c__20872__auto___26858,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20784__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20784__auto____0 = (function (){
var statearr_26854 = [null,null,null,null,null,null,null,null,null];
(statearr_26854[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20784__auto__);

(statearr_26854[(1)] = (1));

return statearr_26854;
});
var figwheel$client$heads_up_plugin_$_state_machine__20784__auto____1 = (function (state_26844){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_26844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e26855){if((e26855 instanceof Object)){
var ex__20787__auto__ = e26855;
var statearr_26856_26865 = state_26844;
(statearr_26856_26865[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26866 = state_26844;
state_26844 = G__26866;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20784__auto__ = function(state_26844){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20784__auto____1.call(this,state_26844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20784__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20784__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___26858,ch))
})();
var state__20874__auto__ = (function (){var statearr_26857 = f__20873__auto__.call(null);
(statearr_26857[(6)] = c__20872__auto___26858);

return statearr_26857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___26858,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__){
return (function (state_26872){
var state_val_26873 = (state_26872[(1)]);
if((state_val_26873 === (1))){
var inst_26867 = cljs.core.async.timeout.call(null,(3000));
var state_26872__$1 = state_26872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26872__$1,(2),inst_26867);
} else {
if((state_val_26873 === (2))){
var inst_26869 = (state_26872[(2)]);
var inst_26870 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26872__$1 = (function (){var statearr_26874 = state_26872;
(statearr_26874[(7)] = inst_26869);

return statearr_26874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26872__$1,inst_26870);
} else {
return null;
}
}
});})(c__20872__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____0 = (function (){
var statearr_26875 = [null,null,null,null,null,null,null,null];
(statearr_26875[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__);

(statearr_26875[(1)] = (1));

return statearr_26875;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____1 = (function (state_26872){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_26872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e26876){if((e26876 instanceof Object)){
var ex__20787__auto__ = e26876;
var statearr_26877_26879 = state_26872;
(statearr_26877_26879[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26872;
state_26872 = G__26880;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__ = function(state_26872){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____1.call(this,state_26872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20784__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__))
})();
var state__20874__auto__ = (function (){var statearr_26878 = f__20873__auto__.call(null);
(statearr_26878[(6)] = c__20872__auto__);

return statearr_26878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__))
);

return c__20872__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__,figwheel_version,temp__4657__auto__){
return (function (state_26887){
var state_val_26888 = (state_26887[(1)]);
if((state_val_26888 === (1))){
var inst_26881 = cljs.core.async.timeout.call(null,(2000));
var state_26887__$1 = state_26887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26887__$1,(2),inst_26881);
} else {
if((state_val_26888 === (2))){
var inst_26883 = (state_26887[(2)]);
var inst_26884 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_26885 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_26884);
var state_26887__$1 = (function (){var statearr_26889 = state_26887;
(statearr_26889[(7)] = inst_26883);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26887__$1,inst_26885);
} else {
return null;
}
}
});})(c__20872__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null,null];
(statearr_26890[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____1 = (function (state_26887){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_26887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__20787__auto__ = e26891;
var statearr_26892_26894 = state_26887;
(statearr_26892_26894[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26895 = state_26887;
state_26887 = G__26895;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__ = function(state_26887){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____1.call(this,state_26887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__,figwheel_version,temp__4657__auto__))
})();
var state__20874__auto__ = (function (){var statearr_26893 = f__20873__auto__.call(null);
(statearr_26893[(6)] = c__20872__auto__);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__,figwheel_version,temp__4657__auto__))
);

return c__20872__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__26896){
var map__26897 = p__26896;
var map__26897__$1 = ((((!((map__26897 == null)))?(((((map__26897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26897):map__26897);
var file = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26899 = "";
var G__26899__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26899),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26899);
var G__26899__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26899__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26899__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26899__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26899__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26900){
var map__26901 = p__26900;
var map__26901__$1 = ((((!((map__26901 == null)))?(((((map__26901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26901):map__26901);
var ed = map__26901__$1;
var exception_data = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26901__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_26904 = (function (){var G__26903 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26903)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__26903;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_26904);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26905){
var map__26906 = p__26905;
var map__26906__$1 = ((((!((map__26906 == null)))?(((((map__26906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26906):map__26906);
var w = map__26906__$1;
var message = cljs.core.get.call(null,map__26906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26908 = cljs.core.seq.call(null,plugins);
var chunk__26909 = null;
var count__26910 = (0);
var i__26911 = (0);
while(true){
if((i__26911 < count__26910)){
var vec__26912 = cljs.core._nth.call(null,chunk__26909,i__26911);
var k = cljs.core.nth.call(null,vec__26912,(0),null);
var plugin = cljs.core.nth.call(null,vec__26912,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26908,chunk__26909,count__26910,i__26911,pl_26918,vec__26912,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26918.call(null,msg_hist);
});})(seq__26908,chunk__26909,count__26910,i__26911,pl_26918,vec__26912,k,plugin))
);
} else {
}


var G__26919 = seq__26908;
var G__26920 = chunk__26909;
var G__26921 = count__26910;
var G__26922 = (i__26911 + (1));
seq__26908 = G__26919;
chunk__26909 = G__26920;
count__26910 = G__26921;
i__26911 = G__26922;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26908);
if(temp__4657__auto__){
var seq__26908__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26908__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26908__$1);
var G__26923 = cljs.core.chunk_rest.call(null,seq__26908__$1);
var G__26924 = c__4319__auto__;
var G__26925 = cljs.core.count.call(null,c__4319__auto__);
var G__26926 = (0);
seq__26908 = G__26923;
chunk__26909 = G__26924;
count__26910 = G__26925;
i__26911 = G__26926;
continue;
} else {
var vec__26915 = cljs.core.first.call(null,seq__26908__$1);
var k = cljs.core.nth.call(null,vec__26915,(0),null);
var plugin = cljs.core.nth.call(null,vec__26915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26927 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26908,chunk__26909,count__26910,i__26911,pl_26927,vec__26915,k,plugin,seq__26908__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26927.call(null,msg_hist);
});})(seq__26908,chunk__26909,count__26910,i__26911,pl_26927,vec__26915,k,plugin,seq__26908__$1,temp__4657__auto__))
);
} else {
}


var G__26928 = cljs.core.next.call(null,seq__26908__$1);
var G__26929 = null;
var G__26930 = (0);
var G__26931 = (0);
seq__26908 = G__26928;
chunk__26909 = G__26929;
count__26910 = G__26930;
i__26911 = G__26931;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__26933 = arguments.length;
switch (G__26933) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__26934_26939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__26935_26940 = null;
var count__26936_26941 = (0);
var i__26937_26942 = (0);
while(true){
if((i__26937_26942 < count__26936_26941)){
var msg_26943 = cljs.core._nth.call(null,chunk__26935_26940,i__26937_26942);
figwheel.client.socket.handle_incoming_message.call(null,msg_26943);


var G__26944 = seq__26934_26939;
var G__26945 = chunk__26935_26940;
var G__26946 = count__26936_26941;
var G__26947 = (i__26937_26942 + (1));
seq__26934_26939 = G__26944;
chunk__26935_26940 = G__26945;
count__26936_26941 = G__26946;
i__26937_26942 = G__26947;
continue;
} else {
var temp__4657__auto___26948 = cljs.core.seq.call(null,seq__26934_26939);
if(temp__4657__auto___26948){
var seq__26934_26949__$1 = temp__4657__auto___26948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26934_26949__$1)){
var c__4319__auto___26950 = cljs.core.chunk_first.call(null,seq__26934_26949__$1);
var G__26951 = cljs.core.chunk_rest.call(null,seq__26934_26949__$1);
var G__26952 = c__4319__auto___26950;
var G__26953 = cljs.core.count.call(null,c__4319__auto___26950);
var G__26954 = (0);
seq__26934_26939 = G__26951;
chunk__26935_26940 = G__26952;
count__26936_26941 = G__26953;
i__26937_26942 = G__26954;
continue;
} else {
var msg_26955 = cljs.core.first.call(null,seq__26934_26949__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_26955);


var G__26956 = cljs.core.next.call(null,seq__26934_26949__$1);
var G__26957 = null;
var G__26958 = (0);
var G__26959 = (0);
seq__26934_26939 = G__26956;
chunk__26935_26940 = G__26957;
count__26936_26941 = G__26958;
i__26937_26942 = G__26959;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26964 = arguments.length;
var i__4500__auto___26965 = (0);
while(true){
if((i__4500__auto___26965 < len__4499__auto___26964)){
args__4502__auto__.push((arguments[i__4500__auto___26965]));

var G__26966 = (i__4500__auto___26965 + (1));
i__4500__auto___26965 = G__26966;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26961){
var map__26962 = p__26961;
var map__26962__$1 = ((((!((map__26962 == null)))?(((((map__26962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var opts = map__26962__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26960){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26960));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e26967){if((e26967 instanceof Error)){
var e = e26967;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e26967;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__26968){
var map__26969 = p__26968;
var map__26969__$1 = ((((!((map__26969 == null)))?(((((map__26969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);
var msg_name = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1628501146684
