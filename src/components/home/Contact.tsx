"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-primary">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <h2 className="heading-section mb-6">Let's build something extraordinary.</h2>
            <p className="text-body mb-12">
              Fill out the form to request a strategy call. We typically respond within 24 hours to schedule an initial discovery session.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</h4>
                <a href="mailto:ddomverse@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">ddomverse@gmail.com</a>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Offices</h4>
                <div className="space-y-4">
                  <p className="text-lg font-medium text-gray-300">
                    <span className="text-accent text-sm block mb-1">USA</span>
                    100 Premium Ave, Suite 400<br/>New York, NY 10001
                  </p>
                  <p className="text-lg font-medium text-gray-300">
                    <span className="text-accent text-sm block mb-1">Australia</span>
                    Level 12, 100 George Street<br/>Sydney, NSW 2000
                  </p>
                  <p className="text-lg font-medium text-gray-300">
                    <span className="text-accent text-sm block mb-1">India</span>
                    Sithalapakkam<br/>Chennai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.form 
              action="https://formsubmit.co/ddomverse@gmail.com" 
              method="POST"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl"
            >
              {/* Optional: Disable Captcha for smoother UX */}
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Business Name</label>
                  <input type="text" name="business_name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@acme.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                  <select name="budget" required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" disabled className="text-gray-500">Select Budget</option>
                    <option value="500-1000" className="bg-primary">$500 - $1,000</option>
                    <option value="1000-2000" className="bg-primary">$1,000 - $2,000</option>
                    <option value="2000-3000" className="bg-primary">$2,000 - $3,000</option>
                    <option value="others" className="bg-primary">Others</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
                <textarea name="description" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your business goals..."></textarea>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl transition-colors">
                Start My Project
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
