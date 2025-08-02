"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  ExternalLink,
  Github,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "マルチクラウド監視基盤構築（Sample）",
      description:
        "Google Cloud、AWS、Azure 間の統合監視システムを構築。Prometheus、Grafana、OpenTelemetry を活用し、3つのクラウドプロバイダーにまたがるインフラの可視化を実現。",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: [
        "Google Cloud",
        "Prometheus",
        "Grafana",
        "OpenTelemetry",
        "Kubernetes",
        "Terraform",
      ],
      achievements: [
        "MTTD（平均検知時間）を 75 % 短縮",
        "運用コストを 40 % 削減",
        "可用性 99.99 % を達成",
        "アラート疲れを 85 % 軽減",
      ],
      metrics: {
        impact: "3 つのクラウド統合監視",
        users: "500+",
        uptime: "99.99 %",
        period: "8 ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "completed",
      featured: true,
    },
    {
      title: "Kubernetes 自動スケーリング最適化（Sample）",
      description:
        "GKE 上でのマイクロサービス群に対して、HPA と VPA を組み合わせた自動スケーリング戦略を実装。機械学習を活用した予測スケーリングによりリソース効率を大幅改善。",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      technologies: [
        "Google Kubernetes Engine",
        "HPA",
        "VPA",
        "Prometheus",
        "Python",
        "Machine Learning",
      ],
      achievements: [
        "リソース使用率を 60 % 向上",
        "レスポンス時間を 35 % 改善",
        "インフラコストを 50 % 削減",
        "予測精度 90 % 以上を達成",
      ],
      metrics: {
        impact: "自動スケーリング最適化",
        users: "10 k+",
        uptime: "99.95 %",
        period: "6 ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "completed",
      featured: true,
    },
    {
      title: "ゼロダウンタイムデプロイメント（Sample）",
      description:
        "Blue-Green デプロイメントと Canary リリースを組み合わせた安全なデプロイメント戦略を確立。Istio Service Mesh を活用したトラフィック制御により、本番環境でのリスクを最小化。",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: [
        "Istio",
        "ArgoCD",
        "GitLab CI/CD",
        "Kubernetes",
        "Helm",
        "Prometheus",
      ],
      achievements: [
        "デプロイメント失敗率を 95 % 削減",
        "ロールバック時間を 90 % 短縮",
        "デプロイ頻度を日次に向上",
        "本番障害ゼロを 6 ヶ月継続",
      ],
      metrics: {
        impact: "ゼロダウンタイム実現",
        users: "50k+",
        uptime: "100%",
        period: "4ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "completed",
      featured: true,
    },
    {
      title: "災害対策・BCP 自動化（Sample）",
      description:
        "Google Cloud Region をまたいだ DR（災害復旧）システムを構築。Terraform Cloud と Cloud Build を活用した完全自動化により、RPO / RTO の大幅な短縮を実現。",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
      technologies: [
        "Google Cloud",
        "Terraform Cloud",
        "Cloud Build",
        "Cloud SQL",
        "GCS",
        "Cloud Functions",
      ],
      achievements: [
        "RPO（目標復旧時点）15 分以内",
        "RTO（目標復旧時間）30 分以内",
        "DR 訓練の自動化を実現",
        "コンプライアンス 100 % 達成",
      ],
      metrics: {
        impact: "DR 自動化システム",
        users: "1 k+",
        uptime: "99.9 %",
        period: "10 ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "completed",
      featured: false,
    },
    {
      title: "Cost Optimization Dashboard（Sample）",
      description:
        "Google Cloud Billing API と BigQuery を活用したコスト最適化ダッシュボードを開発。リアルタイムのコスト監視と予算アラート、リソース使用率の最適化推奨機能を実装。",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        "BigQuery",
        "Cloud Functions",
        "Looker Studio",
        "Python",
        "Cloud Billing API",
        "Pub/Sub",
      ],
      achievements: [
        "月次クラウドコストを 30 % 削減",
        "リソース無駄遣いを 85 % 削減",
        "予算超過アラートの自動化",
        "コスト予測精度 95 % 達成",
      ],
      metrics: {
        impact: "コスト最適化",
        users: "100+",
        uptime: "99.9 %",
        period: "3 ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "in-progress",
      featured: false,
    },
    {
      title: "セキュリティ自動化基盤（Sample）",
      description:
        "Google Cloud Security Command Center と連携したセキュリティ自動化システムを構築。脆弱性検出、コンプライアンスチェック、インシデント対応の完全自動化を実現。",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: [
        "Security Command Center",
        "Cloud Security Scanner",
        "Cloud Functions",
        "Pub/Sub",
        "Terraform",
        "Python",
      ],
      achievements: [
        "セキュリティスキャン自動化",
        "脆弱性検出時間を 90 % 短縮",
        "コンプライアンス報告自動化",
        "インシデント対応時間を 70 % 削減",
      ],
      metrics: {
        impact: "セキュリティ自動化",
        users: "200+",
        uptime: "99.95 %",
        period: "7 ヶ月",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "completed",
      featured: false,
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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-content1">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="success" className="mb-4">
            Projects
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">プロジェクト実績</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Google Cloud
            を活用した大規模システムの構築・運用プロジェクトの一部をご紹介します。
            各プロジェクトで実現した具体的な成果と技術的な課題解決をご覧ください。
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">注目プロジェクト</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full glass hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={`${project.title}のプロジェクト画像`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Chip
                          color={
                            project.status === "completed"
                              ? "success"
                              : "warning"
                          }
                          size="sm"
                          variant="flat"
                        >
                          {project.status === "completed" ? "完了" : "進行中"}
                        </Chip>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {project.title}
                    </h4>
                    <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-content2 rounded-lg">
                      <div className="text-center">
                        <TrendingUp
                          size={16}
                          className="mx-auto mb-1 text-primary"
                          aria-hidden="true"
                        />
                        <p className="text-xs text-foreground/60">影響範囲</p>
                        <p className="text-sm font-semibold text-foreground">
                          {project.metrics.impact}
                        </p>
                      </div>
                      <div className="text-center">
                        <Users
                          size={16}
                          className="mx-auto mb-1 text-secondary"
                          aria-hidden="true"
                        />
                        <p className="text-xs text-foreground/60">ユーザー</p>
                        <p className="text-sm font-semibold text-foreground">
                          {project.metrics.users}
                        </p>
                      </div>
                      <div className="text-center">
                        <Award
                          size={16}
                          className="mx-auto mb-1 text-success"
                          aria-hidden="true"
                        />
                        <p className="text-xs text-foreground/60">可用性</p>
                        <p className="text-sm font-semibold text-foreground">
                          {project.metrics.uptime}
                        </p>
                      </div>
                      <div className="text-center">
                        <Clock
                          size={16}
                          className="mx-auto mb-1 text-warning"
                          aria-hidden="true"
                        />
                        <p className="text-xs text-foreground/60">期間</p>
                        <p className="text-sm font-semibold text-foreground">
                          {project.metrics.period}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">
                        主な成果
                      </h5>
                      <ul className="space-y-1">
                        {project.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-foreground/70 flex items-start"
                            >
                              <span className="text-success mr-2">▸</span>
                              {achievement}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">
                        技術スタック
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Chip
                            key={idx}
                            variant="flat"
                            color="primary"
                            size="sm"
                            className="text-xs"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        color="primary"
                        variant="flat"
                        startContent={
                          <ExternalLink size={14} aria-hidden="true" />
                        }
                        as="a"
                        href={project.links.demo}
                        aria-label={`${project.title}の詳細を見る`}
                      >
                        詳細
                      </Button>
                      <Button
                        size="sm"
                        variant="bordered"
                        startContent={<Github size={14} aria-hidden="true" />}
                        as="a"
                        href={project.links.github}
                        aria-label={`${project.title}のソースコードを見る`}
                      >
                        Code
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">その他のプロジェクト</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass hover:shadow-lg transition-shadow duration-300">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h4>
                      <Chip
                        color={
                          project.status === "completed" ? "success" : "warning"
                        }
                        size="sm"
                        variant="flat"
                      >
                        {project.status === "completed" ? "完了" : "進行中"}
                      </Chip>
                    </div>

                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">
                        技術スタック
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Chip
                            key={idx}
                            variant="flat"
                            color="primary"
                            size="sm"
                            className="text-xs"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Button
                        size="sm"
                        color="primary"
                        variant="flat"
                        startContent={
                          <ExternalLink size={14} aria-hidden="true" />
                        }
                        as="a"
                        href={project.links.demo}
                        className="flex-1"
                        aria-label={`${project.title}の詳細を見る`}
                      >
                        詳細
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
