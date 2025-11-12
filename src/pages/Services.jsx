import { motion } from 'framer-motion';
import { Code, Laptop, Store, Database, Search, TrendingUp, DollarSign, BarChart, CheckCircle, Globe, Smartphone, ShoppingCart, LineChart, Target, Award, Zap, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      category: 'Website Development',
      icon: <Code className="w-12 h-12" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Building modern, responsive websites that captivate your audience and drive conversions',
      items: [
        { 
          title: 'Simple Landing Pages', 
          description: 'Beautiful one-page sites that convert visitors into customers',
          features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Contact Forms'],
          price: 'Starting at $500'
        },
        { 
          title: 'Portfolio Websites', 
          description: 'Showcase your work with stunning, responsive portfolios',
          features: ['Project Galleries', 'About Pages', 'Contact Integration', 'Custom Animations'],
          price: 'Starting at $800'
        },
        { 
          title: 'Business Websites', 
          description: 'Professional multi-page sites for your business',
          features: ['Multi-page Structure', 'CMS Integration', 'Blog Functionality', 'Analytics'],
          price: 'Starting at $1,500'
        },
        { 
          title: 'E-commerce Frontends', 
          description: 'Modern online stores with seamless shopping experiences',
          features: ['Product Catalogs', 'Shopping Cart', 'Payment Integration', 'Admin Panel'],
          price: 'Starting at $2,500'
        },
      ]
    },
    {
      category: 'Full Stack Solutions',
      icon: <Database className="w-12 h-12" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Complete end-to-end web applications with robust backend infrastructure',
      items: [
        { 
          title: 'Custom Dashboards', 
          description: 'Data-driven admin panels and analytics dashboards',
          features: ['Real-time Data', 'Custom Charts', 'User Management', 'Export Features'],
          price: 'Starting at $2,000'
        },
        { 
          title: 'SaaS Applications', 
          description: 'Scalable software-as-a-service platforms',
          features: ['Multi-tenancy', 'Subscription Billing', 'API Access', 'Cloud Hosting'],
          price: 'Starting at $3,000'
        },
        { 
          title: 'API Development', 
          description: 'RESTful and GraphQL APIs for your applications',
          features: ['RESTful Design', 'Authentication', 'Documentation', 'Rate Limiting'],
          price: 'Starting at $1000'
        },
        { 
          title: 'Database Design', 
          description: 'Optimized database architecture and management',
          features: ['Schema Design', 'Optimization', 'Migrations', 'Backup Solutions'],
          price: 'Starting at $1,500'
        },
      ]
    },
    {
      category: 'SEO & Digital Marketing',
      icon: <Search className="w-12 h-12" />,
      color: 'from-green-500 to-green-600',
      description: 'Comprehensive SEO strategies to boost your organic visibility and traffic',
      items: [
        { 
          title: 'On-page SEO', 
          description: 'Optimize your content and website structure',
          features: ['Keyword Optimization', 'Meta Tags', 'Content Strategy', 'Internal Linking'],
          price: 'Starting at $400/month'
        },
        { 
          title: 'Technical SEO', 
          description: 'Improve site speed, mobile-friendliness, and crawlability',
          features: ['Site Speed', 'Mobile Optimization', 'XML Sitemaps', 'Schema Markup'],
          price: 'Starting at $800/month'
        },
        { 
          title: 'Local SEO', 
          description: 'Dominate local search results in your area',
          features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content'],
          price: 'Starting at $600/month'
        },
        { 
          title: 'Link Building', 
          description: 'Build high-quality backlinks to boost domain authority',
          features: ['Guest Posting', 'Outreach', 'Content Marketing', 'Competitor Analysis'],
          price: 'Starting at $1,000/month'
        },
      ]
    },
    {
      category: 'Google Ads Management',
      icon: <DollarSign className="w-12 h-12" />,
      color: 'from-red-500 to-red-600',
      description: 'Data-driven paid advertising campaigns that maximize your ROI',
      items: [
        { 
          title: 'Search Ads', 
          description: 'Appear at the top of Google search results',
          features: ['Keyword Research', 'Ad Copywriting', 'Bid Management', 'A/B Testing'],
          price: 'Starting at $500/month + ad spend'
        },
        { 
          title: 'Display Ads', 
          description: 'Visual ads across the Google Display Network',
          features: ['Banner Design', 'Audience Targeting', 'Remarketing', 'Performance Tracking'],
          price: 'Starting at $600/month + ad spend'
        },
        { 
          title: 'Shopping Ads', 
          description: 'Promote your products directly in search results',
          features: ['Product Feed', 'Merchant Center', 'Smart Bidding', 'Shopping Campaigns'],
          price: 'Starting at $700/month + ad spend'
        },
        { 
          title: 'Campaign Optimization', 
          description: 'Continuous improvement for better ROI',
          features: ['Performance Analysis', 'Conversion Tracking', 'Budget Optimization', 'Monthly Reports'],
          price: 'Starting at $400/month'
        },
      ]
    },
  ];

  const technologies = [
    { name: 'React & Next.js', icon: <Code />, color: 'blue' },
    { name: 'Node.js', icon: <Database />, color: 'green' },
    { name: 'Tailwind CSS', icon: <Laptop />, color: 'cyan' },
    { name: 'MongoDB', icon: <Database />, color: 'emerald' },
    { name: 'PostgreSQL', icon: <Database />, color: 'indigo' },
    { name: 'TypeScript', icon: <Code />, color: 'blue' },
    { name: 'GraphQL', icon: <Globe />, color: 'pink' },
    { name: 'AWS', icon: <Shield />, color: 'orange' },
  ];

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance across all devices'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and regular updates'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'User-Focused',
      description: 'Designed with your users in mind for maximum engagement'
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'Scalable',
      description: 'Architecture that grows with your business needs'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Goal-Oriented',
      description: 'Every decision aligned with your business objectives'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Quality Guaranteed',
      description: 'Rigorous testing and quality assurance processes'
    },
  ];

  const workflowSteps = [
    { 
      number: '01',
      title: 'Discovery & Consultation', 
      description: 'We start with an in-depth discussion to understand your business goals, target audience, unique challenges, and project requirements. This phase ensures we\'re aligned on vision and expectations.',
      icon: <CheckCircle className="w-8 h-8" />,
      deliverables: ['Project Brief', 'Requirements Document', 'Timeline Proposal']
    },
    { 
      number: '02',
      title: 'Strategy & Planning', 
      description: 'Based on discovery insights, I create a comprehensive project plan including information architecture, technical specifications, and design direction to ensure smooth execution.',
      icon: <Laptop className="w-8 h-8" />,
      deliverables: ['Sitemap', 'Wireframes', 'Technology Stack', 'Project Roadmap']
    },
    { 
      number: '03',
      title: 'Design & Prototyping', 
      description: 'Creating beautiful, user-friendly designs that align with your brand identity. Interactive prototypes allow you to visualize the final product before development begins.',
      icon: <Code className="w-8 h-8" />,
      deliverables: ['Design Mockups', 'Interactive Prototype', 'Style Guide', 'Asset Library']
    },
    { 
      number: '04',
      title: 'Development & Integration', 
      description: 'Building your project using clean, efficient code and modern technologies. Regular progress updates keep you informed throughout the development process.',
      icon: <Database className="w-8 h-8" />,
      deliverables: ['Functional Website/App', 'Database Setup', 'API Integration', 'Admin Panel']
    },
    { 
      number: '05',
      title: 'Testing & Quality Assurance', 
      description: 'Comprehensive testing across multiple devices, browsers, and scenarios to ensure everything works flawlessly. Performance optimization and security checks are included.',
      icon: <BarChart className="w-8 h-8" />,
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization', 'Security Audit']
    },
    { 
      number: '06',
      title: 'Launch & Deployment', 
      description: 'Smooth deployment to production with minimal downtime. Post-launch monitoring ensures everything runs perfectly, with immediate support for any issues.',
      icon: <TrendingUp className="w-8 h-8" />,
      deliverables: ['Live Website/App', 'Documentation', 'Training Materials', '30-Day Support']
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$500',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-Page Website',
        'Responsive Design',
        'Contact Form',
        'SEO Basics',
        'Social Media Links',
        '1 Month Support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: '$1,500',
      description: 'Ideal for growing businesses',
      features: [
        '10-Page Website',
        'Custom Design',
        'CMS Integration',
        'Advanced SEO',
        'E-commerce (up to 50 products)',
        'Analytics Setup',
        '3 Months Support'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex applications and large businesses',
      features: [
        'Unlimited Pages',
        'Custom Features',
        'Full Stack Application',
        'API Development',
        'Dedicated Support',
        'Ongoing Maintenance',
        '1 Year Support'
      ],
      color: 'from-green-500 to-green-600'
    },
  ];

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
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary/10 text-primary px-4 py-1 sm:px-6 sm:py-2 rounded-full font-semibold mb-4 sm:mb-6 text-sm sm:text-base"
            >
              🚀 Professional Services
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 sm:mb-6">
              Your One-Stop Solution for Web & Digital Growth
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              From simple landing pages to complex web systems and strategic marketing campaigns - I deliver solutions that drive real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-left">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">150+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories - Detailed */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div key={service.category} className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl mb-6`}>
                    {service.icon}
                    <h2 className="text-2xl md:text-4xl font-bold">{service.category}</h2>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {service.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all group"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{item.description}</p>
                      
                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 sm:pt-6 border-t">
                        <span className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {item.price}
                        </span>
                        <a
                          href={`https://forms.gle/55u3hHeY7bjZPb2w9`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base`}
                          >
                            Get Started
                          </motion.button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to build robust, scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all"
              >
                <div className={`text-${tech.color}-500 mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Why Choose My Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project is built with these core principles in mind
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-5 sm:p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="text-primary mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Workflow Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              My Complete Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, systematic process from concept to launch and beyond
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative mb-12 sm:mb-14 md:mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{step.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                        Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-3 py-1 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="absolute left-10 sm:left-12 top-20 sm:top-24 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a package that fits your needs and budget
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {pricing.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-2 sm:ring-4 ring-primary' : ''} hover:shadow-2xl transition-all relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 sm:px-6 sm:py-2 rounded-bl-2xl font-semibold text-sm sm:text-base">
                    Popular
                  </div>
                )}
                <div className={`bg-gradient-to-r ${plan.color} p-5 sm:p-6 md:p-8 text-white`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">{plan.description}</p>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{plan.price}</div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://forms.gle/QMasmDkXKHGzZbuY9`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full bg-gradient-to-r ${plan.color} text-white text-center py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg transition-all text-sm sm:text-base`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ x: [100, -100, 100] }}
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
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-blue-100 px-4">
              Let's discuss your project and create something amazing together. Get a free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a
                href="https://forms.gle/kwt9VXbRdgAee9q29"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full hover:bg-blue-50 transition-all hover:shadow-2xl font-bold text-base sm:text-lg text-center"
              >
                Start Your Project
              </a>
              <a
                href="mailto:abdullah@example.com"
                className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-full hover:bg-white hover:text-primary transition-all font-bold text-base sm:text-lg text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
