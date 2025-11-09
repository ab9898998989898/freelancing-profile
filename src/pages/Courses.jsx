import { motion } from 'framer-motion';
import { Clock, Users, Star, CheckCircle, Code, Globe, Database, TrendingUp, Search, DollarSign } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Simple Web Development',
      icon: <Globe className="w-10 h-10" />,
      duration: '4 Weeks',
      students: '500+',
      rating: 4.9,
      description: 'Learn HTML, CSS, and JavaScript fundamentals to build beautiful static websites.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git Basics'],
      tools: ['VS Code', 'Chrome DevTools', 'GitHub'],
      gradient: 'from-green-500 to-emerald-600',
      level: 'Beginner'
    },
    {
      title: 'Front-End Development',
      icon: <Code className="w-10 h-10" />,
      duration: '6 Weeks',
      students: '350+',
      rating: 4.8,
      description: 'Dive into React, responsive design, and modern UI principles.',
      skills: ['React', 'Tailwind CSS', 'State Management', 'React Router', 'API Integration'],
      tools: ['Vite', 'React DevTools', 'Figma'],
      gradient: 'from-blue-500 to-cyan-600',
      level: 'Intermediate'
    },
    {
      title: 'Back-End Development',
      icon: <Database className="w-10 h-10" />,
      duration: '6 Weeks',
      students: '280+',
      rating: 4.9,
      description: 'Learn Node.js, Express, and database integration with MongoDB.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      tools: ['Postman', 'MongoDB Atlas', 'JWT'],
      gradient: 'from-purple-500 to-indigo-600',
      level: 'Intermediate'
    },
    {
      title: 'Full-Stack Development',
      icon: <Code className="w-10 h-10" />,
      duration: '10 Weeks',
      students: '420+',
      rating: 5.0,
      description: 'Master both front-end and back-end by building complete real-world projects.',
      skills: ['MERN Stack', 'Next.js', 'TypeScript', 'PostgreSQL', 'Deployment'],
      tools: ['Next.js', 'Prisma', 'Vercel', 'Docker'],
      gradient: 'from-orange-500 to-red-600',
      level: 'Advanced'
    },
    {
      title: 'SEO & Digital Marketing',
      icon: <Search className="w-10 h-10" />,
      duration: '5 Weeks',
      students: '600+',
      rating: 4.9,
      description: 'Learn keyword research, on-page SEO, content strategy, and analytics.',
      skills: ['Keyword Research', 'On-page SEO', 'Link Building', 'Content Strategy', 'Analytics'],
      tools: ['Google Analytics', 'Ahrefs', 'SEMrush', 'Google Search Console'],
      gradient: 'from-teal-500 to-green-600',
      level: 'Beginner'
    },
    {
      title: 'Google Ads Mastery',
      icon: <DollarSign className="w-10 h-10" />,
      duration: '5 Weeks',
      students: '380+',
      rating: 4.8,
      description: 'Set up and run profitable ad campaigns with advanced targeting and reporting.',
      skills: ['Campaign Setup', 'Keyword Targeting', 'Ad Copywriting', 'Conversion Tracking', 'ROI Optimization'],
      tools: ['Google Ads', 'Google Tag Manager', 'Google Analytics'],
      gradient: 'from-pink-500 to-rose-600',
      level: 'Intermediate'
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold text-sm">
                🎓 Professional Training Programs
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Learn From a Professional Developer & Digital Marketer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get hands-on experience building modern projects with step-by-step mentorship
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-gray-600">Courses Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${course.gradient} p-8 text-white relative overflow-hidden`}>
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <div className="mb-4">{course.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tools & Technologies:</h4>
                    <p className="text-gray-600 text-sm">{course.tools.join(', ')}</p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://forms.google.com/course-enrollment?course=${course.title.replace(/\s+/g, '-').toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all`}
                    >
                      Enroll Now
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
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

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who have transformed their careers with hands-on, practical training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.google.com/course-catalog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-full hover:bg-blue-50 transition-all hover:shadow-2xl font-bold text-lg"
                >
                  Browse All Courses
                </motion.button>
              </a>
              <a
                href="https://forms.google.com/custom-training-request"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all font-bold text-lg"
                >
                  Contact for Custom Training
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;