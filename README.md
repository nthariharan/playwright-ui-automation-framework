# Playwright UI Automation Framework

A scalable UI Automation Framework built using Playwright and JavaScript for automating end-to-end workflows of an e-commerce web application.

The framework is designed following industry-standard automation practices with a focus on maintainability, reusability, and scalability. It currently automates core user journeys including account authentication, product browsing, cart management, and order placement.

---

## 🚀 Tech Stack

- Playwright
- JavaScript (ES6+)
- Node.js
- GitHub Actions (Planned)
- HTML Reports
- Page Object Model (POM)

---

## 📌 Application Under Test

The framework validates key e-commerce functionalities including:

- User Login
- Product Catalog Validation
- Cart Management
- Checkout Process
- Order Placement
- Order Confirmation

---

## 🏗 Framework Architecture

The framework follows the Page Object Model (POM) design pattern to improve maintainability and reduce code duplication.

```text
playwright-ui-automation-framework
│
├── pageObjects/
├── tests/
├── testData/ (planned)
├── utils/
├── fixtures/ (planned)
├── reports/
├── screenshots/
├── playwright.config.js
├── package.json
└── README.md

✅ Current Features
- Page Object Model implementation
- Reusable locators and actions
- Centralized configuration
- HTML reporting
- Screenshot capture on failures

🔄 Planned Enhancements
- Custom Playwright Fixtures
- Cross-browser execution support
- Data-driven approach
- Environment Configuration Support
- API Integration Testing
- Authentication State Management
- Retry Mechanism
- Parallel Execution Optimization
- CI/CD Pipeline Integration
- Allure Reporting
- Docker Execution Support

📂 Test Coverage
**User Management**
- Existing User Login
- Logout Validation

**Product Management**
- Browse Available Products
- Product Details Validation

**Cart Operations**
- Add Product to Cart
- Update Cart
- Remove Product from Cart

**Checkout**
- Order Placement
- Order Confirmation Validation

▶️ Installation

Clone the repository:
git clone https://github.com/nthariharan/playwright-ui-automation-framework.git

Navigate to the project folder:
cd playwright-ui-automation-framework

Install Playwright browsers:
npx playwright install

▶️ Execute Tests
Run all tests:
npx playwright test

Run a specific test:
npx playwright test tests/login.spec.js

Run in headed mode:
npx playwright test --headed

📊 Reports

Open Playwright HTML Report:
npx playwright show-report

