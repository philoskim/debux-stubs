(ns debux.core)

;;; config APIs
(defn set-print-seq-length! [num])


;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)

;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))

