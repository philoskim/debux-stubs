(ns debux.core)

;;; config APIs
(defn set-debug-mode! [val])
(defn set-source-info-mode! [val])

(defn set-print-length! [num])

(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])
(defmacro set-cljs-devtools! [bool])


;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)
(defn dbg-prn [& args])
(defmacro dbg-last [& args] (last args))


;;; turn-off versions
(defmacro dbg_ [form & opts] form)
(defmacro dbgn_ [form & opts] form)
(defn dbg-prn_ [& args])
(defmacro dbg-last_ [& args] (last args))


;;; tag literals
(defn dbg-tag [form] form)
(defn dbg-tag [form] form)


;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))
