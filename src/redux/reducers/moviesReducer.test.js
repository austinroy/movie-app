import moviesReducer from  './moviesReducer';

describe("Single movie reducer",() =>{
    it("Should return initial state",()=>{
        const movies = []
        expect(moviesReducer(undefined, {})).toEqual(movies)
    })
    it("should handle FETCH_SINGLE_MOVIE_SUCCESS", ()=>{
        const movies = [
            {
            "vote_count": 8621,
            "id": 278,
            "video": false,
            "vote_average": 8.5,
            "title": "The Shawshank Redemption",
            "popularity": 60.628358,
            "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "genre_ids": [
            18,
            80
            ],
            "backdrop_path": "/xBKGJQsAIeweesB79KC89FpBrVr.jpg",
            "adult": false,
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "release_date": "1994-09-23"
            },
            {
            "vote_count": 1180,
            "id": 372058,
            "video": false,
            "vote_average": 8.5,
            "title": "Your Name.",
            "popularity": 61.693216,
            "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
            "original_language": "ja",
            "original_title": "君の名は。",
            "genre_ids": [
            10749,
            16,
            18
            ],
            "backdrop_path": "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
            "adult": false,
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "release_date": "2016-08-26"
            },
            {
            "vote_count": 6269,
            "id": 238,
            "video": false,
            "vote_average": 8.5,
            "title": "The Godfather",
            "popularity": 62.976775,
            "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
            "original_language": "en",
            "original_title": "The Godfather",
            "genre_ids": [
            18,
            80
            ],
            "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
            "adult": false,
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "release_date": "1972-03-14"
            },
            {
            "vote_count": 4636,
            "id": 424,
            "video": false,
            "vote_average": 8.3,
            "title": "Schindler's List",
            "popularity": 49.495083,
            "poster_path": "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
            "original_language": "en",
            "original_title": "Schindler's List",
            "genre_ids": [
            18,
            36,
            10752
            ],
            "backdrop_path": "/rIpSszng8P0DL0TimSzZbpfnvh1.jpg",
            "adult": false,
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "release_date": "1993-11-29"
            },
            {
            "vote_count": 4127,
            "id": 129,
            "video": false,
            "vote_average": 8.3,
            "title": "Spirited Away",
            "popularity": 44.725871,
            "poster_path": "/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "genre_ids": [
            16,
            10751,
            14
            ],
            "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
            "adult": false,
            "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "release_date": "2001-07-20"
            },
            {
            "vote_count": 3575,
            "id": 240,
            "video": false,
            "vote_average": 8.3,
            "title": "The Godfather: Part II",
            "popularity": 45.065214,
            "poster_path": "/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
            "original_language": "en",
            "original_title": "The Godfather: Part II",
            "genre_ids": [
            18,
            80
            ],
            "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
            "adult": false,
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "release_date": "1974-12-20"
            },
            {
            "vote_count": 4507,
            "id": 244786,
            "video": false,
            "vote_average": 8.3,
            "title": "Whiplash",
            "popularity": 67.011761,
            "poster_path": "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
            "original_language": "en",
            "original_title": "Whiplash",
            "genre_ids": [
            18
            ],
            "backdrop_path": "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
            "adult": false,
            "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
            "release_date": "2014-10-10"
            },
            {
            "vote_count": 10121,
            "id": 550,
            "video": false,
            "vote_average": 8.3,
            "title": "Fight Club",
            "popularity": 44.106776,
            "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
            "original_language": "en",
            "original_title": "Fight Club",
            "genre_ids": [
            18
            ],
            "backdrop_path": "/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
            "adult": false,
            "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "release_date": "1999-10-15"
            },
            {
            "vote_count": 9118,
            "id": 680,
            "video": false,
            "vote_average": 8.3,
            "title": "Pulp Fiction",
            "popularity": 180.556367,
            "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
            "original_language": "en",
            "original_title": "Pulp Fiction",
            "genre_ids": [
            53,
            80
            ],
            "backdrop_path": "/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg",
            "adult": false,
            "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "release_date": "1994-09-10"
            },
            {
            "vote_count": 3895,
            "id": 637,
            "video": false,
            "vote_average": 8.3,
            "title": "Life Is Beautiful",
            "popularity": 32.972085,
            "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
            "original_language": "it",
            "original_title": "La vita è bella",
            "genre_ids": [
            35,
            18
            ],
            "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
            "adult": false,
            "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "release_date": "1997-12-20"
            },
            {
            "vote_count": 2518,
            "id": 539,
            "video": false,
            "vote_average": 8.3,
            "title": "Psycho",
            "popularity": 28.708377,
            "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
            "original_language": "en",
            "original_title": "Psycho",
            "genre_ids": [
            18,
            27,
            53
            ],
            "backdrop_path": "/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg",
            "adult": false,
            "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
            "release_date": "1960-06-16"
            },
            {
            "vote_count": 3109,
            "id": 510,
            "video": false,
            "vote_average": 8.3,
            "title": "One Flew Over the Cuckoo's Nest",
            "popularity": 28.402052,
            "poster_path": "/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",
            "original_language": "en",
            "original_title": "One Flew Over the Cuckoo's Nest",
            "genre_ids": [
            18
            ],
            "backdrop_path": "/4E7YQcwui0PfNXguf4V2X8YocPC.jpg",
            "adult": false,
            "overview": "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
            "release_date": "1975-11-18"
            },
            {
            "vote_count": 12679,
            "id": 155,
            "video": false,
            "vote_average": 8.3,
            "title": "The Dark Knight",
            "popularity": 51.403286,
            "poster_path": "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
            "original_language": "en",
            "original_title": "The Dark Knight",
            "genre_ids": [
            18,
            28,
            80,
            53
            ],
            "backdrop_path": "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
            "adult": false,
            "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "release_date": "2008-07-16"
            },
            {
            "vote_count": 1153,
            "id": 311,
            "video": false,
            "vote_average": 8.3,
            "title": "Once Upon a Time in America",
            "popularity": 15.229769,
            "poster_path": "/fqP3Q7DWMFqW7mh11hWXbNwN9rz.jpg",
            "original_language": "en",
            "original_title": "Once Upon a Time in America",
            "genre_ids": [
            18,
            80
            ],
            "backdrop_path": "/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg",
            "adult": false,
            "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "release_date": "1984-02-16"
            },
            {
            "vote_count": 8407,
            "id": 13,
            "video": false,
            "vote_average": 8.2,
            "title": "Forrest Gump",
            "popularity": 27.542797,
            "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
            "original_language": "en",
            "original_title": "Forrest Gump",
            "genre_ids": [
            35,
            18,
            10749
            ],
            "backdrop_path": "/ctOEhQiFIHWkiaYp7b0ibSTe5IL.jpg",
            "adult": false,
            "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
            "release_date": "1994-07-06"
            },
            {
            "vote_count": 4400,
            "id": 497,
            "video": false,
            "vote_average": 8.2,
            "title": "The Green Mile",
            "popularity": 17.468997,
            "poster_path": "/3yJUlOtVa09CYJocwBU8eAryja0.jpg",
            "original_language": "en",
            "original_title": "The Green Mile",
            "genre_ids": [
            14,
            18,
            80
            ],
            "backdrop_path": "/Rlt20sEbOQKPVjia7lUilFm49W.jpg",
            "adult": false,
            "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "release_date": "1999-12-10"
            },
            {
            "vote_count": 3302,
            "id": 769,
            "video": false,
            "vote_average": 8.2,
            "title": "GoodFellas",
            "popularity": 15.569471,
            "poster_path": "/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg",
            "original_language": "en",
            "original_title": "GoodFellas",
            "genre_ids": [
            18,
            80
            ],
            "backdrop_path": "/xDEOxA01480uLTWuvQCw61VmDBt.jpg",
            "adult": false,
            "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            "release_date": "1990-09-12"
            },
            {
            "vote_count": 2178,
            "id": 389,
            "video": false,
            "vote_average": 8.2,
            "title": "12 Angry Men",
            "popularity": 16.935616,
            "poster_path": "/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
            "original_language": "en",
            "original_title": "12 Angry Men",
            "genre_ids": [
            18
            ],
            "backdrop_path": "/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg",
            "adult": false,
            "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            "release_date": "1957-03-25"
            },
            {
            "vote_count": 6182,
            "id": 1891,
            "video": false,
            "vote_average": 8.2,
            "title": "The Empire Strikes Back",
            "popularity": 18.32071,
            "poster_path": "/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg",
            "original_language": "en",
            "original_title": "The Empire Strikes Back",
            "genre_ids": [
            12,
            28,
            878
            ],
            "backdrop_path": "/amYkOxCwHiVTFKendcIW0rSrRlU.jpg",
            "adult": false,
            "overview": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
            "release_date": "1980-05-17"
            },
            {
            "vote_count": 2110,
            "id": 128,
            "video": false,
            "vote_average": 8.2,
            "title": "Princess Mononoke",
            "popularity": 14.861572,
            "poster_path": "/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
            "original_language": "ja",
            "original_title": "もののけ姫",
            "genre_ids": [
            12,
            14,
            16
            ],
            "backdrop_path": "/dWAYPAKlJi0n85P0xVEvQ2FOYLF.jpg",
            "adult": false,
            "overview": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
            "release_date": "1997-07-12"
            }
            ]
        
        const actionDispatched  = {
            type: 'FETCH_MOVIES_SUCCESS',
            movies
        }

        expect(moviesReducer([] ,actionDispatched)).toEqual(movies)
    })
})