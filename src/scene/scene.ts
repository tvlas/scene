import {
  AmbientLight, AxesHelper, BoxGeometry, Color, CylinderGeometry, DirectionalLight,
  Mesh, MeshToonMaterial,
  PlaneGeometry, Scene
} from "three"
import { updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
  body: "#FFFFFF",
  nose: "#FF0000",
  engine: "#000000",
  shadow: "#44",
  raptors: "#b2b2b2",
  landings: "#262626",
}

const coif = new Mesh(
  new CylinderGeometry(0.4, 0.3, 0.2, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.shadow),
    wireframe: false,
  })
)

coif.position.set(0, 5.6, 0)
coif.castShadow = true


const coif_body = new Mesh(
  new CylinderGeometry(0.4, 0.4, 1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.shadow),
    wireframe: false,
  })
)

coif_body.position.set(0, 6.2, 0)
coif_body.castShadow = true


const coif_top = new Mesh(
  new CylinderGeometry(0.3, 0.4, 0.2, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.shadow),
    wireframe: false,
  })
)

coif_top.position.set(0, 6.8, 0)
coif_top.castShadow = true


const coif_top_0 = new Mesh(
  new CylinderGeometry(0.1, 0.2, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.shadow),
    wireframe: false,
  })
)

coif_top_0.position.set(0, 7.15, 0)
coif_top_0.castShadow = true


const coif_top_1 = new Mesh(
  new CylinderGeometry(0.2, 0.3, 0.2, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.shadow),
    wireframe: false,
  })
)

coif_top_1.position.set(0, 7, 0)
coif_top_1.castShadow = true



const rocket_body = new Mesh(
  new CylinderGeometry(0.3, 0.3, 3, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.body),
    wireframe: false,
  })
)

rocket_body.position.set(0, 2, 0)
rocket_body.castShadow = true


const rocket_segment1 = new Mesh(
  new CylinderGeometry(0.3, 0.3, 1, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.body),
    wireframe: false,
  })
)

rocket_segment1.position.set(0, 5, 0)
rocket_segment1.castShadow = true


const rocket_segment2 = new Mesh(
  new CylinderGeometry(0.3, 0.3, 1, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

rocket_segment2.position.set(0, 4, 0)
rocket_segment2.castShadow = true

//stabilizers

const stabilizer = new Mesh(
  new BoxGeometry(0.15, 0.2, 0.5, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

stabilizer.position.set(0, 3.4, 0.1)
stabilizer.castShadow = true


const stabilizer2 = new Mesh(
  new BoxGeometry(0.15, 0.2, 0.5, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

stabilizer2.position.set(0, 3.4, -0.1)
stabilizer2.castShadow = true

const stabilizer3 = new Mesh(
  new BoxGeometry(0.05, 0.2, 0.2, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

stabilizer3.position.set(0.3, 3.4, 0)
stabilizer3.castShadow = true

const stabilizer4 = new Mesh(
  new BoxGeometry(0.05, 0.2, 0.2, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

stabilizer4.position.set(-0.3, 3.4, 0)
stabilizer4.castShadow = true


const rocket_engine = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.3, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

rocket_engine.position.set(0, 0.35, 0)
rocket_engine.castShadow = true

const raptor1 = new Mesh(
  new CylinderGeometry(0.05, 0.1, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.raptors),
    wireframe: false,
  })
)

raptor1.position.set(0, 0.15, 0)
raptor1.castShadow = true

const raptor2 = new Mesh(
  new CylinderGeometry(0.05, 0.1, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.raptors),
    wireframe: false,
  })
)

raptor2.position.set(0.23, 0.15, 0)
raptor2.castShadow = true

const raptor3 = new Mesh(
  new CylinderGeometry(0.05, 0.1, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.raptors),
    wireframe: false,
  })
)

raptor3.position.set(-0.23, 0.15, 0)
raptor3.castShadow = true

const raptor4 = new Mesh(
  new CylinderGeometry(0.05, 0.1, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.raptors),
    wireframe: false,
  })
)

raptor4.position.set(0.01, 0.15, 0.23)
raptor4.castShadow = true

const raptor5 = new Mesh(
  new CylinderGeometry(0.05, 0.1, 0.1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.raptors),
    wireframe: false,
  })
)

raptor5.position.set(0.01, 0.15, -0.23)
raptor5.castShadow = true


const landing_leg = new Mesh(
  new CylinderGeometry(0.05, 0.2, 1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

landing_leg.position.set(0.01, 1, 0.3)
landing_leg.castShadow = true


const landing_leg2 = new Mesh(
  new CylinderGeometry(0.05, 0.2, 1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

landing_leg2.position.set(0.01, 1, -0.3)
landing_leg2.castShadow = true

const landing_leg3 = new Mesh(
  new CylinderGeometry(0.05, 0.2, 1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

landing_leg3.position.set(0.3, 1, 0)
landing_leg3.castShadow = true

const landing_leg4 = new Mesh(
  new CylinderGeometry(0.05, 0.2, 1, 12),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

landing_leg4.position.set(-0.3, 1, 0)
landing_leg4.castShadow = true


const side_details = new Mesh(
  new BoxGeometry(0.06, 3.5, 0.61),
  new MeshToonMaterial({
    color: new Color(PARAMS.landings),
    wireframe: false,
  })
)

side_details.position.set(0, 2, 0)
side_details.rotateY(150)
side_details.castShadow = true


const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

sphereCtrls.addInput(coif.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(coif.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(coif.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  coif.material.color = new Color(e.value)
})

sphereCtrls.addInput(coif.material, "wireframe")

scene.add(coif)
scene.add(coif_body)
scene.add(coif_top)
scene.add(coif_top_0)
scene.add(coif_top_1)
scene.add(rocket_body)
scene.add(rocket_engine)
scene.add(rocket_segment1)
scene.add(rocket_segment2)
scene.add(raptor1)
scene.add(raptor2)
scene.add(raptor3)
scene.add(raptor4)
scene.add(raptor5)
scene.add(landing_leg)
scene.add(landing_leg2)
scene.add(landing_leg3)
scene.add(landing_leg4)
scene.add(side_details)
scene.add(stabilizer)
scene.add(stabilizer2)
scene.add(stabilizer3)
scene.add(stabilizer4)


const plane = new Mesh(
  new PlaneGeometry(17, 17, 10, 10),
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
