// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20918 = arguments.length;
switch (G__20918) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20919 = (function (f,blockable,meta20920){
this.f = f;
this.blockable = blockable;
this.meta20920 = meta20920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20921,meta20920__$1){
var self__ = this;
var _20921__$1 = this;
return (new cljs.core.async.t_cljs$core$async20919(self__.f,self__.blockable,meta20920__$1));
});

cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20921){
var self__ = this;
var _20921__$1 = this;
return self__.meta20920;
});

cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20920","meta20920",-1175742811,null)], null);
});

cljs.core.async.t_cljs$core$async20919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20919";

cljs.core.async.t_cljs$core$async20919.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20919");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20919.
 */
cljs.core.async.__GT_t_cljs$core$async20919 = (function cljs$core$async$__GT_t_cljs$core$async20919(f__$1,blockable__$1,meta20920){
return (new cljs.core.async.t_cljs$core$async20919(f__$1,blockable__$1,meta20920));
});

}

return (new cljs.core.async.t_cljs$core$async20919(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__20925 = arguments.length;
switch (G__20925) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__20928 = arguments.length;
switch (G__20928) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__20931 = arguments.length;
switch (G__20931) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20933 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20933);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20933,ret){
return (function (){
return fn1.call(null,val_20933);
});})(val_20933,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__20935 = arguments.length;
switch (G__20935) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___20937 = n;
var x_20938 = (0);
while(true){
if((x_20938 < n__4376__auto___20937)){
(a[x_20938] = (0));

var G__20939 = (x_20938 + (1));
x_20938 = G__20939;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20940 = (i + (1));
i = G__20940;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20941 = (function (flag,meta20942){
this.flag = flag;
this.meta20942 = meta20942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20943,meta20942__$1){
var self__ = this;
var _20943__$1 = this;
return (new cljs.core.async.t_cljs$core$async20941(self__.flag,meta20942__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20943){
var self__ = this;
var _20943__$1 = this;
return self__.meta20942;
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20942","meta20942",-1016803795,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20941";

cljs.core.async.t_cljs$core$async20941.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20941");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20941.
 */
cljs.core.async.__GT_t_cljs$core$async20941 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20941(flag__$1,meta20942){
return (new cljs.core.async.t_cljs$core$async20941(flag__$1,meta20942));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20941(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20944 = (function (flag,cb,meta20945){
this.flag = flag;
this.cb = cb;
this.meta20945 = meta20945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20946,meta20945__$1){
var self__ = this;
var _20946__$1 = this;
return (new cljs.core.async.t_cljs$core$async20944(self__.flag,self__.cb,meta20945__$1));
});

cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20946){
var self__ = this;
var _20946__$1 = this;
return self__.meta20945;
});

cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20945","meta20945",1721633035,null)], null);
});

cljs.core.async.t_cljs$core$async20944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20944";

cljs.core.async.t_cljs$core$async20944.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async20944");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20944.
 */
cljs.core.async.__GT_t_cljs$core$async20944 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20944(flag__$1,cb__$1,meta20945){
return (new cljs.core.async.t_cljs$core$async20944(flag__$1,cb__$1,meta20945));
});

}

return (new cljs.core.async.t_cljs$core$async20944(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20947_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20947_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20948_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20948_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20949 = (i + (1));
i = G__20949;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___20955 = arguments.length;
var i__4500__auto___20956 = (0);
while(true){
if((i__4500__auto___20956 < len__4499__auto___20955)){
args__4502__auto__.push((arguments[i__4500__auto___20956]));

var G__20957 = (i__4500__auto___20956 + (1));
i__4500__auto___20956 = G__20957;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20952){
var map__20953 = p__20952;
var map__20953__$1 = ((((!((map__20953 == null)))?(((((map__20953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20953):map__20953);
var opts = map__20953__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20950){
var G__20951 = cljs.core.first.call(null,seq20950);
var seq20950__$1 = cljs.core.next.call(null,seq20950);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20951,seq20950__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20959 = arguments.length;
switch (G__20959) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20872__auto___21005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21005){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21005){
return (function (state_20983){
var state_val_20984 = (state_20983[(1)]);
if((state_val_20984 === (7))){
var inst_20979 = (state_20983[(2)]);
var state_20983__$1 = state_20983;
var statearr_20985_21006 = state_20983__$1;
(statearr_20985_21006[(2)] = inst_20979);

(statearr_20985_21006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (1))){
var state_20983__$1 = state_20983;
var statearr_20986_21007 = state_20983__$1;
(statearr_20986_21007[(2)] = null);

(statearr_20986_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (4))){
var inst_20962 = (state_20983[(7)]);
var inst_20962__$1 = (state_20983[(2)]);
var inst_20963 = (inst_20962__$1 == null);
var state_20983__$1 = (function (){var statearr_20987 = state_20983;
(statearr_20987[(7)] = inst_20962__$1);

return statearr_20987;
})();
if(cljs.core.truth_(inst_20963)){
var statearr_20988_21008 = state_20983__$1;
(statearr_20988_21008[(1)] = (5));

} else {
var statearr_20989_21009 = state_20983__$1;
(statearr_20989_21009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (13))){
var state_20983__$1 = state_20983;
var statearr_20990_21010 = state_20983__$1;
(statearr_20990_21010[(2)] = null);

(statearr_20990_21010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (6))){
var inst_20962 = (state_20983[(7)]);
var state_20983__$1 = state_20983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20983__$1,(11),to,inst_20962);
} else {
if((state_val_20984 === (3))){
var inst_20981 = (state_20983[(2)]);
var state_20983__$1 = state_20983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20983__$1,inst_20981);
} else {
if((state_val_20984 === (12))){
var state_20983__$1 = state_20983;
var statearr_20991_21011 = state_20983__$1;
(statearr_20991_21011[(2)] = null);

(statearr_20991_21011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (2))){
var state_20983__$1 = state_20983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20983__$1,(4),from);
} else {
if((state_val_20984 === (11))){
var inst_20972 = (state_20983[(2)]);
var state_20983__$1 = state_20983;
if(cljs.core.truth_(inst_20972)){
var statearr_20992_21012 = state_20983__$1;
(statearr_20992_21012[(1)] = (12));

} else {
var statearr_20993_21013 = state_20983__$1;
(statearr_20993_21013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (9))){
var state_20983__$1 = state_20983;
var statearr_20994_21014 = state_20983__$1;
(statearr_20994_21014[(2)] = null);

(statearr_20994_21014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (5))){
var state_20983__$1 = state_20983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20995_21015 = state_20983__$1;
(statearr_20995_21015[(1)] = (8));

} else {
var statearr_20996_21016 = state_20983__$1;
(statearr_20996_21016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (14))){
var inst_20977 = (state_20983[(2)]);
var state_20983__$1 = state_20983;
var statearr_20997_21017 = state_20983__$1;
(statearr_20997_21017[(2)] = inst_20977);

(statearr_20997_21017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (10))){
var inst_20969 = (state_20983[(2)]);
var state_20983__$1 = state_20983;
var statearr_20998_21018 = state_20983__$1;
(statearr_20998_21018[(2)] = inst_20969);

(statearr_20998_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20984 === (8))){
var inst_20966 = cljs.core.async.close_BANG_.call(null,to);
var state_20983__$1 = state_20983;
var statearr_20999_21019 = state_20983__$1;
(statearr_20999_21019[(2)] = inst_20966);

(statearr_20999_21019[(1)] = (10));


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
});})(c__20872__auto___21005))
;
return ((function (switch__20783__auto__,c__20872__auto___21005){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_21000 = [null,null,null,null,null,null,null,null];
(statearr_21000[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_21000[(1)] = (1));

return statearr_21000;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_20983){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_20983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21001){if((e21001 instanceof Object)){
var ex__20787__auto__ = e21001;
var statearr_21002_21020 = state_20983;
(statearr_21002_21020[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21021 = state_20983;
state_20983 = G__21021;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_20983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_20983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21005))
})();
var state__20874__auto__ = (function (){var statearr_21003 = f__20873__auto__.call(null);
(statearr_21003[(6)] = c__20872__auto___21005);

return statearr_21003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21005))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21022){
var vec__21023 = p__21022;
var v = cljs.core.nth.call(null,vec__21023,(0),null);
var p = cljs.core.nth.call(null,vec__21023,(1),null);
var job = vec__21023;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20872__auto___21194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results){
return (function (state_21030){
var state_val_21031 = (state_21030[(1)]);
if((state_val_21031 === (1))){
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21030__$1,(2),res,v);
} else {
if((state_val_21031 === (2))){
var inst_21027 = (state_21030[(2)]);
var inst_21028 = cljs.core.async.close_BANG_.call(null,res);
var state_21030__$1 = (function (){var statearr_21032 = state_21030;
(statearr_21032[(7)] = inst_21027);

return statearr_21032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21030__$1,inst_21028);
} else {
return null;
}
}
});})(c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results))
;
return ((function (switch__20783__auto__,c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_21033 = [null,null,null,null,null,null,null,null];
(statearr_21033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__);

(statearr_21033[(1)] = (1));

return statearr_21033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1 = (function (state_21030){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21034){if((e21034 instanceof Object)){
var ex__20787__auto__ = e21034;
var statearr_21035_21195 = state_21030;
(statearr_21035_21195[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21196 = state_21030;
state_21030 = G__21196;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = function(state_21030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1.call(this,state_21030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results))
})();
var state__20874__auto__ = (function (){var statearr_21036 = f__20873__auto__.call(null);
(statearr_21036[(6)] = c__20872__auto___21194);

return statearr_21036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21194,res,vec__21023,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21037){
var vec__21038 = p__21037;
var v = cljs.core.nth.call(null,vec__21038,(0),null);
var p = cljs.core.nth.call(null,vec__21038,(1),null);
var job = vec__21038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___21197 = n;
var __21198 = (0);
while(true){
if((__21198 < n__4376__auto___21197)){
var G__21041_21199 = type;
var G__21041_21200__$1 = (((G__21041_21199 instanceof cljs.core.Keyword))?G__21041_21199.fqn:null);
switch (G__21041_21200__$1) {
case "compute":
var c__20872__auto___21202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21198,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (__21198,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function (state_21054){
var state_val_21055 = (state_21054[(1)]);
if((state_val_21055 === (1))){
var state_21054__$1 = state_21054;
var statearr_21056_21203 = state_21054__$1;
(statearr_21056_21203[(2)] = null);

(statearr_21056_21203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (2))){
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21054__$1,(4),jobs);
} else {
if((state_val_21055 === (3))){
var inst_21052 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21054__$1,inst_21052);
} else {
if((state_val_21055 === (4))){
var inst_21044 = (state_21054[(2)]);
var inst_21045 = process.call(null,inst_21044);
var state_21054__$1 = state_21054;
if(cljs.core.truth_(inst_21045)){
var statearr_21057_21204 = state_21054__$1;
(statearr_21057_21204[(1)] = (5));

} else {
var statearr_21058_21205 = state_21054__$1;
(statearr_21058_21205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (5))){
var state_21054__$1 = state_21054;
var statearr_21059_21206 = state_21054__$1;
(statearr_21059_21206[(2)] = null);

(statearr_21059_21206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (6))){
var state_21054__$1 = state_21054;
var statearr_21060_21207 = state_21054__$1;
(statearr_21060_21207[(2)] = null);

(statearr_21060_21207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (7))){
var inst_21050 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21061_21208 = state_21054__$1;
(statearr_21061_21208[(2)] = inst_21050);

(statearr_21061_21208[(1)] = (3));


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
});})(__21198,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
;
return ((function (__21198,switch__20783__auto__,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_21062 = [null,null,null,null,null,null,null];
(statearr_21062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__);

(statearr_21062[(1)] = (1));

return statearr_21062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1 = (function (state_21054){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21063){if((e21063 instanceof Object)){
var ex__20787__auto__ = e21063;
var statearr_21064_21209 = state_21054;
(statearr_21064_21209[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21210 = state_21054;
state_21054 = G__21210;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = function(state_21054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1.call(this,state_21054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__;
})()
;})(__21198,switch__20783__auto__,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
})();
var state__20874__auto__ = (function (){var statearr_21065 = f__20873__auto__.call(null);
(statearr_21065[(6)] = c__20872__auto___21202);

return statearr_21065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(__21198,c__20872__auto___21202,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
);


break;
case "async":
var c__20872__auto___21211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21198,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (__21198,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function (state_21078){
var state_val_21079 = (state_21078[(1)]);
if((state_val_21079 === (1))){
var state_21078__$1 = state_21078;
var statearr_21080_21212 = state_21078__$1;
(statearr_21080_21212[(2)] = null);

(statearr_21080_21212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21079 === (2))){
var state_21078__$1 = state_21078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21078__$1,(4),jobs);
} else {
if((state_val_21079 === (3))){
var inst_21076 = (state_21078[(2)]);
var state_21078__$1 = state_21078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21078__$1,inst_21076);
} else {
if((state_val_21079 === (4))){
var inst_21068 = (state_21078[(2)]);
var inst_21069 = async.call(null,inst_21068);
var state_21078__$1 = state_21078;
if(cljs.core.truth_(inst_21069)){
var statearr_21081_21213 = state_21078__$1;
(statearr_21081_21213[(1)] = (5));

} else {
var statearr_21082_21214 = state_21078__$1;
(statearr_21082_21214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21079 === (5))){
var state_21078__$1 = state_21078;
var statearr_21083_21215 = state_21078__$1;
(statearr_21083_21215[(2)] = null);

(statearr_21083_21215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21079 === (6))){
var state_21078__$1 = state_21078;
var statearr_21084_21216 = state_21078__$1;
(statearr_21084_21216[(2)] = null);

(statearr_21084_21216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21079 === (7))){
var inst_21074 = (state_21078[(2)]);
var state_21078__$1 = state_21078;
var statearr_21085_21217 = state_21078__$1;
(statearr_21085_21217[(2)] = inst_21074);

(statearr_21085_21217[(1)] = (3));


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
});})(__21198,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
;
return ((function (__21198,switch__20783__auto__,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_21086 = [null,null,null,null,null,null,null];
(statearr_21086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__);

(statearr_21086[(1)] = (1));

return statearr_21086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1 = (function (state_21078){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21087){if((e21087 instanceof Object)){
var ex__20787__auto__ = e21087;
var statearr_21088_21218 = state_21078;
(statearr_21088_21218[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21219 = state_21078;
state_21078 = G__21219;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = function(state_21078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1.call(this,state_21078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__;
})()
;})(__21198,switch__20783__auto__,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
})();
var state__20874__auto__ = (function (){var statearr_21089 = f__20873__auto__.call(null);
(statearr_21089[(6)] = c__20872__auto___21211);

return statearr_21089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(__21198,c__20872__auto___21211,G__21041_21199,G__21041_21200__$1,n__4376__auto___21197,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21041_21200__$1)].join('')));

}

var G__21220 = (__21198 + (1));
__21198 = G__21220;
continue;
} else {
}
break;
}

var c__20872__auto___21221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21221,jobs,results,process,async){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21221,jobs,results,process,async){
return (function (state_21111){
var state_val_21112 = (state_21111[(1)]);
if((state_val_21112 === (1))){
var state_21111__$1 = state_21111;
var statearr_21113_21222 = state_21111__$1;
(statearr_21113_21222[(2)] = null);

(statearr_21113_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21112 === (2))){
var state_21111__$1 = state_21111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21111__$1,(4),from);
} else {
if((state_val_21112 === (3))){
var inst_21109 = (state_21111[(2)]);
var state_21111__$1 = state_21111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21111__$1,inst_21109);
} else {
if((state_val_21112 === (4))){
var inst_21092 = (state_21111[(7)]);
var inst_21092__$1 = (state_21111[(2)]);
var inst_21093 = (inst_21092__$1 == null);
var state_21111__$1 = (function (){var statearr_21114 = state_21111;
(statearr_21114[(7)] = inst_21092__$1);

return statearr_21114;
})();
if(cljs.core.truth_(inst_21093)){
var statearr_21115_21223 = state_21111__$1;
(statearr_21115_21223[(1)] = (5));

} else {
var statearr_21116_21224 = state_21111__$1;
(statearr_21116_21224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21112 === (5))){
var inst_21095 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21111__$1 = state_21111;
var statearr_21117_21225 = state_21111__$1;
(statearr_21117_21225[(2)] = inst_21095);

(statearr_21117_21225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21112 === (6))){
var inst_21092 = (state_21111[(7)]);
var inst_21097 = (state_21111[(8)]);
var inst_21097__$1 = cljs.core.async.chan.call(null,(1));
var inst_21098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21099 = [inst_21092,inst_21097__$1];
var inst_21100 = (new cljs.core.PersistentVector(null,2,(5),inst_21098,inst_21099,null));
var state_21111__$1 = (function (){var statearr_21118 = state_21111;
(statearr_21118[(8)] = inst_21097__$1);

return statearr_21118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21111__$1,(8),jobs,inst_21100);
} else {
if((state_val_21112 === (7))){
var inst_21107 = (state_21111[(2)]);
var state_21111__$1 = state_21111;
var statearr_21119_21226 = state_21111__$1;
(statearr_21119_21226[(2)] = inst_21107);

(statearr_21119_21226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21112 === (8))){
var inst_21097 = (state_21111[(8)]);
var inst_21102 = (state_21111[(2)]);
var state_21111__$1 = (function (){var statearr_21120 = state_21111;
(statearr_21120[(9)] = inst_21102);

return statearr_21120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21111__$1,(9),results,inst_21097);
} else {
if((state_val_21112 === (9))){
var inst_21104 = (state_21111[(2)]);
var state_21111__$1 = (function (){var statearr_21121 = state_21111;
(statearr_21121[(10)] = inst_21104);

return statearr_21121;
})();
var statearr_21122_21227 = state_21111__$1;
(statearr_21122_21227[(2)] = null);

(statearr_21122_21227[(1)] = (2));


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
});})(c__20872__auto___21221,jobs,results,process,async))
;
return ((function (switch__20783__auto__,c__20872__auto___21221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_21123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__);

(statearr_21123[(1)] = (1));

return statearr_21123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1 = (function (state_21111){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21124){if((e21124 instanceof Object)){
var ex__20787__auto__ = e21124;
var statearr_21125_21228 = state_21111;
(statearr_21125_21228[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21229 = state_21111;
state_21111 = G__21229;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = function(state_21111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1.call(this,state_21111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21221,jobs,results,process,async))
})();
var state__20874__auto__ = (function (){var statearr_21126 = f__20873__auto__.call(null);
(statearr_21126[(6)] = c__20872__auto___21221);

return statearr_21126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21221,jobs,results,process,async))
);


var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__,jobs,results,process,async){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__,jobs,results,process,async){
return (function (state_21164){
var state_val_21165 = (state_21164[(1)]);
if((state_val_21165 === (7))){
var inst_21160 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21166_21230 = state_21164__$1;
(statearr_21166_21230[(2)] = inst_21160);

(statearr_21166_21230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (20))){
var state_21164__$1 = state_21164;
var statearr_21167_21231 = state_21164__$1;
(statearr_21167_21231[(2)] = null);

(statearr_21167_21231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (1))){
var state_21164__$1 = state_21164;
var statearr_21168_21232 = state_21164__$1;
(statearr_21168_21232[(2)] = null);

(statearr_21168_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (4))){
var inst_21129 = (state_21164[(7)]);
var inst_21129__$1 = (state_21164[(2)]);
var inst_21130 = (inst_21129__$1 == null);
var state_21164__$1 = (function (){var statearr_21169 = state_21164;
(statearr_21169[(7)] = inst_21129__$1);

return statearr_21169;
})();
if(cljs.core.truth_(inst_21130)){
var statearr_21170_21233 = state_21164__$1;
(statearr_21170_21233[(1)] = (5));

} else {
var statearr_21171_21234 = state_21164__$1;
(statearr_21171_21234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (15))){
var inst_21142 = (state_21164[(8)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21164__$1,(18),to,inst_21142);
} else {
if((state_val_21165 === (21))){
var inst_21155 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21172_21235 = state_21164__$1;
(statearr_21172_21235[(2)] = inst_21155);

(statearr_21172_21235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (13))){
var inst_21157 = (state_21164[(2)]);
var state_21164__$1 = (function (){var statearr_21173 = state_21164;
(statearr_21173[(9)] = inst_21157);

return statearr_21173;
})();
var statearr_21174_21236 = state_21164__$1;
(statearr_21174_21236[(2)] = null);

(statearr_21174_21236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (6))){
var inst_21129 = (state_21164[(7)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21164__$1,(11),inst_21129);
} else {
if((state_val_21165 === (17))){
var inst_21150 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
if(cljs.core.truth_(inst_21150)){
var statearr_21175_21237 = state_21164__$1;
(statearr_21175_21237[(1)] = (19));

} else {
var statearr_21176_21238 = state_21164__$1;
(statearr_21176_21238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (3))){
var inst_21162 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21164__$1,inst_21162);
} else {
if((state_val_21165 === (12))){
var inst_21139 = (state_21164[(10)]);
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21164__$1,(14),inst_21139);
} else {
if((state_val_21165 === (2))){
var state_21164__$1 = state_21164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21164__$1,(4),results);
} else {
if((state_val_21165 === (19))){
var state_21164__$1 = state_21164;
var statearr_21177_21239 = state_21164__$1;
(statearr_21177_21239[(2)] = null);

(statearr_21177_21239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (11))){
var inst_21139 = (state_21164[(2)]);
var state_21164__$1 = (function (){var statearr_21178 = state_21164;
(statearr_21178[(10)] = inst_21139);

return statearr_21178;
})();
var statearr_21179_21240 = state_21164__$1;
(statearr_21179_21240[(2)] = null);

(statearr_21179_21240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (9))){
var state_21164__$1 = state_21164;
var statearr_21180_21241 = state_21164__$1;
(statearr_21180_21241[(2)] = null);

(statearr_21180_21241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (5))){
var state_21164__$1 = state_21164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21181_21242 = state_21164__$1;
(statearr_21181_21242[(1)] = (8));

} else {
var statearr_21182_21243 = state_21164__$1;
(statearr_21182_21243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (14))){
var inst_21142 = (state_21164[(8)]);
var inst_21144 = (state_21164[(11)]);
var inst_21142__$1 = (state_21164[(2)]);
var inst_21143 = (inst_21142__$1 == null);
var inst_21144__$1 = cljs.core.not.call(null,inst_21143);
var state_21164__$1 = (function (){var statearr_21183 = state_21164;
(statearr_21183[(8)] = inst_21142__$1);

(statearr_21183[(11)] = inst_21144__$1);

return statearr_21183;
})();
if(inst_21144__$1){
var statearr_21184_21244 = state_21164__$1;
(statearr_21184_21244[(1)] = (15));

} else {
var statearr_21185_21245 = state_21164__$1;
(statearr_21185_21245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (16))){
var inst_21144 = (state_21164[(11)]);
var state_21164__$1 = state_21164;
var statearr_21186_21246 = state_21164__$1;
(statearr_21186_21246[(2)] = inst_21144);

(statearr_21186_21246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (10))){
var inst_21136 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21187_21247 = state_21164__$1;
(statearr_21187_21247[(2)] = inst_21136);

(statearr_21187_21247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (18))){
var inst_21147 = (state_21164[(2)]);
var state_21164__$1 = state_21164;
var statearr_21188_21248 = state_21164__$1;
(statearr_21188_21248[(2)] = inst_21147);

(statearr_21188_21248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21165 === (8))){
var inst_21133 = cljs.core.async.close_BANG_.call(null,to);
var state_21164__$1 = state_21164;
var statearr_21189_21249 = state_21164__$1;
(statearr_21189_21249[(2)] = inst_21133);

(statearr_21189_21249[(1)] = (10));


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
});})(c__20872__auto__,jobs,results,process,async))
;
return ((function (switch__20783__auto__,c__20872__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_21190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__);

(statearr_21190[(1)] = (1));

return statearr_21190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1 = (function (state_21164){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21191){if((e21191 instanceof Object)){
var ex__20787__auto__ = e21191;
var statearr_21192_21250 = state_21164;
(statearr_21192_21250[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21251 = state_21164;
state_21164 = G__21251;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__ = function(state_21164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1.call(this,state_21164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__,jobs,results,process,async))
})();
var state__20874__auto__ = (function (){var statearr_21193 = f__20873__auto__.call(null);
(statearr_21193[(6)] = c__20872__auto__);

return statearr_21193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__,jobs,results,process,async))
);

return c__20872__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21253 = arguments.length;
switch (G__21253) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21256 = arguments.length;
switch (G__21256) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21259 = arguments.length;
switch (G__21259) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20872__auto___21308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21308,tc,fc){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21308,tc,fc){
return (function (state_21285){
var state_val_21286 = (state_21285[(1)]);
if((state_val_21286 === (7))){
var inst_21281 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21287_21309 = state_21285__$1;
(statearr_21287_21309[(2)] = inst_21281);

(statearr_21287_21309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (1))){
var state_21285__$1 = state_21285;
var statearr_21288_21310 = state_21285__$1;
(statearr_21288_21310[(2)] = null);

(statearr_21288_21310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (4))){
var inst_21262 = (state_21285[(7)]);
var inst_21262__$1 = (state_21285[(2)]);
var inst_21263 = (inst_21262__$1 == null);
var state_21285__$1 = (function (){var statearr_21289 = state_21285;
(statearr_21289[(7)] = inst_21262__$1);

return statearr_21289;
})();
if(cljs.core.truth_(inst_21263)){
var statearr_21290_21311 = state_21285__$1;
(statearr_21290_21311[(1)] = (5));

} else {
var statearr_21291_21312 = state_21285__$1;
(statearr_21291_21312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (13))){
var state_21285__$1 = state_21285;
var statearr_21292_21313 = state_21285__$1;
(statearr_21292_21313[(2)] = null);

(statearr_21292_21313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (6))){
var inst_21262 = (state_21285[(7)]);
var inst_21268 = p.call(null,inst_21262);
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21268)){
var statearr_21293_21314 = state_21285__$1;
(statearr_21293_21314[(1)] = (9));

} else {
var statearr_21294_21315 = state_21285__$1;
(statearr_21294_21315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (3))){
var inst_21283 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21285__$1,inst_21283);
} else {
if((state_val_21286 === (12))){
var state_21285__$1 = state_21285;
var statearr_21295_21316 = state_21285__$1;
(statearr_21295_21316[(2)] = null);

(statearr_21295_21316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (2))){
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21285__$1,(4),ch);
} else {
if((state_val_21286 === (11))){
var inst_21262 = (state_21285[(7)]);
var inst_21272 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21285__$1,(8),inst_21272,inst_21262);
} else {
if((state_val_21286 === (9))){
var state_21285__$1 = state_21285;
var statearr_21296_21317 = state_21285__$1;
(statearr_21296_21317[(2)] = tc);

(statearr_21296_21317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (5))){
var inst_21265 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21266 = cljs.core.async.close_BANG_.call(null,fc);
var state_21285__$1 = (function (){var statearr_21297 = state_21285;
(statearr_21297[(8)] = inst_21265);

return statearr_21297;
})();
var statearr_21298_21318 = state_21285__$1;
(statearr_21298_21318[(2)] = inst_21266);

(statearr_21298_21318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (14))){
var inst_21279 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21299_21319 = state_21285__$1;
(statearr_21299_21319[(2)] = inst_21279);

(statearr_21299_21319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (10))){
var state_21285__$1 = state_21285;
var statearr_21300_21320 = state_21285__$1;
(statearr_21300_21320[(2)] = fc);

(statearr_21300_21320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (8))){
var inst_21274 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21274)){
var statearr_21301_21321 = state_21285__$1;
(statearr_21301_21321[(1)] = (12));

} else {
var statearr_21302_21322 = state_21285__$1;
(statearr_21302_21322[(1)] = (13));

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
});})(c__20872__auto___21308,tc,fc))
;
return ((function (switch__20783__auto__,c__20872__auto___21308,tc,fc){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_21303 = [null,null,null,null,null,null,null,null,null];
(statearr_21303[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_21303[(1)] = (1));

return statearr_21303;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_21285){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21304){if((e21304 instanceof Object)){
var ex__20787__auto__ = e21304;
var statearr_21305_21323 = state_21285;
(statearr_21305_21323[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21324 = state_21285;
state_21285 = G__21324;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_21285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_21285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21308,tc,fc))
})();
var state__20874__auto__ = (function (){var statearr_21306 = f__20873__auto__.call(null);
(statearr_21306[(6)] = c__20872__auto___21308);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21308,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__){
return (function (state_21345){
var state_val_21346 = (state_21345[(1)]);
if((state_val_21346 === (7))){
var inst_21341 = (state_21345[(2)]);
var state_21345__$1 = state_21345;
var statearr_21347_21365 = state_21345__$1;
(statearr_21347_21365[(2)] = inst_21341);

(statearr_21347_21365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (1))){
var inst_21325 = init;
var state_21345__$1 = (function (){var statearr_21348 = state_21345;
(statearr_21348[(7)] = inst_21325);

return statearr_21348;
})();
var statearr_21349_21366 = state_21345__$1;
(statearr_21349_21366[(2)] = null);

(statearr_21349_21366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (4))){
var inst_21328 = (state_21345[(8)]);
var inst_21328__$1 = (state_21345[(2)]);
var inst_21329 = (inst_21328__$1 == null);
var state_21345__$1 = (function (){var statearr_21350 = state_21345;
(statearr_21350[(8)] = inst_21328__$1);

return statearr_21350;
})();
if(cljs.core.truth_(inst_21329)){
var statearr_21351_21367 = state_21345__$1;
(statearr_21351_21367[(1)] = (5));

} else {
var statearr_21352_21368 = state_21345__$1;
(statearr_21352_21368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (6))){
var inst_21328 = (state_21345[(8)]);
var inst_21325 = (state_21345[(7)]);
var inst_21332 = (state_21345[(9)]);
var inst_21332__$1 = f.call(null,inst_21325,inst_21328);
var inst_21333 = cljs.core.reduced_QMARK_.call(null,inst_21332__$1);
var state_21345__$1 = (function (){var statearr_21353 = state_21345;
(statearr_21353[(9)] = inst_21332__$1);

return statearr_21353;
})();
if(inst_21333){
var statearr_21354_21369 = state_21345__$1;
(statearr_21354_21369[(1)] = (8));

} else {
var statearr_21355_21370 = state_21345__$1;
(statearr_21355_21370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (3))){
var inst_21343 = (state_21345[(2)]);
var state_21345__$1 = state_21345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21345__$1,inst_21343);
} else {
if((state_val_21346 === (2))){
var state_21345__$1 = state_21345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21345__$1,(4),ch);
} else {
if((state_val_21346 === (9))){
var inst_21332 = (state_21345[(9)]);
var inst_21325 = inst_21332;
var state_21345__$1 = (function (){var statearr_21356 = state_21345;
(statearr_21356[(7)] = inst_21325);

return statearr_21356;
})();
var statearr_21357_21371 = state_21345__$1;
(statearr_21357_21371[(2)] = null);

(statearr_21357_21371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (5))){
var inst_21325 = (state_21345[(7)]);
var state_21345__$1 = state_21345;
var statearr_21358_21372 = state_21345__$1;
(statearr_21358_21372[(2)] = inst_21325);

(statearr_21358_21372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (10))){
var inst_21339 = (state_21345[(2)]);
var state_21345__$1 = state_21345;
var statearr_21359_21373 = state_21345__$1;
(statearr_21359_21373[(2)] = inst_21339);

(statearr_21359_21373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21346 === (8))){
var inst_21332 = (state_21345[(9)]);
var inst_21335 = cljs.core.deref.call(null,inst_21332);
var state_21345__$1 = state_21345;
var statearr_21360_21374 = state_21345__$1;
(statearr_21360_21374[(2)] = inst_21335);

(statearr_21360_21374[(1)] = (10));


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
});})(c__20872__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20784__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20784__auto____0 = (function (){
var statearr_21361 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21361[(0)] = cljs$core$async$reduce_$_state_machine__20784__auto__);

(statearr_21361[(1)] = (1));

return statearr_21361;
});
var cljs$core$async$reduce_$_state_machine__20784__auto____1 = (function (state_21345){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21362){if((e21362 instanceof Object)){
var ex__20787__auto__ = e21362;
var statearr_21363_21375 = state_21345;
(statearr_21363_21375[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21376 = state_21345;
state_21345 = G__21376;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20784__auto__ = function(state_21345){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20784__auto____1.call(this,state_21345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20784__auto____0;
cljs$core$async$reduce_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20784__auto____1;
return cljs$core$async$reduce_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__))
})();
var state__20874__auto__ = (function (){var statearr_21364 = f__20873__auto__.call(null);
(statearr_21364[(6)] = c__20872__auto__);

return statearr_21364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__))
);

return c__20872__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__,f__$1){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__,f__$1){
return (function (state_21382){
var state_val_21383 = (state_21382[(1)]);
if((state_val_21383 === (1))){
var inst_21377 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21382__$1 = state_21382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21382__$1,(2),inst_21377);
} else {
if((state_val_21383 === (2))){
var inst_21379 = (state_21382[(2)]);
var inst_21380 = f__$1.call(null,inst_21379);
var state_21382__$1 = state_21382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21382__$1,inst_21380);
} else {
return null;
}
}
});})(c__20872__auto__,f__$1))
;
return ((function (switch__20783__auto__,c__20872__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__20784__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20784__auto____0 = (function (){
var statearr_21384 = [null,null,null,null,null,null,null];
(statearr_21384[(0)] = cljs$core$async$transduce_$_state_machine__20784__auto__);

(statearr_21384[(1)] = (1));

return statearr_21384;
});
var cljs$core$async$transduce_$_state_machine__20784__auto____1 = (function (state_21382){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21385){if((e21385 instanceof Object)){
var ex__20787__auto__ = e21385;
var statearr_21386_21388 = state_21382;
(statearr_21386_21388[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21389 = state_21382;
state_21382 = G__21389;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20784__auto__ = function(state_21382){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20784__auto____1.call(this,state_21382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20784__auto____0;
cljs$core$async$transduce_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20784__auto____1;
return cljs$core$async$transduce_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__,f__$1))
})();
var state__20874__auto__ = (function (){var statearr_21387 = f__20873__auto__.call(null);
(statearr_21387[(6)] = c__20872__auto__);

return statearr_21387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__,f__$1))
);

return c__20872__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21391 = arguments.length;
switch (G__21391) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__){
return (function (state_21416){
var state_val_21417 = (state_21416[(1)]);
if((state_val_21417 === (7))){
var inst_21398 = (state_21416[(2)]);
var state_21416__$1 = state_21416;
var statearr_21418_21439 = state_21416__$1;
(statearr_21418_21439[(2)] = inst_21398);

(statearr_21418_21439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (1))){
var inst_21392 = cljs.core.seq.call(null,coll);
var inst_21393 = inst_21392;
var state_21416__$1 = (function (){var statearr_21419 = state_21416;
(statearr_21419[(7)] = inst_21393);

return statearr_21419;
})();
var statearr_21420_21440 = state_21416__$1;
(statearr_21420_21440[(2)] = null);

(statearr_21420_21440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (4))){
var inst_21393 = (state_21416[(7)]);
var inst_21396 = cljs.core.first.call(null,inst_21393);
var state_21416__$1 = state_21416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21416__$1,(7),ch,inst_21396);
} else {
if((state_val_21417 === (13))){
var inst_21410 = (state_21416[(2)]);
var state_21416__$1 = state_21416;
var statearr_21421_21441 = state_21416__$1;
(statearr_21421_21441[(2)] = inst_21410);

(statearr_21421_21441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (6))){
var inst_21401 = (state_21416[(2)]);
var state_21416__$1 = state_21416;
if(cljs.core.truth_(inst_21401)){
var statearr_21422_21442 = state_21416__$1;
(statearr_21422_21442[(1)] = (8));

} else {
var statearr_21423_21443 = state_21416__$1;
(statearr_21423_21443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (3))){
var inst_21414 = (state_21416[(2)]);
var state_21416__$1 = state_21416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21416__$1,inst_21414);
} else {
if((state_val_21417 === (12))){
var state_21416__$1 = state_21416;
var statearr_21424_21444 = state_21416__$1;
(statearr_21424_21444[(2)] = null);

(statearr_21424_21444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (2))){
var inst_21393 = (state_21416[(7)]);
var state_21416__$1 = state_21416;
if(cljs.core.truth_(inst_21393)){
var statearr_21425_21445 = state_21416__$1;
(statearr_21425_21445[(1)] = (4));

} else {
var statearr_21426_21446 = state_21416__$1;
(statearr_21426_21446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (11))){
var inst_21407 = cljs.core.async.close_BANG_.call(null,ch);
var state_21416__$1 = state_21416;
var statearr_21427_21447 = state_21416__$1;
(statearr_21427_21447[(2)] = inst_21407);

(statearr_21427_21447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (9))){
var state_21416__$1 = state_21416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21428_21448 = state_21416__$1;
(statearr_21428_21448[(1)] = (11));

} else {
var statearr_21429_21449 = state_21416__$1;
(statearr_21429_21449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (5))){
var inst_21393 = (state_21416[(7)]);
var state_21416__$1 = state_21416;
var statearr_21430_21450 = state_21416__$1;
(statearr_21430_21450[(2)] = inst_21393);

(statearr_21430_21450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (10))){
var inst_21412 = (state_21416[(2)]);
var state_21416__$1 = state_21416;
var statearr_21431_21451 = state_21416__$1;
(statearr_21431_21451[(2)] = inst_21412);

(statearr_21431_21451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21417 === (8))){
var inst_21393 = (state_21416[(7)]);
var inst_21403 = cljs.core.next.call(null,inst_21393);
var inst_21393__$1 = inst_21403;
var state_21416__$1 = (function (){var statearr_21432 = state_21416;
(statearr_21432[(7)] = inst_21393__$1);

return statearr_21432;
})();
var statearr_21433_21452 = state_21416__$1;
(statearr_21433_21452[(2)] = null);

(statearr_21433_21452[(1)] = (2));


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
});})(c__20872__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_21434 = [null,null,null,null,null,null,null,null];
(statearr_21434[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_21434[(1)] = (1));

return statearr_21434;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_21416){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21435){if((e21435 instanceof Object)){
var ex__20787__auto__ = e21435;
var statearr_21436_21453 = state_21416;
(statearr_21436_21453[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21454 = state_21416;
state_21416 = G__21454;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_21416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_21416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__))
})();
var state__20874__auto__ = (function (){var statearr_21437 = f__20873__auto__.call(null);
(statearr_21437[(6)] = c__20872__auto__);

return statearr_21437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__))
);

return c__20872__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21455 = (function (ch,cs,meta21456){
this.ch = ch;
this.cs = cs;
this.meta21456 = meta21456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21457,meta21456__$1){
var self__ = this;
var _21457__$1 = this;
return (new cljs.core.async.t_cljs$core$async21455(self__.ch,self__.cs,meta21456__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21457){
var self__ = this;
var _21457__$1 = this;
return self__.meta21456;
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21456","meta21456",-812371613,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21455";

cljs.core.async.t_cljs$core$async21455.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21455");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21455.
 */
cljs.core.async.__GT_t_cljs$core$async21455 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21455(ch__$1,cs__$1,meta21456){
return (new cljs.core.async.t_cljs$core$async21455(ch__$1,cs__$1,meta21456));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21455(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20872__auto___21677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21677,cs,m,dchan,dctr,done){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21677,cs,m,dchan,dctr,done){
return (function (state_21592){
var state_val_21593 = (state_21592[(1)]);
if((state_val_21593 === (7))){
var inst_21588 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21594_21678 = state_21592__$1;
(statearr_21594_21678[(2)] = inst_21588);

(statearr_21594_21678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (20))){
var inst_21491 = (state_21592[(7)]);
var inst_21503 = cljs.core.first.call(null,inst_21491);
var inst_21504 = cljs.core.nth.call(null,inst_21503,(0),null);
var inst_21505 = cljs.core.nth.call(null,inst_21503,(1),null);
var state_21592__$1 = (function (){var statearr_21595 = state_21592;
(statearr_21595[(8)] = inst_21504);

return statearr_21595;
})();
if(cljs.core.truth_(inst_21505)){
var statearr_21596_21679 = state_21592__$1;
(statearr_21596_21679[(1)] = (22));

} else {
var statearr_21597_21680 = state_21592__$1;
(statearr_21597_21680[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (27))){
var inst_21533 = (state_21592[(9)]);
var inst_21460 = (state_21592[(10)]);
var inst_21540 = (state_21592[(11)]);
var inst_21535 = (state_21592[(12)]);
var inst_21540__$1 = cljs.core._nth.call(null,inst_21533,inst_21535);
var inst_21541 = cljs.core.async.put_BANG_.call(null,inst_21540__$1,inst_21460,done);
var state_21592__$1 = (function (){var statearr_21598 = state_21592;
(statearr_21598[(11)] = inst_21540__$1);

return statearr_21598;
})();
if(cljs.core.truth_(inst_21541)){
var statearr_21599_21681 = state_21592__$1;
(statearr_21599_21681[(1)] = (30));

} else {
var statearr_21600_21682 = state_21592__$1;
(statearr_21600_21682[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (1))){
var state_21592__$1 = state_21592;
var statearr_21601_21683 = state_21592__$1;
(statearr_21601_21683[(2)] = null);

(statearr_21601_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (24))){
var inst_21491 = (state_21592[(7)]);
var inst_21510 = (state_21592[(2)]);
var inst_21511 = cljs.core.next.call(null,inst_21491);
var inst_21469 = inst_21511;
var inst_21470 = null;
var inst_21471 = (0);
var inst_21472 = (0);
var state_21592__$1 = (function (){var statearr_21602 = state_21592;
(statearr_21602[(13)] = inst_21471);

(statearr_21602[(14)] = inst_21469);

(statearr_21602[(15)] = inst_21470);

(statearr_21602[(16)] = inst_21510);

(statearr_21602[(17)] = inst_21472);

return statearr_21602;
})();
var statearr_21603_21684 = state_21592__$1;
(statearr_21603_21684[(2)] = null);

(statearr_21603_21684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (39))){
var state_21592__$1 = state_21592;
var statearr_21607_21685 = state_21592__$1;
(statearr_21607_21685[(2)] = null);

(statearr_21607_21685[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (4))){
var inst_21460 = (state_21592[(10)]);
var inst_21460__$1 = (state_21592[(2)]);
var inst_21461 = (inst_21460__$1 == null);
var state_21592__$1 = (function (){var statearr_21608 = state_21592;
(statearr_21608[(10)] = inst_21460__$1);

return statearr_21608;
})();
if(cljs.core.truth_(inst_21461)){
var statearr_21609_21686 = state_21592__$1;
(statearr_21609_21686[(1)] = (5));

} else {
var statearr_21610_21687 = state_21592__$1;
(statearr_21610_21687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (15))){
var inst_21471 = (state_21592[(13)]);
var inst_21469 = (state_21592[(14)]);
var inst_21470 = (state_21592[(15)]);
var inst_21472 = (state_21592[(17)]);
var inst_21487 = (state_21592[(2)]);
var inst_21488 = (inst_21472 + (1));
var tmp21604 = inst_21471;
var tmp21605 = inst_21469;
var tmp21606 = inst_21470;
var inst_21469__$1 = tmp21605;
var inst_21470__$1 = tmp21606;
var inst_21471__$1 = tmp21604;
var inst_21472__$1 = inst_21488;
var state_21592__$1 = (function (){var statearr_21611 = state_21592;
(statearr_21611[(13)] = inst_21471__$1);

(statearr_21611[(18)] = inst_21487);

(statearr_21611[(14)] = inst_21469__$1);

(statearr_21611[(15)] = inst_21470__$1);

(statearr_21611[(17)] = inst_21472__$1);

return statearr_21611;
})();
var statearr_21612_21688 = state_21592__$1;
(statearr_21612_21688[(2)] = null);

(statearr_21612_21688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (21))){
var inst_21514 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21616_21689 = state_21592__$1;
(statearr_21616_21689[(2)] = inst_21514);

(statearr_21616_21689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (31))){
var inst_21540 = (state_21592[(11)]);
var inst_21544 = done.call(null,null);
var inst_21545 = cljs.core.async.untap_STAR_.call(null,m,inst_21540);
var state_21592__$1 = (function (){var statearr_21617 = state_21592;
(statearr_21617[(19)] = inst_21544);

return statearr_21617;
})();
var statearr_21618_21690 = state_21592__$1;
(statearr_21618_21690[(2)] = inst_21545);

(statearr_21618_21690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (32))){
var inst_21532 = (state_21592[(20)]);
var inst_21533 = (state_21592[(9)]);
var inst_21535 = (state_21592[(12)]);
var inst_21534 = (state_21592[(21)]);
var inst_21547 = (state_21592[(2)]);
var inst_21548 = (inst_21535 + (1));
var tmp21613 = inst_21532;
var tmp21614 = inst_21533;
var tmp21615 = inst_21534;
var inst_21532__$1 = tmp21613;
var inst_21533__$1 = tmp21614;
var inst_21534__$1 = tmp21615;
var inst_21535__$1 = inst_21548;
var state_21592__$1 = (function (){var statearr_21619 = state_21592;
(statearr_21619[(20)] = inst_21532__$1);

(statearr_21619[(9)] = inst_21533__$1);

(statearr_21619[(12)] = inst_21535__$1);

(statearr_21619[(21)] = inst_21534__$1);

(statearr_21619[(22)] = inst_21547);

return statearr_21619;
})();
var statearr_21620_21691 = state_21592__$1;
(statearr_21620_21691[(2)] = null);

(statearr_21620_21691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (40))){
var inst_21560 = (state_21592[(23)]);
var inst_21564 = done.call(null,null);
var inst_21565 = cljs.core.async.untap_STAR_.call(null,m,inst_21560);
var state_21592__$1 = (function (){var statearr_21621 = state_21592;
(statearr_21621[(24)] = inst_21564);

return statearr_21621;
})();
var statearr_21622_21692 = state_21592__$1;
(statearr_21622_21692[(2)] = inst_21565);

(statearr_21622_21692[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (33))){
var inst_21551 = (state_21592[(25)]);
var inst_21553 = cljs.core.chunked_seq_QMARK_.call(null,inst_21551);
var state_21592__$1 = state_21592;
if(inst_21553){
var statearr_21623_21693 = state_21592__$1;
(statearr_21623_21693[(1)] = (36));

} else {
var statearr_21624_21694 = state_21592__$1;
(statearr_21624_21694[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (13))){
var inst_21481 = (state_21592[(26)]);
var inst_21484 = cljs.core.async.close_BANG_.call(null,inst_21481);
var state_21592__$1 = state_21592;
var statearr_21625_21695 = state_21592__$1;
(statearr_21625_21695[(2)] = inst_21484);

(statearr_21625_21695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (22))){
var inst_21504 = (state_21592[(8)]);
var inst_21507 = cljs.core.async.close_BANG_.call(null,inst_21504);
var state_21592__$1 = state_21592;
var statearr_21626_21696 = state_21592__$1;
(statearr_21626_21696[(2)] = inst_21507);

(statearr_21626_21696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (36))){
var inst_21551 = (state_21592[(25)]);
var inst_21555 = cljs.core.chunk_first.call(null,inst_21551);
var inst_21556 = cljs.core.chunk_rest.call(null,inst_21551);
var inst_21557 = cljs.core.count.call(null,inst_21555);
var inst_21532 = inst_21556;
var inst_21533 = inst_21555;
var inst_21534 = inst_21557;
var inst_21535 = (0);
var state_21592__$1 = (function (){var statearr_21627 = state_21592;
(statearr_21627[(20)] = inst_21532);

(statearr_21627[(9)] = inst_21533);

(statearr_21627[(12)] = inst_21535);

(statearr_21627[(21)] = inst_21534);

return statearr_21627;
})();
var statearr_21628_21697 = state_21592__$1;
(statearr_21628_21697[(2)] = null);

(statearr_21628_21697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (41))){
var inst_21551 = (state_21592[(25)]);
var inst_21567 = (state_21592[(2)]);
var inst_21568 = cljs.core.next.call(null,inst_21551);
var inst_21532 = inst_21568;
var inst_21533 = null;
var inst_21534 = (0);
var inst_21535 = (0);
var state_21592__$1 = (function (){var statearr_21629 = state_21592;
(statearr_21629[(20)] = inst_21532);

(statearr_21629[(9)] = inst_21533);

(statearr_21629[(12)] = inst_21535);

(statearr_21629[(27)] = inst_21567);

(statearr_21629[(21)] = inst_21534);

return statearr_21629;
})();
var statearr_21630_21698 = state_21592__$1;
(statearr_21630_21698[(2)] = null);

(statearr_21630_21698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (43))){
var state_21592__$1 = state_21592;
var statearr_21631_21699 = state_21592__$1;
(statearr_21631_21699[(2)] = null);

(statearr_21631_21699[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (29))){
var inst_21576 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21632_21700 = state_21592__$1;
(statearr_21632_21700[(2)] = inst_21576);

(statearr_21632_21700[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (44))){
var inst_21585 = (state_21592[(2)]);
var state_21592__$1 = (function (){var statearr_21633 = state_21592;
(statearr_21633[(28)] = inst_21585);

return statearr_21633;
})();
var statearr_21634_21701 = state_21592__$1;
(statearr_21634_21701[(2)] = null);

(statearr_21634_21701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (6))){
var inst_21524 = (state_21592[(29)]);
var inst_21523 = cljs.core.deref.call(null,cs);
var inst_21524__$1 = cljs.core.keys.call(null,inst_21523);
var inst_21525 = cljs.core.count.call(null,inst_21524__$1);
var inst_21526 = cljs.core.reset_BANG_.call(null,dctr,inst_21525);
var inst_21531 = cljs.core.seq.call(null,inst_21524__$1);
var inst_21532 = inst_21531;
var inst_21533 = null;
var inst_21534 = (0);
var inst_21535 = (0);
var state_21592__$1 = (function (){var statearr_21635 = state_21592;
(statearr_21635[(20)] = inst_21532);

(statearr_21635[(29)] = inst_21524__$1);

(statearr_21635[(9)] = inst_21533);

(statearr_21635[(12)] = inst_21535);

(statearr_21635[(21)] = inst_21534);

(statearr_21635[(30)] = inst_21526);

return statearr_21635;
})();
var statearr_21636_21702 = state_21592__$1;
(statearr_21636_21702[(2)] = null);

(statearr_21636_21702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (28))){
var inst_21532 = (state_21592[(20)]);
var inst_21551 = (state_21592[(25)]);
var inst_21551__$1 = cljs.core.seq.call(null,inst_21532);
var state_21592__$1 = (function (){var statearr_21637 = state_21592;
(statearr_21637[(25)] = inst_21551__$1);

return statearr_21637;
})();
if(inst_21551__$1){
var statearr_21638_21703 = state_21592__$1;
(statearr_21638_21703[(1)] = (33));

} else {
var statearr_21639_21704 = state_21592__$1;
(statearr_21639_21704[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (25))){
var inst_21535 = (state_21592[(12)]);
var inst_21534 = (state_21592[(21)]);
var inst_21537 = (inst_21535 < inst_21534);
var inst_21538 = inst_21537;
var state_21592__$1 = state_21592;
if(cljs.core.truth_(inst_21538)){
var statearr_21640_21705 = state_21592__$1;
(statearr_21640_21705[(1)] = (27));

} else {
var statearr_21641_21706 = state_21592__$1;
(statearr_21641_21706[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (34))){
var state_21592__$1 = state_21592;
var statearr_21642_21707 = state_21592__$1;
(statearr_21642_21707[(2)] = null);

(statearr_21642_21707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (17))){
var state_21592__$1 = state_21592;
var statearr_21643_21708 = state_21592__$1;
(statearr_21643_21708[(2)] = null);

(statearr_21643_21708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (3))){
var inst_21590 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21592__$1,inst_21590);
} else {
if((state_val_21593 === (12))){
var inst_21519 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21644_21709 = state_21592__$1;
(statearr_21644_21709[(2)] = inst_21519);

(statearr_21644_21709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (2))){
var state_21592__$1 = state_21592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21592__$1,(4),ch);
} else {
if((state_val_21593 === (23))){
var state_21592__$1 = state_21592;
var statearr_21645_21710 = state_21592__$1;
(statearr_21645_21710[(2)] = null);

(statearr_21645_21710[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (35))){
var inst_21574 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21646_21711 = state_21592__$1;
(statearr_21646_21711[(2)] = inst_21574);

(statearr_21646_21711[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (19))){
var inst_21491 = (state_21592[(7)]);
var inst_21495 = cljs.core.chunk_first.call(null,inst_21491);
var inst_21496 = cljs.core.chunk_rest.call(null,inst_21491);
var inst_21497 = cljs.core.count.call(null,inst_21495);
var inst_21469 = inst_21496;
var inst_21470 = inst_21495;
var inst_21471 = inst_21497;
var inst_21472 = (0);
var state_21592__$1 = (function (){var statearr_21647 = state_21592;
(statearr_21647[(13)] = inst_21471);

(statearr_21647[(14)] = inst_21469);

(statearr_21647[(15)] = inst_21470);

(statearr_21647[(17)] = inst_21472);

return statearr_21647;
})();
var statearr_21648_21712 = state_21592__$1;
(statearr_21648_21712[(2)] = null);

(statearr_21648_21712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (11))){
var inst_21469 = (state_21592[(14)]);
var inst_21491 = (state_21592[(7)]);
var inst_21491__$1 = cljs.core.seq.call(null,inst_21469);
var state_21592__$1 = (function (){var statearr_21649 = state_21592;
(statearr_21649[(7)] = inst_21491__$1);

return statearr_21649;
})();
if(inst_21491__$1){
var statearr_21650_21713 = state_21592__$1;
(statearr_21650_21713[(1)] = (16));

} else {
var statearr_21651_21714 = state_21592__$1;
(statearr_21651_21714[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (9))){
var inst_21521 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21652_21715 = state_21592__$1;
(statearr_21652_21715[(2)] = inst_21521);

(statearr_21652_21715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (5))){
var inst_21467 = cljs.core.deref.call(null,cs);
var inst_21468 = cljs.core.seq.call(null,inst_21467);
var inst_21469 = inst_21468;
var inst_21470 = null;
var inst_21471 = (0);
var inst_21472 = (0);
var state_21592__$1 = (function (){var statearr_21653 = state_21592;
(statearr_21653[(13)] = inst_21471);

(statearr_21653[(14)] = inst_21469);

(statearr_21653[(15)] = inst_21470);

(statearr_21653[(17)] = inst_21472);

return statearr_21653;
})();
var statearr_21654_21716 = state_21592__$1;
(statearr_21654_21716[(2)] = null);

(statearr_21654_21716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (14))){
var state_21592__$1 = state_21592;
var statearr_21655_21717 = state_21592__$1;
(statearr_21655_21717[(2)] = null);

(statearr_21655_21717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (45))){
var inst_21582 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21656_21718 = state_21592__$1;
(statearr_21656_21718[(2)] = inst_21582);

(statearr_21656_21718[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (26))){
var inst_21524 = (state_21592[(29)]);
var inst_21578 = (state_21592[(2)]);
var inst_21579 = cljs.core.seq.call(null,inst_21524);
var state_21592__$1 = (function (){var statearr_21657 = state_21592;
(statearr_21657[(31)] = inst_21578);

return statearr_21657;
})();
if(inst_21579){
var statearr_21658_21719 = state_21592__$1;
(statearr_21658_21719[(1)] = (42));

} else {
var statearr_21659_21720 = state_21592__$1;
(statearr_21659_21720[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (16))){
var inst_21491 = (state_21592[(7)]);
var inst_21493 = cljs.core.chunked_seq_QMARK_.call(null,inst_21491);
var state_21592__$1 = state_21592;
if(inst_21493){
var statearr_21660_21721 = state_21592__$1;
(statearr_21660_21721[(1)] = (19));

} else {
var statearr_21661_21722 = state_21592__$1;
(statearr_21661_21722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (38))){
var inst_21571 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21662_21723 = state_21592__$1;
(statearr_21662_21723[(2)] = inst_21571);

(statearr_21662_21723[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (30))){
var state_21592__$1 = state_21592;
var statearr_21663_21724 = state_21592__$1;
(statearr_21663_21724[(2)] = null);

(statearr_21663_21724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (10))){
var inst_21470 = (state_21592[(15)]);
var inst_21472 = (state_21592[(17)]);
var inst_21480 = cljs.core._nth.call(null,inst_21470,inst_21472);
var inst_21481 = cljs.core.nth.call(null,inst_21480,(0),null);
var inst_21482 = cljs.core.nth.call(null,inst_21480,(1),null);
var state_21592__$1 = (function (){var statearr_21664 = state_21592;
(statearr_21664[(26)] = inst_21481);

return statearr_21664;
})();
if(cljs.core.truth_(inst_21482)){
var statearr_21665_21725 = state_21592__$1;
(statearr_21665_21725[(1)] = (13));

} else {
var statearr_21666_21726 = state_21592__$1;
(statearr_21666_21726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (18))){
var inst_21517 = (state_21592[(2)]);
var state_21592__$1 = state_21592;
var statearr_21667_21727 = state_21592__$1;
(statearr_21667_21727[(2)] = inst_21517);

(statearr_21667_21727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (42))){
var state_21592__$1 = state_21592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21592__$1,(45),dchan);
} else {
if((state_val_21593 === (37))){
var inst_21560 = (state_21592[(23)]);
var inst_21460 = (state_21592[(10)]);
var inst_21551 = (state_21592[(25)]);
var inst_21560__$1 = cljs.core.first.call(null,inst_21551);
var inst_21561 = cljs.core.async.put_BANG_.call(null,inst_21560__$1,inst_21460,done);
var state_21592__$1 = (function (){var statearr_21668 = state_21592;
(statearr_21668[(23)] = inst_21560__$1);

return statearr_21668;
})();
if(cljs.core.truth_(inst_21561)){
var statearr_21669_21728 = state_21592__$1;
(statearr_21669_21728[(1)] = (39));

} else {
var statearr_21670_21729 = state_21592__$1;
(statearr_21670_21729[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21593 === (8))){
var inst_21471 = (state_21592[(13)]);
var inst_21472 = (state_21592[(17)]);
var inst_21474 = (inst_21472 < inst_21471);
var inst_21475 = inst_21474;
var state_21592__$1 = state_21592;
if(cljs.core.truth_(inst_21475)){
var statearr_21671_21730 = state_21592__$1;
(statearr_21671_21730[(1)] = (10));

} else {
var statearr_21672_21731 = state_21592__$1;
(statearr_21672_21731[(1)] = (11));

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
});})(c__20872__auto___21677,cs,m,dchan,dctr,done))
;
return ((function (switch__20783__auto__,c__20872__auto___21677,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20784__auto__ = null;
var cljs$core$async$mult_$_state_machine__20784__auto____0 = (function (){
var statearr_21673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21673[(0)] = cljs$core$async$mult_$_state_machine__20784__auto__);

(statearr_21673[(1)] = (1));

return statearr_21673;
});
var cljs$core$async$mult_$_state_machine__20784__auto____1 = (function (state_21592){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21674){if((e21674 instanceof Object)){
var ex__20787__auto__ = e21674;
var statearr_21675_21732 = state_21592;
(statearr_21675_21732[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21733 = state_21592;
state_21592 = G__21733;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20784__auto__ = function(state_21592){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20784__auto____1.call(this,state_21592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20784__auto____0;
cljs$core$async$mult_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20784__auto____1;
return cljs$core$async$mult_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21677,cs,m,dchan,dctr,done))
})();
var state__20874__auto__ = (function (){var statearr_21676 = f__20873__auto__.call(null);
(statearr_21676[(6)] = c__20872__auto___21677);

return statearr_21676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21677,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21735 = arguments.length;
switch (G__21735) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21747 = arguments.length;
var i__4500__auto___21748 = (0);
while(true){
if((i__4500__auto___21748 < len__4499__auto___21747)){
args__4502__auto__.push((arguments[i__4500__auto___21748]));

var G__21749 = (i__4500__auto___21748 + (1));
i__4500__auto___21748 = G__21749;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21741){
var map__21742 = p__21741;
var map__21742__$1 = ((((!((map__21742 == null)))?(((((map__21742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21742):map__21742);
var opts = map__21742__$1;
var statearr_21744_21750 = state;
(statearr_21744_21750[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21742,map__21742__$1,opts){
return (function (val){
var statearr_21745_21751 = state;
(statearr_21745_21751[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21742,map__21742__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21746_21752 = state;
(statearr_21746_21752[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21737){
var G__21738 = cljs.core.first.call(null,seq21737);
var seq21737__$1 = cljs.core.next.call(null,seq21737);
var G__21739 = cljs.core.first.call(null,seq21737__$1);
var seq21737__$2 = cljs.core.next.call(null,seq21737__$1);
var G__21740 = cljs.core.first.call(null,seq21737__$2);
var seq21737__$3 = cljs.core.next.call(null,seq21737__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21738,G__21739,G__21740,seq21737__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21753 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21754){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21754 = meta21754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21755,meta21754__$1){
var self__ = this;
var _21755__$1 = this;
return (new cljs.core.async.t_cljs$core$async21753(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21754__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21755){
var self__ = this;
var _21755__$1 = this;
return self__.meta21754;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta21754","meta21754",-1593043633,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21753";

cljs.core.async.t_cljs$core$async21753.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21753");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21753.
 */
cljs.core.async.__GT_t_cljs$core$async21753 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21753(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21754){
return (new cljs.core.async.t_cljs$core$async21753(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21754));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21753(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20872__auto___21917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21857){
var state_val_21858 = (state_21857[(1)]);
if((state_val_21858 === (7))){
var inst_21772 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21859_21918 = state_21857__$1;
(statearr_21859_21918[(2)] = inst_21772);

(statearr_21859_21918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (20))){
var inst_21784 = (state_21857[(7)]);
var state_21857__$1 = state_21857;
var statearr_21860_21919 = state_21857__$1;
(statearr_21860_21919[(2)] = inst_21784);

(statearr_21860_21919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (27))){
var state_21857__$1 = state_21857;
var statearr_21861_21920 = state_21857__$1;
(statearr_21861_21920[(2)] = null);

(statearr_21861_21920[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (1))){
var inst_21759 = (state_21857[(8)]);
var inst_21759__$1 = calc_state.call(null);
var inst_21761 = (inst_21759__$1 == null);
var inst_21762 = cljs.core.not.call(null,inst_21761);
var state_21857__$1 = (function (){var statearr_21862 = state_21857;
(statearr_21862[(8)] = inst_21759__$1);

return statearr_21862;
})();
if(inst_21762){
var statearr_21863_21921 = state_21857__$1;
(statearr_21863_21921[(1)] = (2));

} else {
var statearr_21864_21922 = state_21857__$1;
(statearr_21864_21922[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (24))){
var inst_21831 = (state_21857[(9)]);
var inst_21808 = (state_21857[(10)]);
var inst_21817 = (state_21857[(11)]);
var inst_21831__$1 = inst_21808.call(null,inst_21817);
var state_21857__$1 = (function (){var statearr_21865 = state_21857;
(statearr_21865[(9)] = inst_21831__$1);

return statearr_21865;
})();
if(cljs.core.truth_(inst_21831__$1)){
var statearr_21866_21923 = state_21857__$1;
(statearr_21866_21923[(1)] = (29));

} else {
var statearr_21867_21924 = state_21857__$1;
(statearr_21867_21924[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (4))){
var inst_21775 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21775)){
var statearr_21868_21925 = state_21857__$1;
(statearr_21868_21925[(1)] = (8));

} else {
var statearr_21869_21926 = state_21857__$1;
(statearr_21869_21926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (15))){
var inst_21802 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21802)){
var statearr_21870_21927 = state_21857__$1;
(statearr_21870_21927[(1)] = (19));

} else {
var statearr_21871_21928 = state_21857__$1;
(statearr_21871_21928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (21))){
var inst_21807 = (state_21857[(12)]);
var inst_21807__$1 = (state_21857[(2)]);
var inst_21808 = cljs.core.get.call(null,inst_21807__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21809 = cljs.core.get.call(null,inst_21807__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21810 = cljs.core.get.call(null,inst_21807__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21857__$1 = (function (){var statearr_21872 = state_21857;
(statearr_21872[(12)] = inst_21807__$1);

(statearr_21872[(10)] = inst_21808);

(statearr_21872[(13)] = inst_21809);

return statearr_21872;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21857__$1,(22),inst_21810);
} else {
if((state_val_21858 === (31))){
var inst_21839 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21839)){
var statearr_21873_21929 = state_21857__$1;
(statearr_21873_21929[(1)] = (32));

} else {
var statearr_21874_21930 = state_21857__$1;
(statearr_21874_21930[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (32))){
var inst_21816 = (state_21857[(14)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21857__$1,(35),out,inst_21816);
} else {
if((state_val_21858 === (33))){
var inst_21807 = (state_21857[(12)]);
var inst_21784 = inst_21807;
var state_21857__$1 = (function (){var statearr_21875 = state_21857;
(statearr_21875[(7)] = inst_21784);

return statearr_21875;
})();
var statearr_21876_21931 = state_21857__$1;
(statearr_21876_21931[(2)] = null);

(statearr_21876_21931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (13))){
var inst_21784 = (state_21857[(7)]);
var inst_21791 = inst_21784.cljs$lang$protocol_mask$partition0$;
var inst_21792 = (inst_21791 & (64));
var inst_21793 = inst_21784.cljs$core$ISeq$;
var inst_21794 = (cljs.core.PROTOCOL_SENTINEL === inst_21793);
var inst_21795 = ((inst_21792) || (inst_21794));
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21795)){
var statearr_21877_21932 = state_21857__$1;
(statearr_21877_21932[(1)] = (16));

} else {
var statearr_21878_21933 = state_21857__$1;
(statearr_21878_21933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (22))){
var inst_21816 = (state_21857[(14)]);
var inst_21817 = (state_21857[(11)]);
var inst_21815 = (state_21857[(2)]);
var inst_21816__$1 = cljs.core.nth.call(null,inst_21815,(0),null);
var inst_21817__$1 = cljs.core.nth.call(null,inst_21815,(1),null);
var inst_21818 = (inst_21816__$1 == null);
var inst_21819 = cljs.core._EQ_.call(null,inst_21817__$1,change);
var inst_21820 = ((inst_21818) || (inst_21819));
var state_21857__$1 = (function (){var statearr_21879 = state_21857;
(statearr_21879[(14)] = inst_21816__$1);

(statearr_21879[(11)] = inst_21817__$1);

return statearr_21879;
})();
if(cljs.core.truth_(inst_21820)){
var statearr_21880_21934 = state_21857__$1;
(statearr_21880_21934[(1)] = (23));

} else {
var statearr_21881_21935 = state_21857__$1;
(statearr_21881_21935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (36))){
var inst_21807 = (state_21857[(12)]);
var inst_21784 = inst_21807;
var state_21857__$1 = (function (){var statearr_21882 = state_21857;
(statearr_21882[(7)] = inst_21784);

return statearr_21882;
})();
var statearr_21883_21936 = state_21857__$1;
(statearr_21883_21936[(2)] = null);

(statearr_21883_21936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (29))){
var inst_21831 = (state_21857[(9)]);
var state_21857__$1 = state_21857;
var statearr_21884_21937 = state_21857__$1;
(statearr_21884_21937[(2)] = inst_21831);

(statearr_21884_21937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (6))){
var state_21857__$1 = state_21857;
var statearr_21885_21938 = state_21857__$1;
(statearr_21885_21938[(2)] = false);

(statearr_21885_21938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (28))){
var inst_21827 = (state_21857[(2)]);
var inst_21828 = calc_state.call(null);
var inst_21784 = inst_21828;
var state_21857__$1 = (function (){var statearr_21886 = state_21857;
(statearr_21886[(7)] = inst_21784);

(statearr_21886[(15)] = inst_21827);

return statearr_21886;
})();
var statearr_21887_21939 = state_21857__$1;
(statearr_21887_21939[(2)] = null);

(statearr_21887_21939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (25))){
var inst_21853 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21888_21940 = state_21857__$1;
(statearr_21888_21940[(2)] = inst_21853);

(statearr_21888_21940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (34))){
var inst_21851 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21889_21941 = state_21857__$1;
(statearr_21889_21941[(2)] = inst_21851);

(statearr_21889_21941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (17))){
var state_21857__$1 = state_21857;
var statearr_21890_21942 = state_21857__$1;
(statearr_21890_21942[(2)] = false);

(statearr_21890_21942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (3))){
var state_21857__$1 = state_21857;
var statearr_21891_21943 = state_21857__$1;
(statearr_21891_21943[(2)] = false);

(statearr_21891_21943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (12))){
var inst_21855 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21857__$1,inst_21855);
} else {
if((state_val_21858 === (2))){
var inst_21759 = (state_21857[(8)]);
var inst_21764 = inst_21759.cljs$lang$protocol_mask$partition0$;
var inst_21765 = (inst_21764 & (64));
var inst_21766 = inst_21759.cljs$core$ISeq$;
var inst_21767 = (cljs.core.PROTOCOL_SENTINEL === inst_21766);
var inst_21768 = ((inst_21765) || (inst_21767));
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21768)){
var statearr_21892_21944 = state_21857__$1;
(statearr_21892_21944[(1)] = (5));

} else {
var statearr_21893_21945 = state_21857__$1;
(statearr_21893_21945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (23))){
var inst_21816 = (state_21857[(14)]);
var inst_21822 = (inst_21816 == null);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21822)){
var statearr_21894_21946 = state_21857__$1;
(statearr_21894_21946[(1)] = (26));

} else {
var statearr_21895_21947 = state_21857__$1;
(statearr_21895_21947[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (35))){
var inst_21842 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
if(cljs.core.truth_(inst_21842)){
var statearr_21896_21948 = state_21857__$1;
(statearr_21896_21948[(1)] = (36));

} else {
var statearr_21897_21949 = state_21857__$1;
(statearr_21897_21949[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (19))){
var inst_21784 = (state_21857[(7)]);
var inst_21804 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21784);
var state_21857__$1 = state_21857;
var statearr_21898_21950 = state_21857__$1;
(statearr_21898_21950[(2)] = inst_21804);

(statearr_21898_21950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (11))){
var inst_21784 = (state_21857[(7)]);
var inst_21788 = (inst_21784 == null);
var inst_21789 = cljs.core.not.call(null,inst_21788);
var state_21857__$1 = state_21857;
if(inst_21789){
var statearr_21899_21951 = state_21857__$1;
(statearr_21899_21951[(1)] = (13));

} else {
var statearr_21900_21952 = state_21857__$1;
(statearr_21900_21952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (9))){
var inst_21759 = (state_21857[(8)]);
var state_21857__$1 = state_21857;
var statearr_21901_21953 = state_21857__$1;
(statearr_21901_21953[(2)] = inst_21759);

(statearr_21901_21953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (5))){
var state_21857__$1 = state_21857;
var statearr_21902_21954 = state_21857__$1;
(statearr_21902_21954[(2)] = true);

(statearr_21902_21954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (14))){
var state_21857__$1 = state_21857;
var statearr_21903_21955 = state_21857__$1;
(statearr_21903_21955[(2)] = false);

(statearr_21903_21955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (26))){
var inst_21817 = (state_21857[(11)]);
var inst_21824 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21817);
var state_21857__$1 = state_21857;
var statearr_21904_21956 = state_21857__$1;
(statearr_21904_21956[(2)] = inst_21824);

(statearr_21904_21956[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (16))){
var state_21857__$1 = state_21857;
var statearr_21905_21957 = state_21857__$1;
(statearr_21905_21957[(2)] = true);

(statearr_21905_21957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (38))){
var inst_21847 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21906_21958 = state_21857__$1;
(statearr_21906_21958[(2)] = inst_21847);

(statearr_21906_21958[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (30))){
var inst_21808 = (state_21857[(10)]);
var inst_21809 = (state_21857[(13)]);
var inst_21817 = (state_21857[(11)]);
var inst_21834 = cljs.core.empty_QMARK_.call(null,inst_21808);
var inst_21835 = inst_21809.call(null,inst_21817);
var inst_21836 = cljs.core.not.call(null,inst_21835);
var inst_21837 = ((inst_21834) && (inst_21836));
var state_21857__$1 = state_21857;
var statearr_21907_21959 = state_21857__$1;
(statearr_21907_21959[(2)] = inst_21837);

(statearr_21907_21959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (10))){
var inst_21759 = (state_21857[(8)]);
var inst_21780 = (state_21857[(2)]);
var inst_21781 = cljs.core.get.call(null,inst_21780,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21782 = cljs.core.get.call(null,inst_21780,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21783 = cljs.core.get.call(null,inst_21780,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21784 = inst_21759;
var state_21857__$1 = (function (){var statearr_21908 = state_21857;
(statearr_21908[(7)] = inst_21784);

(statearr_21908[(16)] = inst_21781);

(statearr_21908[(17)] = inst_21782);

(statearr_21908[(18)] = inst_21783);

return statearr_21908;
})();
var statearr_21909_21960 = state_21857__$1;
(statearr_21909_21960[(2)] = null);

(statearr_21909_21960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (18))){
var inst_21799 = (state_21857[(2)]);
var state_21857__$1 = state_21857;
var statearr_21910_21961 = state_21857__$1;
(statearr_21910_21961[(2)] = inst_21799);

(statearr_21910_21961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (37))){
var state_21857__$1 = state_21857;
var statearr_21911_21962 = state_21857__$1;
(statearr_21911_21962[(2)] = null);

(statearr_21911_21962[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21858 === (8))){
var inst_21759 = (state_21857[(8)]);
var inst_21777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21759);
var state_21857__$1 = state_21857;
var statearr_21912_21963 = state_21857__$1;
(statearr_21912_21963[(2)] = inst_21777);

(statearr_21912_21963[(1)] = (10));


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
});})(c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20783__auto__,c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20784__auto__ = null;
var cljs$core$async$mix_$_state_machine__20784__auto____0 = (function (){
var statearr_21913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21913[(0)] = cljs$core$async$mix_$_state_machine__20784__auto__);

(statearr_21913[(1)] = (1));

return statearr_21913;
});
var cljs$core$async$mix_$_state_machine__20784__auto____1 = (function (state_21857){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_21857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e21914){if((e21914 instanceof Object)){
var ex__20787__auto__ = e21914;
var statearr_21915_21964 = state_21857;
(statearr_21915_21964[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21965 = state_21857;
state_21857 = G__21965;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20784__auto__ = function(state_21857){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20784__auto____1.call(this,state_21857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20784__auto____0;
cljs$core$async$mix_$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20784__auto____1;
return cljs$core$async$mix_$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20874__auto__ = (function (){var statearr_21916 = f__20873__auto__.call(null);
(statearr_21916[(6)] = c__20872__auto___21917);

return statearr_21916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___21917,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21967 = arguments.length;
switch (G__21967) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21971 = arguments.length;
switch (G__21971) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__21969_SHARP_){
if(cljs.core.truth_(p1__21969_SHARP_.call(null,topic))){
return p1__21969_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21969_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21972 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21973){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21973 = meta21973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21974,meta21973__$1){
var self__ = this;
var _21974__$1 = this;
return (new cljs.core.async.t_cljs$core$async21972(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21973__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21974){
var self__ = this;
var _21974__$1 = this;
return self__.meta21973;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21973","meta21973",1825232076,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21972";

cljs.core.async.t_cljs$core$async21972.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21972");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21972.
 */
cljs.core.async.__GT_t_cljs$core$async21972 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21972(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21973){
return (new cljs.core.async.t_cljs$core$async21972(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21973));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21972(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20872__auto___22092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22092,mults,ensure_mult,p){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22092,mults,ensure_mult,p){
return (function (state_22046){
var state_val_22047 = (state_22046[(1)]);
if((state_val_22047 === (7))){
var inst_22042 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22048_22093 = state_22046__$1;
(statearr_22048_22093[(2)] = inst_22042);

(statearr_22048_22093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (20))){
var state_22046__$1 = state_22046;
var statearr_22049_22094 = state_22046__$1;
(statearr_22049_22094[(2)] = null);

(statearr_22049_22094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (1))){
var state_22046__$1 = state_22046;
var statearr_22050_22095 = state_22046__$1;
(statearr_22050_22095[(2)] = null);

(statearr_22050_22095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (24))){
var inst_22025 = (state_22046[(7)]);
var inst_22034 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22025);
var state_22046__$1 = state_22046;
var statearr_22051_22096 = state_22046__$1;
(statearr_22051_22096[(2)] = inst_22034);

(statearr_22051_22096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (4))){
var inst_21977 = (state_22046[(8)]);
var inst_21977__$1 = (state_22046[(2)]);
var inst_21978 = (inst_21977__$1 == null);
var state_22046__$1 = (function (){var statearr_22052 = state_22046;
(statearr_22052[(8)] = inst_21977__$1);

return statearr_22052;
})();
if(cljs.core.truth_(inst_21978)){
var statearr_22053_22097 = state_22046__$1;
(statearr_22053_22097[(1)] = (5));

} else {
var statearr_22054_22098 = state_22046__$1;
(statearr_22054_22098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (15))){
var inst_22019 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22055_22099 = state_22046__$1;
(statearr_22055_22099[(2)] = inst_22019);

(statearr_22055_22099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (21))){
var inst_22039 = (state_22046[(2)]);
var state_22046__$1 = (function (){var statearr_22056 = state_22046;
(statearr_22056[(9)] = inst_22039);

return statearr_22056;
})();
var statearr_22057_22100 = state_22046__$1;
(statearr_22057_22100[(2)] = null);

(statearr_22057_22100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (13))){
var inst_22001 = (state_22046[(10)]);
var inst_22003 = cljs.core.chunked_seq_QMARK_.call(null,inst_22001);
var state_22046__$1 = state_22046;
if(inst_22003){
var statearr_22058_22101 = state_22046__$1;
(statearr_22058_22101[(1)] = (16));

} else {
var statearr_22059_22102 = state_22046__$1;
(statearr_22059_22102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (22))){
var inst_22031 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
if(cljs.core.truth_(inst_22031)){
var statearr_22060_22103 = state_22046__$1;
(statearr_22060_22103[(1)] = (23));

} else {
var statearr_22061_22104 = state_22046__$1;
(statearr_22061_22104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (6))){
var inst_22027 = (state_22046[(11)]);
var inst_22025 = (state_22046[(7)]);
var inst_21977 = (state_22046[(8)]);
var inst_22025__$1 = topic_fn.call(null,inst_21977);
var inst_22026 = cljs.core.deref.call(null,mults);
var inst_22027__$1 = cljs.core.get.call(null,inst_22026,inst_22025__$1);
var state_22046__$1 = (function (){var statearr_22062 = state_22046;
(statearr_22062[(11)] = inst_22027__$1);

(statearr_22062[(7)] = inst_22025__$1);

return statearr_22062;
})();
if(cljs.core.truth_(inst_22027__$1)){
var statearr_22063_22105 = state_22046__$1;
(statearr_22063_22105[(1)] = (19));

} else {
var statearr_22064_22106 = state_22046__$1;
(statearr_22064_22106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (25))){
var inst_22036 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22065_22107 = state_22046__$1;
(statearr_22065_22107[(2)] = inst_22036);

(statearr_22065_22107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (17))){
var inst_22001 = (state_22046[(10)]);
var inst_22010 = cljs.core.first.call(null,inst_22001);
var inst_22011 = cljs.core.async.muxch_STAR_.call(null,inst_22010);
var inst_22012 = cljs.core.async.close_BANG_.call(null,inst_22011);
var inst_22013 = cljs.core.next.call(null,inst_22001);
var inst_21987 = inst_22013;
var inst_21988 = null;
var inst_21989 = (0);
var inst_21990 = (0);
var state_22046__$1 = (function (){var statearr_22066 = state_22046;
(statearr_22066[(12)] = inst_21989);

(statearr_22066[(13)] = inst_21990);

(statearr_22066[(14)] = inst_22012);

(statearr_22066[(15)] = inst_21987);

(statearr_22066[(16)] = inst_21988);

return statearr_22066;
})();
var statearr_22067_22108 = state_22046__$1;
(statearr_22067_22108[(2)] = null);

(statearr_22067_22108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (3))){
var inst_22044 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22046__$1,inst_22044);
} else {
if((state_val_22047 === (12))){
var inst_22021 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22068_22109 = state_22046__$1;
(statearr_22068_22109[(2)] = inst_22021);

(statearr_22068_22109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (2))){
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22046__$1,(4),ch);
} else {
if((state_val_22047 === (23))){
var state_22046__$1 = state_22046;
var statearr_22069_22110 = state_22046__$1;
(statearr_22069_22110[(2)] = null);

(statearr_22069_22110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (19))){
var inst_22027 = (state_22046[(11)]);
var inst_21977 = (state_22046[(8)]);
var inst_22029 = cljs.core.async.muxch_STAR_.call(null,inst_22027);
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22046__$1,(22),inst_22029,inst_21977);
} else {
if((state_val_22047 === (11))){
var inst_22001 = (state_22046[(10)]);
var inst_21987 = (state_22046[(15)]);
var inst_22001__$1 = cljs.core.seq.call(null,inst_21987);
var state_22046__$1 = (function (){var statearr_22070 = state_22046;
(statearr_22070[(10)] = inst_22001__$1);

return statearr_22070;
})();
if(inst_22001__$1){
var statearr_22071_22111 = state_22046__$1;
(statearr_22071_22111[(1)] = (13));

} else {
var statearr_22072_22112 = state_22046__$1;
(statearr_22072_22112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (9))){
var inst_22023 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22073_22113 = state_22046__$1;
(statearr_22073_22113[(2)] = inst_22023);

(statearr_22073_22113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (5))){
var inst_21984 = cljs.core.deref.call(null,mults);
var inst_21985 = cljs.core.vals.call(null,inst_21984);
var inst_21986 = cljs.core.seq.call(null,inst_21985);
var inst_21987 = inst_21986;
var inst_21988 = null;
var inst_21989 = (0);
var inst_21990 = (0);
var state_22046__$1 = (function (){var statearr_22074 = state_22046;
(statearr_22074[(12)] = inst_21989);

(statearr_22074[(13)] = inst_21990);

(statearr_22074[(15)] = inst_21987);

(statearr_22074[(16)] = inst_21988);

return statearr_22074;
})();
var statearr_22075_22114 = state_22046__$1;
(statearr_22075_22114[(2)] = null);

(statearr_22075_22114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (14))){
var state_22046__$1 = state_22046;
var statearr_22079_22115 = state_22046__$1;
(statearr_22079_22115[(2)] = null);

(statearr_22079_22115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (16))){
var inst_22001 = (state_22046[(10)]);
var inst_22005 = cljs.core.chunk_first.call(null,inst_22001);
var inst_22006 = cljs.core.chunk_rest.call(null,inst_22001);
var inst_22007 = cljs.core.count.call(null,inst_22005);
var inst_21987 = inst_22006;
var inst_21988 = inst_22005;
var inst_21989 = inst_22007;
var inst_21990 = (0);
var state_22046__$1 = (function (){var statearr_22080 = state_22046;
(statearr_22080[(12)] = inst_21989);

(statearr_22080[(13)] = inst_21990);

(statearr_22080[(15)] = inst_21987);

(statearr_22080[(16)] = inst_21988);

return statearr_22080;
})();
var statearr_22081_22116 = state_22046__$1;
(statearr_22081_22116[(2)] = null);

(statearr_22081_22116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (10))){
var inst_21989 = (state_22046[(12)]);
var inst_21990 = (state_22046[(13)]);
var inst_21987 = (state_22046[(15)]);
var inst_21988 = (state_22046[(16)]);
var inst_21995 = cljs.core._nth.call(null,inst_21988,inst_21990);
var inst_21996 = cljs.core.async.muxch_STAR_.call(null,inst_21995);
var inst_21997 = cljs.core.async.close_BANG_.call(null,inst_21996);
var inst_21998 = (inst_21990 + (1));
var tmp22076 = inst_21989;
var tmp22077 = inst_21987;
var tmp22078 = inst_21988;
var inst_21987__$1 = tmp22077;
var inst_21988__$1 = tmp22078;
var inst_21989__$1 = tmp22076;
var inst_21990__$1 = inst_21998;
var state_22046__$1 = (function (){var statearr_22082 = state_22046;
(statearr_22082[(12)] = inst_21989__$1);

(statearr_22082[(13)] = inst_21990__$1);

(statearr_22082[(15)] = inst_21987__$1);

(statearr_22082[(16)] = inst_21988__$1);

(statearr_22082[(17)] = inst_21997);

return statearr_22082;
})();
var statearr_22083_22117 = state_22046__$1;
(statearr_22083_22117[(2)] = null);

(statearr_22083_22117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (18))){
var inst_22016 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22084_22118 = state_22046__$1;
(statearr_22084_22118[(2)] = inst_22016);

(statearr_22084_22118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (8))){
var inst_21989 = (state_22046[(12)]);
var inst_21990 = (state_22046[(13)]);
var inst_21992 = (inst_21990 < inst_21989);
var inst_21993 = inst_21992;
var state_22046__$1 = state_22046;
if(cljs.core.truth_(inst_21993)){
var statearr_22085_22119 = state_22046__$1;
(statearr_22085_22119[(1)] = (10));

} else {
var statearr_22086_22120 = state_22046__$1;
(statearr_22086_22120[(1)] = (11));

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
});})(c__20872__auto___22092,mults,ensure_mult,p))
;
return ((function (switch__20783__auto__,c__20872__auto___22092,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22087[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22087[(1)] = (1));

return statearr_22087;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22046){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22088){if((e22088 instanceof Object)){
var ex__20787__auto__ = e22088;
var statearr_22089_22121 = state_22046;
(statearr_22089_22121[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22122 = state_22046;
state_22046 = G__22122;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22046);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22092,mults,ensure_mult,p))
})();
var state__20874__auto__ = (function (){var statearr_22090 = f__20873__auto__.call(null);
(statearr_22090[(6)] = c__20872__auto___22092);

return statearr_22090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22092,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22124 = arguments.length;
switch (G__22124) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22127 = arguments.length;
switch (G__22127) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22130 = arguments.length;
switch (G__22130) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20872__auto___22197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22169){
var state_val_22170 = (state_22169[(1)]);
if((state_val_22170 === (7))){
var state_22169__$1 = state_22169;
var statearr_22171_22198 = state_22169__$1;
(statearr_22171_22198[(2)] = null);

(statearr_22171_22198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (1))){
var state_22169__$1 = state_22169;
var statearr_22172_22199 = state_22169__$1;
(statearr_22172_22199[(2)] = null);

(statearr_22172_22199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (4))){
var inst_22133 = (state_22169[(7)]);
var inst_22135 = (inst_22133 < cnt);
var state_22169__$1 = state_22169;
if(cljs.core.truth_(inst_22135)){
var statearr_22173_22200 = state_22169__$1;
(statearr_22173_22200[(1)] = (6));

} else {
var statearr_22174_22201 = state_22169__$1;
(statearr_22174_22201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (15))){
var inst_22165 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22175_22202 = state_22169__$1;
(statearr_22175_22202[(2)] = inst_22165);

(statearr_22175_22202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (13))){
var inst_22158 = cljs.core.async.close_BANG_.call(null,out);
var state_22169__$1 = state_22169;
var statearr_22176_22203 = state_22169__$1;
(statearr_22176_22203[(2)] = inst_22158);

(statearr_22176_22203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (6))){
var state_22169__$1 = state_22169;
var statearr_22177_22204 = state_22169__$1;
(statearr_22177_22204[(2)] = null);

(statearr_22177_22204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (3))){
var inst_22167 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22169__$1,inst_22167);
} else {
if((state_val_22170 === (12))){
var inst_22155 = (state_22169[(8)]);
var inst_22155__$1 = (state_22169[(2)]);
var inst_22156 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22155__$1);
var state_22169__$1 = (function (){var statearr_22178 = state_22169;
(statearr_22178[(8)] = inst_22155__$1);

return statearr_22178;
})();
if(cljs.core.truth_(inst_22156)){
var statearr_22179_22205 = state_22169__$1;
(statearr_22179_22205[(1)] = (13));

} else {
var statearr_22180_22206 = state_22169__$1;
(statearr_22180_22206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (2))){
var inst_22132 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22133 = (0);
var state_22169__$1 = (function (){var statearr_22181 = state_22169;
(statearr_22181[(9)] = inst_22132);

(statearr_22181[(7)] = inst_22133);

return statearr_22181;
})();
var statearr_22182_22207 = state_22169__$1;
(statearr_22182_22207[(2)] = null);

(statearr_22182_22207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (11))){
var inst_22133 = (state_22169[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22169,(10),Object,null,(9));
var inst_22142 = chs__$1.call(null,inst_22133);
var inst_22143 = done.call(null,inst_22133);
var inst_22144 = cljs.core.async.take_BANG_.call(null,inst_22142,inst_22143);
var state_22169__$1 = state_22169;
var statearr_22183_22208 = state_22169__$1;
(statearr_22183_22208[(2)] = inst_22144);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (9))){
var inst_22133 = (state_22169[(7)]);
var inst_22146 = (state_22169[(2)]);
var inst_22147 = (inst_22133 + (1));
var inst_22133__$1 = inst_22147;
var state_22169__$1 = (function (){var statearr_22184 = state_22169;
(statearr_22184[(10)] = inst_22146);

(statearr_22184[(7)] = inst_22133__$1);

return statearr_22184;
})();
var statearr_22185_22209 = state_22169__$1;
(statearr_22185_22209[(2)] = null);

(statearr_22185_22209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (5))){
var inst_22153 = (state_22169[(2)]);
var state_22169__$1 = (function (){var statearr_22186 = state_22169;
(statearr_22186[(11)] = inst_22153);

return statearr_22186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(12),dchan);
} else {
if((state_val_22170 === (14))){
var inst_22155 = (state_22169[(8)]);
var inst_22160 = cljs.core.apply.call(null,f,inst_22155);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22169__$1,(16),out,inst_22160);
} else {
if((state_val_22170 === (16))){
var inst_22162 = (state_22169[(2)]);
var state_22169__$1 = (function (){var statearr_22187 = state_22169;
(statearr_22187[(12)] = inst_22162);

return statearr_22187;
})();
var statearr_22188_22210 = state_22169__$1;
(statearr_22188_22210[(2)] = null);

(statearr_22188_22210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (10))){
var inst_22137 = (state_22169[(2)]);
var inst_22138 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22169__$1 = (function (){var statearr_22189 = state_22169;
(statearr_22189[(13)] = inst_22137);

return statearr_22189;
})();
var statearr_22190_22211 = state_22169__$1;
(statearr_22190_22211[(2)] = inst_22138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (8))){
var inst_22151 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22191_22212 = state_22169__$1;
(statearr_22191_22212[(2)] = inst_22151);

(statearr_22191_22212[(1)] = (5));


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
});})(c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20783__auto__,c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22192[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22192[(1)] = (1));

return statearr_22192;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22169){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22193){if((e22193 instanceof Object)){
var ex__20787__auto__ = e22193;
var statearr_22194_22213 = state_22169;
(statearr_22194_22213[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22214 = state_22169;
state_22169 = G__22214;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20874__auto__ = (function (){var statearr_22195 = f__20873__auto__.call(null);
(statearr_22195[(6)] = c__20872__auto___22197);

return statearr_22195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22197,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22217 = arguments.length;
switch (G__22217) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22271,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22271,out){
return (function (state_22249){
var state_val_22250 = (state_22249[(1)]);
if((state_val_22250 === (7))){
var inst_22228 = (state_22249[(7)]);
var inst_22229 = (state_22249[(8)]);
var inst_22228__$1 = (state_22249[(2)]);
var inst_22229__$1 = cljs.core.nth.call(null,inst_22228__$1,(0),null);
var inst_22230 = cljs.core.nth.call(null,inst_22228__$1,(1),null);
var inst_22231 = (inst_22229__$1 == null);
var state_22249__$1 = (function (){var statearr_22251 = state_22249;
(statearr_22251[(9)] = inst_22230);

(statearr_22251[(7)] = inst_22228__$1);

(statearr_22251[(8)] = inst_22229__$1);

return statearr_22251;
})();
if(cljs.core.truth_(inst_22231)){
var statearr_22252_22272 = state_22249__$1;
(statearr_22252_22272[(1)] = (8));

} else {
var statearr_22253_22273 = state_22249__$1;
(statearr_22253_22273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (1))){
var inst_22218 = cljs.core.vec.call(null,chs);
var inst_22219 = inst_22218;
var state_22249__$1 = (function (){var statearr_22254 = state_22249;
(statearr_22254[(10)] = inst_22219);

return statearr_22254;
})();
var statearr_22255_22274 = state_22249__$1;
(statearr_22255_22274[(2)] = null);

(statearr_22255_22274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (4))){
var inst_22219 = (state_22249[(10)]);
var state_22249__$1 = state_22249;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22249__$1,(7),inst_22219);
} else {
if((state_val_22250 === (6))){
var inst_22245 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22256_22275 = state_22249__$1;
(statearr_22256_22275[(2)] = inst_22245);

(statearr_22256_22275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (3))){
var inst_22247 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22249__$1,inst_22247);
} else {
if((state_val_22250 === (2))){
var inst_22219 = (state_22249[(10)]);
var inst_22221 = cljs.core.count.call(null,inst_22219);
var inst_22222 = (inst_22221 > (0));
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22222)){
var statearr_22258_22276 = state_22249__$1;
(statearr_22258_22276[(1)] = (4));

} else {
var statearr_22259_22277 = state_22249__$1;
(statearr_22259_22277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (11))){
var inst_22219 = (state_22249[(10)]);
var inst_22238 = (state_22249[(2)]);
var tmp22257 = inst_22219;
var inst_22219__$1 = tmp22257;
var state_22249__$1 = (function (){var statearr_22260 = state_22249;
(statearr_22260[(11)] = inst_22238);

(statearr_22260[(10)] = inst_22219__$1);

return statearr_22260;
})();
var statearr_22261_22278 = state_22249__$1;
(statearr_22261_22278[(2)] = null);

(statearr_22261_22278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (9))){
var inst_22229 = (state_22249[(8)]);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22249__$1,(11),out,inst_22229);
} else {
if((state_val_22250 === (5))){
var inst_22243 = cljs.core.async.close_BANG_.call(null,out);
var state_22249__$1 = state_22249;
var statearr_22262_22279 = state_22249__$1;
(statearr_22262_22279[(2)] = inst_22243);

(statearr_22262_22279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (10))){
var inst_22241 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22263_22280 = state_22249__$1;
(statearr_22263_22280[(2)] = inst_22241);

(statearr_22263_22280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (8))){
var inst_22230 = (state_22249[(9)]);
var inst_22228 = (state_22249[(7)]);
var inst_22219 = (state_22249[(10)]);
var inst_22229 = (state_22249[(8)]);
var inst_22233 = (function (){var cs = inst_22219;
var vec__22224 = inst_22228;
var v = inst_22229;
var c = inst_22230;
return ((function (cs,vec__22224,v,c,inst_22230,inst_22228,inst_22219,inst_22229,state_val_22250,c__20872__auto___22271,out){
return (function (p1__22215_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22215_SHARP_);
});
;})(cs,vec__22224,v,c,inst_22230,inst_22228,inst_22219,inst_22229,state_val_22250,c__20872__auto___22271,out))
})();
var inst_22234 = cljs.core.filterv.call(null,inst_22233,inst_22219);
var inst_22219__$1 = inst_22234;
var state_22249__$1 = (function (){var statearr_22264 = state_22249;
(statearr_22264[(10)] = inst_22219__$1);

return statearr_22264;
})();
var statearr_22265_22281 = state_22249__$1;
(statearr_22265_22281[(2)] = null);

(statearr_22265_22281[(1)] = (2));


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
});})(c__20872__auto___22271,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22271,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22266[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22266[(1)] = (1));

return statearr_22266;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22249){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22267){if((e22267 instanceof Object)){
var ex__20787__auto__ = e22267;
var statearr_22268_22282 = state_22249;
(statearr_22268_22282[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22283 = state_22249;
state_22249 = G__22283;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22271,out))
})();
var state__20874__auto__ = (function (){var statearr_22269 = f__20873__auto__.call(null);
(statearr_22269[(6)] = c__20872__auto___22271);

return statearr_22269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22271,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22285 = arguments.length;
switch (G__22285) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22330,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22330,out){
return (function (state_22309){
var state_val_22310 = (state_22309[(1)]);
if((state_val_22310 === (7))){
var inst_22291 = (state_22309[(7)]);
var inst_22291__$1 = (state_22309[(2)]);
var inst_22292 = (inst_22291__$1 == null);
var inst_22293 = cljs.core.not.call(null,inst_22292);
var state_22309__$1 = (function (){var statearr_22311 = state_22309;
(statearr_22311[(7)] = inst_22291__$1);

return statearr_22311;
})();
if(inst_22293){
var statearr_22312_22331 = state_22309__$1;
(statearr_22312_22331[(1)] = (8));

} else {
var statearr_22313_22332 = state_22309__$1;
(statearr_22313_22332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (1))){
var inst_22286 = (0);
var state_22309__$1 = (function (){var statearr_22314 = state_22309;
(statearr_22314[(8)] = inst_22286);

return statearr_22314;
})();
var statearr_22315_22333 = state_22309__$1;
(statearr_22315_22333[(2)] = null);

(statearr_22315_22333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (4))){
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22309__$1,(7),ch);
} else {
if((state_val_22310 === (6))){
var inst_22304 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22316_22334 = state_22309__$1;
(statearr_22316_22334[(2)] = inst_22304);

(statearr_22316_22334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (3))){
var inst_22306 = (state_22309[(2)]);
var inst_22307 = cljs.core.async.close_BANG_.call(null,out);
var state_22309__$1 = (function (){var statearr_22317 = state_22309;
(statearr_22317[(9)] = inst_22306);

return statearr_22317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22309__$1,inst_22307);
} else {
if((state_val_22310 === (2))){
var inst_22286 = (state_22309[(8)]);
var inst_22288 = (inst_22286 < n);
var state_22309__$1 = state_22309;
if(cljs.core.truth_(inst_22288)){
var statearr_22318_22335 = state_22309__$1;
(statearr_22318_22335[(1)] = (4));

} else {
var statearr_22319_22336 = state_22309__$1;
(statearr_22319_22336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (11))){
var inst_22286 = (state_22309[(8)]);
var inst_22296 = (state_22309[(2)]);
var inst_22297 = (inst_22286 + (1));
var inst_22286__$1 = inst_22297;
var state_22309__$1 = (function (){var statearr_22320 = state_22309;
(statearr_22320[(8)] = inst_22286__$1);

(statearr_22320[(10)] = inst_22296);

return statearr_22320;
})();
var statearr_22321_22337 = state_22309__$1;
(statearr_22321_22337[(2)] = null);

(statearr_22321_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (9))){
var state_22309__$1 = state_22309;
var statearr_22322_22338 = state_22309__$1;
(statearr_22322_22338[(2)] = null);

(statearr_22322_22338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (5))){
var state_22309__$1 = state_22309;
var statearr_22323_22339 = state_22309__$1;
(statearr_22323_22339[(2)] = null);

(statearr_22323_22339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (10))){
var inst_22301 = (state_22309[(2)]);
var state_22309__$1 = state_22309;
var statearr_22324_22340 = state_22309__$1;
(statearr_22324_22340[(2)] = inst_22301);

(statearr_22324_22340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22310 === (8))){
var inst_22291 = (state_22309[(7)]);
var state_22309__$1 = state_22309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22309__$1,(11),out,inst_22291);
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
});})(c__20872__auto___22330,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22330,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22325[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22325[(1)] = (1));

return statearr_22325;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22309){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22326){if((e22326 instanceof Object)){
var ex__20787__auto__ = e22326;
var statearr_22327_22341 = state_22309;
(statearr_22327_22341[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22342 = state_22309;
state_22309 = G__22342;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22330,out))
})();
var state__20874__auto__ = (function (){var statearr_22328 = f__20873__auto__.call(null);
(statearr_22328[(6)] = c__20872__auto___22330);

return statearr_22328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22330,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22344 = (function (f,ch,meta22345){
this.f = f;
this.ch = ch;
this.meta22345 = meta22345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22346,meta22345__$1){
var self__ = this;
var _22346__$1 = this;
return (new cljs.core.async.t_cljs$core$async22344(self__.f,self__.ch,meta22345__$1));
});

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22346){
var self__ = this;
var _22346__$1 = this;
return self__.meta22345;
});

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22347 = (function (f,ch,meta22345,_,fn1,meta22348){
this.f = f;
this.ch = ch;
this.meta22345 = meta22345;
this._ = _;
this.fn1 = fn1;
this.meta22348 = meta22348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22349,meta22348__$1){
var self__ = this;
var _22349__$1 = this;
return (new cljs.core.async.t_cljs$core$async22347(self__.f,self__.ch,self__.meta22345,self__._,self__.fn1,meta22348__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22349){
var self__ = this;
var _22349__$1 = this;
return self__.meta22348;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22343_SHARP_){
return f1.call(null,(((p1__22343_SHARP_ == null))?null:self__.f.call(null,p1__22343_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22345","meta22345",-1217434870,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22344","cljs.core.async/t_cljs$core$async22344",-1886804910,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22348","meta22348",-1822450203,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22347";

cljs.core.async.t_cljs$core$async22347.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22347");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22347.
 */
cljs.core.async.__GT_t_cljs$core$async22347 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22347(f__$1,ch__$1,meta22345__$1,___$2,fn1__$1,meta22348){
return (new cljs.core.async.t_cljs$core$async22347(f__$1,ch__$1,meta22345__$1,___$2,fn1__$1,meta22348));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22347(self__.f,self__.ch,self__.meta22345,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22345","meta22345",-1217434870,null)], null);
});

cljs.core.async.t_cljs$core$async22344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22344";

cljs.core.async.t_cljs$core$async22344.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22344");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22344.
 */
cljs.core.async.__GT_t_cljs$core$async22344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22344(f__$1,ch__$1,meta22345){
return (new cljs.core.async.t_cljs$core$async22344(f__$1,ch__$1,meta22345));
});

}

return (new cljs.core.async.t_cljs$core$async22344(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22350 = (function (f,ch,meta22351){
this.f = f;
this.ch = ch;
this.meta22351 = meta22351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22352,meta22351__$1){
var self__ = this;
var _22352__$1 = this;
return (new cljs.core.async.t_cljs$core$async22350(self__.f,self__.ch,meta22351__$1));
});

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22352){
var self__ = this;
var _22352__$1 = this;
return self__.meta22351;
});

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22351","meta22351",242683604,null)], null);
});

cljs.core.async.t_cljs$core$async22350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22350";

cljs.core.async.t_cljs$core$async22350.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22350");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22350.
 */
cljs.core.async.__GT_t_cljs$core$async22350 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22350(f__$1,ch__$1,meta22351){
return (new cljs.core.async.t_cljs$core$async22350(f__$1,ch__$1,meta22351));
});

}

return (new cljs.core.async.t_cljs$core$async22350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22353 = (function (p,ch,meta22354){
this.p = p;
this.ch = ch;
this.meta22354 = meta22354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22355,meta22354__$1){
var self__ = this;
var _22355__$1 = this;
return (new cljs.core.async.t_cljs$core$async22353(self__.p,self__.ch,meta22354__$1));
});

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22355){
var self__ = this;
var _22355__$1 = this;
return self__.meta22354;
});

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22354","meta22354",819505212,null)], null);
});

cljs.core.async.t_cljs$core$async22353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22353";

cljs.core.async.t_cljs$core$async22353.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22353");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22353.
 */
cljs.core.async.__GT_t_cljs$core$async22353 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22353(p__$1,ch__$1,meta22354){
return (new cljs.core.async.t_cljs$core$async22353(p__$1,ch__$1,meta22354));
});

}

return (new cljs.core.async.t_cljs$core$async22353(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22357 = arguments.length;
switch (G__22357) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22397,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22397,out){
return (function (state_22378){
var state_val_22379 = (state_22378[(1)]);
if((state_val_22379 === (7))){
var inst_22374 = (state_22378[(2)]);
var state_22378__$1 = state_22378;
var statearr_22380_22398 = state_22378__$1;
(statearr_22380_22398[(2)] = inst_22374);

(statearr_22380_22398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (1))){
var state_22378__$1 = state_22378;
var statearr_22381_22399 = state_22378__$1;
(statearr_22381_22399[(2)] = null);

(statearr_22381_22399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (4))){
var inst_22360 = (state_22378[(7)]);
var inst_22360__$1 = (state_22378[(2)]);
var inst_22361 = (inst_22360__$1 == null);
var state_22378__$1 = (function (){var statearr_22382 = state_22378;
(statearr_22382[(7)] = inst_22360__$1);

return statearr_22382;
})();
if(cljs.core.truth_(inst_22361)){
var statearr_22383_22400 = state_22378__$1;
(statearr_22383_22400[(1)] = (5));

} else {
var statearr_22384_22401 = state_22378__$1;
(statearr_22384_22401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (6))){
var inst_22360 = (state_22378[(7)]);
var inst_22365 = p.call(null,inst_22360);
var state_22378__$1 = state_22378;
if(cljs.core.truth_(inst_22365)){
var statearr_22385_22402 = state_22378__$1;
(statearr_22385_22402[(1)] = (8));

} else {
var statearr_22386_22403 = state_22378__$1;
(statearr_22386_22403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (3))){
var inst_22376 = (state_22378[(2)]);
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22378__$1,inst_22376);
} else {
if((state_val_22379 === (2))){
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22378__$1,(4),ch);
} else {
if((state_val_22379 === (11))){
var inst_22368 = (state_22378[(2)]);
var state_22378__$1 = state_22378;
var statearr_22387_22404 = state_22378__$1;
(statearr_22387_22404[(2)] = inst_22368);

(statearr_22387_22404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (9))){
var state_22378__$1 = state_22378;
var statearr_22388_22405 = state_22378__$1;
(statearr_22388_22405[(2)] = null);

(statearr_22388_22405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (5))){
var inst_22363 = cljs.core.async.close_BANG_.call(null,out);
var state_22378__$1 = state_22378;
var statearr_22389_22406 = state_22378__$1;
(statearr_22389_22406[(2)] = inst_22363);

(statearr_22389_22406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (10))){
var inst_22371 = (state_22378[(2)]);
var state_22378__$1 = (function (){var statearr_22390 = state_22378;
(statearr_22390[(8)] = inst_22371);

return statearr_22390;
})();
var statearr_22391_22407 = state_22378__$1;
(statearr_22391_22407[(2)] = null);

(statearr_22391_22407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (8))){
var inst_22360 = (state_22378[(7)]);
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22378__$1,(11),out,inst_22360);
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
});})(c__20872__auto___22397,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22397,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22392 = [null,null,null,null,null,null,null,null,null];
(statearr_22392[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22392[(1)] = (1));

return statearr_22392;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22378){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22393){if((e22393 instanceof Object)){
var ex__20787__auto__ = e22393;
var statearr_22394_22408 = state_22378;
(statearr_22394_22408[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22409 = state_22378;
state_22378 = G__22409;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22397,out))
})();
var state__20874__auto__ = (function (){var statearr_22395 = f__20873__auto__.call(null);
(statearr_22395[(6)] = c__20872__auto___22397);

return statearr_22395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22397,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22411 = arguments.length;
switch (G__22411) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto__){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto__){
return (function (state_22474){
var state_val_22475 = (state_22474[(1)]);
if((state_val_22475 === (7))){
var inst_22470 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22476_22514 = state_22474__$1;
(statearr_22476_22514[(2)] = inst_22470);

(statearr_22476_22514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (20))){
var inst_22440 = (state_22474[(7)]);
var inst_22451 = (state_22474[(2)]);
var inst_22452 = cljs.core.next.call(null,inst_22440);
var inst_22426 = inst_22452;
var inst_22427 = null;
var inst_22428 = (0);
var inst_22429 = (0);
var state_22474__$1 = (function (){var statearr_22477 = state_22474;
(statearr_22477[(8)] = inst_22429);

(statearr_22477[(9)] = inst_22428);

(statearr_22477[(10)] = inst_22451);

(statearr_22477[(11)] = inst_22427);

(statearr_22477[(12)] = inst_22426);

return statearr_22477;
})();
var statearr_22478_22515 = state_22474__$1;
(statearr_22478_22515[(2)] = null);

(statearr_22478_22515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (1))){
var state_22474__$1 = state_22474;
var statearr_22479_22516 = state_22474__$1;
(statearr_22479_22516[(2)] = null);

(statearr_22479_22516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (4))){
var inst_22415 = (state_22474[(13)]);
var inst_22415__$1 = (state_22474[(2)]);
var inst_22416 = (inst_22415__$1 == null);
var state_22474__$1 = (function (){var statearr_22480 = state_22474;
(statearr_22480[(13)] = inst_22415__$1);

return statearr_22480;
})();
if(cljs.core.truth_(inst_22416)){
var statearr_22481_22517 = state_22474__$1;
(statearr_22481_22517[(1)] = (5));

} else {
var statearr_22482_22518 = state_22474__$1;
(statearr_22482_22518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (15))){
var state_22474__$1 = state_22474;
var statearr_22486_22519 = state_22474__$1;
(statearr_22486_22519[(2)] = null);

(statearr_22486_22519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (21))){
var state_22474__$1 = state_22474;
var statearr_22487_22520 = state_22474__$1;
(statearr_22487_22520[(2)] = null);

(statearr_22487_22520[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (13))){
var inst_22429 = (state_22474[(8)]);
var inst_22428 = (state_22474[(9)]);
var inst_22427 = (state_22474[(11)]);
var inst_22426 = (state_22474[(12)]);
var inst_22436 = (state_22474[(2)]);
var inst_22437 = (inst_22429 + (1));
var tmp22483 = inst_22428;
var tmp22484 = inst_22427;
var tmp22485 = inst_22426;
var inst_22426__$1 = tmp22485;
var inst_22427__$1 = tmp22484;
var inst_22428__$1 = tmp22483;
var inst_22429__$1 = inst_22437;
var state_22474__$1 = (function (){var statearr_22488 = state_22474;
(statearr_22488[(14)] = inst_22436);

(statearr_22488[(8)] = inst_22429__$1);

(statearr_22488[(9)] = inst_22428__$1);

(statearr_22488[(11)] = inst_22427__$1);

(statearr_22488[(12)] = inst_22426__$1);

return statearr_22488;
})();
var statearr_22489_22521 = state_22474__$1;
(statearr_22489_22521[(2)] = null);

(statearr_22489_22521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (22))){
var state_22474__$1 = state_22474;
var statearr_22490_22522 = state_22474__$1;
(statearr_22490_22522[(2)] = null);

(statearr_22490_22522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (6))){
var inst_22415 = (state_22474[(13)]);
var inst_22424 = f.call(null,inst_22415);
var inst_22425 = cljs.core.seq.call(null,inst_22424);
var inst_22426 = inst_22425;
var inst_22427 = null;
var inst_22428 = (0);
var inst_22429 = (0);
var state_22474__$1 = (function (){var statearr_22491 = state_22474;
(statearr_22491[(8)] = inst_22429);

(statearr_22491[(9)] = inst_22428);

(statearr_22491[(11)] = inst_22427);

(statearr_22491[(12)] = inst_22426);

return statearr_22491;
})();
var statearr_22492_22523 = state_22474__$1;
(statearr_22492_22523[(2)] = null);

(statearr_22492_22523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (17))){
var inst_22440 = (state_22474[(7)]);
var inst_22444 = cljs.core.chunk_first.call(null,inst_22440);
var inst_22445 = cljs.core.chunk_rest.call(null,inst_22440);
var inst_22446 = cljs.core.count.call(null,inst_22444);
var inst_22426 = inst_22445;
var inst_22427 = inst_22444;
var inst_22428 = inst_22446;
var inst_22429 = (0);
var state_22474__$1 = (function (){var statearr_22493 = state_22474;
(statearr_22493[(8)] = inst_22429);

(statearr_22493[(9)] = inst_22428);

(statearr_22493[(11)] = inst_22427);

(statearr_22493[(12)] = inst_22426);

return statearr_22493;
})();
var statearr_22494_22524 = state_22474__$1;
(statearr_22494_22524[(2)] = null);

(statearr_22494_22524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (3))){
var inst_22472 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22474__$1,inst_22472);
} else {
if((state_val_22475 === (12))){
var inst_22460 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22495_22525 = state_22474__$1;
(statearr_22495_22525[(2)] = inst_22460);

(statearr_22495_22525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (2))){
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22474__$1,(4),in$);
} else {
if((state_val_22475 === (23))){
var inst_22468 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22496_22526 = state_22474__$1;
(statearr_22496_22526[(2)] = inst_22468);

(statearr_22496_22526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (19))){
var inst_22455 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22497_22527 = state_22474__$1;
(statearr_22497_22527[(2)] = inst_22455);

(statearr_22497_22527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (11))){
var inst_22440 = (state_22474[(7)]);
var inst_22426 = (state_22474[(12)]);
var inst_22440__$1 = cljs.core.seq.call(null,inst_22426);
var state_22474__$1 = (function (){var statearr_22498 = state_22474;
(statearr_22498[(7)] = inst_22440__$1);

return statearr_22498;
})();
if(inst_22440__$1){
var statearr_22499_22528 = state_22474__$1;
(statearr_22499_22528[(1)] = (14));

} else {
var statearr_22500_22529 = state_22474__$1;
(statearr_22500_22529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (9))){
var inst_22462 = (state_22474[(2)]);
var inst_22463 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22474__$1 = (function (){var statearr_22501 = state_22474;
(statearr_22501[(15)] = inst_22462);

return statearr_22501;
})();
if(cljs.core.truth_(inst_22463)){
var statearr_22502_22530 = state_22474__$1;
(statearr_22502_22530[(1)] = (21));

} else {
var statearr_22503_22531 = state_22474__$1;
(statearr_22503_22531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (5))){
var inst_22418 = cljs.core.async.close_BANG_.call(null,out);
var state_22474__$1 = state_22474;
var statearr_22504_22532 = state_22474__$1;
(statearr_22504_22532[(2)] = inst_22418);

(statearr_22504_22532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (14))){
var inst_22440 = (state_22474[(7)]);
var inst_22442 = cljs.core.chunked_seq_QMARK_.call(null,inst_22440);
var state_22474__$1 = state_22474;
if(inst_22442){
var statearr_22505_22533 = state_22474__$1;
(statearr_22505_22533[(1)] = (17));

} else {
var statearr_22506_22534 = state_22474__$1;
(statearr_22506_22534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (16))){
var inst_22458 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22507_22535 = state_22474__$1;
(statearr_22507_22535[(2)] = inst_22458);

(statearr_22507_22535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (10))){
var inst_22429 = (state_22474[(8)]);
var inst_22427 = (state_22474[(11)]);
var inst_22434 = cljs.core._nth.call(null,inst_22427,inst_22429);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22474__$1,(13),out,inst_22434);
} else {
if((state_val_22475 === (18))){
var inst_22440 = (state_22474[(7)]);
var inst_22449 = cljs.core.first.call(null,inst_22440);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22474__$1,(20),out,inst_22449);
} else {
if((state_val_22475 === (8))){
var inst_22429 = (state_22474[(8)]);
var inst_22428 = (state_22474[(9)]);
var inst_22431 = (inst_22429 < inst_22428);
var inst_22432 = inst_22431;
var state_22474__$1 = state_22474;
if(cljs.core.truth_(inst_22432)){
var statearr_22508_22536 = state_22474__$1;
(statearr_22508_22536[(1)] = (10));

} else {
var statearr_22509_22537 = state_22474__$1;
(statearr_22509_22537[(1)] = (11));

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
});})(c__20872__auto__))
;
return ((function (switch__20783__auto__,c__20872__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____0 = (function (){
var statearr_22510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22510[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__);

(statearr_22510[(1)] = (1));

return statearr_22510;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____1 = (function (state_22474){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22511){if((e22511 instanceof Object)){
var ex__20787__auto__ = e22511;
var statearr_22512_22538 = state_22474;
(statearr_22512_22538[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22539 = state_22474;
state_22474 = G__22539;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__ = function(state_22474){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____1.call(this,state_22474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20784__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto__))
})();
var state__20874__auto__ = (function (){var statearr_22513 = f__20873__auto__.call(null);
(statearr_22513[(6)] = c__20872__auto__);

return statearr_22513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto__))
);

return c__20872__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22541 = arguments.length;
switch (G__22541) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22544 = arguments.length;
switch (G__22544) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22547 = arguments.length;
switch (G__22547) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22594,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22594,out){
return (function (state_22571){
var state_val_22572 = (state_22571[(1)]);
if((state_val_22572 === (7))){
var inst_22566 = (state_22571[(2)]);
var state_22571__$1 = state_22571;
var statearr_22573_22595 = state_22571__$1;
(statearr_22573_22595[(2)] = inst_22566);

(statearr_22573_22595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (1))){
var inst_22548 = null;
var state_22571__$1 = (function (){var statearr_22574 = state_22571;
(statearr_22574[(7)] = inst_22548);

return statearr_22574;
})();
var statearr_22575_22596 = state_22571__$1;
(statearr_22575_22596[(2)] = null);

(statearr_22575_22596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (4))){
var inst_22551 = (state_22571[(8)]);
var inst_22551__$1 = (state_22571[(2)]);
var inst_22552 = (inst_22551__$1 == null);
var inst_22553 = cljs.core.not.call(null,inst_22552);
var state_22571__$1 = (function (){var statearr_22576 = state_22571;
(statearr_22576[(8)] = inst_22551__$1);

return statearr_22576;
})();
if(inst_22553){
var statearr_22577_22597 = state_22571__$1;
(statearr_22577_22597[(1)] = (5));

} else {
var statearr_22578_22598 = state_22571__$1;
(statearr_22578_22598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (6))){
var state_22571__$1 = state_22571;
var statearr_22579_22599 = state_22571__$1;
(statearr_22579_22599[(2)] = null);

(statearr_22579_22599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (3))){
var inst_22568 = (state_22571[(2)]);
var inst_22569 = cljs.core.async.close_BANG_.call(null,out);
var state_22571__$1 = (function (){var statearr_22580 = state_22571;
(statearr_22580[(9)] = inst_22568);

return statearr_22580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22571__$1,inst_22569);
} else {
if((state_val_22572 === (2))){
var state_22571__$1 = state_22571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22571__$1,(4),ch);
} else {
if((state_val_22572 === (11))){
var inst_22551 = (state_22571[(8)]);
var inst_22560 = (state_22571[(2)]);
var inst_22548 = inst_22551;
var state_22571__$1 = (function (){var statearr_22581 = state_22571;
(statearr_22581[(10)] = inst_22560);

(statearr_22581[(7)] = inst_22548);

return statearr_22581;
})();
var statearr_22582_22600 = state_22571__$1;
(statearr_22582_22600[(2)] = null);

(statearr_22582_22600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (9))){
var inst_22551 = (state_22571[(8)]);
var state_22571__$1 = state_22571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22571__$1,(11),out,inst_22551);
} else {
if((state_val_22572 === (5))){
var inst_22551 = (state_22571[(8)]);
var inst_22548 = (state_22571[(7)]);
var inst_22555 = cljs.core._EQ_.call(null,inst_22551,inst_22548);
var state_22571__$1 = state_22571;
if(inst_22555){
var statearr_22584_22601 = state_22571__$1;
(statearr_22584_22601[(1)] = (8));

} else {
var statearr_22585_22602 = state_22571__$1;
(statearr_22585_22602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (10))){
var inst_22563 = (state_22571[(2)]);
var state_22571__$1 = state_22571;
var statearr_22586_22603 = state_22571__$1;
(statearr_22586_22603[(2)] = inst_22563);

(statearr_22586_22603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22572 === (8))){
var inst_22548 = (state_22571[(7)]);
var tmp22583 = inst_22548;
var inst_22548__$1 = tmp22583;
var state_22571__$1 = (function (){var statearr_22587 = state_22571;
(statearr_22587[(7)] = inst_22548__$1);

return statearr_22587;
})();
var statearr_22588_22604 = state_22571__$1;
(statearr_22588_22604[(2)] = null);

(statearr_22588_22604[(1)] = (2));


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
});})(c__20872__auto___22594,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22594,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22589[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22589[(1)] = (1));

return statearr_22589;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22571){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22590){if((e22590 instanceof Object)){
var ex__20787__auto__ = e22590;
var statearr_22591_22605 = state_22571;
(statearr_22591_22605[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22606 = state_22571;
state_22571 = G__22606;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22594,out))
})();
var state__20874__auto__ = (function (){var statearr_22592 = f__20873__auto__.call(null);
(statearr_22592[(6)] = c__20872__auto___22594);

return statearr_22592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22594,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22608 = arguments.length;
switch (G__22608) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22674,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22674,out){
return (function (state_22646){
var state_val_22647 = (state_22646[(1)]);
if((state_val_22647 === (7))){
var inst_22642 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22648_22675 = state_22646__$1;
(statearr_22648_22675[(2)] = inst_22642);

(statearr_22648_22675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (1))){
var inst_22609 = (new Array(n));
var inst_22610 = inst_22609;
var inst_22611 = (0);
var state_22646__$1 = (function (){var statearr_22649 = state_22646;
(statearr_22649[(7)] = inst_22611);

(statearr_22649[(8)] = inst_22610);

return statearr_22649;
})();
var statearr_22650_22676 = state_22646__$1;
(statearr_22650_22676[(2)] = null);

(statearr_22650_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (4))){
var inst_22614 = (state_22646[(9)]);
var inst_22614__$1 = (state_22646[(2)]);
var inst_22615 = (inst_22614__$1 == null);
var inst_22616 = cljs.core.not.call(null,inst_22615);
var state_22646__$1 = (function (){var statearr_22651 = state_22646;
(statearr_22651[(9)] = inst_22614__$1);

return statearr_22651;
})();
if(inst_22616){
var statearr_22652_22677 = state_22646__$1;
(statearr_22652_22677[(1)] = (5));

} else {
var statearr_22653_22678 = state_22646__$1;
(statearr_22653_22678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (15))){
var inst_22636 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22654_22679 = state_22646__$1;
(statearr_22654_22679[(2)] = inst_22636);

(statearr_22654_22679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (13))){
var state_22646__$1 = state_22646;
var statearr_22655_22680 = state_22646__$1;
(statearr_22655_22680[(2)] = null);

(statearr_22655_22680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (6))){
var inst_22611 = (state_22646[(7)]);
var inst_22632 = (inst_22611 > (0));
var state_22646__$1 = state_22646;
if(cljs.core.truth_(inst_22632)){
var statearr_22656_22681 = state_22646__$1;
(statearr_22656_22681[(1)] = (12));

} else {
var statearr_22657_22682 = state_22646__$1;
(statearr_22657_22682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (3))){
var inst_22644 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22646__$1,inst_22644);
} else {
if((state_val_22647 === (12))){
var inst_22610 = (state_22646[(8)]);
var inst_22634 = cljs.core.vec.call(null,inst_22610);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22646__$1,(15),out,inst_22634);
} else {
if((state_val_22647 === (2))){
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22646__$1,(4),ch);
} else {
if((state_val_22647 === (11))){
var inst_22626 = (state_22646[(2)]);
var inst_22627 = (new Array(n));
var inst_22610 = inst_22627;
var inst_22611 = (0);
var state_22646__$1 = (function (){var statearr_22658 = state_22646;
(statearr_22658[(7)] = inst_22611);

(statearr_22658[(10)] = inst_22626);

(statearr_22658[(8)] = inst_22610);

return statearr_22658;
})();
var statearr_22659_22683 = state_22646__$1;
(statearr_22659_22683[(2)] = null);

(statearr_22659_22683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (9))){
var inst_22610 = (state_22646[(8)]);
var inst_22624 = cljs.core.vec.call(null,inst_22610);
var state_22646__$1 = state_22646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22646__$1,(11),out,inst_22624);
} else {
if((state_val_22647 === (5))){
var inst_22611 = (state_22646[(7)]);
var inst_22610 = (state_22646[(8)]);
var inst_22619 = (state_22646[(11)]);
var inst_22614 = (state_22646[(9)]);
var inst_22618 = (inst_22610[inst_22611] = inst_22614);
var inst_22619__$1 = (inst_22611 + (1));
var inst_22620 = (inst_22619__$1 < n);
var state_22646__$1 = (function (){var statearr_22660 = state_22646;
(statearr_22660[(12)] = inst_22618);

(statearr_22660[(11)] = inst_22619__$1);

return statearr_22660;
})();
if(cljs.core.truth_(inst_22620)){
var statearr_22661_22684 = state_22646__$1;
(statearr_22661_22684[(1)] = (8));

} else {
var statearr_22662_22685 = state_22646__$1;
(statearr_22662_22685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (14))){
var inst_22639 = (state_22646[(2)]);
var inst_22640 = cljs.core.async.close_BANG_.call(null,out);
var state_22646__$1 = (function (){var statearr_22664 = state_22646;
(statearr_22664[(13)] = inst_22639);

return statearr_22664;
})();
var statearr_22665_22686 = state_22646__$1;
(statearr_22665_22686[(2)] = inst_22640);

(statearr_22665_22686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (10))){
var inst_22630 = (state_22646[(2)]);
var state_22646__$1 = state_22646;
var statearr_22666_22687 = state_22646__$1;
(statearr_22666_22687[(2)] = inst_22630);

(statearr_22666_22687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22647 === (8))){
var inst_22610 = (state_22646[(8)]);
var inst_22619 = (state_22646[(11)]);
var tmp22663 = inst_22610;
var inst_22610__$1 = tmp22663;
var inst_22611 = inst_22619;
var state_22646__$1 = (function (){var statearr_22667 = state_22646;
(statearr_22667[(7)] = inst_22611);

(statearr_22667[(8)] = inst_22610__$1);

return statearr_22667;
})();
var statearr_22668_22688 = state_22646__$1;
(statearr_22668_22688[(2)] = null);

(statearr_22668_22688[(1)] = (2));


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
});})(c__20872__auto___22674,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22674,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22669[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22669[(1)] = (1));

return statearr_22669;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22646){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22670){if((e22670 instanceof Object)){
var ex__20787__auto__ = e22670;
var statearr_22671_22689 = state_22646;
(statearr_22671_22689[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22690 = state_22646;
state_22646 = G__22690;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22674,out))
})();
var state__20874__auto__ = (function (){var statearr_22672 = f__20873__auto__.call(null);
(statearr_22672[(6)] = c__20872__auto___22674);

return statearr_22672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22674,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22692 = arguments.length;
switch (G__22692) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20872__auto___22762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20872__auto___22762,out){
return (function (){
var f__20873__auto__ = (function (){var switch__20783__auto__ = ((function (c__20872__auto___22762,out){
return (function (state_22734){
var state_val_22735 = (state_22734[(1)]);
if((state_val_22735 === (7))){
var inst_22730 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22736_22763 = state_22734__$1;
(statearr_22736_22763[(2)] = inst_22730);

(statearr_22736_22763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (1))){
var inst_22693 = [];
var inst_22694 = inst_22693;
var inst_22695 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22734__$1 = (function (){var statearr_22737 = state_22734;
(statearr_22737[(7)] = inst_22695);

(statearr_22737[(8)] = inst_22694);

return statearr_22737;
})();
var statearr_22738_22764 = state_22734__$1;
(statearr_22738_22764[(2)] = null);

(statearr_22738_22764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (4))){
var inst_22698 = (state_22734[(9)]);
var inst_22698__$1 = (state_22734[(2)]);
var inst_22699 = (inst_22698__$1 == null);
var inst_22700 = cljs.core.not.call(null,inst_22699);
var state_22734__$1 = (function (){var statearr_22739 = state_22734;
(statearr_22739[(9)] = inst_22698__$1);

return statearr_22739;
})();
if(inst_22700){
var statearr_22740_22765 = state_22734__$1;
(statearr_22740_22765[(1)] = (5));

} else {
var statearr_22741_22766 = state_22734__$1;
(statearr_22741_22766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (15))){
var inst_22724 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22742_22767 = state_22734__$1;
(statearr_22742_22767[(2)] = inst_22724);

(statearr_22742_22767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (13))){
var state_22734__$1 = state_22734;
var statearr_22743_22768 = state_22734__$1;
(statearr_22743_22768[(2)] = null);

(statearr_22743_22768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (6))){
var inst_22694 = (state_22734[(8)]);
var inst_22719 = inst_22694.length;
var inst_22720 = (inst_22719 > (0));
var state_22734__$1 = state_22734;
if(cljs.core.truth_(inst_22720)){
var statearr_22744_22769 = state_22734__$1;
(statearr_22744_22769[(1)] = (12));

} else {
var statearr_22745_22770 = state_22734__$1;
(statearr_22745_22770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (3))){
var inst_22732 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22734__$1,inst_22732);
} else {
if((state_val_22735 === (12))){
var inst_22694 = (state_22734[(8)]);
var inst_22722 = cljs.core.vec.call(null,inst_22694);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22734__$1,(15),out,inst_22722);
} else {
if((state_val_22735 === (2))){
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22734__$1,(4),ch);
} else {
if((state_val_22735 === (11))){
var inst_22702 = (state_22734[(10)]);
var inst_22698 = (state_22734[(9)]);
var inst_22712 = (state_22734[(2)]);
var inst_22713 = [];
var inst_22714 = inst_22713.push(inst_22698);
var inst_22694 = inst_22713;
var inst_22695 = inst_22702;
var state_22734__$1 = (function (){var statearr_22746 = state_22734;
(statearr_22746[(11)] = inst_22714);

(statearr_22746[(7)] = inst_22695);

(statearr_22746[(12)] = inst_22712);

(statearr_22746[(8)] = inst_22694);

return statearr_22746;
})();
var statearr_22747_22771 = state_22734__$1;
(statearr_22747_22771[(2)] = null);

(statearr_22747_22771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (9))){
var inst_22694 = (state_22734[(8)]);
var inst_22710 = cljs.core.vec.call(null,inst_22694);
var state_22734__$1 = state_22734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22734__$1,(11),out,inst_22710);
} else {
if((state_val_22735 === (5))){
var inst_22702 = (state_22734[(10)]);
var inst_22695 = (state_22734[(7)]);
var inst_22698 = (state_22734[(9)]);
var inst_22702__$1 = f.call(null,inst_22698);
var inst_22703 = cljs.core._EQ_.call(null,inst_22702__$1,inst_22695);
var inst_22704 = cljs.core.keyword_identical_QMARK_.call(null,inst_22695,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22705 = ((inst_22703) || (inst_22704));
var state_22734__$1 = (function (){var statearr_22748 = state_22734;
(statearr_22748[(10)] = inst_22702__$1);

return statearr_22748;
})();
if(cljs.core.truth_(inst_22705)){
var statearr_22749_22772 = state_22734__$1;
(statearr_22749_22772[(1)] = (8));

} else {
var statearr_22750_22773 = state_22734__$1;
(statearr_22750_22773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (14))){
var inst_22727 = (state_22734[(2)]);
var inst_22728 = cljs.core.async.close_BANG_.call(null,out);
var state_22734__$1 = (function (){var statearr_22752 = state_22734;
(statearr_22752[(13)] = inst_22727);

return statearr_22752;
})();
var statearr_22753_22774 = state_22734__$1;
(statearr_22753_22774[(2)] = inst_22728);

(statearr_22753_22774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (10))){
var inst_22717 = (state_22734[(2)]);
var state_22734__$1 = state_22734;
var statearr_22754_22775 = state_22734__$1;
(statearr_22754_22775[(2)] = inst_22717);

(statearr_22754_22775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22735 === (8))){
var inst_22702 = (state_22734[(10)]);
var inst_22694 = (state_22734[(8)]);
var inst_22698 = (state_22734[(9)]);
var inst_22707 = inst_22694.push(inst_22698);
var tmp22751 = inst_22694;
var inst_22694__$1 = tmp22751;
var inst_22695 = inst_22702;
var state_22734__$1 = (function (){var statearr_22755 = state_22734;
(statearr_22755[(14)] = inst_22707);

(statearr_22755[(7)] = inst_22695);

(statearr_22755[(8)] = inst_22694__$1);

return statearr_22755;
})();
var statearr_22756_22776 = state_22734__$1;
(statearr_22756_22776[(2)] = null);

(statearr_22756_22776[(1)] = (2));


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
});})(c__20872__auto___22762,out))
;
return ((function (switch__20783__auto__,c__20872__auto___22762,out){
return (function() {
var cljs$core$async$state_machine__20784__auto__ = null;
var cljs$core$async$state_machine__20784__auto____0 = (function (){
var statearr_22757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22757[(0)] = cljs$core$async$state_machine__20784__auto__);

(statearr_22757[(1)] = (1));

return statearr_22757;
});
var cljs$core$async$state_machine__20784__auto____1 = (function (state_22734){
while(true){
var ret_value__20785__auto__ = (function (){try{while(true){
var result__20786__auto__ = switch__20783__auto__.call(null,state_22734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20786__auto__;
}
break;
}
}catch (e22758){if((e22758 instanceof Object)){
var ex__20787__auto__ = e22758;
var statearr_22759_22777 = state_22734;
(statearr_22759_22777[(5)] = ex__20787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22778 = state_22734;
state_22734 = G__22778;
continue;
} else {
return ret_value__20785__auto__;
}
break;
}
});
cljs$core$async$state_machine__20784__auto__ = function(state_22734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20784__auto____1.call(this,state_22734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20784__auto____0;
cljs$core$async$state_machine__20784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20784__auto____1;
return cljs$core$async$state_machine__20784__auto__;
})()
;})(switch__20783__auto__,c__20872__auto___22762,out))
})();
var state__20874__auto__ = (function (){var statearr_22760 = f__20873__auto__.call(null);
(statearr_22760[(6)] = c__20872__auto___22762);

return statearr_22760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20874__auto__);
});})(c__20872__auto___22762,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1628501140153
