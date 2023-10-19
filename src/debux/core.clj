(ns debux.core)

;;; config APIs
(defn set-debug-mode! [val])
(defn set-source-info-mode! [val])
(defn set-print-length! [num])
(defn set-line-bullet! [bulet])

(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])
(defmacro set-tap-output! [bool])
(defmacro set-date-time-fn! [date-time-fn])


;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)
(defmacro dbgt [form & opts] form)
(defn dbg-prn [& args])
(defmacro dbg-last [& args] (last args))

(defmacro with-level [debug-level & args]
  `(do ~@args))

;;; turn-off versions
(defmacro dbg_ [form & opts] form)
(defmacro dbgn_ [form & opts] form)
(defmacro dbgt_ [form & opts] form)

(defn dbg-prn_ [& args])
(defmacro dbg-last_ [& args] (last args))


;;; tag literals
(defn dbg-tag [form] form)
(defn dbgn-tag [form] form)
(defn dbgt-tag [form] form)


;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))
