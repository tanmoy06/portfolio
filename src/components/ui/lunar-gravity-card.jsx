import React, { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const RADIUS = 2.0;

// Helper: Generates a procedural photorealistic moon surface texture locally (0 network requests, 0 CORS errors)
function createProceduralMoonTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();

  // Base lunar surface color
  ctx.fillStyle = "#8a8d91";
  ctx.fillRect(0, 0, 1024, 512);

  // Darker maria (lunar seas)
  const mariaGradients = [
    { x: 300, y: 200, r: 180, color: "rgba(90, 95, 100, 0.45)" },
    { x: 450, y: 160, r: 140, color: "rgba(80, 85, 90, 0.4)" },
    { x: 700, y: 280, r: 160, color: "rgba(85, 90, 95, 0.35)" },
    { x: 200, y: 350, r: 120, color: "rgba(95, 100, 105, 0.4)" },
    { x: 850, y: 180, r: 130, color: "rgba(90, 95, 100, 0.35)" },
  ];

  mariaGradients.forEach((m) => {
    const radGrad = ctx.createRadialGradient(m.x, m.y, 10, m.x, m.y, m.r);
    radGrad.addColorStop(0, m.color);
    radGrad.addColorStop(0.7, m.color);
    radGrad.addColorStop(1, "rgba(138, 141, 145, 0)");
    ctx.fillStyle = radGrad;
    ctx.beginPath();
    ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Micro craters and surface noise
  const numCraters = 600;
  for (let i = 0; i < numCraters; i++) {
    const cx = Math.random() * 1024;
    const cy = Math.random() * 512;
    const cr = 1.5 + Math.pow(Math.random(), 3) * 22;

    // Crater rim highlight
    ctx.fillStyle = "rgba(230, 235, 240, 0.25)";
    ctx.beginPath();
    ctx.arc(cx - 0.5, cy - 0.5, cr, 0, Math.PI * 2);
    ctx.fill();

    // Crater shadow core
    ctx.fillStyle = "rgba(40, 45, 50, 0.35)";
    ctx.beginPath();
    ctx.arc(cx + 0.5, cy + 0.5, cr * 0.85, 0, Math.PI * 2);
    ctx.fill();
  }

  // Micro fine noise speckles
  const imgData = ctx.getImageData(0, 0, 1024, 512);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 22;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

const RealisticMoon = ({ onClick }) => {
  const meshRef = useRef(null);

  const moonTexture = useMemo(() => {
    if (typeof document !== "undefined") {
      return createProceduralMoonTexture();
    }
    return null;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.04;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow onClick={onClick}>
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshStandardMaterial
        map={moonTexture || undefined}
        bumpMap={moonTexture || undefined}
        bumpScale={0.03}
        roughness={0.8}
        metalness={0.1}
        color="#d4d4d8"
      />
    </mesh>
  );
};

const particlesCount = 25000;
const [ringPositions, ringColors] = (() => {
  const pos = new Float32Array(particlesCount * 3);
  const col = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const rDist = Math.pow(Math.random(), 1.4);
    const radius = 2.3 + rDist * 2.5;

    const thickness = 0.35 - rDist * 0.15;
    const ySpread = (Math.random() + Math.random() - 1) * thickness;

    pos[i * 3] = Math.cos(angle) * radius;
    pos[i * 3 + 1] = ySpread;
    pos[i * 3 + 2] = Math.sin(angle) * radius;

    const pType = Math.random();
    let r = 0.8, g = 0.85, b = 0.9; // Silver/Ice White
    if (pType > 0.85) {
      r = 0.2; g = 0.75; b = 1.0; // Cyan
    } else if (pType > 0.7) {
      r = 0.6; g = 0.4; b = 0.95; // Soft Violet
    }

    col[i * 3] = r;
    col[i * 3 + 1] = g;
    col[i * 3 + 2] = b;
  }
  return [pos, col];
})();

const ParticleRing = ({ ringState }) => {
  const pointsRef = useRef(null);
  const opacityRef = useRef(0);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y -= delta * 0.03;

    if (ringState === "animating" || ringState === "visible") {
      opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, 0.9, delta * 1.5);
    } else {
      opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, 0, delta * 3);
    }

    if (pointsRef.current.material) {
      pointsRef.current.material.opacity = opacityRef.current;
      pointsRef.current.visible = opacityRef.current > 0.01;
    }
  });

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2.2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={ringPositions}
          itemSize={3}
          args={[ringPositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={ringColors}
          itemSize={3}
          args={[ringColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.014}
        vertexColors
        transparent
        opacity={0}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const generateAsteroids = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const baseRadius = 2.6 + Math.random() * 2.2;
    const angle = Math.random() * Math.PI * 2;
    const speed = (0.05 + Math.random() * 0.06) * (Math.random() > 0.5 ? 1 : -1);
    const scale = 0.025 + Math.pow(Math.random(), 3) * 0.09;
    const zOffset = (Math.random() - 0.5) * 0.6;

    data.push({
      angle,
      baseRadius,
      speed,
      scale,
      zOffset,
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      rs: (Math.random() - 0.5) * 0.05,
    });
  }
  return data;
};

const AsteroidBelt = ({ ringState }) => {
  const meshRef = useRef(null);
  const count = 45;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const [asteroids] = useState(() => generateAsteroids(count));
  const scaleRef = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const targetScale = ringState === "hidden" ? 0 : 1;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * 2);

    if (scaleRef.current < 0.01) {
      meshRef.current.visible = false;
      return;
    }
    meshRef.current.visible = true;

    asteroids.forEach((ast, i) => {
      ast.angle += ast.speed * delta;
      ast.rx += ast.rs;
      ast.ry += ast.rs;

      const x = Math.cos(ast.angle) * ast.baseRadius;
      const y = Math.sin(ast.angle) * ast.baseRadius;

      dummy.position.set(x, y, ast.zOffset);
      dummy.rotation.set(ast.rx, ast.ry, 0);
      dummy.scale.setScalar(ast.scale * scaleRef.current);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#a1a1aa" roughness={0.8} metalness={0.1} />
    </instancedMesh>
  );
};

// Error Boundary for WebGL 3D Canvas
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center p-6 text-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-200 shadow-2xl animate-pulse" />
        </div>
      );
    }
    return this.props.children;
  }
}

