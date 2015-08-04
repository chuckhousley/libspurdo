# libspurdo
Text to spurdo library

## About
This is a javascript library used for converting regular speech into "spurdo". This has a wide variety of uses in many different types off applications, and removes the need to impliment it again yourself.

## How to use
### Reference libspurdo
Use in a browser:

```<script src="libspurdo.js"></script>```

Use in NodeJS:

```toSpurdo = require("./libspurdo")```

### Use libspurdo
toSpurdo() takes a string, and returns spurdo-ified text. See the examples below.

```
toSpurdo("This is a javascript library used for converting regular speech into \"spurdo\". This has a wide variety of uses in many different types off applications, and removes the need to impliment it again yourself.")
"diz iz a javazgript library uzed for gonvertink regular sbeech indo "spurdo" :DD diz haz a wide variedy of uzes in many differend tybes off abpligadionz XDD and removes de need to implimend id again yourzelf :DD"
```

```
toSpurdo("“Free software” means software that respects users' freedom and community. Roughly, it means that the users have the freedom to run, copy, distribute, study, change and improve the software. Thus, “free software” is a matter of liberty, not price. To understand the concept, you should think of “free” as in “free speech,” not as in “free beer”. We sometimes call it “libre software” to show we do not mean it is gratis.")
"“Free software” meanz software dad resbecdz uzerz' freedom and gomunidy :DD Roughly XDD id meanz dad de uzerz have de freedom to run XDD goby XDD dizdribute XDD study XDD chanke and imbrove de software :DD duz XDD “free software” iz a madter of liberty XDD nod brige :DD To underztand de goncept XDD you should dink of “free” az in “free sbeech XDD” nod az in “free beer” :DD We somedimes gall id “libre software” to show we do nod mean id iz gradiz :DD"
```
