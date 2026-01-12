"use client";

import type { NextUIColor } from "@/types/ui";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin } from "lucide-react";
import React from "react";

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shibuya.keita@lec-infra.com",
      href: "mailto:shibuya.keita@lec-infra.com",
      color: "primary" as NextUIColor,
    },
    {
      icon: MapPin,
      label: "所在地",
      value: "東京, 日本",
      href: "#",
      color: "success" as NextUIColor,
    },
    {
      icon: Clock,
      label: "対応時間",
      value: "平日 09:00 - 18:00 JST",
      href: "#",
      color: "warning" as NextUIColor,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="danger" className="mb-4">
            Contact
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">お問い合わせ</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            SRE プロジェクトのご相談、技術コンサルティング、講演依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass hover:shadow-md transition-shadow duration-300">
                  <CardBody className="p-4 text-center">
                    <div
                      className={`p-3 rounded-full bg-${info.color}/10 mx-auto mb-3 w-fit`}
                      role="img"
                      aria-label={`${info.label}のアイコン`}
                    >
                      <IconComponent
                        size={20}
                        className={`text-${info.color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm text-foreground/60 mb-1">
                      {info.label}
                    </p>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="font-semibold text-foreground hover:text-primary transition-colors text-sm"
                        aria-label={`${info.label}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm">
                        {info.value}
                      </p>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Google Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
                メッセージを送信
              </h3>

              <div className="w-full flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdZfY3RiZHlH_L-XzehaG4x1DxmZFwih4QJe-4rcBG53ApuzA/viewform?embedded=true"
                  width="100%"
                  height="1534"
                  style={{ border: 0, maxWidth: "640px" }}
                  title="お問い合わせフォーム"
                >
                  読み込んでいます…
                </iframe>
              </div>

              <div className="mt-6 p-4 bg-content2 rounded-lg">
                <p className="text-sm text-foreground/70 text-center">
                  <strong>お返事について：</strong>
                  <br />
                  いただいたお問い合わせには、原則 24
                  時間以内にご返信いたします。
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-divider text-center"
      >
        <p className="text-foreground/60">
          © 2024 Keita SHIBUYA&apos;s Portfolio.
        </p>
      </motion.div>
    </section>
  );
};
