const translations = {
	en: {
		intro: {
			paragraph:
				'Experienced backend developer specializing in high-performance systems and robust security solutions. Passionate about scalable architectures and clean code.',
		},
		about: {
			title: 'About Me',
			cards: [
				{
					icon: 'fa-solid fa-shield-halved',
					title: 'Security',
					points: [
						'Design and implementation of secure system architectures',
						'Applying OWASP best practices to minimize vulnerabilities',
						'Data encryption and secure communication protocols',
						'Regular security audits and penetration testing',
					],
				},
				{
					icon: 'fa-solid fa-bolt',
					title: 'Performance',
					points: [
						'Building optimized and scalable APIs',
						'Efficient database querying and caching strategies',
						'Profiling and reducing server response times',
						'Load balancing and resource management',
					],
				},
				{
					icon: 'fa-solid fa-cogs',
					title: 'Automation',
					points: [
						'Developing custom automation tools and scripts',
						'CI/CD pipeline setup and maintenance',
						'Automated testing and deployment processes',
						'Workflow optimizations for faster delivery',
					],
				},
				{
					icon: 'fa-solid fa-users',
					title: 'Collaboration',
					points: [
						'Effective teamwork and code reviews',
						'Clear documentation and knowledge sharing',
						'Agile methodologies and sprint planning',
						'Mentoring junior developers',
					],
				},
			],
		},
		stack: {
			title: 'What I Do',
			cards: [
				{
					icon: 'fa-solid fa-robot',
					title: 'Bots',
					points: [
						'Telegram bots for various automation tasks',
						'Chatbots with AI integration',
						'Custom command and event handling',
						'Monitoring and analytics for bot performance',
					],
				},
				{
					icon: 'fa-solid fa-gears',
					title: 'Custom Solutions',
					points: [
						'Tailored backend systems to client needs',
						'Internal tooling for business process automation',
						'API development and integration',
						'Modular and maintainable codebases',
					],
				},
				{
					icon: 'fa-solid fa-database',
					title: 'Databases',
					points: [
						'Relational and NoSQL database design',
						'Optimizing queries and indexing',
						'Data migration and backup strategies',
						'Ensuring data consistency and reliability',
					],
				},
				{
					icon: 'fa-solid fa-cloud-arrow-up',
					title: 'Cloud Services',
					points: [
						'Deployment on AWS, Azure, or Google Cloud',
						'Serverless computing and microservices',
						'Scalable storage solutions',
						'Cloud monitoring and cost optimization',
					],
				},
			],
		},
		tech: {
			title: 'Tech Stack',
			cards: [
				{
					icon: 'fa-brands fa-node-js',
					title: 'Node.js',
					points: [
						'Frameworks: Express, Fastify, NestJS',
						'RESTful API development',
						'WebSocket and real-time communication',
						'Performance tuning and profiling',
					],
				},
				{
					icon: 'fa-solid fa-cloud',
					title: 'DevOps',
					points: [
						'Containerization with Docker',
						'CI/CD pipelines using GitHub Actions, Jenkins',
						'Infrastructure as Code (Terraform, Ansible)',
						'Monitoring tools like Prometheus and Grafana',
					],
				},
				{
					icon: 'fa-brands fa-docker',
					title: 'Containerization',
					points: [
						'Creating and managing Docker images',
						'Orchestration with Kubernetes',
						'Automating deployments with Helm charts',
						'Ensuring scalability and high availability',
					],
				},
				{
					icon: 'fa-solid fa-lock',
					title: 'Security Tools',
					points: [
						'Implementing OAuth2 and JWT',
						'Vulnerability scanning and patch management',
						'SSL/TLS certificate management',
						'Secure coding practices and code audits',
					],
				},
			],
		},
	},

	ru: {
		intro: {
			paragraph:
				'Опытный бэкенд-разработчик. Высокая производительность, безопасность, масштабируемость.',
		},
		about: {
			title: 'Обо мне',
			cards: [
				{
					icon: 'fa-solid fa-shield-halved',
					title: 'Безопасность',
					points: [
						'Безопасная архитектура систем',
						'Практики OWASP',
						'Шифрование и протоколы',
						'Аудит и тестирование',
					],
				},
				{
					icon: 'fa-solid fa-bolt',
					title: 'Производительность',
					points: [
						'Оптимизация API',
						'Быстрые запросы и кэш',
						'Профилирование сервера',
						'Управление нагрузкой',
					],
				},
				{
					icon: 'fa-solid fa-cogs',
					title: 'Автоматизация',
					points: [
						'CI/CD пайплайны',
						'Автотесты и деплой',
						'Скрипты и инструменты',
						'Оптимизация процессов',
					],
				},
				{
					icon: 'fa-solid fa-users',
					title: 'Командная работа',
					points: [
						'Код-ревью и обсуждение',
						'Документация и обмен',
						'Гибкое планирование',
						'Поддержка команды',
					],
				},
			],
		},
		stack: {
			title: 'Чем я занимаюсь',
			cards: [
				{
					icon: 'fa-solid fa-robot',
					title: 'Боты',
					points: [
						'Telegram-боты под задачи',
						'ИИ и чат-боты',
						'Команды и логика',
						'Мониторинг и метрики',
					],
				},
				{
					icon: 'fa-solid fa-gears',
					title: 'Кастомные решения',
					points: [
						'Под задачи клиента',
						'Инструменты для бизнеса',
						'Интеграция API',
						'Модульный код',
					],
				},
				{
					icon: 'fa-solid fa-database',
					title: 'Базы данных',
					points: [
						'SQL и NoSQL',
						'Оптимизация и кэш',
						'Бэкапы и миграции',
						'Надёжность данных',
					],
				},
				{
					icon: 'fa-solid fa-cloud-arrow-up',
					title: 'Облачные сервисы',
					points: [
						'Развёртывание в облаке',
						'Серверлес и микросервисы',
						'Масштабируемое хранение',
						'Мониторинг и биллинг',
					],
				},
			],
		},
		tech: {
			title: 'Стек технологий',
			cards: [
				{
					icon: 'fa-brands fa-node-js',
					title: 'Node.js',
					points: [
						'Express, Fastify, NestJS',
						'REST API и WebSocket',
						'Профилирование и отладка',
						'Чистый код',
					],
				},
				{
					icon: 'fa-solid fa-cloud',
					title: 'DevOps',
					points: [
						'Docker и контейнеры',
						'CI/CD пайплайны',
						'IaC: Terraform, Ansible',
						'Grafana, Prometheus',
					],
				},
				{
					icon: 'fa-brands fa-docker',
					title: 'Контейнеризация',
					points: [
						'Docker-образы',
						'Kubernetes и Helm',
						'Автодеплой',
						'Масштабируемость',
					],
				},
				{
					icon: 'fa-solid fa-lock',
					title: 'Инструменты безопасности',
					points: [
						'OAuth2, JWT',
						'Проверка уязвимостей',
						'SSL/TLS и сертификаты',
						'Код-ревью безопасности',
					],
				},
			],
		},
	},
}

export default translations
