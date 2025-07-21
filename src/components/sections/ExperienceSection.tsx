"use client";

import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: "2023 年 - 現在",
      company: "Cloud Ace, Inc.",
      position: "SRE Engineer - Specialist",
      location: "東京",
      achievements: [
        "LangChain と Vertex AI Vector Search を活用した RAG チャットボットの設計・開発",
        "GKE を使用した動画作成・配信サービスのインフラ設計・構築・運用",
        "Cloud Monitoring を活用した監視機能の設計・構築",
        "GCE を使用した基幹システム導入環境の設計・構築",
        "Terraform によるインフラのコード化（IaC）",
        "Cloud Logging を活用したログ収集・分析・アラートの設計・構築",
        "Cloud Build を活用した CI/CD パイプラインの設計・構築",
        "Cloud Run を活用したサーバレスアーキテクチャの設計・構築",
      ],
      technologies: [
        "Google Cloud",
        "Terraform",
        "Cloud Run",
        "Cloud Build",
        "GKE",
        "Kubernetes",
        "VPCSC",
        "GitHub",
        "Docker",
        "Python",
        "FastAPI",
        "LangChain",
        "Vertex AI",
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Cloud Professional Cloud Security Engineer",
      issuer: "Google Cloud",
      year: "2024/11",
      icon: "🔒",
    },
    {
      name: "Google Cloud Professional Cloud Network Engineer",
      issuer: "Google Cloud",
      year: "2024/10",
      icon: "🌐",
    },
    {
      name: "Google Cloud Professional DevOps Engineer",
      issuer: "Google Cloud",
      year: "2024/06",
      icon: "🛠️",
    },
    {
      name: "Google Cloud Professional Cloud Developer",
      issuer: "Google Cloud",
      year: "2024/02",
      icon: "💻",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023/09",
      icon: "🏆",
    },
    {
      name: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      year: "2023/08",
      icon: "👑",
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 px-6 bg-content1">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="secondary" className="mb-4">
            Experience
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">実績と経験</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            大規模システムの運用から新サービスの立ち上げまで、様々なプロジェクトで
            SRE としての価値を提供してきました。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass hover:shadow-lg transition-shadow duration-300">
                    <CardBody className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <div className="flex items-center text-foreground/70 mb-1">
                            <Calendar
                              size={16}
                              className="mr-2"
                              aria-label="期間"
                              aria-hidden="true"
                            />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-foreground/70">
                            <MapPin
                              size={16}
                              className="mr-2"
                              aria-label="勤務地"
                              aria-hidden="true"
                            />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <Divider className="mb-4" />

                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp
                            size={18}
                            className="mr-2"
                            aria-label="主な成果"
                            aria-hidden="true"
                          />
                          主な成果
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-foreground/80 flex items-center"
                            >
                              <span className="text-success mr-2">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Zap
                            size={18}
                            className="mr-2"
                            aria-label="使用技術"
                            aria-hidden="true"
                          />
                          使用技術
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Chip
                              key={idx}
                              variant="flat"
                              color="primary"
                              size="sm"
                            >
                              {tech}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass">
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Users
                      size={20}
                      className="mr-2"
                      aria-label="資格・認定"
                      aria-hidden="true"
                    />
                    資格・認定
                  </h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="p-4 rounded-lg bg-content2">
                        <div className="flex items-start">
                          <span className="text-2xl mr-3">{cert.icon}</span>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">
                              {cert.name}
                            </h4>
                            <p className="text-foreground/70 text-xs">
                              {cert.issuer}
                            </p>
                            <p className="text-primary text-xs font-medium">
                              {cert.year}年取得
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
