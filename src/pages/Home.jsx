import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Search, TrendingUp, Award, Users, CheckCircle2, Target, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'SEO & Marketing', level: 88 },
    { name: 'Google Ads', level: 85 },
    { name: 'MongoDB & PostgreSQL', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'Content Strategy', level: 90 },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Projects delivered on time with exceptional quality',
      details: 'I understand that time is money. My streamlined development process ensures your project launches on schedule without compromising quality.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean & Scalable Code',
      description: 'Maintainable, well-documented code that grows with your business',
      details: 'Every line of code is written with best practices in mind, making it easy for your team to maintain and extend in the future.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization in mind from day one',
      details: 'Your website will be structured for maximum visibility on search engines, driving organic traffic and potential customers.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Perfect experience across all devices and screen sizes',
      details: 'Mobile-first approach ensures your site looks stunning and functions flawlessly on smartphones, tablets, and desktops.'
    },
  ];

  const achievements = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle2 className="w-8 h-8" /> },
    { number: '120+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="w-8 h-8" /> },
    { number: '2500+', label: 'Students Taught', icon: <Target className="w-8 h-8" /> },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'Abdullah transformed our outdated website into a modern, high-converting platform. Our leads increased by 300% in just 2 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      content: 'The SEO strategy Abdullah implemented helped us rank #1 for our main keywords. Organic traffic is up 250% and still growing.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'E-commerce Owner',
      content: 'Built a complete e-commerce platform for us. The attention to detail and user experience is exceptional. Sales have doubled!',
      rating: 5
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and unique challenges.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'Creating wireframes and mockups that align with your brand and convert visitors into customers.',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your project with clean, efficient code using the latest technologies and best practices.',
      icon: <Code className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Rigorous testing across devices and browsers to ensure everything works perfectly.',
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to ensure your continued success.',
      icon: <Rocket className="w-6 h-6" />
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
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6"
            >
              Hi, I'm <span className="text-primary">Abdullah Nadeem</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-4"
            >
              I Build Modern Websites That Grow Your Business
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              From elegant landing pages to full-stack web apps, I create fast, functional, and visually stunning experiences that drive results and exceed expectations.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/portfolio"
                className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
              >
                Hire Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#portfolio"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Explore My Work
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full h-[500px] bg-gradient-to-br from-primary to-secondary rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-8xl font-bold">AN</span>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Available</div>
                      <div className="text-sm text-gray-600">For New Projects</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                I'm a passionate freelance developer and digital marketer dedicated to helping businesses succeed online. With expertise in modern web technologies and proven marketing strategies, I deliver solutions that not only look great but drive real results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Over the past 5+ years, I've had the privilege of working with startups, small businesses, and established companies, helping them achieve their digital goals through custom web solutions and strategic marketing.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Whether you need a stunning website, a full-stack application, or want to dominate search results and ads, I combine technical expertise with business acumen to deliver exceptional value.
              </p>

              <div className="space-y-5 mb-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg font-semibold"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Why Work With Me</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              I combine technical excellence with business understanding to deliver exceptional results that drive growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 mb-4 font-medium">{feature.description}</p>
                <p className="text-gray-600 leading-relaxed">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">My Process</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              A proven, systematic approach that ensures quality results and client satisfaction every time
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-secondary"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Don't just take my word for it - hear from clients who've achieved remarkable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-primary to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              Let's work together to bring your vision to life or level up your skills with my comprehensive courses
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/portfolio"
                className="bg-white text-primary px-10 py-5 rounded-full hover:bg-blue-50 transition-all hover:shadow-2xl font-bold text-lg"
              >
                Get In Touch
              </Link>
              <Link
                to="/courses"
                className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-primary transition-all font-bold text-lg"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
