import {
  AmbientLight, AxesHelper, BoxGeometry, Color, CylinderGeometry, DirectionalLight,
  Float32BufferAttribute,
  Fog,
  Group, Mesh, MeshStandardMaterial, MeshToonMaterial,
  PlaneGeometry, PointLight, RectAreaLight, Scene, SpotLight, TextureLoader
} from "three"

import { gui } from "../core/gui"
import { updateRenderer } from "../core/renderer"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight("#B9D5FF", 0.55)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#B9D5FF", 1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

const monitorLight = new RectAreaLight("#B9D5FF", 1.5, 1.0, 0.5)
monitorLight.position.set(-0.7, 1.9, - 2.75)

const monitorLight2 = new RectAreaLight("#B9D5FF", 3.5, 1.0, 1.5)
monitorLight2.position.set(-0.7, 2.3, - 2.77)
monitorLight2.lookAt(-0.65, 1.7, 0)

scene.add(monitorLight, monitorLight2)

const roomLight = new SpotLight("#B9D5FF", 7.5, 4, Math.PI * 0.3, 0.25, 2)
roomLight.castShadow = true
roomLight.shadow.mapSize.set(1024, 1024)
roomLight.shadow.camera.far = 7
roomLight.shadow.normalBias = 0.05

roomLight.position.set(0, 2.5, 0)


const lampLight = new PointLight("#B9D5FF", 1.9, 2.5)
lampLight.position.set(0.0, 3.3, 0.0)

scene.add(directionalLight, roomLight, lampLight,)

const fog = new Fog("#262837", 2, 75)
scene.fog = fog

const textureLoader = new TextureLoader()

const brickColorTexture = textureLoader.load("src/static/textures/bricks/color.jpg")
const brickAmbientOcclusionTexture = textureLoader.load("src/static/textures/bricks/ambientOcclusion.jpg")
const brickNormalTexture = textureLoader.load("src/static/textures/bricks/normal.jpg")
const brickRoughnessTexture = textureLoader.load("src/static/textures/bricks/roughness.jpg")
const gameScreenTexture = textureLoader.load("src/static/textures/details/game.jpg")


const lighController = gui.addFolder({
  title: "Lights",
  expanded: true,
})

lighController.addInput(directionalLight, "intensity", {
  label: "Ambient Light",
  min: 0,
  max: 1,
  step: 0.01,
})

lighController.addInput(roomLight.position, "x", {
  label: "SpotLight X",
  min: -5,
  max: 5,
  step: 0.01,
})

lighController.addInput(roomLight.position, "y", {
  label: "SpotLight Y",
  min: -5,
  max: 5,
  step: 0.01,
})

lighController.addInput(roomLight.position, "z", {
  label: "SpotLight Z",
  min: -5,
  max: 5,
  step: 0.01,
})


const myRoom = new Group()
const deskObject = new Group()
const computerObject = new Group()
const bedObject = new Group()
const chairObject = new Group()
const rackObject = new Group()
const monitorObject = new Group()
const shelfObject = new Group()
const lampObject = new Group()
const clousetObject = new Group()

scene.add(myRoom, deskObject, computerObject, bedObject, chairObject, rackObject, monitorObject, shelfObject, lampObject, clousetObject)


// ground and walls
const ground = new Mesh(
  new BoxGeometry(7, 0.3, 7),
  new MeshStandardMaterial({ color: "#BB8A93" })
)
ground.receiveShadow = true
ground.position.set(0, 0.15, 0)

const wall1 = new Mesh(
  new BoxGeometry(7, 4, 0.3),
  new MeshStandardMaterial({
    map: brickColorTexture,
    aoMap: brickAmbientOcclusionTexture,
    normalMap: brickNormalTexture,
    roughnessMap: brickRoughnessTexture,
  })
)

wall1.geometry.setAttribute(
  "uv2",
  new Float32BufferAttribute(wall1.geometry.attributes.uv.array, 2)
)

wall1.receiveShadow = true
wall1.position.set(3.5, 2.0, 0)
wall1.rotation.y = Math.PI / 2


const wall2 = new Mesh(
  new BoxGeometry(7, 4, 0.3),
  new MeshStandardMaterial({ color: "#F3EDFF" })
)
wall2.receiveShadow = true
wall2.position.set(0, 2.0, -3.5)


myRoom.add(ground, wall1, wall2)

// scene objects --------------------------------------------

