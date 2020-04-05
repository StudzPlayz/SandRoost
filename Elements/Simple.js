





TodeSplat`



origin @
given @ (self, atom) => self == atom
change @ (self) => self

change _ () => undefined
given _ (space) => space

given # (atom) => atom

keep .

element Sand {

	colour "#FC0"
	
	@ => _
	_    @
	
	any({return xz}) {
		@  => _
		#_    .@
	}
	
}

element Forkbomb @_ => @@

element Foo {
	
}

element Water {
	colour { return "lightblue" }
	emissive "blue"
	opacity 0.5
	arg temperature 25
	data state "liquid"
	element Hot { @ => _ }
	
	
}

element Slime {
	colour {
		const colour = "green"
		return colour
	}
	opacity 0.65
}

element Lava {
	colour {
		return "red"
	}
	action {
		_ => _
		@    @
	}
	mimic(Slime)
}

element Fire {
	colour [
		"darkorange",
		"lol",
	][0]
	
	maybe(0.5) @_ => _@
	
}

element Wall prop state "solid"

element DReg { colour "brown" }

element Res any(xyz) {
	opacity 0.5
	prop lol "losl"
	@_ => _@
}

element SuperForkbomb for(xyz) @_ => @@

`
