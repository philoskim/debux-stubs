(ns debux.cs.electric)

;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)
(defmacro dbgt [form & opts] form)
(defmacro dbg-last [& args] (last args))

(defmacro clog [form & opts] form)
(defmacro clogn [form & opts] form)
(defmacro clogt [form & opts] form)
(defmacro clog-last [& args] (last args))

;;; turn-off versions
(defmacro dbg_ [form & opts] form)
(defmacro dbgn_ [form & opts] form)
(defmacro dbgt_ [form & opts] form)
(defmacro dbg-last_ [& args] (last args))

(defmacro clog_ [form & opts] form)
(defmacro clogn_ [form & opts] form)
(defmacro clogt_ [form & opts] form)
(defmacro clog-last_ [& args] (last args))

