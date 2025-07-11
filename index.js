const users = [
    {
        name: "User1",
        balance: 6972,
    },
    {
        name: "User2",
        balance: 6900,
    },
    {
        name: "User3",
        balance: 7044,
    }
];

const calculateTotalBalance = users => {
    // let total = 0
    // users.forEach(user => total += user.balance)
    // return total
    return users.reduce((total, user) => total + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916



const users2 = [
    {
        name: "Sharlene Bush",
        friendName: ["Briana Decker"]
    },
    {
        name: "Sheree Anthony",
        friendName: ["Goldie Gentry", "Briana Decker"]
    },
    {
        name: "Elma Head",
        friendName: ["Goldie Gentry"]
    }
];
const getUsersWithFriend = (users, friendName) => {
    const result = []
    for (let user of users) {
        if (user.friendName.includes(friendName)) {
            result.push(user.name);
        }
    }
    return result
};

console.log(getUsersWithFriend(users2, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users2, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



const users3 = [
    {
        name: "Moore Hensley",
        friends: ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6", "Friend7"],
    },
    {
        name: "Elma Head",
        friends: ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5"],
    },
    {
        name: "Sharlene Bush",
        friends: ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6"],
    },
    {
        name: "Sheree Anthony",
        friends: ["Friend1", "Friend2"],
    },
    {
        name: "Blackburn Dotson",
        friends: ["Friend1", "Friend2", "Friend3"],
    },
    {
        name: "Carey Barr",
        friends: ["Friend1", "Friend2", "Friend3", "Friend4"],
    },
    {
        name: "Ross Vazquez",
        friends: [],
    },
]
const getNamesSortedByFriendsCount = users => {
    const result = [];
    const sortByFriendsCount = (a, b) => b.friends.length - a.friends.length;
    const usersArray = users.sort(sortByFriendsCount);
    for (let user of usersArray) {
        result.push(user.name);
    }
    return result;
};

console.log(getNamesSortedByFriendsCount(users3));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]





const users4 = [
    {
        name: "Sharlene Bush",
        skills: ["culpa", "ex", "lorem", 'adipisicing', "veniam", "laborum", ],
    },
    {
        name: "Sheree Anthony",
        skills: ["amet", "anim", "commodo", "mollit", "nulla", "velit", "irure"],
    },
    {
        name: "Elma Head",
        skills: ["ipsum", "elit", "non", "proident", "tempor", "nostrud"],
    }
];
const getSortedUniqueSkills = users => {
    const skillsArray = [];
    for (let user of users) {
        skillsArray.push(...user.skills)
    }
    const result = skillsArray.sort((a, b) => {
        return a.localeCompare(b)
    })
    return result
}

console.log(getSortedUniqueSkills(users4));


// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
