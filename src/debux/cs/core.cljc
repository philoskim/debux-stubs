(ns debux.cs.core)

#?(:cljs (enable-console-print!))

;;; config APIS
(defn set-print-seq-length! [num])

(defn set-debug-mode! [val])
(defmacro set-ns-blacklist! [blacklist])
(defmacro set-ns-whitelist! [whitelist])


;;; debugging APIs
(defmacro dbg [form & opts] form)
(defmacro dbgn [form & opts] form)

(defmacro clog [form & opts] form)
(defmacro clogn [form & opts] form)

(defmacro break [& opts])


;;; macro registering APIs
(defmacro register-macros! [macro-type symbols])

(defmacro show-macros
  ([])
  ([macro-type]))


;;; style option API
(defn merge-styles [new-style])