const clouset = new Mesh(
  new BoxGeometry(1.5, 2.7, 0.5),
  new MeshStandardMaterial({ color: "#F3EDFF" })

)
clouset.receiveShadow = true
clouset.position.set(2.9, 1.35, -2.2)
clouset.rotation.y = Math.PI / 2


const clousetDoor = new Mesh(
  new BoxGeometry(0.67, 2.7, 0.1),
  new MeshStandardMaterial({ color: "#F3EDFF" })

)
clousetDoor.receiveShadow = true
clousetDoor.position.set(2.6, 1.35, -2.6)
clousetDoor.rotation.y = Math.PI / 2


const clousetDoor2 = new Mesh(
  new BoxGeometry(0.67, 2.7, 0.1),
  new MeshStandardMaterial({ color: "#F3EDFF" })

)
clousetDoor2.receiveShadow = true
clousetDoor2.position.set(2.6, 1.35, -1.8)
clousetDoor2.rotation.y = Math.PI / 2


const clousetDoorHandle = new Mesh(
  new CylinderGeometry(0.03, 0.03, 0.1, 32),
  new MeshStandardMaterial({ color: "#000000" })

)
clousetDoorHandle.receiveShadow = true
clousetDoorHandle.position.set(2.5, 1.4, -2.0)
clousetDoorHandle.rotation.y = Math.PI / 2


const clousetDoorHandle2 = new Mesh(
  new CylinderGeometry(0.03, 0.03, 0.1, 32),
  new MeshStandardMaterial({ color: "#000000" })

)
clousetDoorHandle2.receiveShadow = true
clousetDoorHandle2.position.set(2.5, 1.4, -2.4)
clousetDoorHandle2.rotation.y = Math.PI / 2


clousetObject.add(clouset, clousetDoor, clousetDoor2, clousetDoorHandle, clousetDoorHandle2)

clousetObject.position.set(0, 0.2, 0)
clousetObject.castShadow = true

const shelf = new Mesh(
  new BoxGeometry(2, 1.0, 0.5),
  new MeshStandardMaterial({ color: "#CA8757" })
)
shelf.receiveShadow = true
shelf.position.set(0, 0.15, 0)
shelf.rotation.y = Math.PI / 2

const shelfdoor = new Mesh(
  new BoxGeometry(0.8, 0.8, 0.05),
  new MeshStandardMaterial({ color: "#CA8757" })
)
shelfdoor.receiveShadow = true
shelfdoor.position.set(-0.28, 0.2, -0.5)
shelfdoor.rotation.y = Math.PI / 2


const shelfdoor2 = new Mesh(
  new BoxGeometry(0.8, 0.8, 0.05),
  new MeshStandardMaterial({ color: "#CA8757" })
)
shelfdoor2.receiveShadow = true
shelfdoor2.position.set(-0.28, 0.2, 0.5)
shelfdoor2.rotation.y = Math.PI / 2

shelfObject.position.set(3.1, 0.5, 0.5)

shelfObject.scale.set(1.5, 1.0, 1.5)

shelfObject.add(shelf, shelfdoor, shelfdoor2)

const trashcan = new Mesh(
  new CylinderGeometry(0.25, 0.2, 0.5, 32),
  new MeshStandardMaterial({ color: "#454E5B" })
)
trashcan.receiveShadow = true
trashcan.position.set(-2.5, 0.5, -2.7)

myRoom.add(trashcan)


//lamp --------------------------------------------
const lamp = new Mesh(
  new CylinderGeometry(0.1, 0.1, 0.5, 32),
  new MeshStandardMaterial({ color: "#F3EDFF" })

)
lamp.receiveShadow = true
lamp.position.set(0, 0.5, 0)



const lampshade = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.1, 32),
  new MeshStandardMaterial({ color: "#F3EDFF" })
)
lampshade.receiveShadow = true
lampshade.position.set(0, 0.8, 0)

const lampshade2 = new Mesh(
  new CylinderGeometry(0.3, 0.1, 0.1, 32),
  new MeshStandardMaterial({ color: "#F3EDFF" })
)
lampshade2.receiveShadow = true
lampshade2.position.set(0, 0.2, 0)


lampObject.add(lamp, lampshade, lampshade2)

lampObject.position.set(0, 3.6, 0.0)

lampObject.scale.set(0.5, 0.5, 0.5)

const roof = new Mesh(
  new PlaneGeometry(7, 7),
  new MeshStandardMaterial({ color: "#F3EDFF" })
)
roof.receiveShadow = false
roof.position.set(0, 4.0, 0)
roof.rotation.x = Math.PI / 2

