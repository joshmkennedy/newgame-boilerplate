import './style.css'
import Game from './game'
import type { GameObject } from './gameObject'
import Player from "./player" 
import Camera from "./camera"
import Scene from "./scene"


const canvas = document.querySelector<HTMLCanvasElement>("#canvas")
if (!canvas) {
	throw new Error('no canvas element')
}

const gameObjects: GameObject[] = [
	new Camera(),
	new Scene(),
	new Player(),
]

const game = new Game(canvas, gameObjects);
game.start()
