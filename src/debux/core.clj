(ns debux.core)

;;; config APIs
(defn set-print-seq-length! [num])

(defn set-debug-mode! [val])
(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])


;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)


;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))

