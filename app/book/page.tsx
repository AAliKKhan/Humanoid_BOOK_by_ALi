"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, X } from "lucide-react"
import Header from "@/components/header"
import Chatbot from "@/components/chatbot"
import TextSelectionToolbar from "@/components/text-selection-toolbar"
import TranslationModal from "@/components/translation-modal"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs" // Import Clerk components

const chapters = [
  {
    id: 1,
    title: "Chapter 1: Foundations of Physical AI",
    content: `# Foundations of Physical AI

Welcome to the exciting world of Physical AI! This chapter introduces you to the core concepts that bridge the gap between pure software intelligence and robots that interact with the physical world.

## What is Physical AI?

Physical AI represents the convergence of artificial intelligence with physical systems. Unlike traditional AI that operates purely in the digital realm, Physical AI enables machines to perceive, reason about, and interact with the physical environment.

### Key Components

**1. Perception Systems**
Physical AI systems require sophisticated sensors to understand their environment. These include:
- Vision systems (cameras, depth sensors, LiDAR)
- Tactile sensors for touch and pressure
- Proprioceptive sensors for self-awareness
- Environmental sensors (temperature, humidity, etc.)

**2. Reasoning and Planning**
The AI must process sensory information and make decisions:
- Real-time environment mapping
- Object recognition and classification
- Motion planning and trajectory optimization
- Collision avoidance algorithms

**3. Actuation and Control**
Converting decisions into physical actions:
- Motor control systems
- Force and torque management
- Balance and stability algorithms
- Energy-efficient movement strategies

## Historical Context

The journey of Physical AI began in the 1960s with early robotics research. Industrial robots were the first manifestation, performing repetitive tasks in controlled environments. The field has evolved dramatically with advances in:

- **1960s-1970s:** Industrial automation and basic manipulators
- **1980s-1990s:** Mobile robots and early humanoid prototypes
- **2000s-2010s:** Advanced machine learning integration
- **2020s:** Deep learning revolution and embodied AI

## The Embodiment Challenge

One of the fundamental challenges in Physical AI is the "embodiment problem" - how do we create AI systems that truly understand and effectively interact with physical spaces?

### Simulation vs. Reality Gap

Training AI in simulation is efficient but doesn't perfectly translate to real-world performance. This gap exists due to:
- Physics modeling limitations
- Sensor noise and variability
- Unpredictable environmental factors
- Material and mechanical variations

### Solutions and Approaches

Modern approaches to bridging this gap include:
- Domain randomization in training
- Sim-to-real transfer learning
- Real-world fine-tuning
- Hybrid simulation-reality training

## The Future of Physical AI

As we look ahead, Physical AI promises to revolutionize:
- Manufacturing and logistics
- Healthcare and elderly care
- Search and rescue operations
- Space exploration
- Domestic assistance

The convergence of AI breakthroughs, advanced materials, and sophisticated control systems is bringing us closer to truly intelligent physical agents that can operate safely and effectively in human environments.

## Conclusion

Understanding the foundations of Physical AI is crucial for grasping the complexities of humanoid robotics. In the next chapter, we'll explore how these principles apply specifically to humanoid robot design and the unique challenges of creating machines that mimic human form and function.`,
  },
  {
    id: 2,
    title: "Chapter 2: Humanoid Robot Design",
    content: `# Humanoid Robot Design

Creating robots in human form is both an engineering challenge and a philosophical endeavor. This chapter explores the principles, challenges, and innovations in humanoid robot design.

## Why Humanoid Form?

The decision to create robots in human form is driven by several practical and theoretical considerations:

### Environmental Compatibility
Our world is designed for humans - stairs, doorways, tools, and furniture. A humanoid form factor allows robots to navigate and utilize human spaces without requiring environmental modifications.

### Social Interaction
Humans naturally relate to humanoid forms. This familiarity can:
- Reduce anxiety in human-robot interactions
- Enable intuitive communication through gestures
- Facilitate acceptance in social settings
- Support empathetic responses

### Functional Versatility
The human body represents millions of years of evolutionary optimization for:
- Bipedal locomotion
- Fine manipulation
- Balance and agility
- Tool use

## Mechanical Design Principles

### Skeletal Structure

The framework of a humanoid robot must balance several competing requirements:

**Strength vs. Weight**
- Lightweight materials (carbon fiber, aluminum alloys)
- Strategic reinforcement at high-stress points
- Modular design for maintenance and upgrades

**Flexibility vs. Stability**
- Multiple degrees of freedom for human-like movement
- Structural rigidity where needed
- Joint design that mimics biological range of motion

### Actuator Selection

Modern humanoid robots use various actuation technologies:

**1. Electric Motors**
- Precise control
- Energy efficient
- Easy to integrate with control systems
- Limitations in power-to-weight ratio

**2. Hydraulic Systems**
- High power output
- Excellent for large forces
- Challenges with leaks and maintenance
- Used in heavy-duty applications

**3. Pneumatic Actuators**
- Compliant and safe
- Natural shock absorption
- Difficulties with precise control
- Ideal for collaborative robots

**4. Series Elastic Actuators (SEAs)**
- Spring element between motor and load
- Force sensing and control
- Impact absorption
- Popular in research platforms

## Sensory Systems

A humanoid robot requires comprehensive sensory information:

### Visual Perception
- Stereo cameras for depth perception
- High-resolution RGB cameras
- Infrared sensors for low-light operation
- Event cameras for rapid motion tracking

### Tactile Feedback
- Force sensors in hands and feet
- Pressure-sensitive skin
- Temperature sensors
- Slip detection for grip control

### Balance and Proprioception
- Inertial Measurement Units (IMUs)
- Joint position encoders
- Ground reaction force sensors
- Vestibular system analogs

## Control Architectures

### Hierarchical Control

Humanoid robot control typically operates at multiple levels:

**High-Level Planning**
- Task decomposition
- Motion planning
- Decision making

**Mid-Level Control**
- Trajectory generation
- Gait planning
- Manipulation strategies

**Low-Level Control**
- Joint-level servo control
- Force control
- Real-time feedback loops

### Walking and Balance

Bipedal locomotion is one of the most challenging aspects:

**Zero Moment Point (ZMP)**
- Criterion for dynamic stability
- Maintains center of pressure within support polygon
- Foundation of many walking controllers

**Model Predictive Control (MPC)**
- Predicts future states
- Optimizes control actions
- Handles constraints and disturbances

**Learning-Based Approaches**
- Deep reinforcement learning for robust gaits
- Adapts to different terrains
- Learns from demonstration

## Case Studies

### Atlas (Boston Dynamics)
- Hydraulic actuation
- Advanced perception and control
- Demonstrates parkour and dynamic movements

### ASIMO (Honda)
- Electric motors throughout
- Pioneered humanoid walking
- Focus on human interaction

### Optimus (Tesla)
- Production-focused design
- Cost optimization
- AI-first approach

## Design Challenges and Solutions

**Challenge 1: Energy Efficiency**
Solution: Regenerative braking, efficient gaits, lightweight materials

**Challenge 2: Robustness**
Solution: Compliant actuators, redundant sensors, fault-tolerant control

**Challenge 3: Cost**
Solution: Standardized components, simplified designs, economies of scale

## The Future of Humanoid Design

Emerging trends include:
- Soft robotics integration
- Artificial muscles
- Brain-inspired control architectures
- Modular and reconfigurable designs

In the next chapter, we'll explore how machine learning enhances these mechanical systems, enabling adaptive and intelligent behavior.`,
  },
  {
    id: 3,
    title: "Chapter 3: Machine Learning for Robotics",
    content: `# Machine Learning for Robotics

Machine learning has revolutionized robotics, enabling systems to learn from experience, adapt to new situations, and handle the complexity and uncertainty of the real world.

## The Machine Learning Revolution

Traditional robotics relied on hand-crafted algorithms and explicit programming. Machine learning brings:
- Adaptation to new environments
- Learning from demonstrations
- Handling of uncertainty
- Discovery of optimal strategies

## Core ML Paradigms for Robotics

### Supervised Learning

Training robots using labeled data:

**Applications:**
- Object recognition and classification
- Pose estimation
- Trajectory prediction
- Quality inspection

**Key Algorithms:**
- Convolutional Neural Networks (CNNs) for vision
- Recurrent Neural Networks (RNNs) for sequences
- Transformers for attention-based processing

### Reinforcement Learning

Learning through interaction and reward:

**The RL Framework:**
- Agent observes state
- Takes action
- Receives reward
- Updates policy

**Popular Algorithms:**
- Deep Q-Networks (DQN)
- Proximal Policy Optimization (PPO)
- Soft Actor-Critic (SAC)
- Trust Region Policy Optimization (TRPO)

**Robotics Applications:**
- Grasping and manipulation
- Locomotion and navigation
- Task planning
- Multi-robot coordination

### Imitation Learning

Learning from expert demonstrations:

**Behavioral Cloning:**
- Direct mapping from observations to actions
- Requires high-quality demonstrations
- Can suffer from distribution shift

**Inverse Reinforcement Learning:**
- Infers reward function from demonstrations
- More robust to variations
- Requires more computational resources

## Computer Vision for Robotics

Vision is critical for robot perception:

### Object Detection and Recognition

**Classical Approaches:**
- Feature extraction (SIFT, SURF, HOG)
- Template matching
- Geometric hashing

**Deep Learning Approaches:**
- YOLO (You Only Look Once)
- Faster R-CNN
- EfficientDet
- Vision Transformers

### Depth Estimation

Understanding 3D structure:
- Stereo vision algorithms
- Structure from Motion
- Monocular depth estimation networks
- RGB-D sensor fusion

### Semantic Segmentation

Pixel-level understanding:
- U-Net architectures
- DeepLab series
- Mask R-CNN for instance segmentation
- Real-time segmentation for robotics

## Motion Planning with Learning

### Classical Planning
- Rapidly-exploring Random Trees (RRT)
- Probabilistic Roadmaps (PRM)
- Trajectory optimization

### Learning-Based Planning
- Neural motion planners
- Learned cost functions
- End-to-end visuomotor policies
- Differentiable planning modules

## Manipulation and Grasping

### Grasp Planning

Traditional methods:
- Force closure analysis
- Grasp quality metrics
- Analytical grasp synthesis

Learning-based methods:
- Deep learning for grasp detection
- Grasp success prediction
- Self-supervised learning from trials

### Dexterous Manipulation

Advanced manipulation requires:
- Multi-finger coordination
- In-hand manipulation
- Contact-rich interactions
- Deformable object handling

## Sim-to-Real Transfer

### The Reality Gap

Simulation differs from reality:
- Physics approximations
- Sensor models
- Actuator dynamics
- Environmental variability

### Transfer Techniques

**Domain Randomization:**
- Randomize simulation parameters
- Textures, lighting, object properties
- Creates robust policies

**Domain Adaptation:**
- Align simulation and real distributions
- Adversarial training
- Feature-level alignment

**Real-World Fine-Tuning:**
- Start with sim-trained policy
- Adapt with real-world data
- Sample-efficient methods

## Multi-Modal Learning

Robots operate in multi-modal environments:

### Sensor Fusion
- Combining vision, touch, audio
- Cross-modal learning
- Attention mechanisms

### Language and Vision
- Vision-language models
- Natural language instructions
- Grounded language understanding

## Safety and Robustness

### Safe Reinforcement Learning

Ensuring safety during learning:
- Constrained RL
- Safe exploration strategies
- Fallback controllers
- Formal verification

### Robustness to Uncertainty

Handling real-world variability:
- Ensemble methods
- Uncertainty quantification
- Robust optimization
- Adversarial training

## Continual Learning

Robots must learn throughout their lifetime:

### Catastrophic Forgetting
- Problem: New learning overwrites old knowledge
- Solutions: Elastic Weight Consolidation, Progressive Neural Networks

### Lifelong Learning
- Accumulate knowledge over time
- Transfer between tasks
- Meta-learning for quick adaptation

## Future Directions

Emerging trends in ML for robotics:

**Foundation Models:**
- Large-scale pre-trained models
- Transfer to robotics tasks
- Leveraging internet-scale data

**Embodied AI:**
- Learning through interaction
- Grounded understanding
- Active perception

**Collaborative Learning:**
- Multi-robot learning
- Shared experiences
- Collective intelligence

## Conclusion

Machine learning has transformed robotics from pre-programmed systems to adaptive, intelligent agents. The next chapter explores how these technologies are deployed in real-world applications across various industries.`,
  },
  {
    id: 4,
    title: "Chapter 4: Real-World Applications",
    content: `# Real-World Applications

Physical AI and humanoid robotics are transitioning from research labs to real-world deployments. This chapter explores current applications and emerging use cases across various industries.

## Healthcare and Medical Robotics

### Surgical Assistance

**Robotic Surgery Systems:**
- Da Vinci Surgical System: Minimally invasive procedures
- Enhanced precision and dexterity
- Reduced recovery times
- Telesurgery capabilities

**AI Integration:**
- Computer vision for tissue recognition
- Automated suturing
- Real-time decision support
- Outcome prediction

### Rehabilitation and Therapy

**Rehabilitation Robots:**
- Exoskeletons for mobility assistance
- Prosthetics with AI-powered control
- Physical therapy guidance
- Stroke recovery support

**Social Robots:**
- Companion robots for elderly care
- Autism therapy assistants
- Mental health support
- Medication reminders

### Hospital Automation

**Service Robots:**
- Medication delivery
- Disinfection and cleaning
- Supply transport
- Patient monitoring

## Manufacturing and Industry

### Collaborative Robots (Cobots)

**Characteristics:**
- Safe human-robot interaction
- Adaptive to changing tasks
- Easy programming and deployment
- Force-limiting capabilities

**Applications:**
- Assembly line assistance
- Quality inspection
- Packaging and palletizing
- Machine tending

### Warehouse Automation

**Amazon Robotics:**
- Autonomous mobile robots
- Goods-to-person systems
- Inventory management
- Optimal path planning

**Advanced Picking:**
- AI-powered grasp planning
- Bin picking solutions
- Deformable object handling
- Multi-item grasping

### Predictive Maintenance

Using AI to prevent failures:
- Anomaly detection
- Remaining useful life prediction
- Optimal maintenance scheduling
- Reduced downtime

## Logistics and Delivery

### Last-Mile Delivery

**Ground Robots:**
- Sidewalk delivery robots
- Autonomous navigation
- Package compartments
- Human interaction protocols

**Aerial Delivery:**
- Drone delivery systems
- Urban air mobility
- Regulatory challenges
- Safety considerations

### Warehouse Operations

**Autonomous Forklifts:**
- Material movement
- Loading and unloading
- Inventory tracking
- Fleet coordination

## Agriculture and Food

### Precision Agriculture

**Autonomous Vehicles:**
- Self-driving tractors
- Planting and harvesting
- Field mapping and monitoring
- Variable rate application

**Monitoring and Inspection:**
- Crop health assessment
- Pest and disease detection
- Yield prediction
- Water and nutrient optimization

### Harvesting Robots

**Fruit Picking:**
- Vision-based fruit detection
- Gentle manipulation
- Selective harvesting
- 24/7 operation potential

## Service and Hospitality

### Hotel and Restaurant Automation

**Service Robots:**
- Room service delivery
- Concierge assistance
- Cleaning robots
- Kitchen automation

**Customer Interaction:**
- Check-in and information
- Multilingual support
- Entertainment and engagement
- Feedback collection

### Retail Automation

**Inventory Robots:**
- Shelf scanning
- Stock level monitoring
- Price verification
- Planogram compliance

**Customer Service:**
- Product information
- Store navigation
- Interactive displays
- Shopping assistance

## Construction and Infrastructure

### Automated Construction

**Robotic Systems:**
- Bricklaying robots
- 3D printing structures
- Welding and fabrication
- Material handling

**Inspection and Maintenance:**
- Infrastructure inspection (bridges, buildings)
- Façade cleaning
- Painting and coating
- Structural assessment

## Search and Rescue

### Disaster Response

**Ground Robots:**
- Rubble navigation
- Victim detection
- Hazardous material handling
- Communication relay

**Aerial Systems:**
- Search area coverage
- Thermal imaging
- Supply delivery
- Mapping and assessment

## Space Exploration

### Extraterrestrial Robotics

**Rovers and Landers:**
- Mars exploration (Curiosity, Perseverance)
- Sample collection
- Scientific experiments
- Autonomous navigation

**Humanoid Robots:**
- ISS assistants (Robonaut)
- Satellite servicing
- Lunar and Mars habitats
- Human-robot teams

## Education and Research

### Educational Platforms

**Teaching Robotics:**
- Programmable humanoid platforms
- STEM education
- Research testbeds
- Open-source hardware

## Defense and Security

### Military Applications

**Unmanned Systems:**
- Reconnaissance and surveillance
- Explosive ordnance disposal
- Logistics support
- Autonomous vehicles

**Ethical Considerations:**
- Autonomous weapons debate
- Rules of engagement
- International regulations
- Human oversight requirements

### Security and Surveillance

**Patrol Robots:**
- Perimeter monitoring
- Threat detection
- Access control
- Emergency response

## Emerging Applications

### Personal Robotics

**Home Assistants:**
- Cleaning and organization
- Cooking assistance
- Elder care
- Child supervision

**Companion Robots:**
- Social interaction
- Entertainment
- Education
- Emotional support

### Entertainment

**Performance Robots:**
- Theme park attractions
- Stage performances
- Interactive experiences
- Art installations

## Challenges in Deployment

### Technical Challenges
- Reliability and robustness
- Battery life and energy
- Maintenance and repairs
- Software updates

### Economic Challenges
- High initial costs
- ROI justification
- Integration expenses
- Training requirements

### Social Challenges
- Job displacement concerns
- Public acceptance
- Privacy issues
- Trust and safety

### Regulatory Challenges
- Safety standards
- Certification processes
- Liability questions
- International harmonization

## Success Factors

Keys to successful deployment:

**1. Clear Value Proposition**
- Solving real problems
- Measurable benefits
- Cost-effectiveness
- Scalability

**2. User-Centered Design**
- Intuitive interfaces
- Safety features
- Reliability
- Support and training

**3. Iterative Development**
- Start with pilot programs
- Gather feedback
- Continuous improvement
- Gradual rollout

## Future Outlook

The next decade will see:
- Increasing autonomy and capability
- Reduced costs through scale
- Better human-robot collaboration
- Wider societal integration

## Conclusion

Real-world applications of physical AI and humanoid robotics are rapidly expanding across healthcare, manufacturing, logistics, agriculture, and many other sectors. Success requires not just technical excellence, but also careful attention to economic viability, social acceptance, and regulatory compliance. As the technology matures and costs decrease, we can expect to see robots become an increasingly common part of our daily lives, working alongside humans to enhance productivity, safety, and quality of life.`,
  },
  {
    id: 5,
    title: "Chapter 5: Future of Humanoid Robotics",
    content: `# Future of Humanoid Robotics

As we stand at the threshold of a new era in robotics, this final chapter explores the exciting possibilities and challenges that lie ahead for humanoid robotics and physical AI.

## Technological Horizons

### Next-Generation Hardware

**Advanced Materials:**
- Soft robotics and compliant structures
- Self-healing materials
- Biodegradable components
- Smart materials with embedded sensors

**Energy Revolution:**
- High-density batteries
- Wireless power transfer
- Energy harvesting from environment
- Biological fuel cells

**Artificial Muscles:**
- Electroactive polymers
- Shape memory alloys
- Pneumatic artificial muscles
- Hydraulic amplification systems

### AI and Intelligence

**Foundation Models for Robotics:**
Large pre-trained models will transform how robots learn and adapt:
- Transfer learning across robot platforms
- Few-shot learning for new tasks
- Multimodal understanding (vision, language, touch)
- Emergent capabilities from scale

**Embodied AI:**
The next frontier in AI research:
- Learning through physical interaction
- Grounded language understanding
- Active perception and exploration
- World models for planning

**Consciousness and Awareness:**
Philosophical and technical questions:
- Machine consciousness debates
- Self-awareness in robots
- Subjective experience
- Ethical implications

## Human-Robot Collaboration

### Seamless Integration

**Intuitive Interfaces:**
- Natural language communication
- Gesture recognition
- Brain-computer interfaces
- Augmented reality control

**Shared Workspaces:**
- Safe collision avoidance
- Intent prediction
- Adaptive behavior
- Social norm compliance

**Trust and Transparency:**
- Explainable AI for robots
- Predictable behavior
- Clear communication of capabilities
- Error acknowledgment and recovery

## Societal Transformation

### Economic Impact

**Labor Market Evolution:**
- Displacement in routine jobs
- Creation of new professions
- Reskilling and education
- Universal basic income debates

**Productivity Gains:**
- 24/7 operation capability
- Precision and consistency
- Dangerous task automation
- Labor shortage solutions

**Economic Accessibility:**
- Declining costs through mass production
- Robot-as-a-Service models
- Democratization of automation
- Global competitiveness shifts

### Social Dynamics

**Changing Relationships:**
- Human-robot friendships
- Companion robots for elderly
- Robot caregivers and teachers
- Ethical boundaries

**Cultural Acceptance:**
- Generational differences in adoption
- Cultural variations in robot acceptance
- Media representation impact
- Overcoming uncanny valley

**Privacy and Surveillance:**
- Data collection concerns
- Home robot privacy
- Surveillance capabilities
- Regulation and protection

## Ethical Frameworks

### Design Ethics

**Value Alignment:**
- Encoding human values in AI
- Cultural sensitivity
- Handling moral dilemmas
- Transparency in decision-making

**Safety and Security:**
- Fail-safe mechanisms
- Cybersecurity for robots
- Physical safety standards
- Autonomous weapon treaties

**Accessibility and Equity:**
- Universal design principles
- Affordability considerations
- Avoiding bias in robot behavior
- Global access disparities

### Regulatory Landscape

**Safety Standards:**
- International harmonization
- Certification processes
- Liability frameworks
- Insurance models

**Rights and Responsibilities:**
- Robot legal status debates
- Accountability for actions
- Intellectual property
- Environmental regulations

## Emerging Applications

### Smart Cities

**Urban Infrastructure:**
- Autonomous maintenance robots
- Traffic management
- Waste collection and recycling
- Emergency response coordination

**Public Services:**
- Information kiosks
- Security and monitoring
- Accessibility assistance
- Public transportation integration

### Space and Ocean Exploration

**Extreme Environments:**
- Deep space missions
- Lunar and Martian bases
- Deep ocean exploration
- Hazardous site investigation

**Scientific Discovery:**
- Autonomous research platforms
- Sample collection and analysis
- Long-duration missions
- Collaborative human-robot teams

### Personal and Home Robotics

**Domestic Assistance:**
- Comprehensive home management
- Cooking and meal preparation
- Childcare assistance
- Pet care

**Personal Healthcare:**
- Home health monitoring
- Physical therapy support
- Medication management
- Emergency response

### Entertainment and Sports

**Interactive Experiences:**
- Robot athletes and competitors
- Performance arts
- Virtual reality integration
- Educational entertainment

## Technical Challenges Ahead

### Robustness and Reliability

**Real-World Complexity:**
- Unpredictable environments
- Long-term autonomy
- Degradation and maintenance
- Edge case handling

**Learning and Adaptation:**
- Continual learning without forgetting
- Transfer across contexts
- Sample efficiency
- Safe exploration

### Human-Like Capabilities

**Dexterous Manipulation:**
- Fine motor control
- Tool use
- Delicate object handling
- Adaptive grasping

**Locomotion Mastery:**
- Diverse terrain navigation
- Dynamic stability
- Energy efficiency
- Recovery from perturbations

**Cognitive Abilities:**
- Common sense reasoning
- Long-term planning
- Abstract thinking
- Creative problem solving

## Vision for 2050

### Ubiquitous Robots

By mid-century, humanoid robots may be:
- Common household presence
- Integrated into workplaces
- Essential in healthcare
- Partners in education

### Technological Maturity

Expected capabilities:
- Human-level dexterity
- Natural conversation
- Emotional intelligence
- Autonomous learning

### Societal Integration

Cultural shifts:
- Robots as team members
- Legal rights and protections
- Cultural norms evolve
- Education adapted

## Call to Action

### For Researchers

- Focus on fundamental breakthroughs
- Prioritize safety and ethics
- Collaborate across disciplines
- Share knowledge openly

### For Industry

- Responsible development
- Inclusive design
- Long-term thinking
- Stakeholder engagement

### For Policymakers

- Forward-looking regulation
- International cooperation
- Public education
- Social safety nets

### For Society

- Stay informed and engaged
- Participate in discussions
- Embrace opportunities
- Voice concerns

## Conclusion

The future of humanoid robotics is not predetermined - it will be shaped by the choices we make today. As these machines become more capable and integrated into our lives, we must ensure they enhance human flourishing, respect our values, and serve the common good.

The journey from today's impressive but limited robots to the humanoid partners of tomorrow will require continued innovation, thoughtful ethics, and inclusive dialogue. The potential benefits - from solving labor shortages to exploring space, from assisting the elderly to advancing scientific discovery - are immense.

As we close this book, remember that you are now part of this exciting field. Whether you're a researcher, engineer, student, policymaker, or simply an interested citizen, your understanding and engagement matter. The future of humanoid robotics will be written by all of us, together.

Welcome to the age of physical AI. The adventure has just begun.`,
  },
]

