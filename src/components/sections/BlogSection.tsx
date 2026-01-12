"use client";

import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

import { LinkCard } from "@/components/ui/LinkCard";

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      url: "https://zenn.dev/k_s_666/articles/gcp-free-tier-checker",
      tags: ["Google Cloud", "Next.js", "Firebase", "SRE", "Serverless"],
    },
    {
      url: "https://zenn.dev/cloud_ace/articles/docker-desktop-verification",
      tags: ["Docker", "Rancher Desktop", "Podman Desktop", "macOS", "SRE"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="blog" className="py-20 px-6 bg-content1">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="secondary" className="mb-4">
            Blog
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">技術ブログ</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            SRE・クラウドインフラに関する技術記事を発信しています。
            <br />
            実務で得た知見や個人開発の経験を共有しています。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.url} variants={itemVariants}>
              <div className="space-y-3">
                <LinkCard url={post.url} />
                {/* Tags */}
                <div className="flex flex-wrap gap-1 pl-1">
                  {post.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      variant="flat"
                      color="default"
                      size="sm"
                      className="text-xs"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Zenn Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            color="secondary"
            variant="bordered"
            size="lg"
            endContent={<ExternalLink size={18} aria-hidden="true" />}
            as="a"
            href="https://zenn.dev/k_s_666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zenn でその他の記事を見る（新しいタブで開きます）"
          >
            Zenn でその他の記事を見る
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
