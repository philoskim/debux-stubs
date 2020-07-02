(ns debux.core)

;;; config APIs
(defn set-print-length! [num])

(defn set-debug-mode! [val])
(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])


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
