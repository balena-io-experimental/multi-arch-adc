# Multi-Architecture Analog-to-Digital Converter (ADC)
This simple node.js app uses the Dockerfile.template feature of resin.io to allow the same repo to be pushed to
both Raspberry pi (ARM) and Intel Edison (x86), even though they have different underlying architecture.

The node.js script sets up a i2c connection to a small ADC chip (ADS1015) that allows these linux devices to read
analog signals. It then logs these to the console, which you can see on the resin.io dashboard. A sample of the output
can be seen here:
```
11.06.15 10:27:41 [+0100] { ai0: 568, ai1: 576, ai2: 616, ai3: 652 }
11.06.15 10:27:46 [+0100] { ai0: 566, ai1: 576, ai2: 618, ai3: 648 }
11.06.15 10:27:51 [+0100] { ai0: 570, ai1: 576, ai2: 620, ai3: 646 }
```
