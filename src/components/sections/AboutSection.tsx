"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Award, BarChart3, Cloud, Server, Shield, Users } from "lucide-react";
import React from "react";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "クラウドアーキテクチャ",
      description: "Google Cloud Platformを活用したスケーラブルなシステム設計",
      color: "primary",
      ariaLabel: "クラウドアーキテクチャのアイコン",
    },
    {
      icon: Shield,
      title: "高可用性設計",
      description: "99.9%以上のアップタイムを実現する冗長化とフェイルオーバー",
      color: "secondary",
      ariaLabel: "高可用性設計のアイコン",
    },
    {
      icon: Server,
      title: "インフラ自動化",
      description: "Terraform、Ansible、Kubernetesを使った完全自動化",
      color: "primary",
      ariaLabel: "インフラ自動化のアイコン",
    },
    {
      icon: BarChart3,
      title: "監視・分析",
      description: "Prometheus、Grafana、Cloud Monitoringでの包括的監視",
      color: "secondary",
      ariaLabel: "監視・分析のアイコン",
    },
    {
      icon: Users,
      title: "DevOpsカルチャー",
      description: "開発チームとの協業で継続的なデリバリーを実現",
      color: "primary",
      ariaLabel: "DevOpsカルチャーのアイコン",
    },
    {
      icon: Award,
      title: "Google Cloud認定",
      description: "Professional Cloud Architect & DevOps Engineer認定取得",
      color: "secondary",
      ariaLabel: "Google Cloud認定のアイコン",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="primary" className="mb-4">
            About Me
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Site Reliability Engineering</span>
            <br />
            のスペシャリスト
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            5年以上のSRE経験を持ち、Google Cloud
            Platformを活用した大規模システムの設計・運用に携わってきました。
            可用性、スケーラビリティ、パフォーマンスの最適化を通じて、ビジネスの成長を技術面で支えています。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 glass">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-full bg-${highlight.color}/10 mr-4`}
                        aria-label={highlight.ariaLabel}
                      >
                        <IconComponent
                          size={24}
                          className={`text-${highlight.color}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Mission Statement
              </h3>
              <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                &ldquo;技術的な卓越性を追求し、信頼性の高いシステムを構築することで、
                ユーザーに最高の体験を提供し、ビジネスの持続的な成長に貢献する。&rdquo;
              </blockquote>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
