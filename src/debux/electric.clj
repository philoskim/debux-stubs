(ns debux.electric)

;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)
(defmacro dbgt [form & opts] form)
(defmacro dbg-last [& args] (last args))

;;; turn-off versions
(defmacro dbg_ [form & opts] form)
(defmacro dbgn_ [form & opts] form)
(defmacro dbgt_ [form & opts] form)
(defmacro dbg-last_ [& args] (last args))

