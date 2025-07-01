import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Research",
      description: "Understanding your goals, target audience, and project requirements through comprehensive research and analysis.",
      features: ["User Research", "Competitor Analysis", "Requirements Gathering", "Project Planning"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: PenTool,
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes to visualize the solution before development.",
      features: ["Wireframing", "UI/UX Design", "Prototyping", "User Testing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Building the solution with clean, efficient code and thorough testing to ensure quality and performance.",
      features: ["Frontend Development", "Backend Integration", "Quality Assurance", "Performance Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Launch & Support",
      description: "Deploying the final product and providing ongoing support, maintenance, and optimization.",
      features: ["Deployment", "Launch Support", "Maintenance", "Continuous Improvement"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            My Process
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and exceptional results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 bg-neutral-50 dark:bg-neutral-800 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Step {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-neutral-900 dark:text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              Quality Assured
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Every project goes through rigorous testing and quality checks to ensure the highest standards.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              On-Time Delivery
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Clear timelines and regular updates ensure your project is delivered on schedule.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              Ongoing Support
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Post-launch support and maintenance to keep your project running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 