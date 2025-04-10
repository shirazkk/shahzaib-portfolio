"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string[];
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Branding | ShaziDzins",
      category: "branding",
      image: ["/project_1/1.jpg", "/project_1/2.jpg", "/project_1/3.jpg", "/project_1/4.jpg", "/project_1/5.jpg", "/project_1/6.jpg", "/project_1/7.jpg", "/project_1/8.jpg", "/project_1/9.jpg", "/project_1/10.jpg", "/project_1/11.jpg", "/project_1/12.jpg", "/project_1/13.jpg", "/project_1/14.jpg"],
    },
    {
      id: 2,
      title: "Brand Identity for D64 Trendz",
      category: "branding",
      image: ["/project_2/1.jpg", "/project_2/2.jpg", "/project_2/3.jpg", "/project_2/4.jpg", "/project_2/5.jpg", "/project_2/6.jpg", "/project_2/7.jpg", "/project_2/8.jpg", "/project_2/9.jpg", "/project_2/10.jpg", "/project_2/11.jpg", "/project_2/12.jpg", "/project_2/13.jpg", "/project_2/14.jpg", "/project_2/15.jpg", "/project_2/16.jpg"],
    },
    {
      id: 3,
      title: "Zuu Clothing Brand",
      category: "branding",
      image: ["/project_3/1.jpg", "/project_3/2.jpg", "/project_3/3.jpg", "/project_3/4.jpg", "/project_3/5.jpg", "/project_3/6.gif", "/project_3/7.jpg",],
    },
    {
      id: 4,
      title: "Logo Design for KE Leathers",
      category: "logo",
      image: ["/project_4/1.jpg", "/project_4/2.jpg", "/project_4/3.jpg", "/project_4/4.jpg", "/project_4/5.jpg", "/project_4/6.jpg", "/project_4/7.jpg", "/project_4/8.jpg", "/project_4/9.jpg", "/project_4/10.jpg", "/project_4/11.jpg", "/project_4/12.jpg"],
    },
    {
      id: 5,
      title: "MBA Couture's Brand Identity",
      category: "branding",
      image: ["/project_5/1.jpg", "/project_5/2.jpg", "/project_5/3.jpeg", "/project_5/4.jpg", "/project_5/5.jpg", "/project_5/6.jpeg", "/project_5/7.jpeg", "/project_5/8.jpeg", "/project_5/9.jpeg", "/project_5/10.jpeg"],
    },
    // {
    //   id: 6,
    //   title: "Brand Identity Design for Hani Store",
    //   category: "branding",
    //   image: "",
    // },
    // {
    //   id: 7,
    //   title: "Social Media Graphics | Post Design",
    //   category: "social",
    //   image: "/placeholder.svg?height=600&width=800",
    // },
    {
      id: 6,
      title: "Engagement Ceremony Card Design",
      category: "print",
      image: ["/project_6/1.jpg", "/project_6/2.jpg", "/project_6/3.jpg", "/project_6/4.jpg"],
    },
    // {
    //   id: 9,
    //   title: "Birthday Card Design | Birthday Poster",
    //   category: "print",
    //   image: "/placeholder.svg?height=600&width=800",
    // },
    // {
    //   id: 10,
    //   title: "Hospital's Poster Design",
    //   category: "print",
    //   image: "/placeholder.svg?height=600&width=800",
    // },
    // {
    //   id: 11,
    //   title: "Social Media Post Design",
    //   category: "social",
    //   image: "/placeholder.svg?height=600&width=800",
    // },
    // {
    //   id: 12,
    //   title: "PZ Logo Design",
    //   category: "logo",
    //   image: "/placeholder.svg?height=600&width=800",
    // },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-[#7C3BED] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my recent design projects showcasing my expertise in
            branding, logo design, print materials, and social media graphics.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12 ">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All
              </TabsTrigger>
              <TabsTrigger
                value="branding"
                onClick={() => setFilter("branding")}
              >
                Branding
              </TabsTrigger>
              <TabsTrigger value="logo" onClick={() => setFilter("logo")}>
                Logo Design
              </TabsTrigger>
              {/* <TabsTrigger value="social" onClick={() => setFilter("social")}>
                Social Media
              </TabsTrigger> */}
              <TabsTrigger value="print" onClick={() => setFilter("print")}>
                Print Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className=" overflow-hidden  cursor-pointer"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="branding" className="mt-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-card overflow-hidden reveal cursor-pointer"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="logo" className="mt-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-card overflow-hidden reveal cursor-pointer"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-card overflow-hidden reveal cursor-pointer"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="print" className="mt-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className=" overflow-hidden  cursor-pointer"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="capitalize text-muted-foreground">
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className=" h-80 w-full mt-4">
              {selectedProject.image.map((image, index) => (
                <div key={index} className="relative h-64 w-full mb-4">
                  <Image
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
