
export const tasksList = {
    isLoggedIn: true,
    categories: [
        {
            name: 'inbox',
            id:1,
            items: [
                {
                    tags: {
                        favorite: false
                    },
                    date: "",
                    title: "Hello World",
                    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    tags: {
                        favorite: true
                    },
                    date: "",
                    title: "Today is Awesome",
                    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ],
        },
        { 
            name: 'today',
            id:2,
            tasks: []
        },
        { 
            name: 'upcoming',
            id:3,
            tasks: []
        },
        { 
            name: 'favorites',
            id:4,
            tasks: []
        }
    ]
}

