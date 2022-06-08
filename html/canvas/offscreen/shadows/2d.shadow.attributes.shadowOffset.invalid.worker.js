// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.attributes.shadowOffset.invalid
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = Infinity;
ctx.shadowOffsetY = Infinity;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");
ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = -Infinity;
ctx.shadowOffsetY = -Infinity;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");
ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 2;
ctx.shadowOffsetX = NaN;
ctx.shadowOffsetY = NaN;
_assertSame(ctx.shadowOffsetX, 1, "ctx.shadowOffsetX", "1");
_assertSame(ctx.shadowOffsetY, 2, "ctx.shadowOffsetY", "2");
t.done();

});
done();