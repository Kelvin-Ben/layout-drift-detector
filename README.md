# layout-drift-detector
A tool for detecting and monitoring ***layout drift*** in web applications. Layout drift occurs when UI components gradually shift, misalign, or break due to incremental changes in CSS, HTML, or external dependencies. This project aims to provide automated detection, reporting, and visualization of layout inconsistencies across versions and environments.

### 🚀 Features
- Automated Screenshot Comparison: Capture and compare UI snapshots across builds.

- DOM Structure Analysis: Detect unexpected changes in element hierarchy or attributes.

- CSS Drift Detection: Identify style regressions caused by cascading rules or overrides.

- Version Tracking: Monitor layout changes between commits, releases, or environments.

- Reporting Dashboard: Generate human‑readable reports highlighting drift severity.

### 📦 Installation
Clone the repository and install dependencies

```
git clone git@github.com:Kelvin-Ben/layout-drift-detector.git
cd layout-drift-detector
npm install
```

### 🛠 Usage
Run the detector against your project:
```
npm run detect -- --url=https://your-app.com --baseline=main
```
Options:
- --url : Target application URL

- --baseline : Branch or commit to compare against

- --output : Directory for reports

### 📂 Project Structure
```
layout-drift-detector/
├── src/              # Core detection logic
├── tests/            # Unit and integration tests
├── reports/          # Generated drift reports
├── examples/         # Sample usage and configs
└── README.md
```

### 🧪 Roadmap
- [ ] Add visual diffing with pixel‑by‑pixel comparison

- [ ] Integrate with CI/CD pipelines (GitHub Actions, Azure DevOps)

- [ ] Support multiple browsers (Chrome, Firefox, Edge)

- [ ] Provide drift severity scoring

### 🤝 Contributing
Cotributions are welcome! Please fork the repo and submit a pull request.
For major changes, open an issue first to discuss what you've like to add.

### 📜 License
MIT License – feel free to use, modify, and distribute.
