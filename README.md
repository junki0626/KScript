License : MIT license











Start :
node kscript.js example.ks


example:
["cmd", "***"]


print:
["log", "Hello, World!"]

if:
["if", 1, 2, ["log", "false"]]//false
["if", 1, 1, ["log", "true"]]//true

while:
["while", 1, 10, ["log", "while"]]
