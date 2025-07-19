"use client";

import type { NextUIColor } from "@/types/ui";
import { Card, CardBody, Chip, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Monitor, Settings, Shield } from "lucide-react";
import React from "react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Google Cloud Platform",
      icon: Cloud,
      color: "primary",
      skills: [
        {
          name: "Compute Engine",
          level: 95,
          description: "VM管理・オートスケーリング",
        },
        {
          name: "Kubernetes Engine",
          level: 90,
          description: "GKEクラスター運用",
        },
        { name: "Cloud Run", level: 88, description: "サーバーレスコンテナ" },
        { name: "Cloud SQL", level: 85, description: "マネージドDB運用" },
        { name: "Cloud Monitoring", level: 92, description: "包括的監視" },
        {
          name: "Cloud Storage",
          level: 90,
          description: "オブジェクトストレージ",
        },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Settings,
      color: "secondary",
      skills: [
        { name: "Terraform", level: 92, description: "IaCによる自動化" },
        { name: "Ansible", level: 85, description: "設定管理自動化" },
        { name: "Docker", level: 90, description: "コンテナ化技術" },
        { name: "Jenkins", level: 80, description: "CI/CDパイプライン" },
        { name: "GitLab CI", level: 88, description: "GitOps実装" },
        { name: "ArgoCD", level: 82, description: "CD自動化" },
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "success",
      skills: [
        { name: "Prometheus", level: 90, description: "メトリクス収集" },
        { name: "Grafana", level: 88, description: "ダッシュボード構築" },
        { name: "ELK Stack", level: 85, description: "ログ分析基盤" },
        { name: "Jaeger", level: 78, description: "分散トレーシング" },
        { name: "OpenTelemetry", level: 75, description: "観測可能性" },
        { name: "Datadog", level: 80, description: "APM・インフラ監視" },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "warning",
      skills: [
        { name: "Python", level: 88, description: "自動化スクリプト" },
        { name: "Go", level: 82, description: "マイクロサービス開発" },
        { name: "Bash/Shell", level: 90, description: "システム管理" },
        { name: "JavaScript", level: 75, description: "フロントエンド開発" },
        { name: "YAML/JSON", level: 92, description: "設定管理" },
        { name: "SQL", level: 85, description: "データベース操作" },
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "danger",
      skills: [
        { name: "PostgreSQL", level: 85, description: "リレーショナルDB" },
        { name: "MySQL", level: 88, description: "RDBMS管理" },
        { name: "Redis", level: 82, description: "キャッシュ・セッション管理" },
        { name: "MongoDB", level: 75, description: "NoSQL運用" },
        { name: "BigQuery", level: 80, description: "データウェアハウス" },
        { name: "Cloud Spanner", level: 70, description: "グローバル分散DB" },
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "default",
      skills: [
        { name: "IAM", level: 88, description: "アクセス制御管理" },
        {
          name: "Network Security",
          level: 85,
          description: "ファイアウォール・VPN",
        },
        { name: "SSL/TLS", level: 90, description: "暗号化通信" },
        { name: "Security Scanning", level: 80, description: "脆弱性検査" },
        { name: "Compliance", level: 85, description: "SOC2・ISO27001" },
        {
          name: "Secret Management",
          level: 82,
          description: "シークレット管理",
        },
      ],
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
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="primary" className="mb-4">
            Technical Skills
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">技術スタック</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Google Cloud Platformを中心とした最新技術を活用し、
            信頼性の高いシステムを構築・運用するための包括的なスキルセットです。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <Card className="h-full glass hover:shadow-lg transition-shadow duration-300">
                  <CardBody className="p-6">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-full bg-${category.color}/10 mr-4`}
                        role="img"
                        aria-label={`${category.title}のアイコン`}
                      >
                        <IconComponent
                          size={24}
                          className={`text-${category.color}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <h4 className="font-semibold text-foreground text-sm">
                                {skill.name}
                              </h4>
                              <p className="text-xs text-foreground/60">
                                {skill.description}
                              </p>
                            </div>
                            <span className="text-sm font-medium text-foreground/80">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            size="sm"
                            color={category.color as NextUIColor}
                            value={skill.level}
                            className="mb-2"
                            aria-label={`${skill.name}のスキルレベル: ${skill.level}%`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                継続的な学習と成長
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                クラウド技術とSRE分野は急速に進化しています。最新のトレンドとベストプラクティスを
                常にキャッチアップし、継続的にスキルセットを拡張しています。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Google Cloud Next",
                  "KubeCon + CloudNativeCon",
                  "SREcon",
                  "DevOps Days",
                  "HashiConf",
                  "DockerCon",
                ].map((event, index) => (
                  <Chip key={index} variant="flat" color="primary" size="sm">
                    {event}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
