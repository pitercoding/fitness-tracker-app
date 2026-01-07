<h1 align="center"> <img src="frontend/public/images/logo-light.png" alt="Logo Fitness Tracker" width="40" style="vertical-align: middle; margin-right: 10px;"> Fitness Tracker </h1>

<p align="center">
  🌎 <strong>Languages:</strong><br>
  <a href="README.pt.md">🇧🇷 Portuguese</a> |
  <a href="README.md">🇺🇸 English</a>
</p>

**Fitness Tracker** is a full-stack application designed to **track workouts, activities, and personal goals**. Users can log workouts and activities, set goals, and visualize statistics and progress through dynamic charts.

The application includes **full CRUD operations**, **form validations**, and seamless **frontend-backend integration** with REST APIs.

## 🚀 How to Access the Project

You can run the project locally. Steps:

1. Clone the repository:
```bash
git clone https://github.com/pitercoding/fitness-tracker-app.git
cd fitness-tracker
```
2. Backend:
```bash
cd backend
./mvnw spring-boot:run
```
3. Frontend:
```bash
cd frontend
npm install
ng serve
```
* Open http://localhost:4200
 in your browser.

## 🏆 Motivation

This project was created to **practice full-stack development** by building a realistic fitness tracking system.

It allowed me to apply concepts in **Angular, TypeScript, Chart.js, Ng Zorro UI, Spring Boot, REST APIs, and deployment practices**.

## 📚 Learning Points

During development, I strengthened skills in:

* **Frontend:** Angular, TypeScript, SCSS, Ng Zorro components, responsive layouts, charts, reactive forms, routing, HTTP services.

* **Backend:** Spring Boot, REST APIs, centralized exception handling, CRUD operations.

* **Database:** MySQL for storing workouts, activities, and goals.

* **Testing & Validation:** Form validations, API testing.

* **Charts & Analytics:** Dynamic statistics visualization with Chart.js.

## 🧱 Application Structure
| Layer      | Technology           | Main Function                                              |
| ---------- | ------------------- | ---------------------------------------------------------- |
| Frontend   | Angular + TypeScript | UI for logging workouts, activities, and goals with charts |
| Backend    | Spring Boot          | REST API with validation, CRUD, and statistics            |
| Database   | MySQL                | Stores workouts, activities, goals                         |
| Deployment | Local / _Production_        | _In Progress_               |

## ⚙️ Technologies & Tools

### Frontend (Angular)
- Angular 20+
- Ng Zorro Ant Design components
- SCSS / CSS3
- Chart.js for dynamic charts
- Reactive forms with validation
- Routing & standalone components

### Backend (Spring Boot)
- Spring Boot 3+
- REST APIs for workouts, activities, goals, and stats
- Validation and centralized exception handling
- Service and repository layers

### Database
- MySQL
- Tables for Workouts, Activities, Goals, and Stats

### Deployment
- Local setup for development
- Production (In progress)

## 🖼️ Screenshots & Visuals

### Dashboard
- Shows total calories, steps, distance, time spent, and goals
- Visualizes recent workouts and activities with line charts

![Dashboard view](frontend/public/images/dashboard.png)

### Workouts & Activities
- Forms to log workouts and activities
- Lists of past entries with edit/update functionality

![Workout view](frontend/public/images/workout.png)
![Activity view](frontend/public/images/activity.png)

### Goals
- Form to post new goals with start/end dates
- Lists of past goals with ability to mark as achieved

![Goal view](frontend/public/images/goal.png)

## 🧭 Application Flow
```text
User → Frontend (Angular)
↓
REST API (Spring Boot, Validation, CRUD)
↓
Database (MySQL)
↑
(Backend processes requests and returns results)
```

## ✅ Current Status

| Area        | Status         | Description                                      |
|------------ |:-------------: |-------------------------------------------------|
| Backend     | ✅ Completed   | CRUD, validation, stats APIs                     |
| Frontend    | ✅ Completed   | Logging workouts/activities/goals, dashboard    |
| Integration | ✅ Tested      | Frontend ↔ Backend communication via HTTP       |
| Database    | ✅ Operational | Connected and synchronized                       |
| Charts      | ✅ Implemented | Dynamic line charts for workouts and activities |

## 📂 Folder Structure
```bash
fitness-tracker/
├─ backend/
│  ├─ src/main/java/com/fitness/backend/
│  │  ├─ controller/        # REST controllers
│  │  ├─ dto/               # Data Transfer Objects
│  │  ├─ entity/            # JPA Entities
│  │  ├─ repository/        # Spring Data JPA repositories
│  │  ├─ service/           # Business logic services
│  │  └─ BackendApplication.java
├─ frontend/
│  ├─ src/app/
│  │  ├─ components/        # Workouts, Activities, Goals, Dashboard
│  │  ├─ services/          # UserService and API communication
│  │  ├─ shared/            # Shared modules
│  │  ├─ app.routes.ts      # Routing configuration
│  │  └─ main app files
│  ├─ public/images/        # Logo and other screenshots
│  └─ environments/         # Environment configs
├─ .gitignore
├─ README.md
└─ LICENSE
```

## 📜 License

This project is licensed under the **MIT License** — free to use, study, and modify.

## 🧑‍💻 Author

**Piter Gomes** — Computer Science Student (5th Semester) & Full-Stack Developer  

📧 [Email](mailto:piterg.bio@gmail.com) | 💼 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | 💻 [GitHub](https://github.com/pitercoding) | 🌐 [Portfolio](https://portfolio-pitergomes.vercel.app/)
