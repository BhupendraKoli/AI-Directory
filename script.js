const aiTools = [
       {
    id: 14,
    name: "ChatGPT",
    category: "generative",
    subcategory: "language-model",
    description: "A conversational AI model developed by OpenAI for natural human-like interactions.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    images: [
        "https://www.techzine.eu/wp-content/uploads/2023/08/ChatGPT.jpg"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://chat.openai.com",
    tags: ["OpenAI", "Chatbot", "LLM"]
},
    {
        id: 1,
        name: "TensorFlow",
        category: "machine-learning",
        subcategory: "framework",
        description:
            "An end-to-end open source platform for machine learning that makes it easy to build and deploy ML models.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9fd0b89-2fff-4351-9201-081784474768.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f930b731-cbf9-4a5e-bb38-a29b1c0097ac.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03f86378-baf5-4deb-b7ed-8c3771f77169.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a554cce4-6687-4e6a-a3a8-e353dd1ef577.png",
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://www.tensorflow.org",
        tags: ["Deep Learning", "Neural Networks", "Google"],
    },
    {
        id: 2,
        name: "GPT-4",
        category: "generative",
        subcategory: "language-model",
        description:
            "Most advanced AI system, producing safer and more useful responses with multimodal capabilities.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/571d8a35-4b01-43d4-abbe-57e3616c2e34.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7057de8-1b12-4ff2-8ec3-792280d93804.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/577e7764-2c85-428a-85a0-b14caba1a4b3.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2815e21c-33e3-4160-bf1c-1fa908e789b3.png",
        ],
        price: "Pay-per-use",
        hasApi: true,
        freeTier: false,
        website: "https://openai.com/research/gpt-4",
        tags: ["LLM", "OpenAI", "Text Generation"],
    },
    {
        id: 3,
        name: "Stable Diffusion",
        category: "generative",
        subcategory: "image-model",
        description:
            "Latent text-to-image diffusion model capable of generating photo-realistic images given any text input.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d988bdeb-3ffa-4696-8885-c7c8db7820e7.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4803c9ad-8f6e-474b-b13c-276c6a9e2d65.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a88f11c-79fd-435b-90fb-be1214b4b35a.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0fe119a4-4b3f-4e20-b7fd-1797c46ce730.png",
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://stability.ai/stable-diffusion",
        tags: ["Image Generation", "AI Art", "Stability AI"],
    },
    {
        id: 4,
        name: "DALL-E 3",
        category: "generative",
        subcategory: "image-model",
        description:
            "State-of-the-art image generation AI that translates natural language prompts into high-quality images.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67347882-3bf1-492a-ac9f-d4890d0e781c.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc7de35c-5c7b-4a52-8421-873266155e21.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/748b393a-6473-413d-b933-2c31325937c9.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53e18160-ec3b-4323-998c-a1abe1489376.png",
        ],
        price: "Subscription",
        hasApi: true,
        freeTier: false,
        website: "https://openai.com/dall-e",
        tags: ["Image Generation", "Text-to-Image", "OpenAI"],
    },
    {
        id: 5,
        name: "PyTorch",
        category: "machine-learning",
        subcategory: "framework",
        description:
            "An optimized tensor library for deep learning using GPUs and CPUs with direct support for Python.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c622b3e-c925-4669-a82d-33d49826a3e7.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26f27aa8-e8fb-4bae-a3f5-0b1449e5d626.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4867698-bb74-4d62-a142-04889799c45f.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e6ed90f-5fa8-4934-8bb1-77296e230f66.png",
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://pytorch.org",
        tags: ["Deep Learning", "Facebook", "Neural Networks"],
    },
    {
        id: 6,
        name: "BERT",
        category: "nlp",
        subcategory: "language-model",
        description:
            "Bidirectional Encoder Representations from Transformers is a technique for NLP pre-training.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79dcab0c-646e-4bae-a34c-dc26cd8a148c.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9cdb84aa-588b-41bd-8f6c-5ee5db8b79ba.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/525fea1c-6cf1-4121-a87a-30a9ea2a91fd.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e25a6881-a4f6-4865-b978-3d5c4363b9b6.png",
        ],
        price: "Open Source",
        hasApi: false,
        freeTier: true,
        website: "https://github.com/google-research/bert",
        tags: ["Text Processing", "Google", "Transformers"],
    },
    {
        id: 7,
        name: "Claude AI",
        category: "generative",
        subcategory: "language-model",
        description:
            "AI assistant focused on being helpful, harmless, and honest in conversations.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e015a734-f499-40b8-9091-737065867f04.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8346112-50a1-4c9d-8de6-8b7cd9649cc3.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3fc56eea-84f6-4654-944e-9b473c19f39e.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d25ecef-394b-4887-b830-9086d592586d.png",
        ],
        price: "Freemium",
        hasApi: true,
        freeTier: true,
        website: "https://www.anthropic.com",
        tags: ["Chatbot", "Anthropic", "Conversational AI"],
    },
    {
        id: 8,
        name: "Midjourney",
        category: "generative",
        subcategory: "image-model",
        description:
            "AI program that creates images from natural language descriptions via Discord.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf043572-ec90-4481-b59c-05533e8ea4cf.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/74fb5c97-ff88-4287-9a75-526369a0e640.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6992855-dfc4-4177-a078-b10ad902fbcc.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5414083d-c574-4c7d-91a9-83d1492c3646.png",
        ],
        price: "Subscription",
        hasApi: false,
        freeTier: false,
        website: "https://www.midjourney.com",
        tags: ["AI Art", "Text-to-Image", "Creative"],
    },
    {
        id: 9,
        name: "Hugging Face",
        category: "nlp",
        subcategory: "platform",
        description:
            "Open-source platform for natural language processing with thousands of pre-trained models.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2On3s3HTNpItCRQ6T02CUlnuPO_7ZdkNyw&s",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/01318478-ed7e-4d17-9a5a-04712ebadf74.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d55c5bec-a30f-4a6b-8014-e0e395bf44d5.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f34e1f94-81b0-4886-ad53-b49986cc.png",
        ],
        price: "Freemium",
        hasApi: true,
        freeTier: true,
        website: "https://huggingface.co",
        tags: ["NLP", "Open Source", "Models"],
    },
    {
        id: 10,
        name: "OpenCV",
        category: "vision",
        subcategory: "framework",
        description:
            "Open source computer vision and machine learning software library with 2500+ algorithms.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eadb658a-4110-4700-a168-b1c36b521fdd.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e48797d-7dd0-4aea-b97f-773f593aa545.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a92715ca-e2ce-4fe0-8dcc-42fb38e0ebd2.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6fb57ff-a1fc-4048-8c31-2b74646bc115.png",
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://opencv.org",
        tags: ["Computer Vision", "Image Processing", "Real-time"],
    },
    {
        id: 11,
        name: "YOLO",
        category: "vision",
        subcategory: "object-detection",
        description:
            "Real-time object detection system known for its speed and accuracy in identifying objects.",
        logo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de0271ae-d29d-4db7-b2ed-ffb3f8d0b4e3.png",
        images: [
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73844054-0467-4fc8-9ced-6bff1c944b77.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5aeb0b55-7c7e-450d-bd53-c89cc1666587.png",
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a7e3e490-bb65-47ad-a4aa-9201357ad418.png",
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://pjreddie.com/darknet/yolo/",
        tags: ["Real-Time", "Object Detection", "CNN"],
    },
    {
        id: 12,
        name: "Whisper AI",
        category: "speech",
        subcategory: "speech-to-text",
        description:
            "OpenAI's speech recognition system for transcribing and translating speech.",
        logo: "https://cdn.prod.website-files.com/614c82ed388d53640613982e/63eb5ebedd3a9a738e22a03f_open%20ai%20whisper.jpg",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPViUBhLjyzb5xBB-NFkHVY6LZkSYFpz2YOA&s",
            "https://storage.googleapis.com/workspace-demo/whisper2.png",
        ],
        price: "Free",
        hasApi: true,
        freeTier: true,
        website: "https://openai.com/research/whisper",
        tags: ["Speech Recognition", "Transcription", "OpenAI"],
    },
    {
        id: 13,
        name: "ROS",
        category: "robotics",
        subcategory: "platform",
        description:
            "Robot Operating System - flexible framework for writing robot software.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FZRYVUj7JVeuJcMIpMTybtN80FQkQa0pIQ&s",
            "https://storage.googleapis.com/workspace-demo/ros2.png",
        ],
        price: "Open Source",
        hasApi: false,
        freeTier: true,
        website: "https://www.ros.org/",
        tags: ["Robotics", "Framework", "Autonomous"],
    },
 
