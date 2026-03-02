import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { useEffect } from "react";

export function Bubble({ skill, mouseX, mouseY, index }: { skill: any, mouseX: any, mouseY: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    // Base floating animation
    const floatY = [0, -15, 0, 15, 0];
    const floatX = [0, 15, 0, -15, 0];
    const duration = 4 + (index % 3) * 2;
    const delay = index * 0.2;

    // Repulsion effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 10 });
    const springY = useSpring(y, { stiffness: 100, damping: 10 });

    useEffect(() => {
        const handleMouseMove = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = mouseX.get() - centerX;
            const distanceY = mouseY.get() - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            const repulsionRadius = 200;
            if (distance < repulsionRadius && distance > 0) {
                const force = (repulsionRadius - distance) / repulsionRadius;
                x.set(-distanceX * force * 0.6);
                y.set(-distanceY * force * 0.6);   
            } else {
                x.set(0);
                y.set(0);
            }
        };

        const unsubscribeX = mouseX.on("change", handleMouseMove);
        const unsubscribeY = mouseY.on("change", handleMouseMove);

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [mouseX, mouseY, x, y]);

    const Icon = skill.icon || null;

    // Varying sizes
    const sizeClass = index < 5 ? 'w-36 h-36 md:w-40 md:h-40' : 'w-28 h-28 md:w-32 md:h-32'
    const iconSize = index < 5 ? 40 : 28

    return (
        // Outer: floating animation (keyframes)
        <motion.div
            animate={{ x: floatX, y: floatY }}
            transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        >
            {/* Inner: repulsion spring + visual bubble */}
            <motion.div
                ref={ref}
                style={{ x: springX, y: springY }}
                className={`relative flex flex-col items-center justify-center rounded-full ${sizeClass} bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_4px_20px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_4px_20px_rgba(255,255,255,0.1)] cursor-pointer group`}
            >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

                <Icon size={iconSize} className="text-slate-700 dark:text-slate-200 group-hover:text-teal-500 transition-colors duration-300 mb-2 relative z-10" />

                <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-white text-center px-2 relative z-10 leading-tight">
                    {skill.name}
                </span>
            </motion.div>
        </motion.div>
    );
}