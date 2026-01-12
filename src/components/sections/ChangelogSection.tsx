"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Calendar,
  GitCommit,
  Plus,
  RefreshCw,
  Sparkles,
  Wrench,
} from "lucide-react";
import React from "react";

type ChangeType = "feature" | "improvement" | "fix" | "update" | "modify";

interface ChangelogEntry {
  date: string;
  version: string;
  changes: {
    type: ChangeType;
    description: string;
  }[];
}

export const ChangelogSection: React.FC = () => {
  const changelog: ChangelogEntry[] = [
    {
      date: "2026-01-13",
      version: "1.1.0",
      changes: [
        {
          type: "feature",
          description: "変更履歴セクションを追加",
        },
        {
          type: "update",
          description: "SNS に LinkedIn のリンクを追加",
        },
        {
          type: "modify",
          description: "お問い合わせフォームを Google Forms に変更",
        },
      ],
    },
    {
      date: "2026-01-11",
      version: "0.2.0",
      changes: [
        {
          type: "improvement",
          description: "ダークモード実装",
        },
        {
          type: "improvement",
          description: "連絡先 Email を有効化",
        },
      ],
    },
    {
      date: "2026-01-10",
      version: "1.0.0",
      changes: [
        {
          type: "feature",
          description: "ポートフォリオサイトの初期リリース",
        },
      ],
    },
  ];

  const getChangeIcon = (type: ChangeType) => {
    switch (type) {
      case "feature":
        return Plus;
      case "improvement":
        return Sparkles;
      case "fix":
        return Wrench;
      case "update":
        return RefreshCw;
      case "modify":
        return GitCommit;
    }
  };

  const getChangeColor = (
    type: ChangeType
  ): "success" | "primary" | "warning" | "secondary" => {
    switch (type) {
      case "feature":
        return "success";
      case "improvement":
        return "primary";
      case "fix":
        return "warning";
      case "update":
        return "secondary";
      case "modify":
        return "secondary";
    }
  };

  const getChangeLabel = (type: ChangeType) => {
    switch (type) {
      case "feature":
        return "新機能";
      case "improvement":
        return "改善";
      case "fix":
        return "修正";
      case "update":
        return "更新";
      case "modify":
        return "変更";
    }
  };

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
    <section id="changelog" className="py-20 px-6 bg-content1">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="warning" className="mb-4">
            Changelog
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">変更履歴</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            このポートフォリオサイトの更新履歴です。
            <br />
            新機能や改善点をこちらで確認できます。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-warning hidden md:block" />

          <div className="space-y-8">
            {changelog.map((entry, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass hover:shadow-lg transition-shadow duration-300 md:ml-16">
                  <CardBody className="p-6">
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.35rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Chip variant="solid" color="primary" size="sm">
                          v{entry.version}
                        </Chip>
                        <div className="flex items-center text-foreground/70">
                          <Calendar
                            size={16}
                            className="mr-2"
                            aria-hidden="true"
                          />
                          {entry.date}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {entry.changes.map((change, changeIndex) => {
                        const IconComponent = getChangeIcon(change.type);
                        const color = getChangeColor(change.type);
                        return (
                          <div
                            key={changeIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-content2/50"
                          >
                            <div
                              className={`p-1.5 rounded-full bg-${color}/10 flex-shrink-0`}
                            >
                              <IconComponent
                                size={16}
                                className={`text-${color}`}
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <Chip variant="flat" color={color} size="sm">
                                  {getChangeLabel(change.type)}
                                </Chip>
                              </div>
                              <p className="text-foreground/80">
                                {change.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
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
