"use client";

import type { NextUIColor } from "@/types/ui";
import { Card, CardBody, Chip, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Monitor, Settings, Shield } from "lucide-react";
import React from "react";

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Google Cloud",
      icon: Cloud,
      color: "primary",
      skills: [
        {
          name: "Cloud Run",
          level: 90,
          description: "サーバーレスコンテナ実行環境",
        },
        {
          name: "Cloud Load Balancing",
          level: 80,
          description: "分散型アーキテクチャ",
        },
        {
          name: "Cloud Armor",
          level: 70,
          description: "WAF 運用",
        },
        {
          name: "VPC Service Controls",
          level: 70,
          description: "API アクセス制御",
        },
        {
          name: "NotebookLM for Enteprise",
          level: 70,
          description: "AI ノートブック環境",
        },
        {
          name: "Compute Engine",
          level: 60,
          description: "VM 管理・オートスケーリング",
        },
        {
          name: "Kubernetes Engine",
          level: 50,
          description: "GKE クラスター運用",
        },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Settings,
      color: "secondary",
      skills: [
        {
          name: "Terraform",
          level: 90,
          description: "IaC によるインフラ自動化",
        },
        { name: "Cloud Build", level: 90, description: "CI/CD パイプライン" },
        { name: "Docker", level: 80, description: "コンテナ化技術" },
        {
          name: "GitHub Actions",
          level: 80,
          description: "CI/CD パイプライン",
        },
        { name: "Cloud Deploy", level: 80, description: "CD パイプライン" },
        { name: "Kustomize", level: 60, description: "Kubernetes 設定管理" },
        {
          name: "Skaffold",
          level: 50,
          description: "CI/CD オーケストレーションツール",
        },
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      color: "success",
      skills: [
        {
          name: "Cloud Monitoring",
          level: 80,
          description: "包括的メトリクス監視",
        },
        {
          name: "Cloud Logging",
          level: 80,
          description: "ログ収集・分析",
        },
        { name: "Cloud Trace", level: 60, description: "分散トレーシング" },
        { name: "OpenTelemetry", level: 60, description: "観測可能性" },
        { name: "Prometheus", level: 30, description: "メトリクス収集" },
        { name: "Grafana", level: 30, description: "ダッシュボード構築" },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "warning",
      skills: [
        { name: "YAML/JSON", level: 90, description: "設定管理" },
        {
          name: "Python",
          level: 80,
          description: "API 開発・自動化スクリプト",
        },
        { name: "Bash/Shell", level: 60, description: "システム管理" },
        { name: "JavaScript", level: 60, description: "フロントエンド開発" },
        { name: "Go", level: 50, description: "マイクロサービス開発" },
        { name: "TypeScript", level: 50, description: "フロントエンド開発" },
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "danger",
      skills: [
        {
          name: "Cloud Storage",
          level: 90,
          description: "オブジェクトストレージ",
        },
        { name: "Firestore", level: 80, description: "NoSQL 運用" },
        { name: "Cloud SQL", level: 80, description: "RDBMS 運用" },
        {
          name: "Vertex AI Vector Search",
          level: 60,
          description: "ベクトル検索",
        },
        { name: "Memorystore", level: 60, description: "キャッシュ管理" },
        { name: "BigQuery", level: 50, description: "データウェアハウス運用" },
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "default",
      skills: [
        { name: "Cloud IAM", level: 90, description: "アクセス制御管理" },
        {
          name: "Cloud NGFW",
          level: 80,
          description: "ファイアウォール運用",
        },
        { name: "Cloud Armor", level: 80, description: "WAF 運用" },
        {
          name: "Secret Manager",
          level: 70,
          description: "シークレット管理",
        },
        { name: "Cloud IAP", level: 60, description: "IAP 運用" },
        {
          name: "Cloud Security Command Center",
          level: 60,
          description: "セキュリティ監視",
        },
      ],
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
            Google Cloud を中心とした最新技術を活用し、
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
                クラウド技術と SRE 分野は急速に進化しています。
                <br />
                最新のトレンドとベストプラクティスを常にキャッチアップし、継続的にスキルセットを拡張しています。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Google Cloud Next", "Jagu'e'r", "Zenn", "Qiita"].map(
                  (event, index) => (
                    <Chip key={index} variant="flat" color="primary" size="sm">
                      {event}
                    </Chip>
                  )
                )}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