{
    id: 15,
    name: "DeepL",
    category: "nlp",
    subcategory: "translation",
    description: "DeepL provides accurate AI-powered translation with a natural feel.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTFBcLJMeINMcTDKvYuMnpisWHhlEvpk_aw&s",
    images: [
        "https://home-wordpress.deeplearning.ai/wp-content/uploads/2023/10/NoTagline2_Generative_AI_for_Everyone_Banner_2070x1080_F-1.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://deepl.com",
    tags: ["Translation", "NLP", "Language"]
},
{
    id: 16,
    name: "Runway ML",
    category: "generative",
    subcategory: "video-model",
    description: "A next-gen creative suite powered by AI for video editing and content generation.",
    logo: "https://aianimation.com/wp-content/uploads/2024/01/runway-ml-logo.jpg",
    images: [
        "https://aianimation.com/wp-content/uploads/2023/06/runwayMl-edit.png",
        "https://aianimation.com/wp-content/uploads/2023/06/runwayMl-edit.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://runwayml.com",
    tags: ["Video Editing", "Content Creation", "Generative"]
},
{
    id: 17,
    name: "Replica Studios",
    category: "speech",
    subcategory: "text-to-speech",
    description: "AI voice generation tool that turns text into realistic voice performances.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXDqdZRQHzaqHkVINKMTXBTCweJKWCAdNyw&s",
    images: [
        "https://cdn.prod.website-files.com/61e63f45b9df5b305479065a/643df2945a8bd1d7c0dfc87d_Replica-Omniverse-Integration-min.jpeg",
        "https://cdn.prod.website-files.com/61e63f45b9df5b305479065a/643df2945a8bd1d7c0dfc87d_Replica-Omniverse-Integration-min.jpeg"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://replicastudios.com",
    tags: ["Voice AI", "TTS", "Gaming"]
},
{
    id: 18,
    name: "IBM Watson",
    category: "machine-learning",
    subcategory: "platform",
    description: "AI and data platform from IBM for building smart applications and analytics.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9ylcEYsMcYdkZJ0IGuFWGAmFEzNcHfCcLw&s",
    images: [
        "https://media.licdn.com/dms/image/v2/C5112AQHkzCJx8fKemg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520211193208?e=2147483647&v=beta&t=LH24wDla-XQ3uwPwN2P_JnGLA3TzH4JnQBxSAFuy9BI",
        "https://media.licdn.com/dms/image/v2/C5112AQHkzCJx8fKemg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520211193208?e=2147483647&v=beta&t=LH24wDla-XQ3uwPwN2P_JnGLA3TzH4JnQBxSAFuy9BI"
    ],
    price: "Pay-per-use",
    hasApi: true,
    freeTier: false,
    website: "https://www.ibm.com/watson",
    tags: ["Analytics", "Automation", "IBM"]
},
{
    id: 19,
    name: "Grammarly",
    category: "nlp",
    subcategory: "writing-assistant",
    description: "AI writing assistant that improves grammar, tone, clarity, and more.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQaP6vrjMS1ndJfOPYZNDbAnZnMJWR4yK_Q&s",
    images: [
        "https://i.ytimg.com/vi/g6t3pHZ9MCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnTMHDITEC_RJPoRzg8GIAIB227Q",
        "https://analyticsdrift.com/wp-content/uploads/2023/03/Grammarly-AI-writing-assistant-GrammarlyGo.jpg"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.grammarly.com",
    tags: ["Writing", "Grammar", "Editor"]
},
{
    id: 20,
    name: "Artbreeder",
    category: "generative",
    subcategory: "image-model",
    description: "AI-powered tool for blending and evolving images, commonly used for creating portraits and landscapes.",
    logo: "https://pbs.twimg.com/profile_images/1555739625347436544/uurp1PEG_400x400.jpg",
    images: [
        "https://images.apifyusercontent.com/Fe51_TrOQylMSpkNMwJc3VkdTt9-crAT8-yFDgJL9Zs/w:1800/cb:1/aHR0cHM6Ly9pLnBvc3RpbWcuY2MvZFZndjhLNjMvMTAwMDAyMjk2NS5wbmc.webp"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.artbreeder.com",
    tags: ["Image Generation", "Portraits", "Creative"]
},

{
    id: 21,
    name: "Craiyon (DALL-E Mini)",
    category: "generative",
    subcategory: "image-model",
    description: "Free AI model that generates images from any prompt using a simplified version of DALL·E.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n1ddFEwXU7GSDXIYfDkWdRfcJpwO8wy2kw&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2n1ddFEwXU7GSDXIYfDkWdRfcJpwO8wy2kw&s"
    ],
    price: "Free",
    hasApi: false,
    freeTier: true,
    website: "https://www.craiyon.com",
    tags: ["Text-to-Image", "Open Source", "Free"]
},
{
    id: 22,
    name: "Deep Dream Generator",
    category: "generative",
    subcategory: "image-model",
    description: "Create surreal, dream-like images using deep neural networks, inspired by Google’s Deep Dream project.",
    logo: "https://sk0.blr1.cdn.digitaloceanspaces.com/users/174903/avatar_1713961922.jpeg",
    images: [
        "https://cdn.prod.website-files.com/6508cd9252452cdcc016ad1d/655375b3071d45307da00b10_bb.webp"
        
    ],
    price: "Free",
    hasApi: false,
    freeTier: true,
    website: "https://deepdreamgenerator.com",
    tags: ["AI Art", "Surreal", "Deep Learning"]
},

{
    id: 23,
    name: "Pika Labs",
    category: "generative",
    subcategory: "text-to-video",
    description: "AI platform to create and animate videos from text prompts or still images in seconds.",
    logo: "https://www.fahimai.com/wp-content/uploads/2024/10/CTA-1-4.png",
    images: [
        "https://phill.ai/wp-content/uploads/2023/09/phill.ai_technologically_stretching_and_folding_the_boundaries__781d5f0e-7b91-47d3-9de2-c60d0db3ef82.png"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://pika.art",
    tags: ["Creative", "Animation", "Prompt-to-Video"]
},
{
    id: 24,
    name: "Synthesia",
    category: "generative",
    subcategory: "text-to-video",
    description: "AI video platform for generating presenter-led videos from simple text input using avatars.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_hFHssdiYof1XSXaocS0Jbhp3Ywvoy2rkg&s",
    images: [
        "https://bizequals.com/media/com_jbusinessdirectory/pictures/companies/70/synthesia-logo-600x450.webp"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://www.synthesia.io",
    tags: ["Text-to-Video", "Avatars", "Corporate"]
},
{
    id: 25,
    name: "Hour One",
    category: "generative",
    subcategory: "text-to-video",
    description: "Create AI-powered videos from scripts using digital human presenters and professional templates.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6zLPfJ70do1N632za3LaLrWY7cYHKS3frQ&s",
    images: [
        "https://www.fahimai.com/wp-content/uploads/2024/08/Fahim-AI-100.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.hourone.ai",
    tags: ["Video Avatars", "Business", "Text-to-Speech"]
},
{
    id: 26,
    name: "ElevenLabs",
    category: "speech",
    subcategory: "text-to-speech",
    description: "High-quality voice synthesis using deep learning with support for multiple languages and cloning voices.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVNpGHzjV-JkT1ekBJqayI93p42HDiK2XSw&s",
    images: [
        "https://keys-shop.in/wp-content/uploads/2024/12/Elevenlabs-io-group-buy.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.elevenlabs.io",
    tags: ["Voice Cloning", "Realistic Speech", "Multilingual"]
},
{
    id: 27,
    name: "Play.ht",
    category: "speech",
    subcategory: "text-to-speech",
    description: "AI-powered voice generator for realistic text-to-speech audio in multiple accents and tones.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTjArEZimuL_p-QXojSEaRPkPDR01W0hjxg&s",
    images: [
        "https://keys-shop.in/wp-content/uploads/2023/10/Play.ht-AI.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://play.ht",
    tags: ["Audio", "Voice Generator", "Speech Synthesis"]
},
{
    id: 28,
    name: "WellSaid Labs",
    category: "speech",
    subcategory: "text-to-speech",
    description: "Generate human-quality voiceovers from text using AI avatars for professional video and audio.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTGYnArifbyyQquHDWDmZn4YWb6Y_QvzLSQ&s",
    images: [
        "https://www.unite.ai/wp-content/uploads/2023/10/1-wellsaid-labs-homepage.png"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://wellsaidlabs.com",
    tags: ["Voiceover", "Professional Audio", "Narration"]
},
{
    id: 29,
    name: "Murf AI",
    category: "speech",
    subcategory: "text-to-speech",
    description: "Online AI voice generator that turns text into natural sounding speech for videos, ads, and presentations.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHDSpoiCSc14g/company-logo_200_200/company-logo_200_200/0/1728482513737/murf_ai_logo?e=2147483647&v=beta&t=ngJY9Y2xZtWyl6dPVmvibYqbbu-jo30zKLxaZULS7J0",
    images: [
        "https://miro.medium.com/v2/resize:fit:1400/1*gQME_q2g12O4rDu8Hlk6bA.jpeg"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://murf.ai",
    tags: ["Voice Generator", "Studio", "AI Narration"]
},
{
    id: 30,
    name: "GPTZero",
    category: "detection",
    subcategory: "ai-detection",
    description: "AI detector that identifies whether content was written by a human or AI like ChatGPT or GPT-4.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFn4s6Nr1sKVw/company-logo_200_200/company-logo_200_200/0/1686030874712/gptzero_logo?e=2147483647&v=beta&t=6EbDNdTgAfwP9o4coYr5V0aIhYKVo2dvOXZqs48aEl8",
    images: [
        "https://images.surferseo.art/98bf1239-0c4c-4d2b-a3d6-a2b9664323e6.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://gptzero.me",
    tags: ["AI Detection", "Content Analysis", "Education"]
},
{
    id: 31,
    name: "Originality.ai",
    category: "detection",
    subcategory: "ai-detection",
    description: "Tool for detecting AI-generated content and checking for plagiarism, designed for content publishers.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqPMAyP04i3yOIeaWFqIpWeowSxxTACgiRQ&s",
    images: [
        "https://cdn.prod.website-files.com/63ee996e404f6475c7b177b3/642b36ad9bd0484c5047af46_og-image-1.jpg"
    ],
    price: "Pay-per-use",
    hasApi: true,
    freeTier: false,
    website: "https://originality.ai",
    tags: ["Plagiarism", "AI Detection", "Writers"]
},
{
    id: 32,
    name: "Winston AI",
    category: "detection",
    subcategory: "ai-detection",
    description: "Advanced AI content detector for educators and businesses to ensure originality in writing.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEZF4Ury8v5NA/company-logo_200_200/company-logo_200_200/0/1674156456752?e=2147483647&v=beta&t=18IRQaJkjP5TO9LvLJIjM-rB3jPzksZ8iih1fRn9hrw",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMR95Hdn_VKw0YBwsxC--nZpIAJfZNSLkEA&s"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.winston.ai",
    tags: ["AI Detector", "Academic Integrity", "Originality"]
},
{
    id: 33,
    name: "ZeroGPT",
    category: "detection",
    subcategory: "ai-detection",
    description: "Free AI detection tool to verify if content is human-written or AI-generated using deep learning.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXY04PYnUtinrE--2JoAAKF4CpPPyM7-UnA&s",
    images: [
       "https://cdn.buttercms.com/BT8Vg8KCQveoNtED16n2"
    ],
    price: "Free",
    hasApi: false,
    freeTier: true,
    website: "https://www.zerogpt.com",
    tags: ["AI Checker", "Detection", "Text Validation"]
},
{
    id: 34,
    name: "Sapling AI Detector",
    category: "detection",
    subcategory: "ai-detection",
    description: "Real-time AI writing detection tool designed for enterprise and customer support platforms.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkGcRYZ5PRQRdYPI7hstFQPgV46y9t8UBkg&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh5nmX3BZnn8nWRtraHTXyG4k8mrmSlozcg&s"
   
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://sapling.ai/ai-content-detector",
    tags: ["AI Writing", "Detection", "Enterprise"]
},

{
    id: 35,
    name: "DeepL Translator",
    category: "translation",
    subcategory: "language-translation",
    description: "High-quality AI-powered translation tool known for accuracy in European languages.",
    logo: "https://static.deepl.com/img/logo/deepl-logo-blue.svg",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZg3zERG8jIYVEl7fc0AlICGRSARumcGnxQ&s"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.deepl.com",
    tags: ["Language", "Translation", "Deep Learning"]
},
{
    id: 36,
    name: "Google Translate",
    category: "translation",
    subcategory: "language-translation",
    description: "Free multilingual translation tool by Google supporting over 100 languages.",
    logo: "https://www.gstatic.com/images/branding/product/2x/translate_96dp.png",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF30yPGk_B7YgAc3RE9LwKUiXv75_Ug9z_Q&s"
        
    ],
    price: "Free",
    hasApi: true,
    freeTier: true,
    website: "https://translate.google.com",
    tags: ["Multilingual", "Translation", "Google"]
},
{
    id: 37,
    name: "Microsoft Translator",
    category: "translation",
    subcategory: "language-translation",
    description: "AI-powered translator by Microsoft for text, speech, and document translation.",
    logo: "https://www.microsoft.com/favicon.ico",
    images: [
        "https://learn.microsoft.com/en-us/azure/cognitive-services/translator/media/overview/translator-architecture.png",
        "https://www.microsoft.com/en-us/translator/media/images/screenshots/translate-app-hero.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.microsoft.com/en-us/translator/",
    tags: ["Microsoft", "Language Translation", "Speech"]
},
{
    id: 38,
    name: "Amazon Translate",
    category: "translation",
    subcategory: "language-translation",
    description: "Neural machine translation service for fast and accurate language conversion.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7orxX-ZRBlPoeQTpoGtEDpcAJq7sJG5o_D0U9mnQSbn6g9JZVdZzM_eu3aNEqFcP2_E&usqp=CAU",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPOieIotLmyWZ7C_fQI8hXQDZM278rWaxxg&s"
    ],
    price: "Pay-per-use",
    hasApi: true,
    freeTier: true,
    website: "https://aws.amazon.com/translate/",
    tags: ["AWS", "Neural MT", "Translation"]
},
{
    id: 39,
    name: "iTranslate",
    category: "translation",
    subcategory: "language-translation",
    description: "Mobile-first AI translator app supporting voice, text, and camera translations.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fsP384V8PlfGjpNg7VF9rdfdmuB0dRHEMQ&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fsP384V8PlfGjpNg7VF9rdfdmuB0dRHEMQ&s"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.itranslate.com",
    tags: ["Voice Translation", "Mobile App", "iOS Android"]
},
{
    id: 40,
    name: "Reverso",
    category: "translation",
    subcategory: "language-translation",
    description: "Contextual translation tool with AI-enhanced grammar correction and learning features.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90TQh-yBBGSpTJNwHBcdPx3HZ9YUL2OPnyA&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCP-rqh7lXNPvlmGGUma7GXjHSy7D3rRH3YQ&s"
      
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.reverso.net",
    tags: ["Grammar", "Context Translation", "Learning"]
},
{
    id: 41,
    name: "Lingvanex",
    category: "translation",
    subcategory: "language-translation",
    description: "AI translation for websites, documents, and speech with offline capabilities.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAizIzhIali8zjEb1frAGpI-87d3HhW9GfA&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAizIzhIali8zjEb1frAGpI-87d3HhW9GfA&s"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://lingvanex.com",
    tags: ["Offline Translation", "Voice", "Documents"]
},
{
    id: 42,
    name: "SYSTRAN Translate",
    category: "translation",
    subcategory: "language-translation",
    description: "Enterprise-grade AI translation solution with industry-specific customizations.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKV4hlB9wWD3VJvupCflw5M_NDusGfU_lqLw&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKV4hlB9wWD3VJvupCflw5M_NDusGfU_lqLw&s"
    ],
    price: "Enterprise",
    hasApi: true,
    freeTier: false,
    website: "https://www.systransoft.com",
    tags: ["Enterprise", "Custom Models", "Industry-specific"]
},
{
    id: 43,
    name: "Papago",
    category: "translation",
    subcategory: "language-translation",
    description: "Naver’s AI translation tool optimized for Asian languages like Korean, Chinese, Japanese.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCOQDwfewqB6hDK35CoKjAuhrkW1fkfPwyg&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCOQDwfewqB6hDK35CoKjAuhrkW1fkfPwyg&s"
    ],
    price: "Free",
    hasApi: false,
    freeTier: true,
    website: "https://papago.naver.com",
    tags: ["Asian Languages", "Mobile", "Naver"]
},
{
    id: 44,
    name: "Promt Online Translator",
    category: "translation",
    subcategory: "language-translation",
    description: "Multilingual online translator with focus on grammar and business vocabulary.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGveGOkXPxbNlqznZxyj3RsLWmtCWSZCljw&s",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeX16KsftKcHVkmcz0dKmjNkbkQjGPTeakri24BUN1Jy-fVnJCu1q1zLlVrfgbakh7eo&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.online-translator.com",
    tags: ["Grammar Check", "Business", "Multilingual"]
},

    {
    id: 45,
    name: "GitHub Copilot",
    category: "generative",
    subcategory: "code",
    description: "AI pair programmer developed by GitHub and OpenAI, suggesting code and entire functions in real-time.",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAwjfSz0YD3o3SNDqBeX94XAp6S1yj7VgAg&s"
    ],
    price: "Subscription",
    hasApi: false,
    freeTier: false,
    website: "https://github.com/features/copilot",
    tags: ["Code Completion", "OpenAI", "GitHub"]
},
{
    id: 46,
    name: "Amazon CodeWhisperer",
    category: "generative",
    subcategory: "code",
    description: "Machine learning-powered coding companion from AWS that recommends real-time code suggestions.",
    logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1XhRRfRtOZ-6vW9jxujYFYkr7BZTBAHMDucNe0t-tenRweKZo3t8jhPgjrZFmSwlgXA&usqp=CAU",
        "https://docs.aws.amazon.com/images/codewhisperer/latest/userguide/images/code-suggestions.png"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://aws.amazon.com/codewhisperer/",
    tags: ["AWS", "Code Suggestions", "IDE Plugin"]
},
{
    id: 47,
    name: "Tabnine",
    category: "generative",
    subcategory: "code",
    description: "AI code completion assistant trained on open-source code with privacy-first deployment options.",
    logo: "https://www.tabnine.com/images/tabnine-logo-1.svg",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTyPNjQ5bIoUx51e3fUUCzIaJAYaaC6H4Bg&s",
        "https://www.tabnine.com/images/product/integration-ide.png"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.tabnine.com",
    tags: ["Code Autocomplete", "Private Deployment", "IDE Integration"]
},
{
    id: 48,
    name: "Codeium",
    category: "generative",
    subcategory: "code",
    description: "Fast and free AI code completion tool supporting 70+ programming languages and multiple IDEs.",
    logo: "https://codeium.com/assets/images/codeium-logo.svg",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41GDcp3EJT76hnSmRAKLmYPf_s7Fj5filAg&s",
        "https://codeium.com/assets/images/intellij-editor.png"
    ],
    price: "Free",
    hasApi: true,
    freeTier: true,
    website: "https://codeium.com",
    tags: ["Code Suggestions", "Multi-language", "Free"]
},
{
    id: 49,
    name: "MutableAI",
    category: "generative",
    subcategory: "code",
    description: "AI coding assistant that supports code generation, refactoring, and documentation with ChatGPT-like UI.",
    logo: "https://www.mutable.ai/images/favicon.ico",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkYEZkMJLKRACvgPl_6zsetnDuHPJ0VdKsejdqyaHbaYrkhobonI3CZSbjd51ZSRdSSM&usqp=CAU",
        "https://www.mutable.ai/assets/images/dashboard-preview.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.mutable.ai",
    tags: ["Code Refactor", "Autocomplete", "ChatUI"]
},
{
    id: 50,
    name: "Polycoder",
    category: "generative",
    subcategory: "code",
    description: "Open-source AI model trained on programming languages, developed by researchers at CMU.",
    logo: "https://avatars.githubusercontent.com/u/2386873?s=200&v=4",
    images: [
        "https://accubits.com/wp-content/uploads/2023/03/Polycoder-2.jpg",
        "https://polycoder-models.s3.amazonaws.com/screenshot2.png"
    ],
    price: "Open Source",
    hasApi: false,
    freeTier: true,
    website: "https://github.com/VHellendoorn/Code-LMs",
    tags: ["Open Source", "Research", "Code Generation"]
},
{
    id: 51,
    name: "Kite (Discontinued but Popular)",
    category: "generative",
    subcategory: "code",
    description: "AI-powered autocomplete for Python, JavaScript, and more with multi-line suggestions (no longer active but notable).",
    logo: "https://www.kite.com/static/kite-logo.svg",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9qgikAJaj09vDObOuJaE5mRN2px18rS_lpeP6oOpg4PinviQJNWLqu7OxOVzL6O55gM&usqp=CAU",
        "https://www.kite.com/images/kite-editor.png"
    ],
    price: "Free",
    hasApi: false,
    freeTier: true,
    website: "https://www.kite.com",
    tags: ["Code Completion", "Historical", "Offline"]
},
{
    id: 52,
    name: "Sourcery",
    category: "generative",
    subcategory: "code",
    description: "AI that reviews and refactors Python code to improve quality, maintainability, and performance.",
    logo: "https://sourcery.ai/static/favicon.ico",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5o54Osu53W1FNGgMjiRRoa8HPEJypElPKQ&s",
        "https://sourcery.ai/static/refactor-view.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://sourcery.ai",
    tags: ["Code Quality", "Refactoring", "Python"]
},
{
    id: 53,
    name: "AskCodi",
    category: "generative",
    subcategory: "code",
    description: "AI assistant that helps generate code, SQL queries, docstrings, and more via natural language.",
    logo: "https://askcodi.com/assets/images/favicon.png",
    images: [
        "https://res.cloudinary.com/topaitools/image/upload/f_webp,q_20,w_250,h_250/logos/vvhq6vmqpjjzfowf2ml5?_a=BAMClqTE0",
        "https://askcodi.com/assets/images/sql-generator.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://askcodi.com",
    tags: ["Code Generator", "Natural Language", "SQL"]
},
{
    id: 54,
    name: "Codiga",
    category: "generative",
    subcategory: "code",
    description: "AI code analysis and automated code review tool to ensure secure and clean codebases.",
    logo: "https://docs.codiga.io/images/logo.png",
    images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbWlz8qW98EGr8jBgAYOLi5yBNzfptu8ukw&s",
        "https://docs.codiga.io/images/rules-engine.png"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.codiga.io",
    tags: ["Code Review", "Secure Coding", "Automation"]
},

    {
        id: 55,
        name: "MoveIt",
        category: "robotics",
        subcategory: "motion-planning",
        description: "An open-source software for robot motion planning and manipulation using ROS.",
        logo: "https://r2.erweima.ai/imgcompressed/compressed_6583e224c12ddaf1e2a4e875c5060ede.webp",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-qlOmka3mMDph4iNzAq7XoToiNhSlqQRmA&s",
            "https://moveit.ros.org/assets/images/moveit2/roscon2022.jpg"
        ],
        price: "Open Source",
        hasApi: false,
        freeTier: true,
        website: "https://moveit.ros.org/",
        tags: ["Robotics", "Motion Planning", "ROS"]
    },
    {
        id: 56,
        name: "NVIDIA Isaac Sim",
        category: "robotics",
        subcategory: "simulation",
        description: "A simulation platform for robotics built on NVIDIA Omniverse for photorealistic rendering and physics.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrJXS-_-ISZPd2BmqHTMJDFenfA3wCKECWnJA50u0854Ryay-ilRerRF5An43GgPDfc4&usqp=CAU",
        images: [
            "https://iotadda.com/wp-content/uploads/2024/12/20241206-01-150x150.jpg",
            "https://developer.nvidia.com/sites/default/files/akamai/isaac/images/isaac-sim-2.png"
        ],
        price: "Free with NVIDIA account",
        hasApi: true,
        freeTier: true,
        website: "https://developer.nvidia.com/isaac-sim",
        tags: ["Robotics", "Simulation", "NVIDIA"]
    },
    {
        id: 57,
        name: "Microsoft Robotics Developer Studio",
        category: "robotics",
        subcategory: "development-environment",
        description: "A Windows-based environment for developing robotics applications with visual programming and simulation tools.",
        logo: "https://live.staticflickr.com/3051/3048400526_0759f1af48_b.jpg",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsQvgV23SeD4vTktLRP5XUohbLPvBtBxcOA&s",
            "https://upload.wikimedia.org/wikipedia/en/f/f7/MRDS_Simulation_Screen.png"
        ],
        price: "Free",
        hasApi: true,
        freeTier: true,
        website: "https://en.wikipedia.org/wiki/Microsoft_Robotics_Developer_Studio",
        tags: ["Robotics", "Programming", "Simulation"]
    },
    {
        id: 58,
        name: "Roboflow",
        category: "robotics",
        subcategory: "computer-vision",
        description: "Roboflow helps you build and deploy computer vision models for robotics and automation.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKqB9bDd0WDWwy-ngUa0pL0J1fQU76537BBn4e19iBLBsqLXkDIQIpY8bxuncOC90Zfo&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9arNSiaOgt6vQ4tAMTY2oUfUUA_Jk6l4eJQFs2xAr0JpC87edHYfWrHA3Uo8EzYp_LOo&usqp=CAU",
            "https://roboflow.com/images/screenshot.png"
        ],
        price: "Free Tier Available",
        hasApi: true,
        freeTier: true,
        website: "https://roboflow.com/",
        tags: ["Robotics", "Computer Vision", "Machine Learning"]
    },
    {
        id: 59,
        name: "OpenCV AI Kit (OAK)",
        category: "robotics",
        subcategory: "edge-ai",
        description: "An open-source ecosystem for embedded AI and computer vision using depth cameras and neural networks.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8kYHMs8TUNMWefFu4bo74NmU4YuJ7nkIyl92hpY4vI7gvnEKq08CP_lcsmAjoEZw8E4&usqp=CAU",
        images: [
            "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2152045791/settings_images/lQADWGQTpKSx2S5rVlfg_MicrosoftTeams-image_2.png",
            "https://files.seeedstudio.com/wiki/DepthAI/OAK-D-Lite/cover.png"
        ],
        price: "Varies by hardware",
        hasApi: true,
        freeTier: false,
        website: "https://opencv.org/oak/",
        tags: ["Robotics", "Edge AI", "Computer Vision"]
    },
    
    {
        id: 60,
        name: "CoppeliaSim",
        category: "robotics",
        subcategory: "simulation",
        description: "A versatile and scalable robot simulation software widely used in research and education.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKerO_bk9V42VX5xd1wAMDkQNE8Hpewv-85DIHyL0_R_c_GIZ0KFRJ4VO7MSL-QiFJBk&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKerO_bk9V42VX5xd1wAMDkQNE8Hpewv-85DIHyL0_R_c_GIZ0KFRJ4VO7MSL-QiFJBk&usqp=CAU",
            "https://www.coppeliarobotics.com/images/sim_example2.jpg"
        ],
        price: "Free for education",
        hasApi: true,
        freeTier: true,
        website: "https://www.coppeliarobotics.com/",
        tags: ["Robotics", "Simulation", "Education"]
    },
    {
        id: 61,
        name: "RoboDK",
        category: "robotics",
        subcategory: "robot-programming",
        description: "Offline programming and simulation software for industrial robots.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEIFPcDOBrAFkiWej1xvVIsWAClrNQvCqK7fqutfVMqRviF3LKCAWoe3wyAIcQZEBBQQ&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJgjjPRN91LsjVC4NxRomgaed7yfStpFQ0eRLTbqbEQ74dAbQUzuxXqSFg1U1AiIu4h0&usqp=CAU",
            "https://robodk.com/img/screenshots/screenshot2.jpg"
        ],
        price: "Paid (Free Trial Available)",
        hasApi: true,
        freeTier: false,
        website: "https://robodk.com/",
        tags: ["Robotics", "Industrial", "Simulation"]
    },
    {
        id: 62,
        name: "Gazebo",
        category: "robotics",
        subcategory: "simulation",
        description: "Open-source robot simulation software supporting high-fidelity physics and sensor integration.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErivzkbenks0aLCVlamo92QRH8LnakZIXMJsLY9C4Qq-dDLVX7uh6HPCnyAvE8IRtcNQ&usqp=CAU",
        images: [
            "https://thumbs.dreamstime.com/b/modern-landscape-design-gazebo-garden-night-view-yard-contemporary-shiny-lanterns-d-362927749.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Gazebo_simulation.png"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://gazebosim.org/",
        tags: ["Robotics", "Simulation", "Physics"]
    },
    {
        id: 63,
        name: "RobotStudio",
        category: "robotics",
        subcategory: "robot-programming",
        description: "ABB’s simulation and offline programming software for robotics applications.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96pnO4bvnkYRH1_l-_MU4KTxvb9LmC7Z5CiKa4bJQSBP3m9jsfYJOowzN4wIGgpeB4Jw&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdQKOS_d66HHwYM12bMl5UpDRd3VVNld8Wa7GgHQQJgP1JEr-G7jx9zNrtzOarMV97Ao&usqp=CAU",
            "https://new.abb.com/images/default-source/robotics/rs_features.jpg"
        ],
        price: "Paid (Free trial available)",
        hasApi: false,
        freeTier: false,
        website: "https://new.abb.com/products/robotics/robotstudio",
        tags: ["Robotics", "ABB", "Programming"]
    },
    {
        id: 64,
        name: "Clearpath Robotics",
        category: "robotics",
        subcategory: "hardware-platform",
        description: "Autonomous mobile robot platforms and software for indoor/outdoor robotic applications.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOERqVFbHhyBJPnGcvmUPDrT55JgNE1DmcNtsNHa7SEkokO1dWKED60jC0hVfzXnv4iY&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuM9P3mIZieh4zA4vg_HaksXUro1ZK2_O2mxymYrVN-MY_Rwh71_nCcmABLW8nHnxNdM&usqp=CAU",
            "https://www.clearpathrobotics.com/assets/uploads/2021/04/Husky.png"
        ],
        price: "Varies by product",
        hasApi: true,
        freeTier: false,
        website: "https://www.clearpathrobotics.com/",
        tags: ["Robotics", "Autonomous", "Hardware"]
    },
    {
        id: 65,
        name: "Drake",
        category: "robotics",
        subcategory: "control-systems",
        description: "A C++ toolbox for planning, control, and analysis of robotic systems.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxSOU9hWASCfuGlqgqx_EG0lyg11n2t5jcw&s",
        images: [
            "https://images.lifestyleasia.com/wp-content/uploads/sites/5/2023/04/28154510/reinput_portrait_of_drake_as_a_cyborg_with_sinister_lighting_an_a5b65c43-1424-4e10-a8c1-248a776d74c4-1560x900.jpeg",
            "https://drake.mit.edu/images/drake-example.jpg"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://drake.mit.edu/",
        tags: ["Robotics", "Control", "MIT"]
    },
    {
        id: 66,
        name: "PyBullet",
        category: "robotics",
        subcategory: "physics-engine",
        description: "Python module for real-time physics simulation used for robotics and AI research.",
        logo: "https://d4.alternativeto.net/eSGVz2IHBn-duH-L-FsWmEEnMoP4gxjfBPE6tz4gPNc/rs:fit:280:280:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9idWxsZXQtcGh5c2ljc18xMTMyMDMucG5n.png",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdPabBGfrRFD7er5XmOyOpwIMOqDJ4qnV_RX_jwsRQ9pMnkakvWV-Hb--eY00a9kvBXE&usqp=CAU",
            "https://pybullet.org/wordpress/wp-content/uploads/2020/01/bullet-race.jpg"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://pybullet.org/",
        tags: ["Robotics", "Simulation", "Physics"]
    },
    {
        id: 67,
        name: "Webots",
        category: "robotics",
        subcategory: "3d-simulation",
        description: "Open-source 3D robot simulator for prototyping and development.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5e9aSbjilSqgnh_UM8FyF3gLZnU9jayGrXRNLgj-lMSz8qZwBdZLUsZgRbWZJvlzrA&usqp=CAU",
        images: [
            "https://www.webots.online/wp-content/uploads/2023/04/WeBots-Logo-2023.png",
            "https://cyberbotics.com/assets/images/screenshots/screenshot-5.jpg"
        ],
        price: "Free and Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://cyberbotics.com/",
        tags: ["Robotics", "3D", "Simulation"]
    },
    {
        id: 68,
        name: "Machinekit",
        category: "robotics",
        subcategory: "control-systems",
        description: "Platform for machine control including robotics, 3D printing, and CNCs.",
        logo: "https://cdn.slidesharecdn.com/ss_thumbnails/machinekit-machinecontrolreadyfortheinternetofthings-180921094309-thumbnail.jpg?width=640&height=640&fit=bounds",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-rsOtdu0mvdKtZKDPEYvYq4yi3YJtrsef-FG7HcwKOj3jJHH3YHJCXW6FJN4MZnEFE8&usqp=CAU",
            "https://www.machinekit.io/img/screenshot_axis.png"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://www.machinekit.io/",
        tags: ["Robotics", "Machine Control", "CNC"]
    },
    {
        id: 69,
        name: "TurtleBot",
        category: "robotics",
        subcategory: "educational-robot",
        description: "A popular open-source robot kit for learning ROS and robotics.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS_kTXtKMU8lj5D1hQcEyqoAFzf1JMUUp30BY2g8rYB9myXxnbzQ3OWNHPV7KNEfhLjk&usqp=CAU",
        images: [
            "https://chironix.com/wp-content/uploads/2025/04/TurtleBot.png",
            "https://www.turtlebot.com/wp-content/uploads/2021/04/turtlebot3.jpg"
        ],
        price: "Paid hardware",
        hasApi: false,
        freeTier: false,
        website: "https://www.turtlebot.com/",
        tags: ["Robotics", "Education", "ROS"]
    },

    {
        id: 70,
        name: "Autoware",
        category: "robotics",
        subcategory: "autonomous-driving",
        description: "Open-source software for self-driving vehicles built on ROS.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmNDvF705dOm5ZXiA7reQQ7bd0ZyxXijLApa3wEVsxCbhB7AcNHbrx1yYRchHZKwGhm0&usqp=CAU",
        images: [
            "https://miro.medium.com/v2/resize:fit:1400/0*eajujoYfI0Roi4H6",
            "https://www.autoware.org/wp-content/uploads/2020/10/aw-visual.jpg"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://www.autoware.org/",
        tags: ["Robotics", "Autonomous Vehicles", "ROS"]
    },
    {
        id: 71,
        name: "ROSbot",
        category: "robotics",
        subcategory: "robot-platform",
        description: "Autonomous robot platform for learning and research, fully integrated with ROS.",
        logo: "https://www.shutterstock.com/image-vector/humanoid-robot-logo-symbol-vector-260nw-2441243713.jpg",
        images: [
            "https://pics.craiyon.com/2023-06-20/9de63c71a5bd44258f062c86e6a6716a.webp",
            "https://husarion.com/images/rosbot-2r.jpg"
        ],
        price: "Paid hardware",
        hasApi: true,
        freeTier: false,
        website: "https://husarion.com/",
        tags: ["Robotics", "ROS", "Autonomous"]
    },
    {
        id: 72,
        name: "PX4 Autopilot",
        category: "robotics",
        subcategory: "drone-control",
        description: "Open-source autopilot software for drones and unmanned vehicles.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0QyMs6mlck7Ia-Ih-cSpQP5h1cCffo0-2N-hTZSB8IksPSK_oBOKCGWxsjb_SWPGDEI&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrtwFJAG2zBTDqk5Hjy4wDyTXBftEqbSSdQCPL-hJ2USQcq2cnOVrpPS_alZb4xWhhxY&usqp=CAU",
            "https://docs.px4.io/main/assets/airframes/standard/plane_generic.png"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://px4.io/",
        tags: ["Robotics", "Drone", "Autopilot"]
    },
    {
        id: 73,
        name: "ZED SDK",
        category: "robotics",
        subcategory: "depth-sensing",
        description: "Depth sensing and 3D mapping SDK for robotics using ZED stereo cameras.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPw83Yjuo02nuxW1JsiCLSUQRkvm-JuGJT0Pnijj9p2oVkDGdNaNVaEZJ1bPKF2U9lqk&usqp=CAU",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTgO_n9oeBZ6Vqc9260DbTKU8GPge70Jr4lxnS7r_sOT0W8Y8JzDzGyvAs99ozrg165M&usqp=CAU",
            "https://www.stereolabs.com/images/zed-sdk-depth-sensing.jpg"
        ],
        price: "Free with hardware",
        hasApi: true,
        freeTier: true,
        website: "https://www.stereolabs.com/zed-sdk/",
        tags: ["Robotics", "3D Mapping", "Depth Camera"]
    },
    {
        id: 74,
        name: "Actuino",
        category: "robotics",
        subcategory: "actuator-control",
        description: "An open-source ROS-based actuator control software for robotics arms and joints.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE8omTn71p0aRVfOzj4Nwl9l6cknI8tk1mX9vc0xXHwl1fJWIO-AwgO_WFLtalwpdajU&usqp=CAU",
        images: [
            "https://www.tekstac.com/wp-content/uploads/2025/05/AI-in-action-transforming-industry-Tekstac.webp",
            "https://raw.githubusercontent.com/actuino/actuino/main/docs/img/actuino-demo2.jpg"
        ],
        price: "Open Source",
        hasApi: true,
        freeTier: true,
        website: "https://github.com/actuino/actuino",
        tags: ["Robotics", "Actuators", "Control"]
    },

  {
    id: 75,
    name: "Resemble AI",
    category: "speech",
    subcategory: "text-to-speech",
    description: "Custom voice cloning and real-time TTS with emotion control.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5Hu13KcV5u4slBusMHyuE2jvuubsRKLrwlZq8CQKJlJbD_kb6qUPV6cFNOqAOdPLStA&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OGHeaRIC_6nlqE6PdSpHLAANHdLLVL45WxqD7y-h4_CyjDX8DHB3Bl0lHQCXWTmK0JQ&usqp=CAU"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://www.resemble.ai/",
    tags: ["Voice Cloning", "Real-Time", "Emotional Speech"]
  },
  {
    id: 76,
    name: "Overdub (Descript)",
    category: "speech",
    subcategory: "text-to-speech",
    description: "Create ultra-realistic custom voice clones directly within Descript's audio/video editor.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtsPhxm10Bkinahg8DPM_nLZBgpoqSuYi-Q&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01QLng2CNZA-2N5WOdkSbiulxr406jnJQzEi-he_GTIxOj93684M6U6TPr1ru_gUdmsY&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: false,
    freeTier: true,
    website: "https://www.descript.com/overdub",
    tags: ["Voice Cloning", "Podcasting", "Video Editing"]
  },
  {
    id: 77,
    name: "Otter.ai",
    category: "speech",
    subcategory: "speech-to-text",
    description: "Live transcription with speaker identification, summary keywords, and integrations for meetings.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRje5mQMxIddB2UFmaLii-4u2bSv-oi0ER6uLN2Ph9YJJNaiiyi_iDRTJEDxwyhtSD069w&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR3nmCl0iyb270v7A0kfOo_KWPzdIU2IWiujN546C_49UIVM-oDyJxcawl1j6OdGI81I&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://otter.ai/",
    tags: ["Transcription", "Meetings", "AI Assistant"]
  },
  {
    id: 78,
    name: "Speechmatics",
    category: "speech",
    subcategory: "speech-to-text",
    description: "Multi-language automatic speech recognition with strong accuracy and 29 languages supported.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOf3AftiqUqkNI9YluhuNfiMWeH1Dv3K6wSfDmDmz0HdztE9hNS0CZE1xoUaOTKAfiGs&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdv6NDyzeWv4Tm1Br04fzhXZA40bDY9gSKu8n0WEFjIst20pJd4sd61QzHqyVA-x5RPA&usqp=CAU"
    ],
    price: "Pay-as-you-go",
    hasApi: true,
    freeTier: false,
    website: "https://www.speechmatics.com/",
    tags: ["ASR", "Multilingual", "API"]
  },
  {
    id: 79,
    name: "Rev.ai",
    category: "speech",
    subcategory: "speech-to-text",
    description: "Automatic speech recognition API with optional human-grade captioning services.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtai9hqpLsCHSvi7wB7AfJiD74H1Jf8KP6lsQx3ZYewVBBoADB5uuZPEhZE3BGs2Y-pg&usqp=CAU",
    images: [
      "https://cdn.freelogovectors.net/wp-content/uploads/2022/12/rev-logo-freelogovectors.net_.png"
    ],
    price: "Pay-as-you-go",
    hasApi: true,
    freeTier: false,
    website: "https://www.rev.ai/",
    tags: ["Transcription", "API", "Accuracy"]
  },
  {
    id: 80,
    name: "iSpeech",
    category: "speech",
    subcategory: "text-to-speech",
    description: "High-quality neural TTS with support for multiple languages and voices for mobile apps.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYfv9EMGswvgblHs-WWgTMxkRGvJYYpFz-g&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHMSRwM7C9fYIAYslYnou2k_uUi3UvMHD0ln-0kWZNlZLXCaC6GX293xp_OEIl7qNesk&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.speechly.com/",
    tags: ["TTS", "Mobile SDK", "Multilingual"]
  },
  {
    id: 81,
    name: "Voicify AI",
    category: "speech",
    subcategory: "voice-bots",
    description: "Conversational voice AI for chatbots, IVRs, and voice assistants using natural speech.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-su1t1lm7eUcK6hRFWmwoXD8ZXpLhMEB2-YcPNpMfmXRX84T7oe2_UjReo-62zRwp1ZA&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtS5XMkwrYgqFKI2y_6DIfe7eSkiVU9_5TsxEjcQcUzs5LszpkSjJASFffND_JNK-uUFE&usqp=CAU"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://voicify.ai/",
    tags: ["Conversational AI", "Voice Bot", "Enterprise"]
  },
  {
    id: 82,
    name: "Kaldi GStreamer Server",
    category: "speech",
    subcategory: "speech-to-text",
    description: "Production-ready ASR server built on Kaldi, streaming support for real-time apps.",
    logo: "https://kaldi-asr.org/kaldi_logo.png",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OFWWNtK5b2nZSCss8240v_c0JXvTE2UDl_D3Yv28WvnMF0sk-NSZrHYmQge_gHa_Umc&usqp=CAU"
    ],
    price: "Open Source",
    hasApi: false,
    freeTier: true,
    website: "https://github.com/alsa-project/kaldi-gstreamer-server",
    tags: ["ASR", "Streaming", "Open Source"]
  },
  {
    id: 83,
    name: "Sonix.ai",
    category: "speech",
    subcategory: "speech-to-text",
    description: "Automated transcription with timestamps, speaker labels, and multi-language support.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DUNt7iHCBW4gE4IsfX1G9Xgv027oFIaFwKLBaPntaDOuJ5EEfE3lhYL6XRJ2WYTN2Zw&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELD7gcG2-UPP2GcTSBCkTieSxNb57vgOP9BQ3z1ZBhsW9bmnXNE62FM-p_ildtOfYtp4&usqp=CAU"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://sonix.ai/",
    tags: ["Transcription", "Timestamps", "Multilingual"]
  },
  {
    id: 84,
    name: "Speechly",
    category: "speech",
    subcategory: "voice-UI",
    description: "Real-time voice recognition for building voice-enabled UIs in web and mobile apps.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDDNCsCss6G7qMM5bkHMlYFF8gggvSRZJHZPJtJuAjdLlLwDEZpESDq-JepoNjn3A_Jg&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0P6na7sDPhWjyo8TGQkoNnMxKf3-nad7Qbs1ck-ptEl2UIxmlG3VyuJ3xEcVjWdJxhzs&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://www.speechly.com/",
    tags: ["Voice UI", "Developer SDK", "Real-Time"]
  },

  {
    id: 85,
    name: "Braina",
    category: "speech",
    subcategory: "speech-to-text/assistant",
    description: "Intelligent virtual assistant and dictation software for Windows with speech recognition, automation, and LLM integration.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXs-iTzfaQ_vcJADuY8vsuRE6BL6ljNj0Lqon7DrSN5VRRHqWLdKrJyaLa_iNlM1fWwc&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbA_lQGQbrSl-_Of1ZuqG3KtfjHOonjdPZmGfvgUTcjW8xD1B1pdxA3AeIL40wS4tHM8&usqp=CAU"
    ],
    price: "Freemium (Pro tiers available)",
    hasApi: true,
    freeTier: true,
    website: "https://www.brainasoft.com/braina/",
    tags: ["Virtual Assistant", "Dictation", "Speech Recognition"]
  },
  {
    id: 86,
    name: "Amazon Polly",
    category: "speech",
    subcategory: "text-to-speech",
    description: "AWS text-to-speech service offering neural TTS across dozens of languages and voices, used by platforms like Duolingo.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISLF8aMtyZYLx_vXo0GfPhKyOWbr9eLanQQzhNmpirL9dReDjwIDRjizBa88QkWRRXvo&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd0IqcR5q93IzkbcbWTgoGWTxmjaGEbypV8HRdqtpFygbEehVYX1sRaDWuXk2HQE7-2E&usqp=CAU"
    ],
    price: "Pay-as-you-go via AWS",
    hasApi: true,
    freeTier: true,
    website: "https://aws.amazon.com/polly/",
    tags: ["Cloud TTS", "AWS", "Multilingual"]
  },
  {
    id: 87,
    name: "Adobe Enhanced Speech",
    category: "speech",
    subcategory: "audio-enhancement",
    description: "AI tool that improves poor-quality recorded speech into studio‑grade clarity by suppressing noise and artifacts.",
    logo: "https://cdn.arstechnica.net/wp-content/uploads/2022/12/adobe_speech_enhance_hero_1.jpg",
    images: [
      "https://articles-img.sftcdn.net/t_article_cover_m/auto-mapping-folder/sites/3/2024/12/1-adobe-podcast.jpg"
    ],
    price: "Currently beta free",
    hasApi: false,
    freeTier: true,
    website: "https://podcast.adobe.com/enhance",
    tags: ["Speech Enhancement", "Noise Reduction", "Studio Quality"]
  },
  {
    id: 88,
    name: "Respeecher",
    category: "speech",
    subcategory: "voice-cloning",
    description: "Advanced voice‑transformation system that allows you to recreate another person’s voice using AI.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYuCPqxTiRMri7kXTqoxbYc7WzXhO33XQHmC8_1CDoHdGstk2nQ-Y0BQO5PfQLAj5MxE&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0uH4CyiXRygc6Pb8bnT8tIiHrOhJPMFZAIt8WLbf_wygbqaWH4HI9SP-6qML7LR-CJg&usqp=CAU"
    ],
    price: "Subscription / custom pricing",
    hasApi: true,
    freeTier: false,
    website: "https://www.respeecher.com/",
    tags: ["Voice Cloning", "Media Production", "Film‑Ready"]
  },
  {
    id: 89,
    name: "Speechki",
    category: "speech",
    subcategory: "text-to-speech",
    description: "Realistic voice generator with over 1,100 voices in 80+ languages, optimized for audiobooks and e‑learning.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyxeronwTrZlgafj1UYt7cT8Z-gs_0sBb7lvscZQ2UT7APE0_a1Y0CW0HbGFOjWJPaWk&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOm_IKDv9vSQCVRQoKXo9rQa3YEf1kpKPdhYdBV-vniB8DdTBuxkLA2kpBQP9sZxKSlbE&usqp=CAU"
    ],
    price: "Freemium",
    hasApi: true,
    freeTier: true,
    website: "https://speechki.ai/",
    tags: ["Audiobooks", "Multilingual", "Content Creation"]
  },
  {
    id: 95,
    name: "Google Cloud Natural Language API",
    category: "nlp",
    subcategory: "text-analysis",
    description: "Pre‑trained NLP models for sentiment analysis, entity recognition, syntax parsing, and content classification.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOgZWM4N5LCdJvBvAtB2OUOMTN8JkRXgK3kNrKhjTcux78R0ulNsTaxVr7rujVd1ZVp4&usqp=CAU",
    images: [
      "https://www.drupal.org/files/project-images/Google-logos-02_1.png"
    ],
    price: "Pay‑as‑you‑go",
    hasApi: true,
    freeTier: true,
    website: "https://cloud.google.com/natural-language",
    tags: ["Sentiment", "Entity Recognition", "Google Cloud"]
  },
  {
    id: 96,
    name: "IBM Watson Natural Language Understanding",
    category: "nlp",
    subcategory: "text-analysis",
    description: "Enterprise-grade NLP with tone, emotion, sentiment, entity and keyword extraction.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOkJ_JCnJJeKMNfeM6uLLM4cfDgEehEaET_sjfy6QFziLUbn5I5iOs2hmZb_WLWCynnU&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKa8xiW6dE2Izz9LLBsSH1-c6ddQuffuzxFnZBHk8z7G0FXtsPYHVem4OlpkRVPwB2BQ&usqp=CAU"
    ],
    price: "Subscription / pay-as-you-go",
    hasApi: true,
    freeTier: false,
    website: "https://www.ibm.com/cloud/watson-natural-language-understanding",
    tags: ["Enterprise", "Emotion Detection", "Entity Extraction"]
  },
  {
    id: 97,
    name: "spaCy",
    category: "nlp",
    subcategory: "library",
    description: "Open‑source, high‑performance NLP library for tokenization, NER, dependency parsing, and custom pipelines.",
    logo: "https://spacy.io/_next/static/media/social_default.96b04585.jpg",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1y_jOay6xiJGo2eJXh0o6HtCFnbq92j-J36bo4C4JvQzNkcRo_EcnKyc4Hk9AosG2M0&usqp=CAU"
    ],
    price: "Open Source",
    hasApi: false,
    freeTier: true,
    website: "https://spacy.io",
    tags: ["NER", "Parsing", "Production"]
  },
  {
    id: 98,
    name: "Cohere",
    category: "nlp",
    subcategory: "llm-api",
    description: "API‑driven platform offering text classification, semantic search, summarization, and generation tailored for enterprises.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3tV4cuD_ifeMNcYOn4TaG3HZYPDD9GSrO0OJFhMoHSU8oGQKVNSYcfyT-ROcwj65Kco&usqp=CAU",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcjCCPzRsvQV6EmcuOLp4sWbAjJi_xXRdOyGVfYIpDyqoNOoGt4LXhTcczFT-LvjV3Qk&usqp=CAU"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: true,
    website: "https://cohere.ai",
    tags: ["Semantic Search", "Text Generation", "Enterprise"]
  },
  {
    id: 99,
    name: "Anthropic Claude",
    category: "nlp",
    subcategory: "chatbot-llm",
    description: "Ethically designed language model family (Claude 4 Sonnet & Opus) offering safe conversational AI.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM91o7r1wba01xcHW15PLqbe-ONaTIjOO3g&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvYEH6JG_ToVZerLWOTx3afp3EZTjZJmjVosg8XFA4qxc4LLr7XoSRMHLYwB56Uhoigo&usqp=CAU"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: false,
    website: "https://claude.ai",
    tags: ["Conversational AI", "Safe AI", "Claude 4"] 
  },
  {
    id: 100,
    name: "MonkeyLearn",
    category: "nlp",
    subcategory: "no-code-text-analysis",
    description: "No-code platform for text classification, sentiment analysis, keyword extraction via drag‑and‑drop.",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_k-c2XHx4B0HUFY6o791YppXoqlN7s5jc-7QSeJcwD7yxA=s900-c-k-c0x00ffffff-no-rj",
    images: [
      "https://www.chatgptguide.ai/wp-content/uploads/2024/08/image-13.jpg"
    ],
    price: "Subscription",
    hasApi: true,
    freeTier: true,
    website: "https://monkeylearn.com",
    tags: ["No-code", "Sentiment", "Text Classification"]
  },
  {
    id: 101,
    name: "Gensim",
    category: "nlp",
    subcategory: "topic-modeling",
    description: "Open-source library for topic modeling and document similarity using LDA and word embeddings.",
    logo: "https://numfocus.org/wp-content/uploads/2018/01/gensim-circle-291x300.png",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0Xp4b-uBRA6OiP8c2qpRfNMK58OKHdHzHClvF_jqYFvwYmUEy37Sv7EYmQnToPUW6qw&usqp=CAU"
    ],
    price: "Open Source",
    hasApi: false,
    freeTier: true,
    website: "https://radimrehurek.com/gensim",
    tags: ["Topic Modeling", "Embeddings", "Document Similarity"]
  },
  {
    id: 102,
    name: "Rasa Open Source",
    category: "nlp",
    subcategory: "conversational-ai",
    description: "Framework for building custom chatbots and conversational assistants with full control over dialogue logic.",
    logo: "https://www.gartner.com/pi/vendorimages/rasa_enterprise-conversational-ai-platforms_1705536057892.png",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCrG4-z3-2qeOzRwgcn0XnKqZprp4f3UmUuG4Me-nacVpd4W2PoIAAVbhecqBs2Xu--U&usqp=CAU"
    ],
    price: "Open Source",
    hasApi: true,
    freeTier: true,
    website: "https://rasa.com",
    tags: ["Chatbot", "Dialogue", "Open Source"]
  },
  {
    id: 103,
    name: "Spark NLP",
    category: "nlp",
    subcategory: "scalable-library",
    description: "Enterprise-ready NLP library built on Apache Spark for scalable entity recognition, sentiment, classification across languages.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2kg-FjNxLyEhVkr7aZQjYeTpqQCtId1q-mEoksDzqOH-IRTi0TnRb-YgNPwITiTCiOU&usqp=CAU",
    images: [
      "https://www.johnsnowlabs.com/wp-content/uploads/2023/08/Spark-NLP.webp"
    ],
    price: "Open Source / commercial",
    hasApi: true,
    freeTier: true,
    website: "https://sparknlp.org",
    tags: ["Scalable NLP", "Spark", "Multilingual"]
  },
  {
    id: 104,
    name: "Deepset Haystack",
    category: "nlp",
    subcategory: "document-qa",
    description: "Framework for building search & QA applications on your own data using semantic search, retrieval‑augmented generation.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMjMjAxsD6vn8oNg92F1VNuhCZCWFMO7v3A&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3k71umf_weZxqWSwrRWQEoOsw5fH4QZ1Ow&s"
    ],
    price: "Open Source / SaaS",
    hasApi: true,
    freeTier: true,
    website: "https://deepset.ai",
    tags: ["QA", "Semantic Search", "Enterprise"]
  },

  {
    id: 105,
    name: "Plnia Text Summarization API",
    category: "nlp",
    subcategory: "summarization",
    description: "RESTful API to automatically generate concise summaries from documents or text blocks.",
    logo: "https://www.plnia.com/wp-content/themes/plnia/img/plnia-logo-xl.png",
    images: [
      "https://www.plnia.com/wp-content/themes/plnia/img/text--analysis--apis.jpg"
    ],
    price: "Subscription (Free trial)",
    hasApi: true,
    freeTier: true,
    website: "https://www.plnia.com/products/text-summarization-api/",
    tags: ["Summarization", "API", "Text Analysis"]
  }
  


];

