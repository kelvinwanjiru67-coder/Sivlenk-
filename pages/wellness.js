import Link from "next/link";
import { motion } from "framer-motion";

const wellnessBlogs = [
  {
    title: "Morning Habits That Reset Your Mind",
    slug: "morning-habits-reset-mind",
    image: "/images/wellness/morning-habits.jpg",
    excerpt: "Luxury morning rituals used by high performers to calm the nervous system and elevate focus.",
    readTime: "5 min read",
  },
  {
    title: "How to Reduce Stress Without Medication",
    slug: "reduce-stress-naturally",
    image: "/images/wellness/reduce-stress.jpg",
    excerpt: "Spa-level techniques to release stress naturally and regain inner balance.",
    readTime: "6 min read",
  },
  {
    title: "The Science of Better Sleep",
    slug: "science-of-better-sleep",
    image: "/images/wellness/better-sleep.jpg",
    excerpt: "High-end sleep optimization strategies backed by neuroscience.",
    readTime: "7 min read",
  },
  {
    title: "Healing Your Body Through Nutrition",
    slug: "healing-through-nutrition",
    image: "/images/wellness/healing-nutrition.jpg",
    excerpt: "Premium nutrition principles that support longevity and vitality.",
    readTime: "6 min read",
  },
  {
    title: "Mental Wellness in a Digital World",
    slug: "mental-wellness-digital-world",
    image: "/images/wellness/mental-wellness.jpg",
    excerpt: "Protect your mind from burnout while living in a high-speed digital era.",
    readTime: "5 min read",
  },
];

export default function Wellness() {
  return (
    <div className="min-h-screen w-full bg-[#0e1512] text-white">
      
      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            Wellness
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            A luxury approach to health, balance, and inner calm.
          </p>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wellnessBlogs.map((blog, index) => (
            <Link key={index} href={`/wellness/${blog.slug}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                {/* Text */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <span className="text-sm text-neutral-300 mb-2">
                    {blog.readTime}
                  </span>
                  <h2 className="text-2xl font-light mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
    }
    
