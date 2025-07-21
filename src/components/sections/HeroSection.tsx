"use client";

import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowDown, Cloud, Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gcp-blue via-gcp-green to-gcp-yellow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip
              startContent={<Cloud size={16} />}
              variant="flat"
              color="primary"
              className="mb-6"
            >
              Google Cloud
            </Chip>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Keita SHIBUYA&apos;s</span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Google Cloud を専門とした SRE エンジニアとして
              <br />
              <span className="text-gcp-blue font-semibold">
                {" "}
                スケーラブルなインフラ{" "}
              </span>
              を設計・運用しています
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              color="primary"
              size="lg"
              onPress={() => handleScroll("#projects")}
              className="font-semibold"
              aria-label="プロジェクトセクションへ移動"
            >
              プロジェクトを見る
            </Button>
            <Button
              variant="bordered"
              size="lg"
              onPress={() => handleScroll("#contact")}
              className="font-semibold"
              aria-label="お問い合わせセクションへ移動"
            >
              お問い合わせ
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mb-16"
          >
            <Button
              isIconOnly
              variant="flat"
              color="default"
              size="lg"
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubプロフィールを開く"
            >
              <Github size={20} />
            </Button>
            <Button
              isIconOnly
              variant="flat"
              color="default"
              size="lg"
              as="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedInプロフィールを開く"
            >
              <Linkedin size={20} />
            </Button>
            <Button
              isIconOnly
              variant="flat"
              color="default"
              size="lg"
              as="a"
              href="mailto:contact@example.com"
              aria-label="メールを送信"
            >
              <Mail size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <Button
              isIconOnly
              variant="light"
              color="primary"
              size="lg"
              onPress={() => handleScroll("#about")}
              aria-label="Aboutセクションへスクロール"
            >
              <ArrowDown size={24} />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-gcp-blue/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-gcp-green/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gcp-yellow/20 rounded-full blur-xl"
      />
    </section>
  );
};
