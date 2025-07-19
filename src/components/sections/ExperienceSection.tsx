"use client";

import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: "2021年 - 現在",
      company: "Tech Innovation Inc.",
      position: "Senior Site Reliability Engineer",
      location: "東京",
      achievements: [
        "Kubernetesクラスターの設計・運用により、デプロイ時間を80%短縮",
        "Google Cloud Monitoringを活用した包括的な監視システム構築",
        "可用性99.95%を達成し、ダウンタイムを年間4.38時間以下に削減",
        "Terraformによるインフラのコード化で、環境構築時間を90%削減",
      ],
      technologies: [
        "Google Cloud Platform",
        "Kubernetes",
        "Terraform",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      period: "2019年 - 2021年",
      company: "Cloud Systems Corp.",
      position: "Site Reliability Engineer",
      location: "東京",
      achievements: [
        "マイクロサービスアーキテクチャの移行を主導し、スケーラビリティを300%向上",
        "CI/CDパイプラインの構築により、リリース頻度を週1回から日次に改善",
        "インシデント対応プロセスの標準化で、MTTR（平均復旧時間）を60%削減",
        "チーム内でのSREベストプラクティス教育・普及活動を推進",
      ],
      technologies: [
        "Google Cloud Platform",
        "Docker",
        "Jenkins",
        "Ansible",
        "ELK Stack",
      ],
    },
    {
      period: "2017年 - 2019年",
      company: "StartUp Ventures",
      position: "DevOps Engineer",
      location: "東京",
      achievements: [
        "AWSからGoogle Cloud Platformへの全面移行プロジェクトをリード",
        "オートスケーリング機能の実装で、コストを40%削減しながら性能向上を実現",
        "モニタリングアラート体系の構築で、障害検知時間を85%短縮",
        "開発チーム向けのインフラ自動化ツールを開発・提供",
      ],
      technologies: ["Google Cloud Platform", "AWS", "Python", "Bash", "MySQL"],
    },
  ];

  const certifications = [
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🏆",
    },
    {
      name: "Google Cloud Professional DevOps Engineer",
      issuer: "Google Cloud",
      year: "2022",
      icon: "🛠️",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      icon: "☸️",
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      year: "2021",
      icon: "🔧",
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
            大規模システムの運用から新サービスの立ち上げまで、様々なプロジェクトでSREとしての価値を提供してきました。
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
                              className="text-foreground/80 flex items-start"
                            >
                              <span className="text-success mr-2 mt-1">▸</span>
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
