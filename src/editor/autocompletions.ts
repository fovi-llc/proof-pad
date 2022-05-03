/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CompletionContext } from "@codemirror/autocomplete";

export function autocompletions(context: CompletionContext) {
  console.log("hi");
  const signal = context.matchBefore(/\(/);
  if (!signal && !context.explicit) return null;
  return {
    from: signal ? signal.from : context.pos,
    options: AUTOCOMPLETIONS.map((w) => ({ label: w, type: "keyword" })),
  };
}

// Run
// JSON.stringify([...document.querySelectorAll('dt > a:first-child')].map(a => a.innerText.toLocaleLowerCase()))
// on
// https://www.cs.utexas.edu/users/moore/acl2/manuals/current/manual/?topic=ACL2____ACL2-BUILT-INS
// https://www.cs.utexas.edu/users/moore/acl2/manuals/current/manual/?topic=ACL2____EVENTS
// Updated Apr 10, 2022
const AUTOCOMPLETIONS = [
  "*",
  "*acl2-exports*",
  "*common-lisp-symbols-from-main-lisp-package*",
  "*standard-ci*",
  "*standard-co*",
  "*standard-oi*",
  "+",
  "-",
  "/",
  "/=",
  "1+",
  "1-",
  "<",
  "<=",
  "=",
  ">",
  ">=",
  "@",
  "abs",
  "access",
  "acl2-count",
  "acl2-number-listp",
  "acl2-numberp",
  "acons",
  "add-to-set",
  "alist-keys-subsetp",
  "alist-to-doublets",
  "alistp",
  "allocate-fixnum-range",
  "alpha-char-p",
  "alphorder",
  "and",
  "append",
  "apply$",
  "aref1",
  "aref2",
  "arities-okp",
  "arity",
  "array1p",
  "array2p",
  "aset1",
  "aset1-trusted",
  "aset2",
  "ash",
  "assert$",
  "assert*",
  "assign",
  "assoc",
  "assoc-keyword",
  "assoc-string-equal",
  "atom",
  "atom-listp",
  "binary-*",
  "binary-+",
  "binary-append",
  "bitp",
  "boole$",
  "boolean-listp",
  "booleanp",
  "break$",
  "break-on-error",
  "butlast",
  "caaaar",
  "caaadr",
  "caaar",
  "caadar",
  "caaddr",
  "caadr",
  "caar",
  "cadaar",
  "cadadr",
  "cadar",
  "caddar",
  "cadddr",
  "caddr",
  "cadr",
  "canonical-pathname",
  "car",
  "case",
  "case-match",
  "cbd",
  "cdaaar",
  "cdaadr",
  "cdaar",
  "cdadar",
  "cdaddr",
  "cdadr",
  "cdar",
  "cddaar",
  "cddadr",
  "cddar",
  "cdddar",
  "cddddr",
  "cdddr",
  "cddr",
  "cdr",
  "ceiling",
  "change",
  "char",
  "char-code",
  "char-downcase",
  "char-equal",
  "char-upcase",
  "char<",
  "char<=",
  "char>",
  "char>=",
  "character-alistp",
  "character-listp",
  "characterp",
  "code-char",
  "coerce",
  "comment",
  "comp",
  "comp-gcl",
  "complex",
  "complex-rationalp",
  "complex/complex-rationalp",
  "compress1",
  "compress2",
  "concatenate",
  "cond",
  "conjugate",
  "cons",
  "cons-count-bounded",
  "cons-subtrees",
  "cons-with-hint",
  "consp",
  "count",
  "count-keys",
  "cpu-core-count",
  "cw",
  "cw!",
  "cw!+",
  "cw+",
  "cw-print-base-radix",
  "cw-print-base-radix!",
  "declare",
  "default",
  "defbadge",
  "defwarrant",
  "delete-assoc",
  "denominator",
  "digit-char-p",
  "digit-to-char",
  "dimensions",
  "ec-call",
  "eighth",
  "endp",
  "eq",
  "eql",
  "eqlable-alistp",
  "eqlable-listp",
  "eqlablep",
  "equal",
  "er",
  "er-progn",
  "er-soft",
  "error1",
  "evenp",
  "evens",
  "explode-atom",
  "explode-nonnegative-integer",
  "expt",
  "f-boundp-global",
  "f-get-global",
  "f-put-global",
  "fast-alist-clean",
  "fast-alist-clean!",
  "fast-alist-fork",
  "fast-alist-fork!",
  "fast-alist-free",
  "fast-alist-free-on-exit",
  "fast-alist-len",
  "fast-alist-summary",
  "fifth",
  "first",
  "fix",
  "fix-true-list",
  "flet",
  "floor",
  "flush-compress",
  "flush-hons-get-hash-table-link",
  "fms",
  "fms!",
  "fmt",
  "fmt1",
  "fmt1!",
  "fmt!",
  "fmt-to-comment-window",
  "fmt-to-comment-window!",
  "fmt-to-comment-window!+",
  "fmt-to-comment-window+",
  "fmx",
  "fmx-cw",
  "formula",
  "fourth",
  "gc$",
  "gc-strategy",
  "get-internal-time",
  "getenv$",
  "getprop",
  "getpropc",
  "good-atom-listp",
  "good-bye",
  "hard-error",
  "header",
  "hons",
  "hons-acons",
  "hons-acons!",
  "hons-assoc-equal",
  "hons-clear",
  "hons-clear!",
  "hons-copy",
  "hons-copy-persistent",
  "hons-equal",
  "hons-get",
  "hons-resize",
  "hons-shrink-alist",
  "hons-shrink-alist!",
  "hons-summary",
  "hons-wash",
  "hons-wash!",
  "identity",
  "if",
  "iff",
  "ifix",
  "illegal",
  "imagpart",
  "implies",
  "improper-consp",
  "in-package",
  "in-tau-intervalp",
  "int=",
  "integer-length",
  "integer-listp",
  "integer-range-p",
  "integerp",
  "intern",
  "intern$",
  "intern-in-package-of-symbol",
  "intersection$",
  "intersectp",
  "keyword-listp",
  "keyword-value-listp",
  "keywordp",
  "kwote",
  "kwote-lst",
  "last",
  "last-prover-steps",
  "len",
  "length",
  "let",
  "let*",
  "lexorder",
  "list",
  "list*",
  "listp",
  "logand",
  "logandc1",
  "logandc2",
  "logbitp",
  "logcount",
  "logeqv",
  "logic-fns-list-listp",
  "logic-fns-listp",
  "logic-fnsp",
  "logic-term-list-listp",
  "logic-term-listp",
  "logic-termp",
  "logior",
  "lognand",
  "lognor",
  "lognot",
  "logorc1",
  "logorc2",
  "logtest",
  "logxor",
  "loop$",
  "lower-case-p",
  "make",
  "make-character-list",
  "make-fast-alist",
  "make-list",
  "make-ord",
  "make-tau-interval",
  "makunbound-global",
  "max",
  "maximum-length",
  "maybe-flush-and-compress1",
  "mbe",
  "mbe1",
  "mbt",
  "mbt*",
  "member",
  "merge-sort-lexorder",
  "min",
  "minusp",
  "mod",
  "mod-expt",
  "msg",
  "msgp",
  "must-be-equal",
  "mv",
  "mv-let",
  "mv-list",
  "mv-nth",
  "mv?",
  "mv?-let",
  "nat-listp",
  "natp",
  "nfix",
  "ninth",
  "no-duplicatesp",
  "non-exec",
  "nonnegative-integer-quotient",
  "not",
  "nth",
  "nthcdr",
  "null",
  "number-subtrees",
  "numerator",
  "o-finp",
  "o-first-coeff",
  "o-first-expt",
  "o-infp",
  "o-p",
  "o-rst",
  "o<",
  "o<=",
  "o>",
  "o>=",
  "observation",
  "oddp",
  "odds",
  "open-output-channel!",
  "or",
  "packn",
  "packn-pos",
  "pairlis$",
  "pairlis-x1",
  "pairlis-x2",
  "pand",
  "pargs",
  "pkg-witness",
  "plet",
  "plusp",
  "por",
  "position",
  "posp",
  "pprogn",
  "primitive",
  "princ$",
  "print-base-p",
  "print-object$",
  "print-object$+",
  "prog2$",
  "progn$",
  "proofs-co",
  "proper-consp",
  "pseudo-term-listp",
  "pseudo-termp",
  "put-assoc",
  "putprop",
  "quote",
  "r-eqlable-alistp",
  "r-symbol-alistp",
  "random$",
  "rassoc",
  "rational-listp",
  "rationalp",
  "read-acl2-oracle",
  "read-run-time",
  "real-listp",
  "real/rationalp",
  "realfix",
  "realpart",
  "rem",
  "remove",
  "remove1",
  "remove1-assoc",
  "remove-assoc",
  "remove-duplicates",
  "resize-list",
  "rest",
  "return-last",
  "revappend",
  "reverse",
  "rfix",
  "round",
  "search",
  "second",
  "serialize-read",
  "serialize-write",
  "set-difference$",
  "set-fmt-hard-right-margin",
  "set-fmt-soft-right-margin",
  "set-gc-strategy",
  "set-print-base",
  "set-print-base-radix",
  "set-print-case",
  "set-print-radix",
  "setenv$",
  "seventh",
  "signed-byte-p",
  "signum",
  "sixth",
  "spec-mv-let",
  "standard-char-listp",
  "standard-char-p",
  "standard-char-p+",
  "standard-co",
  "standard-oi",
  "standard-string-alistp",
  "state-global-let*",
  "string",
  "string-append",
  "string-downcase",
  "string-equal",
  "string-listp",
  "string-upcase",
  "string<",
  "string<=",
  "string>",
  "string>=",
  "stringp",
  "strip-cars",
  "strip-cdrs",
  "sublis",
  "subseq",
  "subsetp",
  "subst",
  "substitute",
  "swap-stobjs",
  "symbol-alistp",
  "symbol-listp",
  "symbol-name",
  "symbol-name-lst",
  "symbol-package-name",
  "symbol<",
  "symbolp",
  "sys-call",
  "sys-call*",
  "sys-call+",
  "sys-call-status",
  "take",
  "tenth",
  "term-list-listp",
  "term-listp",
  "term-order",
  "termp",
  "the",
  "third",
  "time$",
  "time-tracker",
  "true-list-listp",
  "true-listp",
  "truncate",
  "unary--",
  "unary-/",
  "union$",
  "unquote",
  "unsigned-byte-p",
  "update-nth",
  "update-nth-array",
  "upper-case-p",
  "value-triple",
  "with-fast-alist",
  "with-guard-checking",
  "with-guard-checking-error-triple",
  "with-guard-checking-event",
  "with-live-state",
  "with-local-state",
  "with-local-stobj",
  "with-output-lock",
  "with-serialize-character",
  "with-stolen-alist",
  "without-evisc",
  "xor",
  "zerop",
  "zip",
  "zp",
  "zpf",
  "add-custom-keyword-hint",
  "assert-event",
  "comp",
  "defabbrev",
  "defabsstobj",
  "defabsstobj-missing-events",
  "defattach",
  "defaxiom",
  "defchoose",
  "defcong",
  "defconst",
  "defdoc",
  "defequiv",
  "defevaluator",
  "defexec",
  "define-trusted-clause-processor",
  "deflabel",
  "defmacro",
  "defmacro-last",
  "defmacro-untouchable",
  "defn",
  "defnd",
  "defpkg",
  "defproxy",
  "defpun",
  "defrec",
  "defrefinement",
  "defstobj",
  "defstub",
  "deftheory",
  "deftheory-static",
  "defthm",
  "defthmd",
  "defthmg",
  "defthmr",
  "defthy",
  "defttag",
  "defun",
  "defun$",
  "defun-inline",
  "defun-notinline",
  "defun-nx",
  "defun-sk",
  "defund",
  "defund-inline",
  "defund-notinline",
  "defund-nx",
  "dft",
  "dump-events",
  "embedded-event-form",
  "encapsulate",
  "evisc-table",
  "in-arithmetic-theory",
  "in-theory",
  "include-book",
  "local",
  "logical-name",
  "make-event",
  "memoize",
  "mutual-recursion",
  "name",
  "partial-encapsulate",
  "profile",
  "progn",
  "progn!",
  "redundant-events",
  "regenerate-tau-database",
  "remove-custom-keyword-hint",
  "set-body",
  "skip-proofs",
  "table",
  "theory-invariant",
  "unmemoize",
  "value-triple",
  "verify-guards",
  "verify-guards+",
  "verify-termination",
];
