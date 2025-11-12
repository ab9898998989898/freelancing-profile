import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Mail, Linkedin, Github, Send, Star, Calendar, Users, Code2, Smartphone, Globe, ShoppingCart, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web-development', 'ecommerce', 'saas', 'mobile', 'marketing'];

  const projects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'saas',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      description: 'Complete SaaS platform with subscription billing, user management, and analytics dashboard',
      longDescription: 'Built a full-featured SaaS application from scratch including multi-tenancy, role-based access control, payment processing via Stripe, and comprehensive analytics. The platform handles 10,000+ active users.',
      gradient: 'from-blue-500 to-purple-600',
      image: 'saas-dashboard',
      client: 'TechFlow Inc',
      duration: '4 months',
      team: 'Solo Developer',
      results: [
        '10,000+ Active Users',
        '$50K MRR in 6 months',
        '99.9% Uptime',
        '4.8★ User Rating'
      ],
      features: [
        'User Authentication & Authorization',
        'Subscription Management',
        'Real-time Analytics Dashboard',
        'API Integration',
        'Payment Processing',
        'Email Notifications'
      ],
      testimonial: {
        text: 'Abdullah built our entire SaaS platform and exceeded all expectations. The code quality is exceptional!',
        author: 'John Smith, CEO'
      }
    },
    {
      id: 2,
      title: 'LuxeStore E-Commerce',
      category: 'ecommerce',
      stack: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
      description: 'High-end fashion e-commerce store with advanced filtering and seamless checkout',
      longDescription: 'Developed a premium e-commerce platform featuring product catalog with 1000+ items, advanced search and filtering, shopping cart with persistent state, and integrated payment gateway. Optimized for conversions and mobile shopping.',
      gradient: 'from-pink-500 to-rose-600',
      image: 'ecommerce',
      client: 'LuxeStore Fashion',
      duration: '3 months',
      team: 'Solo Developer',
      results: [
        '300% Increase in Sales',
        '50,000+ Monthly Visitors',
        '4.2s Average Load Time',
        '68% Conversion Rate'
      ],
      features: [
        'Product Catalog with Filtering',
        'Shopping Cart & Wishlist',
        'Payment Gateway Integration',
        'Order Management System',
        'Inventory Tracking',
        'Customer Reviews'
      ],
      testimonial: {
        text: 'Our sales tripled after launching this beautiful e-commerce platform. Worth every penny!',
        author: 'Sarah Johnson, Owner'
      }
    },
    {
      id: 3,
      title: 'HealthTrack Mobile App',
      category: 'mobile',
      stack: ['React Native', 'Firebase', 'Node.js'],
      description: 'Cross-platform fitness tracking app with social features and AI-powered insights',
      longDescription: 'Created a comprehensive health and fitness mobile application with activity tracking, meal planning, social challenges, and personalized AI recommendations. Available on iOS and Android with offline capability.',
      gradient: 'from-green-500 to-emerald-600',
      image: 'mobile-app',
      client: 'HealthTrack Solutions',
      duration: '5 months',
      team: 'Lead Developer',
      results: [
        '50,000+ Downloads',
        '4.7★ App Store Rating',
        '35min Avg Daily Usage',
        '85% User Retention'
      ],
      features: [
        'Activity & Exercise Tracking',
        'Meal Planning & Nutrition',
        'Social Challenges',
        'AI-Powered Insights',
        'Offline Functionality',
        'Wearable Integration'
      ],
      testimonial: {
        text: 'The app is incredibly smooth and feature-rich. Our users love it!',
        author: 'Michael Chen, Product Manager'
      }
    },
    {
      id: 4,
      title: 'RealEstate Pro Portal',
      category: 'web-development',
      stack: ['Next.js', 'TypeScript', 'Prisma', 'AWS'],
      description: 'Property listing platform with advanced search, virtual tours, and agent dashboard',
      longDescription: 'Comprehensive real estate portal featuring property listings with high-quality images, virtual tour integration, advanced search with map view, agent profiles, and inquiry management system. SEO-optimized for maximum visibility.',
      gradient: 'from-indigo-500 to-blue-600',
      image: 'real-estate',
      client: 'RealEstate Pro',
      duration: '3 months',
      team: 'Solo Developer',
      results: [
        '500+ Active Listings',
        '100,000+ Monthly Visits',
        '#1 Google Ranking',
        '45% Lead Increase'
      ],
      features: [
        'Property Listings & Search',
        'Virtual Tours Integration',
        'Interactive Maps',
        'Agent Management',
        'Lead Generation Forms',
        'Advanced Filtering'
      ],
      testimonial: {
        text: 'This platform transformed our business. Lead generation is through the roof!',
        author: 'David Wilson, Broker'
      }
    },
    {
      id: 5,
      title: 'EduLearn LMS',
      category: 'saas',
      stack: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      description: 'Learning management system with live classes, assignments, and progress tracking',
      longDescription: 'Full-featured LMS with course creation tools, live video classes, assignment submission, automated grading, student progress tracking, and certificates. Supports 5,000+ concurrent users.',
      gradient: 'from-yellow-500 to-orange-600',
      image: 'lms',
      client: 'EduLearn Academy',
      duration: '6 months',
      team: 'Tech Lead',
      results: [
        '5,000+ Students',
        '200+ Courses',
        '95% Completion Rate',
        '4.9★ Rating'
      ],
      features: [
        'Course Management',
        'Live Video Classes',
        'Assignment & Grading',
        'Progress Tracking',
        'Certificates',
        'Discussion Forums'
      ],
      testimonial: {
        text: 'The best LMS we\'ve ever used. Students and teachers both love it!',
        author: 'Dr. Emily Brown, Principal'
      }
    },
    {
      id: 6,
      title: 'RestaurantHub POS',
      category: 'web-development',
      stack: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      description: 'Complete restaurant management system with POS, inventory, and analytics',
      longDescription: 'Developed a comprehensive restaurant management solution including point-of-sale, table management, kitchen display system, inventory tracking, staff management, and detailed analytics dashboard.',
      gradient: 'from-red-500 to-pink-600',
      image: 'restaurant-pos',
      client: 'RestaurantHub Chain',
      duration: '4 months',
      team: 'Solo Developer',
      results: [
        '25+ Locations',
        '40% Faster Service',
        '99.8% Accuracy',
        '$2M+ Processed'
      ],
      features: [
        'Point of Sale System',
        'Table Management',
        'Kitchen Display',
        'Inventory Tracking',
        'Staff Management',
        'Sales Analytics'
      ],
      testimonial: {
        text: 'This system streamlined our operations across all locations. Highly recommend!',
        author: 'Robert Garcia, Operations Manager'
      }
    },
    {
      id: 7,
      title: 'MarketBoost SEO Campaign',
      category: 'marketing',
      stack: ['SEO', 'Content Marketing', 'Google Analytics'],
      description: 'Comprehensive SEO strategy that increased organic traffic by 400%',
      longDescription: 'Executed a complete SEO overhaul including technical SEO audit, keyword research, content strategy, link building campaign, and ongoing optimization. Achieved first-page rankings for 50+ target keywords.',
      gradient: 'from-green-500 to-teal-600',
      image: 'seo-campaign',
      client: 'MarketBoost Ltd',
      duration: '6 months',
      team: 'SEO Specialist',
      results: [
        '400% Traffic Increase',
        '50+ Page #1 Rankings',
        '250% Lead Growth',
        '3.5x ROI'
      ],
      features: [
        'Technical SEO Audit',
        'Keyword Research',
        'Content Strategy',
        'Link Building',
        'Local SEO',
        'Monthly Reporting'
      ],
      testimonial: {
        text: 'Our organic traffic exploded! Best investment we ever made.',
        author: 'Lisa Martinez, Marketing Director'
      }
    },
    {
      id: 8,
      title: 'ShopEasy Mobile Commerce',
      category: 'ecommerce',
      stack: ['React Native', 'Node.js', 'Stripe', 'AWS'],
      description: 'Mobile-first e-commerce app with AR product preview and one-tap checkout',
      longDescription: 'Built a cutting-edge mobile commerce platform featuring augmented reality product previews, one-tap checkout, personalized recommendations, and seamless social sharing. Optimized for mobile conversion.',
      gradient: 'from-purple-500 to-indigo-600',
      image: 'mobile-commerce',
      client: 'ShopEasy Inc',
      duration: '5 months',
      team: 'Lead Developer',
      results: [
        '100,000+ Downloads',
        '75% Mobile Conversion',
        '$5M Revenue/Year',
        '4.6★ Rating'
      ],
      features: [
        'AR Product Preview',
        'One-Tap Checkout',
        'Personalized Feed',
        'Social Sharing',
        'Push Notifications',
        'Loyalty Program'
      ],
      testimonial: {
        text: 'The AR feature is a game-changer. Customers love visualizing products!',
        author: 'Amanda White, CEO'
      }
    },
    {
      id: 9,
      title: 'CryptoTrack Portfolio Manager',
      category: 'saas',
      stack: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
      description: 'Real-time cryptocurrency portfolio tracking with advanced analytics',
      longDescription: 'Created a sophisticated crypto portfolio management platform with real-time price tracking, profit/loss calculations, automated alerts, tax reporting, and comprehensive analytics dashboard.',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'crypto-tracker',
      client: 'CryptoTrack Platform',
      duration: '3 months',
      team: 'Solo Developer',
      results: [
        '20,000+ Users',
        '$100M+ Tracked',
        'Real-time Updates',
        '4.8★ Rating'
      ],
      features: [
        'Real-time Price Tracking',
        'Portfolio Analytics',
        'Price Alerts',
        'Tax Reporting',
        'Exchange Integration',
        'Historical Data'
      ],
      testimonial: {
        text: 'Best crypto portfolio tracker I\'ve used. Clean UI and powerful features!',
        author: 'Chris Taylor, Investor'
      }
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle2 className="w-8 h-8" /> },
    { number: '120+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary/10 text-primary px-4 py-1 sm:px-6 sm:py-2 rounded-full font-semibold mb-4 sm:mb-6 text-sm sm:text-base"
            >
              💼 Portfolio Showcase
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
              Projects That Drive Results
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              A showcase of successful projects delivered to satisfied clients across various industries
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-primary mb-2 sm:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-gray-600 font-semibold mb-6 text-lg">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all text-xs sm:text-sm uppercase tracking-wide ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent hover:border-primary'
                  }`}
                >
                  {category === 'all' ? '🎯 All Projects' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  {selectedCategory === category && (
                    <span className="ml-1 sm:ml-2">✓</span>
                  )}
                </motion.button>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-4">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Detailed */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="space-y-32 max-w-7xl mx-auto">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Image/Visual */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`relative h-64 sm:h-80 md:h-96 bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden shadow-2xl group cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                      <div className="text-center text-white p-4 sm:p-6 md:p-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="mb-3 sm:mb-4"
                        >
                          <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto" />
                        </motion.div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">View Live Project</p>
                      </div>
                    </div>
                    {/* Tech stack badges overlay */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap gap-1 sm:gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-gray-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <span className={`inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4`}>
                      {project.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">{project.title}</h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{project.longDescription}</p>

                    {/* Project Info */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <div className="text-xs sm:text-sm text-gray-600">Duration</div>
                        <div className="font-bold text-gray-900 text-sm">{project.duration}</div>
                      </div>
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <div className="text-xs sm:text-sm text-gray-600">Team</div>
                        <div className="font-bold text-gray-900 text-sm">{project.team}</div>
                      </div>
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1 sm:mb-2" />
                        <div className="text-xs sm:text-sm text-gray-600">Client</div>
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">{project.client}</div>
                      </div>
                    </div>

                    {/* Key Results */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        Key Results
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {project.results.map((result, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                            <span className="font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-primary">
                      <p className="text-gray-700 italic mb-2 sm:mb-3 text-sm sm:text-base">"{project.testimonial.text}"</p>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">- {project.testimonial.author}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-heading font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch and let's create something amazing!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Email Card */}
              <motion.a
                href="mailto:abdullahnadeem2580@gmail.com"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email Me</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Send me an email anytime</p>
                  <p className="text-primary font-semibold text-base sm:text-lg">abdullahnadeem2580@gmail.com</p>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a
                href="https://www.linkedin.com/in/abdullah-nadeem-319560285"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all">
                    <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Connect professionally</p>
                  <p className="text-primary font-semibold text-base sm:text-lg">@abdullahnadeem</p>
                </div>
              </motion.a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* GitHub Card */}
              <motion.a
                href="https://github.com/ab9898998989898"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 bg-white rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all">
                    <Github className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">GitHub</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">View my code</p>
                  <p className="text-primary font-semibold text-base sm:text-lg">@abdullahnadeem</p>
                </div>
              </motion.a>

              {/* Contact Form Link */}
              <motion.a
                href="https://forms.gle/WP4FhPnZx2c6SPkp7"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-r from-primary to-blue-600 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all group text-white"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white/30 transition-all">
                    <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Start a Project</h3>
                  <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">Fill out the project form</p>
                  <p className="font-semibold text-base sm:text-lg">Click to Open Form →</p>
                </div>
              </motion.a>
            </div>

            {/* Availability & Response Time */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-3 h-3 sm:w-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Available Now</h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                  I'm currently accepting new projects with start dates in the next 2-4 weeks.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Quick Response</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                  I typically respond within 24 hours during business days. Looking forward to hearing from you!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-blue-100 px-4">
              Let's create something amazing together. Schedule a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a
                href="#contact"
                className="bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full hover:bg-blue-50 transition-all hover:shadow-2xl font-bold text-base sm:text-lg"
              >
                Start a Project
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all font-bold text-base sm:text-lg"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
