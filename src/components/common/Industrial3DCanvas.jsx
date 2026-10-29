import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Lightweight, subtle industrial 3D component
 * Renders an engineered metallic turbine/gear accent with smooth rotation and subtle mouse interaction.
 * Gracefully provides a fallback when WebGL or reduced-motion is active.
 */
export default function Industrial3DCanvas({ className = "w-full h-full min-h-[300px]" }) {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power'
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    // Industrial Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x123D8D, 2.5); // Brand Royal Blue light
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xF04438, 0.7); // Subtle Tomato Red accent light
    directionalLight2.position.set(-5, -5, -2);
    scene.add(directionalLight2);

    // Create Industrial Geometric Assembly (Metallic Turbine / Gear Rotor)
    const assemblyGroup = new THREE.Group();

    // Central core cylinder
    const coreGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.6, 32);
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x09275E,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, metalMaterial);
    coreMesh.rotation.x = Math.PI / 2;
    assemblyGroup.add(coreMesh);

    // Inner shaft ring
    const innerRingGeo = new THREE.TorusGeometry(1.2, 0.12, 16, 48);
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x94A3B8,
      metalness: 0.95,
      roughness: 0.15
    });
    const innerRing = new THREE.Mesh(innerRingGeo, chromeMaterial);
    assemblyGroup.add(innerRing);

    // Outer gear / turbine rotor blades
    const numBlades = 12;
    for (let i = 0; i < numBlades; i++) {
      const angle = (i / numBlades) * Math.PI * 2;
      const bladeGeo = new THREE.BoxGeometry(0.24, 0.85, 0.12);
      const bladeMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x123D8D : 0xCBD5E1,
        metalness: 0.75,
        roughness: 0.3
      });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(Math.cos(angle) * 1.7, Math.sin(angle) * 1.7, 0);
      blade.rotation.z = angle + Math.PI / 6;
      assemblyGroup.add(blade);
    }

    // Outer protective shroud ring (wireframe / technical blueprint look)
    const outerRingGeo = new THREE.TorusGeometry(2.35, 0.04, 8, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x123D8D,
      transparent: true,
      opacity: 0.5
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    assemblyGroup.add(outerRing);

    scene.add(assemblyGroup);

    // Subtle interactive mouse tracking
    let targetRotationX = 0.3;
    let targetRotationY = 0.4;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseX = x * 0.4;
      mouseY = y * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.008;

      // Smooth idle rotation
      assemblyGroup.rotation.z += 0.006;
      
      // Interpolate towards mouse position
      targetRotationX += (mouseY + 0.25 - targetRotationX) * 0.05;
      targetRotationY += (mouseX + 0.35 - targetRotationY) * 0.05;

      assemblyGroup.rotation.x = targetRotationX + Math.sin(time) * 0.08;
      assemblyGroup.rotation.y = targetRotationY + Math.cos(time) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl p-8 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#123D8D]/10 flex items-center justify-center text-[#123D8D]">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#64748B] font-semibold">Precision Engineering</p>
          <p className="text-sm font-bold text-[#172033] mt-1">Industrial Equipment Systems</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D industrial rotor model"
    />
  );
}
