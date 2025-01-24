import firstImage from "../../public/assets/ProductsPage_AX Xperience01.png"
import secondImage from "../../public/assets/ProductsPage_BX Xperience01.png"
import thirdImage from "../../public/assets/ProductsPage_CX Xperience01.png"
import fourthImage from "../../public/assets/ProductsPage_DX Xperience01.png"

const articles = [
    {
        id: 1,
        readTime: "5 min",
        date: "24 October 2024",
        title: "Agent Experience in contact centres",
        // subtitle: "How UX impacts customer satisfaction by enhancing usability and ensuring that users have a seamless experience across all platforms.",
        authorName: "Satish M ​",
        authorRole: "CCaaS Expert",
        illustrationSrc: "/assets/ProductsPage_AX Xperience01.png",
        introduction: 
        ` Agent Experience in a Contact Center refers to the overall experience and satisfaction that customer service agents have while performing their roles. It encompasses various aspects, such as: `,
        keyPoints: [
            "Workload Management: How manageable the workload is for agents (e.g., number of cases, variety of tasks). ​",
            "Tool Usability: The effectiveness and user-friendliness of the software tools and systems agents use to interact with customers. ​",
            "Job Satisfaction: The degree to which agents feel their work is fulfilling, valued, and supported. ​",
            "Training and Support: The quality of training, resources, and ongoing support agents receive to perform their job effectively. ​",
            "Work Environment: The physical and virtual conditions under which agents work, including team dynamics and management support. ​",
        ],
        // middleParagraph: `
        //     Automation tools like Voyage, Nexa, APIX, GenOps have AI-driven workflows can take over routine tasks in cloud contact centers, By automating these repetitive tasks, agents can focus on more complex, high-value customer interactions, reducing burnout and job dissatisfaction.​
        // `,
        majorPoints: [
            {
                title: "Workflow Updation",
                description: "Automation tools like Voyage, Nexa, APIX, GenOps have AI-driven workflows can take over routine tasks in cloud contact centers, By automating these repetitive tasks, agents can focus on more complex, high-value customer interactions, reducing burnout and job dissatisfaction.​",
                benefit: [" Agents can spend more time solving challenging customer issues, which improves job satisfaction and reduces boredom. ​"]
            },
            {
                title: "Streamlines Customer Interactions",
                description: "Automation enables faster routing of customer requests, ensuring that the right information is provided quickly and that customer inquiries are directed to the appropriate agent or department. Automated systems can gather necessary data (e.g., account details) before the agent even picks up the call or chat, allowing the agent to start helping the customer immediately.​",
                benefit: [" Reduced time spent searching for information or clarifying issues, which increases agent efficiency and reduces frustration. ​"]
            },
            {
                title: "Provides Intelligent Assistance and Recommendations​",
                description: "AI-driven tools can provide agents with real-time suggestions, solutions, and customer insights based on previous interactions and data. For example, AI can suggest the next best action for the agent or recommend answers from a knowledge base.",
                benefit: ["Helps agents make faster, more accurate decisions, improving their confidence and effectiveness in customer interactions. ​ ​"]
            },
            {
                title: "Reduces Workload Stress​",
                description: "Automation tools can help balance workloads by dynamically allocating tasks based on the agent's capacity or expertise. For instance, chatbots can handle simple queries, while more complex issues are routed to human agents.​",
                benefit: ["Agents feel more supported and empowered, especially in high-pressure situations, leading to increased job satisfaction. ​​"]
            },
            {
                title: "24/7 Support for Agents​​",
                description: "AI-based systems can provide agents with on-demand support for troubleshooting issues, answering queries about processes, or offering training materials. These systems can also automate onboarding, so new agents can quickly get up to speed without needing constant manual support from team leaders.​",
                benefit: ["Helps agents make faster, more accurate decisions, improving their confidence and effectiveness in customer interactions. ​ ​"]
            },
            {
                title: "Enhances Work-Life Balance​​",
                description: "Automated systems can help streamline shift scheduling, allowing agents to have more control over their work schedules and better manage their personal time. AI-driven scheduling systems can optimize shift assignments based on peak call times and agent preferences.",
                benefit: ["Better work-life balance for agents, which leads to lower turnover rates and higher retention. ​"]
            },
            {
                title: "​Increases Performance Feedback​",
                description: "Automation can provide real-time performance metrics and feedback to agents. Through analytics, agents can receive instant insights into their performance, areas for improvement, and recognition for outstanding work.​",
                benefit: ["Continuous feedback helps agents improve and feel recognized for their contributions, contributing to a positive work environment.​ ​"]
            },
        ]
    },
    {
        id: 2,
        readTime: "3 min",
        date: "24 October 2024",
        title: "Business user Experience in contact centres",
        // subtitle: "Making the web usable for everyone by implementing best practices and ensuring compliance with accessibility standards to create an inclusive digital environment.",
        authorName: "Sarah Chen",
        authorRole: "CX Strategist",
        illustrationSrc: "/assets/ProductsPage_BX Xperience01.png",
        introduction: `Business Experience in a Contact Center refers to the overall effectiveness, satisfaction, and outcomes that a business or organization experiences through its contact center operations. This encompasses various aspects of the contact center's performance and its alignment with business goals, including:​`,
        keyPoints: [
            "Operational Efficiency: How well the contact center operates, including speed, accuracy, and cost-effectiveness.​" ,
            "Customer Satisfaction: The ability of the contact center to deliver exceptional service that drives customer loyalty and satisfaction.​",
            "Cost Management: How effectively the contact center manages operational costs, such as labor, infrastructure, and technology.​",
            "Employee Productivity: The effectiveness of agents, supervisors, and other personnel in achieving business objectives.​",
            "Data-Driven Decision Making: The ability to gather and analyze data to make informed decisions that improve business operations and strategy.​"
        ],
        middleParagraph: `
            How Automation Improves Business Experience:
        `,
        majorPoints: [
            {
                title: "Cost Efficiency and Resource Optimization​",
                description: "Automation tools, such as chatbots, self-service portals, and AI-powered IVR systems, help businesses significantly reduce operational costs by automating routine tasks. These tools can handle a large volume of customer interactions without the need for human agents, especially for simple queries or frequently asked questions.",
                benefit: [
                    "Lower labor costs: Automation reduces the need for agents to handle repetitive inquiries, enabling businesses to allocate resources more effectively.​",
                    "Scalability: Automation systems can easily scale to handle spikes in demand, without the need to hire additional staff.​"
                ]
            },
            {
                title: "Improved Customer Experience and Retention​",
                description: "Automation tools can help provide 24/7 support through AI-powered chatbots, automated email responses, and self-service options, improving accessibility and reducing wait times. Customers who get quick and accurate responses tend to be more satisfied, leading to increased loyalty and retention.​",
                benefit: [
                    "Enhanced customer satisfaction: Faster, more reliable service leads to better experiences and greater customer retention.",
                    "Proactive service: Automation can enable businesses to send proactive updates or reminders to customers, such as order confirmations or shipping notifications.​",
                ]
            },
            {
                title: "Data Collection and Insights",
                description: "Automated systems can gather valuable customer interaction data (e.g., sentiment analysis, service metrics, and common issues). This data can be analyzed to provide actionable insights into customer preferences, pain points, and behaviors, allowing businesses to continuously improve their offerings.",
                benefit: [
                    "Informed decision-making: With real-time data and analytics, businesses can make data-driven decisions that improve customer experience, refine service offerings, and enhance overall operations.​",
                    "Better forecasting and planning: Automation tools that track customer interactions can also help businesses forecast demand more accurately, leading to better staffing, inventory, and marketing strategies.​",
                ]
            },
            {
                title: "Enhanced Agent Productivity and Performance",
                description: "Automation assists agents by pre-qualifying leads, gathering customer information, and providing real-time support or suggestions. By automating repetitive tasks and providing intelligent assistance, agents can focus on solving more complex problems, leading to faster resolution times and better overall performance.",
                benefit: [
                    "Improved productivity: Agents spend less time on mundane tasks and more time on high-value activities, enhancing the business's ability to handle a higher volume of inquiries with fewer resources.​​",
                    "Faster problem resolution: Automated tools that assist agents in decision-making help speed up issue resolution and improve service delivery.​​",
                ]
            },
            {
                title: "Improved Compliance and Risk Management",
                description: "Automation tools can help businesses maintain compliance with industry regulations by ensuring standardized processes and accurate data capture (e.g., in industries like healthcare or finance). Automated systems can also handle sensitive customer data securely and ensure that agents follow proper protocols.",
                benefit: [
                    "Reduced risk of human error: Automation ensures that processes are standardized and compliant, minimizing the risk of mistakes that could lead to legal or financial penalties.​​",
                    "Improved audits and reporting: Automated tools provide accurate, real-time reporting, making it easier for businesses to track compliance and mitigate potential risks.",
                ]
            },
            {
                title: "Operational Scalability and Flexibility",
                description: "Automation tools enable businesses to scale their contact center operations more easily without proportional increases in headcount. During periods of high demand (e.g., holidays, product launches), automation can efficiently handle a larger volume of interactions, ensuring that service quality remains high without overwhelming staff.",
                benefit: [
                    "Scalability: Automation ensures that businesses can handle increasing customer demands without significantly increasing costs.​​",
                    "Flexibility: Businesses can quickly adjust their service levels based on changing customer needs or market conditions.​​",
                ]
            },
            {
                title: "Faster Innovation and Continuous Improvement​",
                description: "With the help of automation, businesses can rapidly test and iterate new features, offerings, and customer service processes. AI-driven systems, for example, can quickly learn from customer interactions, enabling businesses to improve their systems and services in real-time.",
                benefit: [
                    "Accelerated innovation: Automation enables businesses to experiment with new customer service features and processes at a faster pace, responding to market trends and customer feedback more effectively.​​​",
                    "Continuous improvement: AI and machine learning algorithms continuously improve over time, helping businesses refine their automation systems and overall customer experience.​.​​",
                ]
            },
        ]
    },
    // {
    //     id: 3,
    //     readTime: "4 min",
    //     date: "24 October 2024",
    //     title: "The Future of E-commerce",
    //     subtitle: "Trends to watch in the coming years, including the rise of AI-driven solutions, personalized shopping experiences, and the importance of sustainability in e-commerce.",
    //     authorName: "Alice Johnson",
    //     authorRole: "E-commerce Specialist",
    //     illustrationSrc: "/assets/third.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: ["Key benefit or takeaway from this point"]
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: ["Primary advantage gained from implementing this point"]
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: ["Strategic benefit derived from this point"]
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     readTime: "5 min",
    //     date: "24 October 2024",
    //     title: "The Importance of User Experience",
    //     subtitle: "How UX impacts customer satisfaction by enhancing usability and ensuring that users have a seamless experience across all platforms.",
    //     authorName: "Jane Doe",
    //     authorRole: "UX Designer",
    //     illustrationSrc: "/assets/first.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: "Key benefit or takeaway from this point"
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: "Primary advantage gained from implementing this point"
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: "Strategic benefit derived from this point"
    //         }
    //     ]
    // },
    // {
    //     id: 5,
    //     readTime: "3 min",
    //     date: "24 October 2024",
    //     title: "Understanding Web Accessibility",
    //     subtitle: "Making the web usable for everyone by implementing best practices and ensuring compliance with accessibility standards to create an inclusive digital environment.",
    //     authorName: "John Smith",
    //     authorRole: "Accessibility Advocate",
    //     illustrationSrc: "/assets/second.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: "Key benefit or takeaway from this point"
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: "Primary advantage gained from implementing this point"
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: "Strategic benefit derived from this point"
    //         }
    //     ]
    // },
    // {
    //     id: 6,
    //     readTime: "4 min",
    //     date: "24 October 2024",
    //     title: "The Future of E-commerce",
    //     subtitle: "Trends to watch in the coming years, including the rise of AI-driven solutions, personalized shopping experiences, and the importance of sustainability in e-commerce.",
    //     authorName: "Alice Johnson",
    //     authorRole: "E-commerce Specialist",
    //     illustrationSrc: "/assets/third.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: "Key benefit or takeaway from this point"
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: "Primary advantage gained from implementing this point"
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: "Strategic benefit derived from this point"
    //         }
    //     ]
    // },
    // {
    //     id: 7,
    //     readTime: "4 min",
    //     date: "24 October 2024",
    //     title: "The Future of E-commerce",
    //     subtitle: "Trends to watch in the coming years, including the rise of AI-driven solutions, personalized shopping experiences, and the importance of sustainability in e-commerce.",
    //     authorName: "Alice Johnson",
    //     authorRole: "E-commerce Specialist",
    //     illustrationSrc: "/assets/third.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: "Key benefit or takeaway from this point"
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: "Primary advantage gained from implementing this point"
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: "Strategic benefit derived from this point"
    //         }
    //     ]
    // },
    // {
    //     id: 8,
    //     readTime: "4 min",
    //     date: "24 October 2024",
    //     title: "The Future of E-commerce",
    //     subtitle: "Trends to watch in the coming years, including the rise of AI-driven solutions, personalized shopping experiences, and the importance of sustainability in e-commerce.",
    //     authorName: "Alice Johnson",
    //     authorRole: "E-commerce Specialist",
    //     illustrationSrc: "/assets/third.jpeg",
    //     introduction: `
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     `,
    //     keyPoints: [
    //         "First key point about the topic",
    //         "Second important consideration to keep in mind",
    //         "Third crucial aspect to understand",
    //         "Fourth key insight about the subject"
    //     ],
    //     middleParagraph: `
    //         Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
    //     `,
    //     majorPoints: [
    //         {
    //             title: "First Major Point",
    //             description: "Detailed explanation of the first major point and its implications for the industry.",
    //             benefit: "Key benefit or takeaway from this point"
    //         },
    //         {
    //             title: "Second Major Point",
    //             description: "In-depth analysis of the second major point and its practical applications.",
    //             benefit: "Primary advantage gained from implementing this point"
    //         },
    //         {
    //             title: "Third Major Point",
    //             description: "Comprehensive overview of the third major point and its impact on business outcomes.",
    //             benefit: "Strategic benefit derived from this point"
    //         }
    //     ]
    // }
];

export default articles;