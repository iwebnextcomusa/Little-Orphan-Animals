import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Heart, Move, Compass, Star } from "lucide-react";

export default function InteractiveSanctuary3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [interactionMode, setInteractionMode] = useState<"orbit" | "tilt">("tilt");
  const [message, setMessage] = useState("Hover over the meadow and scroll the page to interact with the sanctuary.");

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background for integration

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Renderer with high performance settings
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 25;
    dirLight.shadow.camera.left = -6;
    dirLight.shadow.camera.right = 6;
    dirLight.shadow.camera.top = 6;
    dirLight.shadow.camera.bottom = -6;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Point Light for a warm glowing effect on the heart
    const pointLight = new THREE.PointLight(0xff4b72, 1.5, 8);
    pointLight.position.set(0, 1.5, 0);
    scene.add(pointLight);

    // 1. Grassy Meadow (Sanctuary Base)
    const baseGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.6, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x4d7c0f, // Green pasture
      roughness: 0.8,
      metalness: 0.1,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.3;
    baseMesh.receiveShadow = true;
    scene.add(baseMesh);

    // Earth rim below pasture
    const rimGeo = new THREE.CylinderGeometry(4.4, 4.5, 0.3, 32);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x78350f, // Warm soil brown
      roughness: 0.9,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    rimMesh.position.y = -0.75;
    scene.add(rimMesh);

    // Group for objects to rotate/tilt together
    const sanctuaryGroup = new THREE.Group();
    scene.add(sanctuaryGroup);

    // 2. Extruded 3D Heart (The Heart of Nancy's Sanctuary)
    const heartShape = new THREE.Shape();
    // Heart shape drawing path
    heartShape.moveTo(0, 0.5);
    heartShape.bezierCurveTo(0.5, 1.2, 1.5, 1.2, 1.5, 0.4);
    heartShape.bezierCurveTo(1.5, -0.4, 0.5, -1.0, 0, -1.4);
    heartShape.bezierCurveTo(-0.5, -1.0, -1.5, -0.4, -1.5, 0.4);
    heartShape.bezierCurveTo(-1.5, 1.2, -0.5, 1.2, 0, 0.5);

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    heartGeo.center();
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48, // Rose red
      roughness: 0.3,
      metalness: 0.4,
    });
    const heartMesh = new THREE.Mesh(heartGeo, heartMat);
    heartMesh.position.set(0, 1.5, 0);
    heartMesh.castShadow = true;
    heartMesh.receiveShadow = true;
    sanctuaryGroup.add(heartMesh);

    // 3. Paw Print Model (Stylized 3D Spheres representing paw pad)
    const pawGroup = new THREE.Group();
    pawGroup.position.set(1.8, 0.2, 1.5);
    
    // Main pad
    const mainPadGeo = new THREE.SphereGeometry(0.4, 16, 16);
    mainPadGeo.scale(1, 0.4, 1.2);
    const pawMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Amber paw
      roughness: 0.5,
    });
    const mainPad = new THREE.Mesh(mainPadGeo, pawMat);
    mainPad.castShadow = true;
    pawGroup.add(mainPad);

    // 4 Toes
    const toeGeo = new THREE.SphereGeometry(0.18, 12, 12);
    toeGeo.scale(1, 0.5, 1);
    
    const toePositions = [
      [-0.25, 0, 0.45],
      [-0.1, 0, 0.55],
      [0.1, 0, 0.55],
      [0.25, 0, 0.45],
    ];

    toePositions.forEach(([tx, ty, tz]) => {
      const toe = new THREE.Mesh(toeGeo, pawMat);
      toe.position.set(tx, ty, tz);
      toe.castShadow = true;
      pawGroup.add(toe);
    });

    sanctuaryGroup.add(pawGroup);

    // 4. Low Poly Sanctuary Trees
    const treeGroup1 = new THREE.Group();
    treeGroup1.position.set(-2.2, 0, -1.8);
    
    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.8, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
    const trunk1 = new THREE.Mesh(trunkGeo, trunkMat);
    trunk1.position.y = 0.4;
    trunk1.castShadow = true;
    treeGroup1.add(trunk1);

    const foliageGeo = new THREE.ConeGeometry(0.6, 1.3, 5);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const leaves1 = new THREE.Mesh(foliageGeo, foliageMat);
    leaves1.position.y = 1.25;
    leaves1.castShadow = true;
    treeGroup1.add(leaves1);
    sanctuaryGroup.add(treeGroup1);

    // Tree 2
    const treeGroup2 = new THREE.Group();
    treeGroup2.position.set(-1.4, 0, -2.4);
    
    const trunk2 = new THREE.Mesh(trunkGeo, trunkMat);
    trunk2.position.y = 0.3;
    trunk2.scale.set(0.8, 0.8, 0.8);
    trunk2.castShadow = true;
    treeGroup2.add(trunk2);

    const foliage2 = new THREE.Mesh(foliageGeo, foliageMat);
    foliage2.position.y = 0.95;
    foliage2.scale.set(0.8, 0.8, 0.8);
    foliage2.castShadow = true;
    treeGroup2.add(foliage2);
    sanctuaryGroup.add(treeGroup2);

    // Tree 3 (Autumn colored tree)
    const treeGroup3 = new THREE.Group();
    treeGroup3.position.set(2.4, 0, -2.0);
    
    const trunk3 = new THREE.Mesh(trunkGeo, trunkMat);
    trunk3.position.y = 0.4;
    trunk3.castShadow = true;
    treeGroup3.add(trunk3);

    const foliageGeoAutumn = new THREE.ConeGeometry(0.7, 1.4, 6);
    const foliageMatAutumn = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.9 }); // Amber tree
    const leaves3 = new THREE.Mesh(foliageGeoAutumn, foliageMatAutumn);
    leaves3.position.y = 1.3;
    leaves3.castShadow = true;
    treeGroup3.add(leaves3);
    sanctuaryGroup.add(treeGroup3);

    // Mouse Tracking State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Map to normalized device coordinates (-1 to +1)
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Tracking State
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse coordinates (Lerp)
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      // Base rotation
      if (isRotating) {
        sanctuaryGroup.rotation.y = elapsedTime * 0.25;
      }

      // Scroll-triggered animations
      // Rotates the group on Y based on page scroll, adding extra dynamic touch
      const scrollYRotation = scrollYOffset * 0.0015;
      baseMesh.rotation.y = scrollYRotation;
      rimMesh.rotation.y = scrollYRotation;

      if (interactionMode === "tilt") {
        // Lean the central heart and trees towards the mouse cursor
        sanctuaryGroup.rotation.z = -targetX * 0.25;
        sanctuaryGroup.rotation.x = -targetY * 0.25;
        
        // Add subtle bounce to heart
        heartMesh.position.y = 1.5 + Math.sin(elapsedTime * 2) * 0.08;
      } else {
        // Orbit the camera slightly based on mouse
        camera.position.x = targetX * 4;
        camera.position.y = 5 + targetY * 2;
        camera.lookAt(0, 0, 0);
      }

      // Gentle wobble for the paw and foliage
      pawGroup.position.y = 0.2 + Math.abs(Math.sin(elapsedTime * 1.5)) * 0.04;
      leaves1.rotation.y = Math.sin(elapsedTime * 0.8) * 0.05;
      leaves3.rotation.y = Math.cos(elapsedTime * 0.7) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // ResizeObserver to handle container scaling securely
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        
        // Update width & height
        width = entryWidth;
        height = entryHeight || 400;

        // Update camera and renderer
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      // Dispose materials & geometries
      baseGeo.dispose();
      baseMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      heartGeo.dispose();
      heartMat.dispose();
      mainPadGeo.dispose();
      pawMat.dispose();
      toeGeo.dispose();
      trunkGeo.dispose();
      trunkMat.dispose();
      foliageGeo.dispose();
      foliageMat.dispose();
      foliageGeoAutumn.dispose();
      foliageMatAutumn.dispose();
      
      renderer.dispose();
    };
  }, [isRotating, interactionMode]);

  return (
    <div className="relative w-full h-[450px] bg-gradient-to-b from-[#f3f0e8] to-[#e7e1d3] dark:from-[#211f1d] dark:to-[#171513] rounded-3xl overflow-hidden shadow-inner p-6 flex flex-col md:flex-row items-center justify-between border border-emerald-900/10 dark:border-white/5">
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full md:w-3/5 h-[300px] md:h-full cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" id="canvas-3d" />
      </div>

      {/* Control Panel */}
      <div className="w-full md:w-2/5 md:pl-6 mt-4 md:mt-0 flex flex-col justify-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase w-max">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Interactive 3D Sanctuary</span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-white font-bold leading-tight">
          Explore Our Haven of Peace
        </h3>
        
        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
          The heart represents Nancy Nenad's vision: a safe space of healing. The trees show our wooded pastures, and the paw-print represents the hundreds of animal orphans who find peaceful dignity here.
        </p>

        {/* 3D Scene Controls */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            id="btn-3d-rotate"
            className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
              isRotating
                ? "bg-emerald-700 border-emerald-700 text-white shadow-md shadow-emerald-700/20"
                : "bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50"
            }`}
          >
            <Compass className={`w-4 h-4 ${isRotating ? "animate-spin" : ""}`} />
            <span>{isRotating ? "Auto Spinning" : "Static Object"}</span>
          </button>

          <button
            onClick={() => setInteractionMode(interactionMode === "tilt" ? "orbit" : "tilt")}
            id="btn-3d-mode"
            className="flex items-center justify-center space-x-2 px-3 py-2 rounded-xl text-xs font-medium bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-all"
          >
            <Move className="w-4 h-4" />
            <span className="capitalize">{interactionMode === "tilt" ? "Tilt Mesh" : "Orbit Cam"}</span>
          </button>
        </div>

        <div className="bg-[#fcfbf9]/60 dark:bg-stone-900/40 p-3 rounded-xl border border-stone-100 dark:border-stone-800/50">
          <p className="text-xs text-stone-500 dark:text-stone-400 italic">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
