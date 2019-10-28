let db = {
  users: [
    {
      userId: "",
      email: "",
      handle: "",
      createdAt: "",
      imageUrl: "",
      bio: "Hello this is Loknath",
      website: "http://loknath.tk",
      location: "sarawak, Malaysia"
    }
  ],

  schemas: [
    {
      userHandle: "user",
      body: "this is string",
      createdAt: "2019-09-07",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "",
      screamId: "JB802xvQ91LfyS6OgOEl",
      body: "",
      createdAt: "2019-09-10T02:50:57.223Z"
    }
  ],

  notifications: [
    {
      recipient: "user",
      sender: "jon",
      read: "true | false",
      screamId: "dfdfdfdfdfdf",
      type: "like | comment",
      createdAt: "date"
    }
  ]
};

const userDetails = {
  // Redux Data

  credentials: {
    userId: "",
    email: "",
    handle: "",
    createdAt: "",
    imageUrl: "",
    bio: "",
    website: "",
    location: ""
  },

  likes: [
    {
      userHandle: "user",
      screamId: ""
    },

    {
      userHandle: "",
      screamId: ""
    }
  ]
};
