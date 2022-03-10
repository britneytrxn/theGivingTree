const orgs_by_cause = {
    "Animal Rights" : [  
        { "id": 1, "cause": "Animal Rights", "name": "Ocean Alliance", "description": "Healthy Whales, Healthy Oceans, Healthy Humans.", "logo": require("../assets/images/oceanAllianceLogo.png"),
       "info": "Ocean Alliance is a non-profit organization dedicated to the conservation of whales and their marine environment through scientific collaboration, public education, and more.",
       "url": "https://whale.org"}, 
 
        { "id": 2, "cause": "Animal Rights","name": "ASPCA", "description": "We are their voice.", "logo": require("../assets/images/ASPCA.png"),
       "info": "The ASPCA’s mission, as stated by founder Henry Bergh in 1866, is “to provide effective means for the prevention of cruelty to animals throughout the United States.", "url":"https://www.aspca.org/"},
        
        { "id": 3, "cause": "Animal Rights","name": "In Defense of Animals", "description": "Working to protect the rights, welfare, and habitats of animals.", "logo": require("../assets/images/InDefenseofAnimals.png"),
       "info": "In Defense of Animals makes a difference for animals all over the world through our hard-hitting campaigns, direct rescue, and sanctuary care.", "url": "https://www.idausa.org/"}, 
 
        { "id": 4, "cause": "Animal Rights","name": "Animal Ethics", "description": "Our vision is a world where all sentient beings are given moral consideration.", "logo": require("../assets/images/AnimalEthics.jpeg"),
       "info": "Animal Ethics promotes respect for nonhuman animals through outreach, research, and education. We support and research interventions to improve the lives of animals in the wild, such as vaccinations and helping animals in natural disasters. We explore how future technologies will enable us to avoid catastrophic risks and ways technology can be used to help wild animals on a large scale.", "url": "https://www.animal-ethics.org/"} 
    ],
    "Current": [
        { "id": 5, "cause": "Current","name": "Fight for Right", "description": "Protects the human rights of people living with disabilities in Ukraine.", "logo": require("../assets/images/FightforRight.png"),
       "info": "Fight For Right works to let all Ukrainians with disabilities know the answer to this question. Our team has a clear position: #IStayInUkraine and we do everything to make it safe for Ukrainians with disabilities to stay here.",
       "url": "https://eng.ffr.org.ua/support-in-crisis/eng"}, 
 
        { "id": 6, "cause": "Current","name": "PFM", "description": "Support the integration of people who migrate to Poland.", "logo": require("../assets/images/PFM.png"),
       "info": "This Polish organization is offering a free crisis hotline to assist people who are being affected by the Ukrainian crisis, including individuals who have fled the country, families worried about the well-being of their children, and those who have relatives in Ukraine and are feeling a sense of hopelessness.",
       "url": "https://forummigracyjne.org/"}, 
 
        { "id": 7, "cause": "Current","name": "Urgent Action Fund", "description": "Support women’s human rights defenders striving to create cultures of justice, equality and peace..", "logo": require("../assets/images/UrgentActionFundforWomen’sHumanRight"),
       "info": "Urgent Action Fund, as part of women’s rights movements worldwide, supports women’s rights activists striving to create cultures of justice, equality, and peace. We provide Rapid Response Grants to women and transgender human rights defenders that enable strategic interventions. We also participate in collaborative Advocacy and Alliance Building in order to mobilize broader support for the work of human rights defenders throughout the world. For an in-depth look at what we do, select from the menu options at left.",
       "url": "https://eng.ffr.org.ua/support-in-crisis/eng"}, 
 
        { "id": 8, "cause": "Current","name": "IOM", "description": "Donate today to help us provide emergency support to vulnerable people on the move.", "logo": require("../assets/images/IOM.png"),
       "info": "IOM has been in Ukraine since 1996 and is committed to staying and delivering vital assistance to those fleeing the country, the internally displaced, migrants and third-country nationals. We stand ready to respond to the emerging humanitarian needs in the country and the region.",
       "url": "https://donate.iom.int/"}, 
    ],
    "Disease" : [
        { "id": 9, "cause": "Disease","name": "American Cancer Society’s", "description": "save lives, celebrate lives, and lead the fight for a world without cancer.", "logo": require("../assets/images/AmericanCancerSociety.png"),
       "info": "The American Cancer Society is a nationwide, community-based voluntary health organization dedicated to eliminating cancer as a major health problem. Our Global Headquarters are located in Atlanta, Georgia, and we have regional and local offices throughout the country to ensure we have a presence in every community.",
       "url": "https://www.cancer.org/"}, 
        
        { "id": 10, "cause": "Disease","name": "National Alliance on Mental Illness", "description": "All individuals and families affected by mental illness can build better lives.", "logo": require("../assets/images/NationalAllianceonMentalHealth.png"),
       "info": "The National Alliance on Mental Illness (NAMI) is the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness. NAMI envisions a world where all people affected by mental illness live healthy, fulfilling lives supported by a community that cares.",
       "url": "https://www.nami.org/About-NAMI/Who-We-Are"}, 
 
        { "id": 11, "cause": "Disease","name": "Leukemia & Lymphoma Society", "description": "Improve the quality of life for patients and their families.", "logo": require("../assets/images/LeukemiaLymphomaSociety.png"),
       "info": "LLS is at the forefront of the fight to cure cancer. Compared to other blood cancer nonprofits, LLS is the largest funder of cutting-edge research to advance cures. We have invested nearly $1.3 billion in research. We are leaders in advancing breakthroughs in immunotherapy, genomics and personalized medicine. This research saves lives. These revolutionary new treatments originally discovered through blood cancer research are now being tested in clinical trials for other cancers.",
       "url":"https://www.lls.org/"}, 
 
        { "id": 12, "cause": "Disease","name": "St. Jude Children’s Research Hospital", "description": "No child should die on the dawn of their life.", "logo": require("../assets/images/St.JudeChildren'sResearchHospital.png"),
       "info": "Fight For Right works to let all Ukrainians with disabilities know the answer to this question. Our team has a clear position: #IStayInUkraine and we do everything to make it safe for Ukrainians with disabilities to stay here.",
       "url": "https://www.stjude.org/"},
 
        { "id": 13, "cause": "Disease","name": "AIDS United’s", "description": "End the HIV epidemic in the United States.", "logo": require("../assets/images/AidsUnited.jpeg"),
       "info": "In the ongoing work for social justice and true equity, ending the HIV epidemic in the United States is our chosen role. We’ve seen firsthand how the intersectionality of social injustice, discrimination and health care disparity impacts those living with HIV, and we believe alleviating this struggle is a pivotal step toward our national well-being.",
       "url": "https://aidsunited.org/"}, 
    ],
    "Disaster Relief": [
        { "id": 14, "cause": "Disaster Relief","name": "American Red Cross", "description": "helping you be prepared to respond in emergencies.", "logo": require("../assets/images/AmericanRedCross.png"),
       "info": "The Red Cross, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors—in its international and national capacity—to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation and lasting peace amongst all peoples.", "url": "https://www.redcross.org/"}, 
 
        { "id": 15, "cause": "Disaster Relief","name": "Direct Relief", "description": "Improve the health and lives of people affected by poverty or emergencies.", "logo": require("../assets/images/DirectRelief.png"),
       "info": "Disaster response requires rapid mobilization, but the help must be of the right type. Direct Relief’s efforts are fast, yet always in direct response to specific requests from local partners and are coordinated with other organizations and public agencies to ensure the most efficient use of resources.", "url": "https://www.directrelief.org/"}, 
 
 
        { "id": 16, "cause": "Disaster Relief","name": "International Rescue Committee", "description": "Help us respond to emergencies in the toughest places on earth.", "logo": require("../assets/images/InternationalRescueCommittee.png"),
       "info": "When there is a natural disaster, outbreak of violence or other sudden crisis, we strive to be on the ground as quickly as possible. With your support, we provide emergency medical care, clean drinking water, shelter, safe spaces, mental health support, protection services and other assistance.", "url": "https://www.rescue.org/"},
    ],

    "Shelter" : [
        { "id": 17, "cause": "Shelter","name": "National Alliance to End Homelessness", "description": "Committed to preventing and ending homelessness in the United States.", "logo": require("../assets/images/NationalAlliancetoEndHomelessness.jpg"),
       "info": "The Alliance is a leading voice on federal homelessness policy. It analyzes enacted and proposed legislation and advocates for improved federal policy. The Alliance analyzes data and research so that policymakers, practitioners, and the public have the best information about trends in homelessness and emerging solutions. The Alliance provides capacity-building assistance to help communities turn policy solutions and proven best practices into viable, on-the-ground programs. ", "url": "https://endhomelessness.org/"}, 
 
        { "id": 18, "cause": "Shelter","name": "THE NATIONAL COALITION FOR THE HOMELESS", "description": "End and prevent homelessness.", "logo": require("../assets/images/NationalCoalitionfortheHomeless.jpg"),
       "info": "The National Coalition for the Homeless is a national network of people who are currently experiencing or who have experienced homelessness, activists and advocates, community-based and faith-based service providers, and others committed to a single mission: To end and prevent homelessness while ensuring the immediate needs of those experiencing homelessness are met and their civil rights are respected and protected.", "url": "https://nationalhomeless.org/"},   
 
        { "id": 19, "cause": "Shelter","name": "National Homelessness Law Centre", "description": "Fight to establish a right to housing in the United States.", "logo": require("../assets/images/NationalHomelessnessLawCenter.jpg"),
       "info": "The Law Center leverages its legal expertise and the pro bono power of the private bar in its fight to establish a right to housing in the United States.", "url": "https://homelesslaw.org/"}, 
 
        { "id": 20, "cause": "Shelter","name": "Streetwise", "description": "a hand up, not a handout", "logo": require("../assets/images/Streetwise.png"),
       "info": "StreetWise exists to elevate marginalized voices and provide opportunities for individuals to earn an income with dignity. Anyone who wants to work has the opportunity to move themselves out of crisis.  StreetWise provides “a hand up, not a handout.", "url": "https://www.streetwise.org/"},   
    ],
    "Education" : [
        { "id": 21, "cause": "Education","name": "Scholarship America", "description": "We Have One Passion. Every Student.", "logo": require("../assets/images/ScholarshipAmerica.png"),
       "info": "Our goal is to create a world where equity is central; where respect and inclusion are the cornerstones of our culture; where every student can access opportunities to learn, grow, succeed and thrive.", "url": "https://scholarshipamerica.org/"},    
 
        { "id": 22, "cause": "Education","name": "ProLiteracy", "description": "Empowering adults through literacy", "logo": require("../assets/images/ProLiteracy.jpg"),
       "info": "Our vision is to be the leading resource and champion for adult education and literacy worldwide. ProLiteracy commits to making diversity, equity, inclusion, and anti-racism a priority in our organization.", "url": "https://www.proliteracy.org/"},     
 
        { "id": 23, "cause": "Education","name": "Build Africa", "description": "Working for a better future.", "logo": require("../assets/images/BuildAfrica.jpg"),
       "info": "In 2019, Build Africa merged with Street Child so that together we can help more children get the education they deserve. Street Child believes that achieving universal basic education is the single greatest step that can be taken towards the elimination of global poverty.", "url": "https://www.build-africa.org/"},
 
        { "id": 24, "cause": "Education","name": "Children International", "description": "Bringing people together to end poverty for good.", "logo": require("../assets/images/ChildrenInternational.png"),
       "info": "We give children in poverty the tools they need to create brighter futures for themselves and their communities. With the support of our donors and sponsors, children and youth gain the skills and confidence they need to create promising futures free from poverty.", "url": "https://www.children.org/"},     
 
        { "id": 25, "cause": "Education","name": "Teach for America", "description": "Working Toward Excellence and Equity For All.", "logo": require("../assets/images/TeachForAmerica.png"),
       "info": "Too many children in America are denied access to an excellent education. Teach For America catalyzes leadership to make educational equity a reality. ", "url": "https://www.teachforamerica.org/"},
    ],
    "Hunger Relief": [
        { "id": 26, "cause": "Hunger Relief","name": "Second Harvest of Silicon Valley", "description": "No one should ever go hungry.", "logo": require("../assets/images/SecondHarvestFoodBankofSiliconValley.jpg"),
       "info": "Second Harvest is committed to doing whatever it takes to build a hunger-free community. That means distributing nutritious food to nearly every neighborhood in Silicon Valley, leveraging every available food resource, and collaborating with organizations and people who share our belief that hunger is unacceptable. Nutritious food is the foundation for a healthy, productive life.", "url": "https://www.shfb.org/"}, 
 
    { "id": 27, "cause": "Hunger Relief","name": "California Association of Food Banks", "description": "We lead the collective effort to end hunger in California.", "logo": require("../assets/images/CaliforniaAssociationofFoodBanks.png"),
       "info": "Every day, we work alongside of our 41 member food banks and on behalf of hungry Californians. We ensure food banks have the tools and resources they need, so they can focus on what they do best: feed our communities. We also work to change the systems that create hunger in the first place.", "url": "https://www.cafoodbanks.org/"}, 
 
    { "id": 28, "cause": "Hunger Relief","name": "Feeding America", "description": "Everyone deserves healthy foods.", "logo": require("../assets/images/FeedingAmerica.png"),
       "info": "In a country that wastes billions of pounds of food each year, it's almost shocking that anyone in America goes hungry. Yet every day, there are millions of children and adults who do not get the meals they need to thrive. We work to get nourishing food – from farmers, manufacturers, and retailers – to people in need. At the same time, we also seek to help our neighbors build a path to a brighter, food-secure future.", "url": "https://www.feedingamerica.org/"}, 
 
    { "id": 29, "cause": "Hunger Relief","name": "Action Against Hunger", "description": "FOR ACTION. AGAINST HUNGER.", "logo": require("../assets/images/Action Against Hunger.png"),
       "info": "FOR FOOD. AGAINST HUNGER AND MALNUTRITION. FOR CLEAN WATER. AGAINST KILLER DISEASES. FOR FREEDOM FROM HUNGER. FOR EVERYONE. FOR GOOD.", "url": "https://www.actionagainsthunger.org/"}, 
 
    { "id": 30, "cause": "Hunger Relief","name": "The Hunger Project", "description": "Ending hunger starts with people.", "logo": require("../assets/images/TheHungerProject.png"),
       "info": "Resilience. Courage. Ingenuity. Creativity. People are extraordinary. With your support, communities realize their own vision of a future free from hunger and poverty. Together, we make change happen.", "url": "https://thp.org/"},   

    ]
}