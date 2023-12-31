/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Inserts seed entries
  await knex('wishlist').insert([
    {
      id: 1,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 1,
      image_url: null,
    },
    {
      id: 2,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 2,
      image_url: null,
    },
    {
      id: 3,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 4,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 1,
      image_url: null,
    },
    {
      id: 5,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 1,
      image_url: null,
    },
    {
      id: 6,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 1,
      image_url: null,
    },

    // Jane Doe
    {
      id: 7,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 2,
      image_url: null,
    },
    {
      id: 8,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 2,
      image_url: null,
    },
    {
      id: 9,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 2,
      image_url: null,
    },
    {
      id: 10,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 2,
      image_url: null,
    },
    {
      id: 11,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 2,
      image_url: null,
    },

    // Bob Smith
    {
      id: 12,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 13,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 3,
      image_url: null,
    },
    {
      id: 14,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 15,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 16,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 3,
      image_url: null,
    },
    {
      id: 17,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 3,
      image_url: null,
    },

    // Ross Geller
    {
      id: 18,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 4,
      image_url: null,
    },
    {
      id: 19,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 4,
      image_url: null,
    },
    {
      id: 20,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 4,
      image_url: null,
    },
    {
      id: 21,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 4,
      image_url: null,
    },
    {
      id: 22,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 4,
      image_url: null,
    },
    {
      id: 23,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 4,
      image_url: null,
    },

    // Monica Geller
    {
      id: 24,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 5,
      image_url: null,
    },
    {
      id: 25,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 5,
      image_url: null,
    },
    {
      id: 26,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 5,
      image_url: null,
    },
    {
      id: 27,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 5,
      image_url: null,
    },
    {
      id: 28,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 5,
      image_url: null,
    },
    {
      id: 29,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 5,
      image_url: null,
    },

    // Joey Tribbiani
    {
      id: 30,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 6,
      image_url: null,
    },
    {
      id: 31,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 6,
      image_url: null,
    },
    {
      id: 32,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 6,
      image_url: null,
    },
    {
      id: 33,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 6,
      image_url: null,
    },
    {
      id: 34,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 6,
      image_url: null,
    },
    {
      id: 35,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 6,
      image_url: null,
    },

    // Chandler Bing
    {
      id: 36,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 7,
      image_url: null,
    },
    {
      id: 37,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 7,
      image_url: null,
    },
    {
      id: 38,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 7,
      image_url: null,
    },
    {
      id: 39,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 7,
      image_url: null,
    },
    {
      id: 40,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 7,
      image_url: null,
    },
    {
      id: 41,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 7,
      image_url: null,
    },

    // Phoebe Buffay
    {
      id: 42,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 8,
      image_url: null,
    },
    {
      id: 43,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 8,
      image_url: null,
    },
    {
      id: 44,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 8,
      image_url: null,
    },
    {
      id: 45,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 8,
      image_url: null,
    },
    {
      id: 46,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 8,
      image_url: null,
    },
    {
      id: 47,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 8,
      image_url: null,
    },

    // Rachel Green
    {
      id: 48,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 9,
      image_url: null,
    },
    {
      id: 49,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 9,
      image_url: null,
    },
    {
      id: 50,
      name: 'Wedding Registry',
      description:
        'We are getting married and these are the things we need for our new home!',
      private: false,
      user_id: 9,
      image_url: null,
    },
    {
      id: 51,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 9,
      image_url: null,
    },
    {
      id: 52,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 9,
      image_url: null,
    },
    {
      id: 53,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 9,
      image_url: null,
    },

    // Steve Rogers
    {
      id: 54,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 10,
      image_url: null,
    },
    {
      id: 55,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 10,
      image_url: null,
    },
    {
      id: 56,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 10,
      image_url: null,
    },
    {
      id: 57,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 10,
      image_url: null,
    },
    {
      id: 58,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 10,
      image_url: null,
    },

    // Thor Odinson
    {
      id: 59,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 11,
      image_url: null,
    },
    {
      id: 60,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 11,
      image_url: null,
    },
    {
      id: 61,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 11,
      image_url: null,
    },
    {
      id: 62,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 11,
      image_url: null,
    },
    {
      id: 63,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 11,
      image_url: null,
    },

    // Bruce Banner
    {
      id: 64,
      name: 'Birthday Wishlist',
      description: 'My birthday is coming up and these are the things I want!',
      private: false,
      user_id: 12,
      image_url: null,
    },
    {
      id: 65,
      name: 'Christmas Wishlist',
      description:
        'I have been good this year and these are the things I want for Christmas!',
      private: true,
      user_id: 12,
      image_url: null,
    },
    {
      id: 66,
      name: 'Summer Vacation Wishlist',
      description: 'These are the things I want to take on my summer vacation!',
      private: false,
      user_id: 12,
      image_url: null,
    },
    {
      id: 67,
      name: 'Gym Wishlist',
      description: 'These are the things I need for my gym workouts!',
      private: true,
      user_id: 12,
      image_url: null,
    },
    {
      id: 68,
      name: 'Home Office Wishlist',
      description: 'These are the things I need for my home office!',
      private: false,
      user_id: 12,
      image_url: null,
    },
    {
      id: 69,
      name: 'New Year Wishlist',
      description: 'These are the things I want for the new year! 🎉',
      private: false,
      user_id: 1,
      image_url: null,
    },
    {
      id: 70,
      name: "Valentine's Day Wishlist",
      description: "These are the things I want for Valentine's Day! 💕",
      private: false,
      user_id: 1,
      image_url: null,
    },
    {
      id: 71,
      name: 'Easter Wishlist',
      description: 'These are the things I want for Easter! 🐰',
      private: true,
      user_id: 1,
      image_url: null,
    },
    {
      id: 72,
      name: "Mother's Day Wishlist",
      description: "These are the things I want for Mother's Day! 👩‍👧‍👦",
      private: false,
      user_id: 2,
      image_url: null,
    },
    {
      id: 73,
      name: "Father's Day Wishlist",
      description: "These are the things I want for Father's Day! 👨‍👧‍👦",
      private: false,
      user_id: 2,
      image_url: null,
    },
    {
      id: 74,
      name: 'Back to School Wishlist',
      description: 'These are the things I need for back to school! 🎒',
      private: true,
      user_id: 2,
      image_url: null,
    },
    {
      id: 75,
      name: 'Halloween Wishlist',
      description: 'These are the things I want for Halloween! 🎃',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 76,
      name: 'Thanksgiving Wishlist',
      description: 'These are the things I want for Thanksgiving! 🦃',
      private: false,
      user_id: 3,
      image_url: null,
    },
    {
      id: 77,
      name: 'Christmas Wishlist',
      description: 'These are the things I want for Christmas! 🎄',
      private: true,
      user_id: 3,
      image_url: null,
    },
    {
      id: 78,
      name: 'New Home Wishlist',
      description: 'These are the things I need for my new home! 🏠',
      private: false,
      user_id: 4,
      image_url: null,
    },
    {
      id: 79,
      name: 'New Car Wishlist',
      description: 'These are the things I want for my new car! 🚗',
      private: false,
      user_id: 4,
      image_url: null,
    },
    {
      id: 80,
      name: 'New Job Wishlist',
      description: 'These are the things I need for my new job! 💼',
      private: true,
      user_id: 4,
      image_url: null,
    },
    {
      id: 81,
      name: 'New Hobby Wishlist',
      description: 'These are the things I need for my new hobby! 🎨',
      private: false,
      user_id: 5,
      image_url: null,
    },
    {
      id: 82,
      name: 'New Relationship Wishlist',
      description: 'These are the things I want for my new relationship! ❤️',
      private: false,
      user_id: 5,
      image_url: null,
    },
    {
      id: 83,
      name: 'New City Wishlist',
      description: 'These are the things I need for my move to a new city! 🌇',
      private: true,
      user_id: 5,
      image_url: null,
    },
    {
      id: 84,
      name: 'New Baby Wishlist',
      description: 'These are the things I need for my new baby! 👶',
      private: false,
      user_id: 6,
      image_url: null,
    },
    {
      id: 85,
      name: 'New Pet Wishlist',
      description: 'These are the things I need for my new pet! 🐱',
      private: false,
      user_id: 6,
      image_url: null,
    },
    {
      id: 86,
      name: 'New Year, New Me Wishlist',
      description: 'These are the things I need for my new year, new me! 🎉',
      private: true,
      user_id: 6,
      image_url: null,
    },
    {
      id: 87,
      name: 'New Technology Wishlist',
      description:
        'These are the things I want to buy for my tech collection! 🤖',
      private: false,
      user_id: 7,
      image_url: null,
    },
    {
      id: 88,
      name: 'New Fashion Wishlist',
      description:
        'These are the things I want to buy for my fashion collection! 👗',
      private: false,
      user_id: 7,
      image_url: null,
    },
    {
      id: 89,
      name: 'New Book Wishlist',
      description: 'These are the books I want to read someday! 📚',
      private: true,
      user_id: 7,
      image_url: null,
    },
    {
      id: 90,
      name: 'New Sports Wishlist',
      description: 'These are the things I need for my sports activities! ⚽',
      private: false,
      user_id: 8,
      image_url: null,
    },
    {
      id: 91,
      name: 'New Outdoor Wishlist',
      description: 'These are the things I need for my outdoor adventures! 🏕️',
      private: false,
      user_id: 8,
      image_url: null,
    },
    {
      id: 92,
      name: 'New DIY Wishlist',
      description: 'These are the things I need for my DIY projects! 🔨',
      private: true,
      user_id: 8,
      image_url: null,
    },
    {
      id: 93,
      name: 'New Office Wishlist',
      description: 'These are the things I need for my office! 🏢',
      private: false,
      user_id: 9,
      image_url: null,
    },
    {
      id: 94,
      name: 'New School Wishlist',
      description: 'These are the things I need for my school projects! 🎓',
      private: false,
      user_id: 9,
      image_url: null,
    },
    {
      id: 95,
      name: 'New Beauty Wishlist',
      description: 'These are the things I need for my beauty routine! 💄',
      private: true,
      user_id: 9,
      image_url: null,
    },
    {
      id: 96,
      name: 'New Car Wishlist',
      description: 'These are the things I need for my car! 🚗',
      private: false,
      user_id: 10,
      image_url: null,
    },
    {
      id: 97,
      name: 'New Motorcycle Wishlist',
      description: 'These are the things I need for my motorcycle! 🏍️',
      private: false,
      user_id: 10,
      image_url: null,
    },
    {
      id: 98,
      name: 'New Bicycle Wishlist',
      description: 'These are the things I need for my bicycle! 🚲',
      private: true,
      user_id: 10,
      image_url: null,
    },
    {
      id: 99,
      name: 'New Photography Wishlist',
      description:
        'These are the things I need for my photography projects! 📷',
      private: false,
      user_id: 11,
      image_url: null,
    },
    {
      id: 100,
      name: 'New Video Wishlist',
      description: 'These are the things I need for my video projects! 🎥',
      private: false,
      user_id: 11,
      image_url: null,
    },
    {
      id: 101,
      name: 'New Writing Wishlist',
      description: 'These are the things I need for my writing projects! ✍️',
      private: true,
      user_id: 11,
      image_url: null,
    },
    {
      id: 102,
      name: 'New Fishing Wishlist',
      description: 'These are the things I need for my fishing trips! 🎣',
      private: false,
      user_id: 12,
      image_url: null,
    },
    {
      id: 103,
      name: 'New Camping Wishlist',
      description: 'These are the things I need for my camping trips! ⛺',
      private: false,
      user_id: 12,
      image_url: null,
    },
    {
      id: 104,
      name: 'New Skiing Wishlist',
      description: 'These are the things I need for my skiing trips! ⛷️',
      private: true,
      user_id: 12,
      image_url: null,
    },
    {
      id: 105,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 13,
      image_url: null,
    },
    {
      id: 106,
      name: 'New Road Trip Wishlist',
      description: 'These are the things I need for my road trip! 🚗',
      private: false,
      user_id: 13,
      image_url: null,
    },
    {
      id: 107,
      name: 'New Hiking Wishlist',
      description: 'These are the things I need for my hiking trip! 🥾',
      private: true,
      user_id: 13,
      image_url: null,
    },
    {
      id: 108,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 14,
      image_url: null,
    },
    {
      id: 109,
      name: 'New Camping Wishlist',
      description: 'These are the things I need for my camping trip! ⛺',
      private: false,
      user_id: 14,
      image_url: null,
    },
    {
      id: 110,
      name: 'New Skiing Wishlist',
      description: 'These are the things I need for my skiing trip! ⛷️',
      private: true,
      user_id: 14,
      image_url: null,
    },
    {
      id: 111,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 15,
      image_url: null,
    },
    {
      id: 112,
      name: 'New Road Trip Wishlist',
      description: 'These are the things I need for my road trip! 🚗',
      private: false,
      user_id: 15,
      image_url: null,
    },
    {
      id: 113,
      name: 'New Hiking Wishlist',
      description: 'These are the things I need for my hiking trip! 🥾',
      private: true,
      user_id: 15,
      image_url: null,
    },
    {
      id: 114,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 16,
      image_url: null,
    },
    {
      id: 115,
      name: 'New Camping Wishlist',
      description: 'These are the things I need for my camping trip! ⛺',
      private: false,
      user_id: 16,
      image_url: null,
    },
    {
      id: 116,
      name: 'New Skiing Wishlist',
      description: 'These are the things I need for my skiing trip! ⛷️',
      private: true,
      user_id: 16,
      image_url: null,
    },
    {
      id: 117,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 17,
      image_url: null,
    },
    {
      id: 118,
      name: 'New Road Trip Wishlist',
      description: 'These are the things I need for my road trip! 🚗',
      private: false,
      user_id: 17,
      image_url: null,
    },
    {
      id: 119,
      name: 'New Hiking Wishlist',
      description: 'These are the things I need for my hiking trip! 🥾',
      private: true,
      user_id: 17,
      image_url: null,
    },
    {
      id: 120,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 18,
      image_url: null,
    },
    {
      id: 121,
      name: 'New Camping Wishlist',
      description: 'These are the things I need for my camping trip! ⛺',
      private: false,
      user_id: 18,
      image_url: null,
    },
    {
      id: 122,
      name: 'New Skiing Wishlist',
      description: 'These are the things I need for my skiing trip! ⛷️',
      private: true,
      user_id: 18,
      image_url: null,
    },
    {
      id: 123,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 19,
      image_url: null,
    },
    {
      id: 124,
      name: 'New Road Trip Wishlist',
      description: 'These are the things I need for my road trip! 🚗',
      private: false,
      user_id: 19,
      image_url: null,
    },
    {
      id: 125,
      name: 'New Hiking Wishlist',
      description: 'These are the things I need for my hiking trip! 🥾',
      private: true,
      user_id: 19,
      image_url: null,
    },
    {
      id: 126,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 20,
      image_url: null,
    },
    {
      id: 127,
      name: 'New Camping Wishlist',
      description: 'These are the things I need for my camping trip! ⛺',
      private: false,
      user_id: 20,
      image_url: null,
    },
    {
      id: 128,
      name: 'New Skiing Wishlist',
      description: 'These are the things I need for my skiing trip! ⛷️',
      private: true,
      user_id: 20,
      image_url: null,
    },
    {
      id: 129,
      name: 'New Beach Vacation Wishlist',
      description: 'These are the things I need for my beach vacation! 🏖️',
      private: false,
      user_id: 21,
      image_url: null,
    },
    {
      id: 130,
      name: 'New Road Trip Wishlist',
      description: 'These are the things I need for my road trip! 🚗',
      private: false,
      user_id: 21,
      image_url: null,
    },
    {
      id: 131,
      name: 'New Hiking Wishlist',
      description: 'These are the things I need for my hiking trip! 🥾',
      private: true,
      user_id: 21,
      image_url: null,
    },
  ])
}
