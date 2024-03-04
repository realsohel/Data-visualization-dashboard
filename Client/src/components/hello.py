import matplotlib.pyplot as plt

# Data
insights = [
    {
        "end_year": 2021,
        "intensity": 72,
        "sector": "",
        "topic": "market",
        "insight": "Global Industrial Valves Market By Type, By Application, By Region, Competition Forecast and Opportunities, 2011 - 2021",
        "url": "http://www.prnewswire.com/news-releases/global-industrial-valves-market-by-type-by-application-by-region-competition-forecast-and-opportunities-2011--2021-300332227.html",
        "region": "World",
        "start_year": "",
        "impact": 3,
        "added": "September, 23 2016 02:51:18",
        "published": "September, 21 2016 00:00:00",
        "country": "",
        "relevance": 6,
        "pestle": "Economic",
        "source": "PR Newswire",
        "title": "The global industrial valves market is projected to cross $78 billion by 2021.",
        "likelihood": 4
    },
    {
        "end_year": "",
        "intensity": 18,
        "sector": "Energy",
        "topic": "oil",
        "insight": "We're Nearing Peak Car Ownership",
        "url": "https://www.fastcoexist.com/3063940/were-nearing-peak-car-ownership",
        "region": "",
        "start_year": "",
        "impact": 3,
        "added": "September, 23 2016 01:09:22",
        "published": "September, 22 2016 00:00:00",
        "country": "",
        "relevance": 3,
        "pestle": "Economic",
        "source": "Fast Co-Exist",
        "title": "Early-to-market automated mobility service providers could capture over $100 billion in revenue at the expense of incumbents like oil companies and traditional carmakers.",
        "likelihood": 2
    },
    {
        "end_year": 2025,
        "intensity": 16,
        "sector": "Energy",
        "topic": "oil",
        "insight": "Five technologies for the next ten years",
        "url": "http://www.mckinsey.com/industries/oil-and-gas/our-insights/five-technologies-for-the-next-ten-years",
        "region": "World",
        "start_year": "",
        "impact": "",
        "added": "September, 22 2016 03:09:12",
        "published": "September, 01 2016 00:00:00",
        "country": "",
        "relevance": 4,
        "pestle": "Industries",
        "source": "McKinsey Quarterly",
        "title": "The number of robotic systems working in oil fields around the world will be nearly a million by 2025.",
        "likelihood": 4
    },
    {
        "end_year": "",
        "intensity": 3,
        "sector": "",
        "topic": "",
        "insight": "Daily Bulletin (English Version) VAF - 22 September 2016",
        "url": "http://www.valburyresearch.com/resources/files/vaf/Daily_Bulletin_(English_Version)_VAF_-_22_September_2016.pdf",
        "region": "",
        "start_year": "",
        "impact": "",
        "added": "September, 22 2016 00:38:12",
        "published": "September, 22 2016 00:00:00",
        "country": "",
        "relevance": 1,
        "pestle": "",
        "source": "valburyresearch",
        "title": "The IMF expects that Chinese authorities will improve the reporting of its reserves composition, achieving full coverage within two to three years.",
        "likelihood": 3
    },
    {
        "end_year": "",
        "intensity": 6,
        "sector": "Construction",
        "topic": "population",
        "insight": "These 6 sectors of Africa's economy are poised for growth",
        "url": "https://hbr.org/2016/09/these-6-sectors-of-africas-economy-are-poised-for-growth",
        "region": "Africa",
        "start_year": "",
        "impact": "",
        "added": "September, 21 2016 04:21:39",
        "published": "September, 20 2016 00:00:00",
        "country": "",
        "relevance": 2,
        "pestle": "Social",
        "source": "HBR",
        "title": "In an aging world, Africa has the advantage of a young and growing population and will soon have the fastest urbanization rate in the world.",
        "likelihood": 3
    }
]


# Extracting data for visualization
intensities = [insight['intensity'] for insight in insights]
likelihoods = [insight['likelihood'] for insight in insights]
relevances = [insight['relevance'] for insight in insights]

# Plotting Histogram
plt.figure(figsize=(10, 6))
plt.hist(intensities, bins=10, alpha=0.5, label='Intensity')
plt.hist(likelihoods, bins=10, alpha=0.5, label='Likelihood')
plt.hist(relevances, bins=10, alpha=0.5, label='Relevance')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram of Intensity, Likelihood, and Relevance')
plt.legend()
plt.grid(True)
plt.show()

# Plotting Bar graph
categories = ['Intensity', 'Likelihood', 'Relevance']
values = [sum(intensities) / len(intensities), sum(likelihoods) / len(likelihoods), sum(relevances) / len(relevances)]

plt.figure(figsize=(10, 6))
plt.bar(categories, values, color=['blue', 'green', 'orange'])
plt.xlabel('Categories')
plt.ylabel('Average Value')
plt.title('Average Intensity, Likelihood, and Relevance')
plt.grid(True)
plt.show()