var print = (function() {
  var pre = document.getElementById('output');
  if (!pre) {
    pre = document.createElement('pre');
    pre.setAttribute('id', 'output');
    document.body.insertBefore(pre, null);
  }
  return function(s) {
    pre.innerHTML += s;
  }
}());

var println = function(s) {
  print(s + '\n');
};

var printObject = function(o) {
  println(JSON.stringify(o, null, '  '));
}