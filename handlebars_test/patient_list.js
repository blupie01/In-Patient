/**
 * Created by Jeffrey on 1/7/2017.
 */
db.patients.insertMany(
    [
        {
            _id: 0,
            firstName: "Troy",
            lastName: "Baker",
            gender: "Male",
            age: "35",
            address: {
                street: "1 Derp Lane",
                city: "Fantasyland",
                state: "NJ",
                zip: "12345"
            },
            emergencyContact: {
                contactName: "Alice Wonder",
                contactPhone: "123-456-1111"
            },
            familyHistory: [
                "High blood pressure"
            ],
            medication: [
                "Activase",
                "Oxycotin"
            ],
            specialists: {
                0: {
                    specialistName: "Dr. Nigel Boss",
                    speciality: "Cardiologist",
                    address: {
                        street: "2 Derp Lane",
                        city: "Herp",
                        state: "NJ",
                        zip: "12345"
                    }
                },
                1: {
                    specialistName: "Dr. Hermit Frog",
                    speciality: "Psychiatrist",
                    address: {
                        street: "3 Derp Lane",
                        city: "Herp",
                        state: "NJ",
                        zip: "12345"
                    }
                }
            }
        },
        {
            _id: 1,
            firstName: "Emma",
            lastName: "Watson",
            gender: "Female",
            age: "27",
            address: {
                street: "32 Derpette Lane",
                city: "Hogwarts",
                state: "NJ",
                zip: "12345"
            },
            emergencyContact: {
                contactName: "Harry Potter",
                contactPhone: "123-456-2222"
            },
            familyHistory: [
                "Osteoporosis"
            ],
            medication: [
                "Maraviroc"
            ],
            specialists: {
                0: {
                    specialistName: "Dr. Big Bird",
                    speciality: "Gynecologist",
                    address: {
                        street: "54 Sesame Street",
                        city: "Sesame",
                        state: "NY",
                        zip: "12345"
                    }
                },
                1: {
                    specialistName: "Dr. Piggy Pig",
                    speciality: "Psychiatrist",
                    address: {
                        street: "12 Farm Lane",
                        city: "New York",
                        state: "NY",
                        zip: "12345"
                    }
                }
            }
        },
        {
            _id: 2,
            firstName: "Scarlett",
            lastName: "Johansson",
            gender: "Female",
            age: "32",
            address: {
                street: "64 Derpette Drive",
                city: "Avengers",
                state: "NY",
                zip: "12345"
            },
            emergencyContact: {
                contactName: "Thor Odinson",
                contactPhone: "555-555-5555"
            },
            familyHistory: [
                "Parkinsons",
                "Hemophilia"
            ],
            medication: [
                "Methyldopa"
            ],
            specialists: {
                0: {
                    specialistName: "Dr. Big Bird",
                    speciality: "Gynecologist",
                    address: {
                        street: "54 Sesame Street",
                        city: "Sesame",
                        state: "NY",
                        zip: "12345"
                    }
                }
            }
        },
        {
            _id: 3,
            firstName: "Jackie",
            lastName: "Chan",
            gender: "Male",
            age: "54",
            address: {
                street: "27 Hiyah Lane",
                city: "Kung-Fu",
                state: "NJ",
                zip: "12345"
            },
            emergencyContact: {
                contactName: "Jet Li",
                contactPhone: "123-456-9999"
            },
            familyHistory: [

            ],
            medication: [
            ],
            specialists: {
            }
        },
        {
            _id: 4,
            firstName: "Bruce",
            lastName: "Lee",
            gender: "Male",
            age: "75",
            address: {
                street: "66 Hiyah Lane",
                city: "Kung-Fu",
                state: "NJ",
                zip: "12345"
            },
            emergencyContact: {
                contactName: "Donnie Yen",
                contactPhone: "999-999-9999"
            },
            familyHistory: [
                "Heart Disease"
            ],
            medication: [
            ],
            specialists: {
                0: {
                    specialistName: "Dr. Heart Doctor",
                    speciality: "Cardiologist",
                    address: {
                        street: "44 Heart Drive",
                        city: "Cardio",
                        state: "NY",
                        zip: "12345"
                    }
                }
            }
        }
    ]
)

