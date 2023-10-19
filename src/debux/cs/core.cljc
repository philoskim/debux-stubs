(ns debux.cs.core)

;;; config APIS
(defn set-debug-mode! [val])
(defn set-source-info-mode! [val])
(defn set-print-length! [num])
(defn set-line-bullet! [bulet])
(defn set-cljs-devtools! [bool])

(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])
(defmacro set-tap-output! [bool])
(defmacro set-date-time-fn! [date-time-fn])

;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)
(defmacro dbgt [form & opts] form)
(defmacro dbg-last [& args] (last args))

(defmacro clog [form & opts] form)
(defmacro clogn [form & opts] form)
(defmacro clogt [form & opts] form)
(defmacro clog-last [& args] (last args))

(defmacro with-level [debug-level & args]
  `(do ~@args))

(defmacro break [& opts])


;;; turn-off versions
(defmacro dbg_ [form & opts] form)
(defmacro dbgn_ [form & opts] form)
(defmacro dbgt_ [form & opts] form)
(defmacro dbg-last_ [& args] (last args))

(defmacro clog_ [form & opts] form)
(defmacro clogn_ [form & opts] form)
(defmacro clogt_ [form & opts] form)
(defmacro clog-last_ [& args] (last args))

(defmacro break_ [& opts])


;;; tag literals
(defn clog-tag [form] form)
(defn clogn-tag [form] form)
(defn clogt-tag [form] form)


;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))


;;; style option API
(defn merge-styles [new-style])

