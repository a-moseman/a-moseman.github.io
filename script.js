function add_project(link, name, desc, tags) {
	let project_stack = document.getElementById('project_stack_items');

	let project = document.createElement("div");
	project.className = "project";

	// build project title
	let title = document.createElement("div");
	title.className = "project_title";
	let title_link = document.createElement("a");
	title_link.href = link;
	title_link.text = name;
	title.appendChild(title_link);
	project.appendChild(title);

	// build project content
	let project_content = document.createElement("div");
	project_content.className = "project_content";
	// build project description
	let description = document.createElement("div");
	description.className = "project_desc";
	description.textContent = desc;
	project_content.appendChild(description);
	// build project tags
	let project_tags = document.createElement("i");
	project_tags.className = "tags";
	project_tags.textContent = tags;
	project_content.appendChild(project_tags);

	project.appendChild(project_content);

	var flag = false;
	project.addEventListener("click", () => {
		if (!flag) {
			project_content.style.display = "block";
			flag = true;
		}
		else if (flag) {
			project_content.style.display = "none";
			flag = false;
		}
	})

	project_stack.appendChild(project);
}

function add_course(link, name, school, program, grade) {
	let course_stack = document.getElementById('course_stack_items');

	let course = document.createElement("div");
	course.className = "project";

	// build project title
	let title = document.createElement("div");
	title.className = "project_title";
	let title_link = document.createElement("a");
	title_link.href = link;
	title_link.text = name;
	title.appendChild(title_link);
	course.appendChild(title);

	// build project content
	let course_content = document.createElement("div");
	course_content.className = "project_content";

	let school_content = document.createElement("div");
	school_content.className = "project_desc";
	school_content.textContent = "School: " + school;
	course_content.appendChild(school_content);

	let program_content = document.createElement("div");
	program_content.className = "project_desc";
	program_content.textContent = "Program: " + program;
	course_content.appendChild(program_content);

	let grade_content = document.createElement("div");
	grade_content.className = "project_desc";
	grade_content.textContent = "Grade: " + grade;
	course_content.appendChild(grade_content);
	// build project tags
	/*
	let course_tags = document.createElement("i");
	course_tags.className = "tags";
	course_tags.textContent = tags;
	course_content.appendChild(course_tags);
	*/

	course.appendChild(course_content);

	var flag = false;
	course.addEventListener("click", () => {
		if (!flag) {
			course_content.style.display = "block";
			flag = true;
		}
		else if (flag) {
			course_content.style.display = "none";
			flag = false;
		}
	})

	course_stack.appendChild(course);
}


window.onload = () => {
	add_project("https://github.com/ShepherdCode/Soars2021",
				"mRNA vs. lncRNA Classification",
				"Worked with other students underneath professor supervision to apply machine learning to human RNA sequence classification from the GENCODE database. ",
				"Machine Learning, Python, Keras, NumPy, Convolutional Neural Networks");

	add_project("https://github.com/KeagenT/course-scraper",
				"Course Scraper",
				"Group project to scrape courses from Shepherd University's course catalog and display them as a prerequsite graph.",
				"JavaScript, Python, HTML, CSS, Scrapy, D3");

	add_project("https://github.com/a-moseman/GenerativeArt",
				"Generative Art",
				"A Java project for procedurally generating 2D graphics.",
				"Java, Procedural Generation");

	add_project("https://github.com/CIS485ChessEngineTeam/RLChessEngine",
				"Reinforcement Learning Chess Engine",
				"A Reinforcement Learning Chess Engine written in Java as my capstone project for my Bachelors of Science.",
				"Machine Learning, Java, Deeplearning4j, Convolutional Neural Neworks, Deep Q Networks");

	add_project("https://github.com/a-moseman/WaveFunctionCollapse",
				"WaveFunctionCollapse",
				"An implementation of the Wave Function Collapse algorithm.",
				"Java, AWT, Swing, Procedural Generation");

	add_project("https://github.com/a-moseman/PrimeProject",
				"PrimeProject",
				"A Java 17 program for generating prime numbers.",
				"Java, SQLite, Jooq, JUnit, Multithreading");

	add_project("https://github.com/a-moseman/ConfigurationManagementDatabase/tree/v.3.3.0",
				"Configuration Management Database",
				"A Java implementation of a Configuration Management Database which supports Redis or MongoDB as the underlying database, built using the Dropwizard framework.",
				"Java, Dropwizard, Redis, MongoDB, JUnit, RESTful API, Unit testing");

	add_project("https://github.com/a-moseman/CertificateAuthority",
				"Certificate Authority",
				"A work-in-progress Java implementation of a Certificate Authority, built using Spring Boot.",
				"Java, Spring Boot, X.509, PKI, RESTful API");

	add_project("https://github.com/a-moseman/TagSystem",
				"TagSystem",
				"A service that provides for the organization of the entities of dependent services using tags. Tags support inheritance.",
				"Java, Dropwizard, Bouncycastle, JUnit, Jooq, SQLite, REST API");

	add_course("TODO", "CS 530 - Mathematical Foundations of CS", "George Mason University", "Master's of Computer Science", "A-");
	add_course("TODO", "CS 531 - Computer Systems and System Program", "George Mason University", "Master's of Computer Science", "A");
	add_course("TODO", "CS 580 - Intro Artificial Intelligence", "George Mason University", "Master's of Computer Science", "A+");
}