const aiToolsContainer = document.getElementById("ai-tools-container");
const searchInput = document.querySelector(".search-input");
const filterBtns = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("load-more");
const toolModal = document.getElementById("tool-modal");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalApi = document.getElementById("modal-api");
const modalFreeTier = document.getElementById("modal-free-tier");
const modalWebsite = document.getElementById("modal-website");
const modalTags = document.getElementById("modal-tags");
const modalVisit = document.getElementById("modal-visit");
const closeModal = document.getElementById("close-modal");
const modalCarousel = document.querySelector(".carousel-inner");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");

let currentFilter = "all";
let currentSearch = "";
let displayedTools = 9;
let currentIndex = 0;

function init() {
    renderTools(aiTools.slice(0, displayedTools));

    searchInput.addEventListener("input", handleSearch);
    filterBtns.forEach((btn) => btn.addEventListener("click", handleFilter));
    loadMoreBtn.addEventListener("click", loadMoreTools);
    closeModal.addEventListener("click", () => toolModal.classList.add("hidden"));
}

function renderTools(tools) {
    aiToolsContainer.innerHTML = "";

    tools.forEach((tool) => {
        const card = document.createElement("div");
        card.className = "card bg-white rounded-lg shadow overflow-hidden fade-in";
        card.innerHTML = `
                    <div class="h-48 bg-gray-100 relative overflow-hidden">
                        <img src="${tool.images[0]}" alt="${tool.name
            } interface showing dashboard and features" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-5">
                        <div class="flex items-start">
                            <img src="${tool.logo}" alt="${tool.name
            } logo in blue and white colors" class="w-12 h-12 rounded-md mr-4" />
                            <div>
                                <a href="${tool.website
            }" target="_blank" class="text-lg font-semibold text-gray-900 hover:text-indigo-600">${tool.name
            }</a>
                                <span class="inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                tool.category
            )} text-white mt-1">${formatCategory(
                tool.category
            )}</span>
                            </div>
                        </div>
                        <p class="text-gray-600 mt-3 text-sm line-clamp-2">${tool.description
            }</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-sm ${tool.freeTier
                ? "text-green-600"
                : "text-amber-600"
            }">${tool.price}</span>
                            <button data-id="${tool.id
            }" class="view-details-btn px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors">Details</button>
                        </div>
                    </div>
                `;
        aiToolsContainer.appendChild(card);
    });

    document.querySelectorAll(".view-details-btn").forEach((btn) => {
        btn.addEventListener("click", () =>
            viewToolDetails(parseInt(btn.getAttribute("data-id")))
        );
    });
}

