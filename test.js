const log = console.log

log(
  classNames({
    a: true,
    b: false,
    c: 0,
    d: null,
    e: undefined,
    f: 1
  })
)
log(classNames("a", 0, null, undefined, true, 1, "b"))
log(classNames({ a: true }, "b", 0))
log(classNames("", "b", {}, ""))
log(classNames({}))
log(classNames(["a", "b"]))
log(classNames(["a", "b"], "c"))
log(classNames("c", ["a", "b"]))
log(classNames(["a", "b"], ["c", "d"]))
log(classNames(["a", 0, null, undefined, false, true, "b"]))
log(classNames(["a", ["b", "c"]]))
log(classNames(["a", { b: true, c: false }]))
log(classNames(["a", ["b", ["c", { d: true }]]]))
log(classNames("a", []))
log(classNames("a", [[]]))
log(
  classNames({
    // falsy:
    null: null,
    emptyString: "",
    noNumber: NaN,
    zero: 0,
    negativeZero: -0,
    false: false,
    undefined: undefined,
    // truly:
    nonEmptyString: "foobar",
    whitespace: " ",
    function: Object.prototype.toString,
    emptyObject: {},
    nonEmptyObject: { a: 1, b: 2 },
    emptyList: [],
    nonEmptyList: [1, 2, 3],
    greaterZero: 1
  })
)
