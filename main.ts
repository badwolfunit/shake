input.onGesture(Gesture.Shake, function () {
    music.setBuiltInSpeakerEnabled(false)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
basic.forever(function () {
	
})
