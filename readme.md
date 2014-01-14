This module reverses any files you pass to it.

```
rule.each("files/*.txt", fez.mapFile("reversed/%f.txt"), reverse());
```