TodeSplat` 

element Sand {
	default true
	colour "#ffcc00"
	emissive "#ffa34d"
	category "Sandbox"
	
	ruleset Powder
	
}

element Water {
	
	colour "lightblue"
	emissive "blue"
	opacity 0.5
	category "Sandbox"
	state "liquid"
	
	given H (element) => element == Fire || element == Lava
	keep H
	
	change S () => ATOM.make(Steam)
	
	rule xyz { @H => SH }
	ruleset Liquid
	
}

element Fire {
	colour "orange"
	emissive "red"
	category "Sandbox"
	floor true
	
	state "effect"
	
	rule 0.3 { @ => _ }
	rule {
		_ => @
		@    _
	}
	
	rule {
		x => x
		@    _
	}
	
}

element Lava {
	colour "red"
	emissive "darkred"
	category "Sandbox"
	opacity 0.7
	
	state "gloop"
	
	change F () => ATOM.make(Fire)
	
	action 0.25 {
		_ => F
		@    @
	}
	
	ruleset Gloop
	
}

element Slime {
	colour "lightgreen"
	emissive "green"
	category "Sandbox"
	opacity 0.7
	state "gloop"
	ruleset Gloop
}

element Snow {
	colour "white"
	emissive "grey"
	
	category "Sandbox"
	state "solid"
	
	given H (element) => element == Lava || element == Fire
	keep H
	change W () => ATOM.make(Water)
	
	rule 0.0005 { @ => W }
	rule xyz { @H => WH }
	
	ruleset Powder
	
}

element Steam {
	colour "lightgrey"
	emissive "darkgrey"
	category "Sandbox"
	opacity 0.3
	floor true
	state "gas"
	
	change W () => ATOM.make(Water)
	
	rule 0.0002 { @ => W }
	
	rule {
		_ => @
		@    _
	}
	
	rule xz { @_ => _@ }
	
}

`