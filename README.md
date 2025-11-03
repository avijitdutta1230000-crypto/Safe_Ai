# Safe AI Lab: An Interactive Educational Platform for Demystifying AI Safety Challenges

This repository implements the platform described in our IEEE paper: [Link to paper PDF or arXiv].

## Overview
- **Purpose**: Interactive simulations for AI alignment trade-offs (inspired by Milli`ere 2025).
- **Tech Stack**: Vue.js (frontend), JavaScript (client-side sims), Python (evals).
- **Key Features**: Norm weight controls, ethics blog, scenario explorer, forum.

## Quick Start
### Platform (Vue.js)
1. Install deps: `npm install`
2. Run dev server: `npm run serve`
3. Open http://localhost:8080

### Simulations (Python)
1. Install deps: `pip install -r requirements.txt`
2. Run evals: `python simulations/simulate_results.py`
3. View: Generates `results.csv` + figures for Table I.

## Reproducibility
- Run `simulate_results.py` with seed=42 for exact paper results (Unsafe Rate: 0.085 for (0.6,0.2,0.2), etc.).
- Dataset: `data/prompts.csv` (400 prompts).
- Figures: Auto-generated in `simulations/figures/`.

## Structure
- `src/`: Vue components.
- `simulations/`: Python evals.
- `docs/`: Paper LaTeX + PDF.

## Citation
@article{dutta2025safe,
  title={Safe AI Lab: An Interactive Educational Platform for Demystifying AI Safety Challenges},
  author={Dutta, Avijit and Mayur, Shresth},
  journal={IEEE Conference Proceedings},
  year={2025}
}

## License
MIT – Free to use/fork.

Questions? Email avijit.dutta2023@vitstudent.ac.in