myRoom.add(roof)


//desk --------------------------------------------
const tableTop = new Mesh(
  new BoxGeometry(2.5, 0.1, 1.5),
  new MeshStandardMaterial({ color: "#CA8757" })

)
tableTop.receiveShadow = true
tableTop.position.set(-0.5, 1.3, -2.7)

const tableLeg1 = new Mesh(
  new BoxGeometry(0.1, 1, 1.5),
  new MeshStandardMaterial({ color: "#CA8757" })

)
tableLeg1.receiveShadow = true
tableLeg1.position.set(0.7, 0.8, -2.7)

const tableLeg2 = new Mesh(
  new BoxGeometry(0.1, 1, 1.5),
  new MeshStandardMaterial({ color: "#CA8757" })

)
tableLeg2.receiveShadow = true
tableLeg2.position.set(0.1, 0.8, -2.7)

const tableLeg3 = new Mesh(
  new BoxGeometry(0.1, 1, 1.5),
  new MeshStandardMaterial({ color: "#CA8757" })

)
tableLeg3.receiveShadow = true
tableLeg3.position.set(-1.7, 0.8, -2.7)

const drawer = new Mesh(
  new BoxGeometry(0.5, 1.0, 1),
  new MeshStandardMaterial({ color: "#FFFF" })
)
drawer.receiveShadow = true
drawer.position.set(0.4, 0.75, -2.5)

const drawerDivider1 = new Mesh(
  new BoxGeometry(0.5, 0.05, 1),
  new MeshStandardMaterial({ color: "#CA8757" })
)
drawerDivider1.receiveShadow = true
drawerDivider1.position.set(0.4, 0.955, -2.45)

const drawerDivider2 = new Mesh(
  new BoxGeometry(0.5, 0.05, 1),
  new MeshStandardMaterial({ color: "#CA8757" })
)
drawerDivider2.receiveShadow = true
drawerDivider2.position.set(0.4, 0.65, -2.45)

const drawerDivider3 = new Mesh(
  new BoxGeometry(0.5, 0.05, 1),
  new MeshStandardMaterial({ color: "#CA8757" })
)
drawerDivider3.receiveShadow = true
drawerDivider3.position.set(0.4, 0.33, -2.45)

deskObject.add(tableTop, tableLeg1, tableLeg2, tableLeg3, drawer, drawerDivider1, drawerDivider2, drawerDivider3)


//computer --------------------------------------------

const computer = new Mesh(
  new BoxGeometry(0.5, 1, 1),
  new MeshStandardMaterial({ color: "#FFFF" })
)
computer.receiveShadow = true
computer.position.set(-0.1, 1.3, -3.2)

const detail = new Mesh(
  new BoxGeometry(0.4, 1.0, 0.07),
  new MeshStandardMaterial({ color: "#454E5B" })
)
detail.receiveShadow = true
detail.position.set(-0.1, 1.301, -2.8)

const detail2 = new Mesh(
  new BoxGeometry(0.4, 0.07, 0.77),
  new MeshStandardMaterial({ color: "#454E5B" })
)
detail2.receiveShadow = true
detail2.position.set(-0.1, 1.77, -3.25)

const monitor = new Mesh(
  new BoxGeometry(1.3, 0.8, 0.1),
  new MeshStandardMaterial({ color: "#535758" })
)
monitor.receiveShadow = true
monitor.position.set(-1.2, 1.3, -3.5)

const monitorScreen = new Mesh(
  new BoxGeometry(1.2, 0.7, 0.1),
  new MeshStandardMaterial({
    map: gameScreenTexture
  })
)
monitorScreen.receiveShadow = true
monitorScreen.position.set(-1.2, 1.3, -3.499)

const monitorStand = new Mesh(
  new CylinderGeometry(0.05, 0.05, 0.5, 32),
  new MeshStandardMaterial({ color: "#535758" })
)
monitorStand.receiveShadow = true
monitorStand.position.set(-1.2, 0.8, -3.6)

monitorObject.add(monitor, monitorScreen, monitorStand)
monitorObject.position.set(0.5, 0.6, 0.5)

const keyboard = new Mesh(
  new BoxGeometry(0.8, 0.05, 0.3),
  new MeshStandardMaterial({ color: "#282828" })
)
keyboard.receiveShadow = true
keyboard.position.set(-1.2, 0.89, -2.8)

