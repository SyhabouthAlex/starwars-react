Components : 
    App
      -NavBar
      -Routes
        -HomePage
        -FilmList
          -ItemList
            -Film
          -SubList
            -Person
          -SubList
            -Planet
        -PlanetList
          -ItemList
            -Planet
          -SubList
            -Film
          -SubList
            -Person
        -PersonList
          -ItemList
            -Person
          -SubList
            -Film
          -SubList
            -Planet

Store : 
    Films
        title string -- The title of this film
        
        opening_crawl string -- The opening paragraphs at the beginning of this film.
        
        director string -- The name of the director of this film.
        
        characters array -- An array of people resource URLs that are in this film.
        
        planets array -- An array of planet resource URLs that are in this film.


    People
        name string -- The name of this person.

        birth_year string -- The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.

        gender string -- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.

        homeworld string -- The URL of a planet resource, a planet that this person was born on or inhabits.

        films array -- An array of film resource URLs that this person has been in.

    Planets   
        name string -- The name of this planet.

        population string -- The average population of sentient beings inhabiting this planet.

        climate string -- The climate of this planet. Comma separated if diverse.
        
        residents array -- An array of People URL Resources that live on this planet.
        
        films array -- An array of Film URL Resources that this planet has appeared in.
