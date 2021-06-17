const app = new Vue ({

    el: "#app",

    data:{

        linkHeader:[
            {
                nameLink: "Home",
                link: ""
            },
            {
                nameLink: "Pages",
                link: ""
            },
            {
                nameLink: "Courses",
                link: ""
            },
            {
                nameLink: "Features",
                link: ""
            },
            {
                nameLink: "Blog",
                link: ""
            },
            {
                nameLink: "Shop",
                link: ""
            },
        ],

        latestCoursesCard:[
            {
                image: "./dist/images/motivation-course-06-480x298.jpg",
                cardPrice: "$30.",
                cardPriceCent: "00",
                cardTitle: "How to be Successful: Create A Growth Mindset For Success",
                cardLessons: "3 Lessons",
                cardStudents: "50 Students"
            },
            {
                image: "./dist/images/motivation-course-05-480x298.jpg",
                cardPrice: "$30.",
                cardPriceCent: "00",
                cardTitle: "How to Build Confidence in Your Abilities",
                cardLessons: "1 Lesson",
                cardStudents: "50 Students"
            },
            {
                image: "./dist/images/motivation-course-04-480x298.jpg",
                cardPrice: "$20.",
                cardPriceCent: "00",
                cardTitle: "Productivity Machine - Focus in a Distracted World",
                cardLessons: "5 Lessons",
                cardStudents: "50 Students"
            },
            {
                image: "./dist/images/motivation-course-03-480x298.jpg",
                cardPrice: "$20.",
                cardPriceCent: "00",
                cardTitle: "Effective Time Management Mastery - Complete Guide",
                cardLessons: "18 Lessons",
                cardStudents: "50 Students"
            },
            {
                image: "./dist/images/motivation-course-02-480x298.jpg",
                cardPrice: "$25.",
                cardPriceCent: "99",
                cardTitle: "Body Language Secrets for Entrepreneurs",
                cardLessons: "19 Lessons",
                cardStudents: "50 Students"
            },
            {
                image: "./dist/images/motivation-course-01-480x298.jpg",
                cardPrice: "$19.",
                cardPriceCent: "99",
                cardTitle: "Management Skills: The Science of Leadership",
                cardLessons: "17 Lessons",
                cardStudents: "50 Students"
            },
        ],

        blogUpdateCard:[
            {
                image: "./dist/images/motivation-blog-04-480x325.jpg",
                cardDate: "May, 13, 2020",
                cardTitle: "How to Stay True to Your Personal Brand",
                cardParagraph: "When it comes to your business or career, you want ..."
            },
            {
                image: "./dist/images/motivation-blog-03-480x325.jpg",
                cardDate: "May, 13, 2020",
                cardTitle: "5 Vital Lessons in 5 Years of Freelancing",
                cardParagraph: "Being self-employed and working from home, it's easy to get"
            },
            {
                image: "./dist/images/motivation-blog-02-480x325.jpg",
                cardDate: "May, 13, 2020",
                cardTitle: "11 Super Useful Tips for Small-Business Owners",
                cardParagraph: "Being a small-business owner poses a ton of challenges. We ..."
            },
            {
                image: "./dist/images/motivation-blog-01-480x325.jpg",
                cardDate: "May, 13, 2020",
                cardTitle: "How to Give Yourself Grace to Start Again",
                cardParagraph: "Forgive yourself for bad habits you may have started or ..."
            },
        ],

        linkFooterExplore:[
            {
                nameLink: "Start here",
                link: ""
            },
            {
                nameLink: "Blog",
                link: ""
            },
            {
                nameLink: "About us",
                link: ""
            },
        ],

        linkFooterContact:[
            {
                nameLink: "Success story",
                link: ""
            },
            {
                nameLink: "Courses",
                link: ""
            },
            {
                nameLink: "Contact us",
                link: ""
            },
        ],

        linkFooterInfo:[
            {
                nameLink: "Membership",
                link: ""
            },
            {
                nameLink: "Purchase guide",
                link: ""
            },
            {
                nameLink: "Privacy policy",
                link: ""
            },
            {
                nameLink: "Terms of service",
                link: ""
            },
        ]
    },

    methods: {},

    mounted () {}

})