export function LunarGravityCard({
  className,
  badge,
  title = (
    <>
      <span className="text-zinc-50 drop-shadow-sm">Tanmoy</span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 drop-shadow-md">
        Sarkar.
      </span>
    </>
  ),
  description = "Computer Science Engineer building cross-platform mobile systems with Flutter, scalable backends with Firebase & MongoDB, and exploring AI/ML algorithms.",
  children,
}) {
  const [ringState, setRingState] = useState("hidden");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMoonClick = useCallback(() => {
    setRingState((prev) => (prev === "hidden" ? "visible" : prev));
  }, []);

  return (
    <div
      className={cn(
        "w-full max-w-6xl min-h-[540px] md:min-h-[500px] flex flex-col md:flex-row relative items-center justify-between",
        className
      )}
    >
      {/* Content Side */}
      <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col justify-center py-4 md:py-8 relative z-20 pointer-events-none">
        {badge && <div className="pointer-events-auto mb-4">{badge}</div>}
        <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] sm:leading-[1.05] mb-5 select-none">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-[420px] mb-7">
          {description}
        </p>
        {children && <div className="pointer-events-auto">{children}</div>}
      </div>

      {/* 3D Canvas Side */}
      <div className="relative md:absolute md:right-0 md:top-0 w-full h-[380px] sm:h-[460px] md:h-full md:w-[55%] pointer-events-auto z-10 flex items-center justify-center cursor-grab active:cursor-grabbing">
        {isClient ? (
          <div className="absolute inset-0 w-full h-full">
            <CanvasErrorBoundary>
              <Canvas
                shadows
                camera={{ position: [0, 3.2, 9.2], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
              >
                <ambientLight intensity={0.35} />
                <directionalLight
                  position={[8, 6, 5]}
                  intensity={2.4}
                  color="#ffffff"
                  castShadow
                />
                <directionalLight position={[-5, -3, -5]} intensity={0.45} color="#38bdf8" />
                <pointLight position={[0, 0, 6]} intensity={0.4} color="#ffffff" />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />

                <group rotation={[Math.PI / 8, 0, 0]}>
                  <RealisticMoon onClick={handleMoonClick} />
                  <ParticleRing ringState={ringState} />
                  <AsteroidBelt ringState={ringState} />
                </group>
              </Canvas>
            </CanvasErrorBoundary>
          </div>
        ) : (
          <div className="w-48 h-48 rounded-full bg-zinc-800/40 animate-pulse" />
        )}

        {/* Orbit hint */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 pointer-events-none text-[11px] font-mono text-zinc-400 bg-zinc-950/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          {ringState === "hidden" ? "✦ Click 3D Moon to trigger Asteroid Rings" : "✦ Gravity Rings Active"}
        </div>
      </div>
    </div>
  );
}

export default LunarGravityCard;
export { LunarGravityCard as Component };