function viewToolDetails(id) {
    const tool = aiTools.find((t) => t.id === id);
    if (!tool) return;

    modalTitle.textContent = tool.name;
    modalCategory.textContent = formatCategory(tool.category);
    modalDescription.textContent = tool.description;
    modalPrice.textContent = tool.price;
    modalApi.textContent = tool.hasApi ? "Yes" : "No";
    modalFreeTier.textContent = tool.freeTier ? "Yes" : "No";

    
    modalWebsite.textContent = tool.website;
    modalWebsite.href = tool.website;

    
    const modalVisitLink = document.getElementById("modal-visit-link");
    modalVisitLink.href = tool.website;
    modalVisitLink.textContent = `Visit ${tool.name}`;

    modalTags.innerHTML = "";
    tool.tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.className =
            "px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full";
        tagEl.textContent = tag;
        modalTags.appendChild(tagEl);
    });

   
    modalCarousel.innerHTML = "";
    tool.images.forEach((img, index) => {
        const item = document.createElement("div");
        item.className = "carousel-item w-full flex-shrink-0";
        item.style.transform = `translateX(${index * 100}%)`;
        item.innerHTML = `<img src="${img}" alt="${tool.name} screenshot showing interface and features" class="w-full h-auto" />`;
        modalCarousel.appendChild(item);
        currentIndex = 0;
    });

    
    toolModal.classList.remove("hidden");
}