const mouse = new Mesh(
  new BoxGeometry(0.1, 0.05, 0.2),
  new MeshStandardMaterial({ color: "#282828" })
)
mouse.receiveShadow = true
mouse.position.set(-0.6, 0.89, -2.8)

computerObject.add(computer, keyboard, mouse, detail, detail2)

computerObject.position.set(0.5, 0.5, 0.5)



//chair --------------------------------------------
const chair = new Mesh(
  new BoxGeometry(0.5, 0.1, 0.5),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chair.position.set(-0.8, 1, -1.3)

const chairLeg1 = new Mesh(
  new CylinderGeometry(0.07, 0.05, 0.7, 32),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairLeg1.position.set(-0.96, 0.60, -1.11)


const chairLeg2 = new Mesh(
  new CylinderGeometry(0.07, 0.05, 0.7, 32),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairLeg2.position.set(-0.65, 0.60, -1.11)


const chairLeg3 = new Mesh(
  new CylinderGeometry(0.07, 0.05, 0.7, 32),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairLeg3.position.set(-0.65, 0.60, -1.47)


const chairLeg4 = new Mesh(
  new CylinderGeometry(0.07, 0.05, 0.7, 32),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairLeg4.position.set(-0.95, 0.60, -1.47)


const chairBack = new Mesh(
  new BoxGeometry(0.5, 0.5, 0.05),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairBack.position.set(-0.8, 1.5, -1.1)


const chairBackSupport = new Mesh(
  new BoxGeometry(0.05, 0.5, 0.05),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairBackSupport.position.set(-0.65, 1.3, -1.1)

const chairBackSupport2 = new Mesh(
  new BoxGeometry(0.05, 0.5, 0.05),
  new MeshStandardMaterial({ color: "#CA8757" })
)
chairBackSupport2.position.set(-0.95, 1.3, -1.1)


chairObject.add(chair, chairLeg1, chairLeg2, chairLeg3, chairLeg4, chairBack, chairBackSupport, chairBackSupport2)

chairObject.castShadow = true

chairObject.position.set(0.0, 0.0, -0.4)


//bed --------------------------------------------
const bed = new Mesh(
  new BoxGeometry(3.0, 0.5, 1.8),
  new MeshStandardMaterial({ color: "#825D55" })
)
bed.receiveShadow = true
bed.position.set(-2.5, 0.5, 1.5)
bed.rotation.y = Math.PI / 2

const mattress = new Mesh(
  new BoxGeometry(2, 0.3, 1.6),
  new MeshStandardMaterial({ color: "#5279CF" })
)
mattress.receiveShadow = true
mattress.position.set(-2.5, 0.8, 1.9)
mattress.rotation.y = Math.PI / 2

const mattress2 = new Mesh(
  new BoxGeometry(0.4, 0.3, 1.7),
  new MeshStandardMaterial({ color: "#FFFF" })
)
mattress2.receiveShadow = true
mattress2.position.set(-2.5, 0.85, 0.7)
mattress2.rotation.y = Math.PI / 2

const pillow = new Mesh(
  new BoxGeometry(0.7, 0.2, 1.6),
  new MeshStandardMaterial({ color: "#FFFF" })
)
pillow.receiveShadow = true
pillow.position.set(-2.5, 0.85, 0.4)
pillow.rotation.y = Math.PI / 2

const pillow2 = new Mesh(
  new CylinderGeometry(0.2, 0.2, 1.4, 32),
  new MeshStandardMaterial({ color: "#FFFF" })
)
pillow2.receiveShadow = true
pillow2.position.set(-2.5, 0.85, 0.30)
pillow2.rotation.z = Math.PI / 2

bedObject.add(bed, mattress, mattress2, pillow, pillow2)
bedObject.scale.set(1.0, 1.0, 1.2)
bedObject.position.set(0.2, 0.0, -0.6)


//tv --------------------------------------------
const tv = new Mesh(
  new BoxGeometry(2.3, 1.3, 0.1),
  new MeshStandardMaterial({ color: "#535758" })
)
tv.receiveShadow = true
tv.position.set(3.3, 2, 0.5)
tv.rotation.y = Math.PI / 2


const tvScreen = new Mesh(
  new BoxGeometry(2.2, 1.2, 0.1),
  new MeshStandardMaterial({ color: "#282826" })
)
tvScreen.receiveShadow = true
tvScreen.position.set(3.299, 2, 0.5)
tvScreen.rotation.y = Math.PI / 2

rackObject.add(tv, tvScreen)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}