// Multi-Objective Norm Optimization (Equation 1)
export function computeUtility(H, O, L, wH=0.6, wO=0.2, wL=0.2) {
  return wH * H + wO * O + wL * L;
}

// Simulate scores (Beta dist via approx)
export function generateScores(n=400, seed=42) {
  // Simple uniform approx for demo; replace with full Beta if needed
  return {
    H: Array.from({length: n}, () => Math.random() * 0.4 + 0.6), // ~mean 0.8
    O: Array.from({length: n}, () => Math.random() * 0.4 + 0.5), // ~0.7
    L: Array.from({length: n}, () => Math.random() * 0.4 + 0.4)  // ~0.6
  };
}

// Unsafe check
export function unsafeRate(scores) {
  return scores.H.filter(h => h < 0.5).length / scores.H.length;
}