export default function BookPage() {
  const [activeChapter, setActiveChapter] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [chatbotKey, setChatbotKey] = useState(0)
  const [initialChatMessage, setInitialChatMessage] = useState("")
  const [isChatbotOpen, setIsChatbotOpen] = useState(false) // New state for chatbot visibility
  const [isTranslationOpen, setIsTranslationOpen] = useState(false)
  const [textToTranslate, setTextToTranslate] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: "Tip:",
      description: "Select any text in the book to ask AI Agent or translate it!",
    })
  }, [])

  const currentChapter = chapters.find((ch) => ch.id === activeChapter)

  const handleAskAgent = (text: string) => {
    setInitialChatMessage(`Explain this: "${text}"`)
    setChatbotKey((prev) => prev + 1) // Force remount to pass initial message
    setIsChatbotOpen(true) // Ensure the chatbot is open
  }

  // Callback to clear the initial message once the chatbot has consumed it
  const handleInitialMessageConsumed = () => {
    setInitialChatMessage("")
  }

  const handleTranslate = (text: string) => {
    setTextToTranslate(text)
    setIsTranslationOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <div className="pt-20 flex h-screen">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-24 left-4 z-40 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-xl shadow-lg"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-gray-900 border-r-2 border-emerald-500/30 overflow-y-auto transition-transform duration-300 z-30`}
        >
          <div className="p-6 border-b border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 to-teal-900/20">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              Table of Contents
            </h2>
            <p className="text-gray-400 text-sm">Physical AI & Humanoid Robotics</p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <button
                    onClick={() => {
                      setActiveChapter(chapter.id)
                      setIsSidebarOpen(false)
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                      activeChapter === chapter.id
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                        : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-emerald-400 border border-gray-700 hover:border-emerald-500/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-2 text-xs font-bold ${
                            activeChapter === chapter.id
                              ? "bg-white/20 text-white"
                              : "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20"
                          }`}
                        >
                          {chapter.id}
                        </div>
                        <h3
                          className={`font-semibold text-sm leading-tight line-clamp-2 ${
                            activeChapter === chapter.id ? "text-white" : "text-gray-300 group-hover:text-emerald-300"
                          }`}
                        >
                          {chapter.title}
                        </h3>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${
                          activeChapter === chapter.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 lg:p-12">
            {/* Chapter Header */}
            <div className="mb-8 pb-6 border-b-2 border-emerald-500/30">
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4">
                Chapter {currentChapter?.id}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4 leading-tight">
                {currentChapter?.title}
              </h1>
            </div>

            {/* Chapter Content */}
            <article className="prose prose-invert prose-emerald max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6 text-base md:text-lg">
                {currentChapter?.content.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1
                        key={index}
                        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mt-8 mb-6"
                      >
                        {line.replace("# ", "")}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold text-emerald-400 mt-8 mb-4">
                        {line.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-semibold text-emerald-300 mt-6 mb-3">
                        {line.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={index} className="font-bold text-emerald-400 mt-4 mb-2 text-lg">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="ml-6 text-gray-300 leading-relaxed">
                        {line.replace("- ", "")}
                      </li>
                    )
                  }
                  if (line.trim() === "") {
                    return <div key={index} className="h-4" />
                  }
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  )
                })}
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t-2 border-emerald-500/30 flex justify-between gap-4">
              <Button
                onClick={() => setActiveChapter((prev) => Math.max(1, prev - 1))}
                disabled={activeChapter === 1}
                className="bg-gray-800 hover:bg-gray-700 text-white border-2 border-emerald-500/30 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-6 rounded-xl text-base font-semibold"
              >
                ← Previous
              </Button>
              <Button
                onClick={() => setActiveChapter((prev) => Math.min(chapters.length, prev + 1))}
                disabled={activeChapter === chapters.length}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed px-6 py-6 rounded-xl text-base font-semibold shadow-lg shadow-emerald-500/20"
              >
                Next →
              </Button>
            </div>
          </div>
        </main>
      </div>

      <TextSelectionToolbar onAskAgent={handleAskAgent} onTranslate={handleTranslate} />

      <SignedIn>
        <Chatbot
          key={chatbotKey}
          initialMessage={initialChatMessage}
          isOpen={isChatbotOpen}
          setIsOpen={setIsChatbotOpen}
          onInitialMessageConsumed={handleInitialMessageConsumed}
        />
      </SignedIn>
      <SignedOut>
        <div className="fixed bottom-6 right-6 z-50">
          <SignInButton mode="modal">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-6 rounded-xl font-bold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              Sign In to use AI Assistant
            </Button>
          </SignInButton>
        </div>
      </SignedOut>

      <TranslationModal
        isOpen={isTranslationOpen}
        onClose={() => setIsTranslationOpen(false)}
        selectedText={textToTranslate}
      />
      <Toaster />
    </div>
  )
}
