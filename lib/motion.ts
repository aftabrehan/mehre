// Interaction feedback is quick; editorial entrances have a little more room.
export const motionTiming = {
  feedback: 0.18,
  change: 0.48,
  reveal: 0.9,
  entrance: 0.95,
  scrollSpring: { stiffness: 85, damping: 28, mass: 0.8, restDelta: 0.001 },
  ease: [0.22, 1, 0.36, 1] as const,
}
