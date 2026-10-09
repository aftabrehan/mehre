// Interaction feedback is quick; editorial entrances have a little more room.
export const motionTiming = {
  feedback: 0.18,
  change: 0.36,
  reveal: 0.85,
  entrance: 1.1,
  scrollSpring: { stiffness: 110, damping: 30, restDelta: 0.001 },
  ease: [0.22, 1, 0.36, 1] as const,
}