function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    filterTools();
}

function handleFilter(e) {
    filterBtns.forEach((btn) => {
        if (btn === e.target) {
            btn.classList.remove("bg-white", "text-gray-700", "border");
            btn.classList.add("bg-indigo-600", "text-white");
        } else {
            btn.classList.remove("bg-indigo-600", "text-white");
            btn.classList.add("bg-white", "text-gray-700", "border");
        }
    });

    currentFilter = e.target.getAttribute("data-filter");
    filterTools();
}

function filterTools() {
    let filteredTools = aiTools;

    if (currentFilter !== "all") {
        filteredTools = filteredTools.filter(
            (tool) => tool.category === currentFilter
        );
    }

    if (currentSearch) {
        filteredTools = filteredTools.filter(
            (tool) =>
                tool.name.toLowerCase().includes(currentSearch) ||
                tool.description.toLowerCase().includes(currentSearch) ||
                tool.tags.some((tag) => tag.toLowerCase().includes(currentSearch))
        );
    }

    displayedTools = 15;

    renderTools(filteredTools.slice(0, displayedTools));

    loadMoreBtn.style.display =
        filteredTools.length > displayedTools ? "block" : "none";
}

function loadMoreTools() {
    let filteredTools = aiTools;

    if (currentFilter !== "all") {
        filteredTools = filteredTools.filter(
            (tool) => tool.category === currentFilter
        );
    }

    if (currentSearch) {
        filteredTools = filteredTools.filter(
            (tool) =>
                tool.name.toLowerCase().includes(currentSearch) ||
                tool.description.toLowerCase().includes(currentSearch) ||
                tool.tags.some((tag) => tag.toLowerCase().includes(currentSearch))
        );
    }

    displayedTools += 9;
    renderTools(filteredTools.slice(0, displayedTools));

    if (displayedTools >= filteredTools.length) {
        loadMoreBtn.style.display = "none";
    }
}

function formatCategory(category) {
    const categoryMap = {
        "machine-learning": "Machine Learning",
        generative: "Generative AI",
        vision: "Computer Vision",
        nlp: "Natural Language",
        speech: "Speech AI",
        robotics: "Robotics",
    };
    return categoryMap[category] || category;
}

function getCategoryColor(category) {
    const colorMap = {
        "machine-learning": "bg-amber-500",
        generative: "bg-purple-500",
        vision: "bg-blue-500",
        nlp: "bg-green-500",
        speech: "bg-red-500",
        robotics: "bg-indigo-500",
    };
    return colorMap[category] || "bg-gray-500";
}

carouselPrev.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    modalCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

carouselNext.addEventListener("click", () => {
    currentIndex = Math.min(
        aiTools.find((t) => t.id === parseInt(modalTitle.getAttribute("data-id")))
            ?.images.length - 1 || 0,
        currentIndex + 1
    );
    modalCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.addEventListener("DOMContentLoaded", init);

window.addEventListener('scroll', function () {
    const goTopBtn = document.getElementById('goTopBtn');
    if (window.scrollY > 300) {
        goTopBtn.classList.remove('hidden');
    } else {
        goTopBtn.classList.add('hidden');
    }
});


document.getElementById('goTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});