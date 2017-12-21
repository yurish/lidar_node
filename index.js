var SerialPort = require('serialport');
var port = new SerialPort('/dev/cu.SLAB_USBtoUART', {
  baudRate: 9600
});
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();
port.pipe(parser);



parser.on('data', function (data) {
  console.log(data);
});

port.write('1;180;180');
