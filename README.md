# Sandboys
Sandboys are little atoms that follow simple rules.<br>
It's inspired by the [T2Tile project](https://t2tile.org/) and [SPLAT](https://github.com/DaveAckley/SPLAT).

## Rules
Sandboys follow simple rules, like this one:
```
@ => _
_    @
```
It makes an atom fall down if there's an empty space below it.<br>
PS: This example has a locked y-axis.

## To-Do
* Change event window from a 3x3x3 grid into three intersecting 5x5 planes.
* Reduce scope of Atom object.
* Reduce scope of World object.
* Reduce scope of AtomType.
* Rename certain things to match T2Tile??? eg: "neighbours" to "event window", "atomType" to "element", "axes" to "symmetries".
* Move event window code into its own file.
* Try separating colour and visibility into different attributes.
* Implement a Universe class that combines separate Worlds together.
* Implement Conway's game of life in 2D and 3D.
* Implement randomness of selecting a rule.
* Implement Res and DReg in 2D and 3D.
* Implement demon horde sort in 2D and 3D.
* Add panning to camera controls.
* Fix Splat UI for rules that use the z-axis.
* Implement custom Input and Output class.
* Try making different Worlds resolve rules in different web workers.
* Randomise the order that spaces process in.
