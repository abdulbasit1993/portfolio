"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";
import Modal from "./Modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="services"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          What I Offer
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          I am a frontend and cross-platform mobile app developer from Pakistan,
          with 4 years of experience in building scalable and user-friendly web
          and mobile hybrid apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-auto gap-6 my-10"
        >
          {serviceData.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-2 text-sm mt-5 cursor-pointer hover:gap-3 transition-all duration-300"
              >
                Read More{" "}
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div>
            <Image
              src={selectedService.icon}
              alt={selectedService.title}
              className="modal-icon"
            />
            <h2 className="modal-title">{selectedService.title}</h2>
            <p className="modal-description">
              {selectedService.fullDescription}
            </p>

            {selectedService.features && (
              <>
                <p className="modal-features-title">Key Features</p>
                <ul className="modal-features-list">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="modal-feature-item">
                      <span className="modal-feature-check">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Services;
