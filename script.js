// ETRM Glossary Data
const etrmGlossary = [
    {
        term: "Algorithmic Trading",
        category: "trading",
        definition: "The use of computer algorithms to execute trading orders automatically based on predefined criteria such as price, timing, and volume.",
        details: {
            keyPoints: [
                "Reduces human emotion and error in trading decisions",
                "Can execute trades faster than manual trading",
                "Common strategies include momentum, mean reversion, and arbitrage",
                "Requires robust risk management and monitoring systems"
            ],
            examples: ["High-frequency trading", "Statistical arbitrage", "Market making algorithms"],
            regulations: ["Subject to market manipulation rules", "Requires compliance with exchange regulations"]
        },
        relatedTerms: ["High-Frequency Trading", "Market Making", "Arbitrage", "Execution Algorithms"],
        tags: ["automation", "algorithms", "execution"]
    },
    {
        term: "Backwardation",
        category: "markets",
        definition: "A market condition where future prices are lower than spot prices, typically indicating supply shortages or strong immediate demand.",
        details: {
            keyPoints: [
                "Opposite of contango market structure",
                "Common in commodity markets during supply disruptions",
                "Can indicate storage costs are low relative to convenience yield",
                "Often seen in energy markets during winter or supply crises"
            ],
            examples: ["Natural gas in winter", "Oil during geopolitical tensions", "Agricultural products during droughts"],
            implications: ["Positive roll yield for long positions", "Storage becomes less economical"]
        },
        relatedTerms: ["Contango", "Convenience Yield", "Roll Yield", "Spot Price"],
        tags: ["market structure", "pricing", "commodities"]
    },
    {
        term: "Basel III",
        category: "regulation",
        definition: "International regulatory framework that strengthens bank capital requirements and introduces new regulatory requirements on bank liquidity and leverage.",
        details: {
            keyPoints: [
                "Introduced higher capital requirements for banks",
                "Includes leverage ratio and liquidity coverage ratio",
                "Affects commodity trading through capital allocation",
                "Implementation varies by jurisdiction"
            ],
            impact: ["Increased cost of capital for trading activities", "Reduced bank participation in commodity markets", "Shift toward electronic platforms"],
            timeline: ["Phase-in period from 2013-2019", "Full implementation by 2023"]
        },
        relatedTerms: ["Capital Requirements", "Leverage Ratio", "Liquidity Coverage Ratio", "Bank Regulation"],
        tags: ["regulation", "banking", "capital"]
    },
    {
        term: "Call Option",
        category: "derivatives",
        definition: "A financial contract that gives the holder the right, but not the obligation, to buy an underlying asset at a specified price within a specific time period.",
        details: {
            keyPoints: [
                "Buyer pays premium for the right to buy",
                "Seller (writer) receives premium and has obligation to sell if exercised",
                "Profits when underlying price rises above strike + premium",
                "Maximum loss for buyer is limited to premium paid"
            ],
            pricing: ["Affected by underlying price, strike price, time to expiration, volatility, interest rates"],
            strategies: ["Speculation on price increases", "Hedging short positions", "Income generation through writing"]
        },
        relatedTerms: ["Put Option", "Strike Price", "Premium", "Exercise", "Greeks"],
        tags: ["options", "derivatives", "hedging"]
    },
    {
        term: "Convenience Yield",
        category: "valuation",
        definition: "The benefit or premium associated with holding the underlying commodity rather than holding derivative securities or futures contracts on that commodity.",
        details: {
            keyPoints: [
                "Represents value of holding physical commodity",
                "Higher during supply shortages or market stress",
                "Affects futures curve shape (backwardation vs contango)",
                "Difficult to observe directly but can be implied from futures prices"
            ],
            factors: ["Storage costs", "Supply availability", "Market volatility", "Seasonality"],
            calculation: "Implied from futures prices using cost-of-carry model"
        },
        relatedTerms: ["Cost of Carry", "Storage Costs", "Backwardation", "Futures Curve"],
        tags: ["valuation", "futures", "storage"]
    },
    {
        term: "Credit Support Annex (CSA)",
        category: "risk",
        definition: "A legal document that governs the credit support arrangements between two parties to mitigate credit risk in derivative transactions.",
        details: {
            keyPoints: [
                "Part of ISDA Master Agreement framework",
                "Defines collateral requirements and procedures",
                "Specifies eligible collateral types and valuation methods",
                "Includes minimum transfer amounts and thresholds"
            ],
            components: ["Credit Support Provider", "Credit Support Amount", "Delivery Amount", "Return Amount"],
            benefits: ["Reduces counterparty credit risk", "Standardizes collateral management", "Facilitates netting"]
        },
        relatedTerms: ["ISDA", "Collateral", "Credit Risk", "Margin", "Netting"],
        tags: ["credit risk", "collateral", "legal"]
    },
    {
        term: "Delta",
        category: "risk",
        definition: "A risk measure that represents the rate of change in an option's price relative to a change in the underlying asset's price.",
        details: {
            keyPoints: [
                "One of the 'Greeks' used in options risk management",
                "Ranges from 0 to 1 for call options, -1 to 0 for put options",
                "At-the-money options typically have delta around 0.5",
                "Used for delta hedging strategies"
            ],
            interpretation: ["Delta of 0.3 means option price changes $0.30 for $1 move in underlying", "Portfolio delta shows overall directional exposure"],
            applications: ["Risk management", "Portfolio hedging", "Market making"]
        },
        relatedTerms: ["Gamma", "Theta", "Vega", "Greeks", "Delta Hedging"],
        tags: ["options", "risk", "greeks"]
    },
    {
        term: "EMIR (European Market Infrastructure Regulation)",
        category: "regulation",
        definition: "EU regulation aimed at reducing counterparty credit risk and increasing transparency in the derivatives market.",
        details: {
            keyPoints: [
                "Requires central clearing for standardized derivatives",
                "Mandates risk mitigation for non-centrally cleared derivatives",
                "Requires trade reporting to trade repositories",
                "Applies to EU entities and non-EU entities trading with EU counterparties"
            ],
            requirements: ["Clearing obligation", "Risk mitigation techniques", "Reporting obligation", "Capital requirements"],
            impact: ["Increased costs for OTC derivatives", "Greater transparency", "Reduced systemic risk"]
        },
        relatedTerms: ["Central Clearing", "Trade Repository", "OTC Derivatives", "MiFID"],
        tags: ["regulation", "EU", "derivatives"]
    },
    {
        term: "Energy Storage",
        category: "commodities",
        definition: "Technologies and facilities used to store energy in various forms for later use, including batteries, pumped hydro, and compressed air.",
        details: {
            keyPoints: [
                "Critical for renewable energy integration",
                "Provides grid stability and peak load management",
                "Creates new trading opportunities and market dynamics",
                "Technologies include lithium-ion, flow batteries, mechanical storage"
            ],
            trading: ["Storage arbitrage opportunities", "Ancillary services markets", "Capacity markets"],
            valuation: ["Real options pricing models", "Stochastic optimization", "Dynamic programming"]
        },
        relatedTerms: ["Grid Storage", "Battery Trading", "Ancillary Services", "Peak Load"],
        tags: ["energy", "storage", "renewables"]
    },
    {
        term: "Forward Curve",
        category: "valuation",
        definition: "A graphical representation of forward prices for different delivery dates, showing the term structure of commodity prices.",
        details: {
            keyPoints: [
                "Shows market expectations of future prices",
                "Shape indicates market structure (contango/backwardation)",
                "Used for valuation and risk management",
                "Can be constructed from exchange-traded futures or OTC forwards"
            ],
            shapes: ["Contango: upward sloping", "Backwardation: downward sloping", "Flat: constant prices"],
            applications: ["Portfolio valuation", "Risk analysis", "Trading strategy development"]
        },
        relatedTerms: ["Contango", "Backwardation", "Term Structure", "Futures Prices"],
        tags: ["pricing", "forwards", "curve"]
    },
    {
        term: "Gamma",
        category: "risk",
        definition: "The rate of change of delta with respect to changes in the underlying asset price, measuring the acceleration of option price movements.",
        details: {
            keyPoints: [
                "Second-order Greek measuring convexity",
                "Always positive for long options positions",
                "Highest for at-the-money options",
                "Decreases as options move deeper in or out of the money"
            ],
            implications: ["High gamma means delta changes rapidly", "Important for portfolio rebalancing", "Used in gamma hedging strategies"],
            risk: ["Gamma risk increases near expiration", "Large gamma positions require frequent hedging"]
        },
        relatedTerms: ["Delta", "Greeks", "Convexity", "Gamma Hedging"],
        tags: ["options", "risk", "greeks"]
    },
    {
        term: "Heat Rate",
        category: "commodities",
        definition: "The efficiency measure of a power plant, representing the amount of fuel energy input required to produce one unit of electricity output.",
        details: {
            keyPoints: [
                "Measured in BTU per kWh or MMBtu per MWh",
                "Lower heat rate indicates higher efficiency",
                "Varies by plant type, age, and operating conditions",
                "Used in power plant dispatch and spark spread calculations"
            ],
            typical: ["Natural gas combined cycle: 6,000-8,000 BTU/kWh", "Coal plants: 8,000-12,000 BTU/kWh", "Simple cycle gas: 9,000-12,000 BTU/kWh"],
            trading: ["Affects spark spread profitability", "Used in virtual power plant modeling"]
        },
        relatedTerms: ["Spark Spread", "Power Generation", "Efficiency", "Dispatch"],
        tags: ["power", "efficiency", "generation"]
    },
    {
        term: "Initial Margin",
        category: "risk",
        definition: "The minimum amount of cash or securities that must be deposited to open a leveraged trading position or derivatives contract.",
        details: {
            keyPoints: [
                "Required by exchanges and clearinghouses",
                "Calculated based on potential loss scenarios",
                "Different from variation margin (daily settlements)",
                "Can change based on market volatility and risk"
            ],
            calculation: ["SPAN methodology commonly used", "Based on worst-case portfolio loss", "Includes inter-commodity spreads and correlations"],
            types: ["Exchange-required margin", "Broker-required margin", "House margin"]
        },
        relatedTerms: ["Variation Margin", "SPAN", "Leverage", "Margin Call"],
        tags: ["margin", "risk", "collateral"]
    },
    {
        term: "Jump Risk",
        category: "risk",
        definition: "The risk of sudden, large price movements in financial markets that cannot be captured by normal market models assuming continuous price changes.",
        details: {
            keyPoints: [
                "Common in commodity markets due to supply disruptions",
                "Cannot be hedged with delta hedging alone",
                "Requires jump-diffusion models for proper valuation",
                "Particularly relevant for options and structured products"
            ],
            causes: ["Geopolitical events", "Natural disasters", "Regulatory changes", "Supply/demand shocks"],
            modeling: ["Merton jump-diffusion model", "Kou model", "Variance gamma model"]
        },
        relatedTerms: ["Volatility", "Fat Tails", "Black Swan", "Extreme Events"],
        tags: ["risk", "modeling", "volatility"]
    },
    {
        term: "Knock-out Option",
        category: "derivatives",
        definition: "A barrier option that becomes worthless if the underlying asset price reaches a predetermined barrier level during the option's life.",
        details: {
            keyPoints: [
                "Type of exotic option with barrier feature",
                "Cheaper than standard options due to knock-out risk",
                "Can be up-and-out or down-and-out",
                "Barrier can be monitored continuously or discretely"
            ],
            types: ["Up-and-out: ceases to exist if price goes above barrier", "Down-and-out: ceases to exist if price goes below barrier"],
            applications: ["Cost reduction in hedging", "Structured products", "Risk management"]
        },
        relatedTerms: ["Barrier Option", "Knock-in Option", "Exotic Options", "Path Dependent"],
        tags: ["options", "barriers", "exotic"]
    },
    {
        term: "Load Following",
        category: "commodities",
        definition: "The ability of a power plant or energy storage system to adjust its output to match changes in electricity demand throughout the day.",
        details: {
            keyPoints: [
                "Essential for grid stability and reliability",
                "Different plants have varying load-following capabilities",
                "Creates value in electricity markets through flexibility",
                "Important for renewable energy integration"
            ],
            characteristics: ["Ramp rate: how quickly output can change", "Minimum load: lowest sustainable output", "Start-up time: time to come online"],
            markets: ["Ancillary services compensation", "Flexibility markets", "Real-time dispatch"]
        },
        relatedTerms: ["Ancillary Services", "Grid Flexibility", "Dispatch", "Peak Load"],
        tags: ["power", "flexibility", "grid"]
    },
    {
        term: "Mark-to-Market",
        category: "valuation",
        definition: "The practice of revaluing positions and portfolios based on current market prices to reflect their fair value.",
        details: {
            keyPoints: [
                "Required for financial reporting and risk management",
                "Uses observable market prices when available",
                "May require models for illiquid instruments",
                "Impacts daily P&L calculations"
            ],
            challenges: ["Limited liquidity in some markets", "Model validation requirements", "Pricing of complex structures"],
            standards: ["IFRS 13 Fair Value Measurement", "ASC 820 Fair Value Measurements"]
        },
        relatedTerms: ["Fair Value", "Model Validation", "P&L", "Valuation"],
        tags: ["valuation", "accounting", "fair value"]
    },
    {
        term: "Nodal Pricing",
        category: "markets",
        definition: "An electricity pricing system where prices are determined at specific locations (nodes) on the transmission grid based on locational marginal costs.",
        details: {
            keyPoints: [
                "Reflects transmission constraints and losses",
                "Provides price signals for efficient dispatch",
                "Used in most deregulated electricity markets",
                "Creates basis risk between different locations"
            ],
            components: ["Energy component", "Congestion component", "Loss component"],
            applications: ["Financial transmission rights (FTRs)", "Locational arbitrage", "Generation investment decisions"]
        },
        relatedTerms: ["LMP", "Transmission Congestion", "FTR", "Grid Constraints"],
        tags: ["power", "pricing", "transmission"]
    },
    {
        term: "Open Interest",
        category: "markets",
        definition: "The total number of outstanding derivative contracts that have not been settled or closed out.",
        details: {
            keyPoints: [
                "Indicates market liquidity and participant interest",
                "Changes only when new positions are opened or existing ones are closed",
                "Different from volume, which includes all transactions",
                "Higher open interest generally indicates better liquidity"
            ],
            interpretation: ["Increasing open interest suggests new money entering market", "Decreasing open interest may indicate position unwinding"],
            usage: ["Liquidity assessment", "Market sentiment analysis", "Risk management"]
        },
        relatedTerms: ["Volume", "Liquidity", "Futures", "Options"],
        tags: ["markets", "liquidity", "contracts"]
    },
    {
        term: "Portfolio Optimization",
        category: "risk",
        definition: "The process of selecting the best portfolio mix of assets to maximize returns for a given level of risk or minimize risk for a target return.",
        details: {
            keyPoints: [
                "Based on modern portfolio theory",
                "Considers correlations between assets",
                "Can include constraints on position sizes and risk metrics",
                "Used for both long-term investment and short-term trading"
            ],
            methods: ["Mean-variance optimization", "Black-Litterman model", "Risk parity", "Factor models"],
            challenges: ["Parameter estimation error", "Non-normal distributions", "Transaction costs"]
        },
        relatedTerms: ["Modern Portfolio Theory", "Efficient Frontier", "Sharpe Ratio", "Risk Parity"],
        tags: ["portfolio", "optimization", "risk"]
    },
    {
        term: "Quanto Option",
        category: "derivatives",
        definition: "A cash-settled option where the underlying asset is denominated in one currency but the option is settled in another currency at a fixed exchange rate.",
        details: {
            keyPoints: [
                "Eliminates foreign exchange risk for the option holder",
                "Settlement amount is converted at predetermined rate",
                "Common in international commodity markets",
                "Pricing requires correlation between underlying and FX rate"
            ],
            examples: ["Oil option priced in USD but settled in EUR", "Gold option for Japanese investors settled in JPY"],
            pricing: ["Requires quanto adjustment factor", "Considers correlation between underlying and FX rate"]
        },
        relatedTerms: ["Currency Risk", "Cross-Currency", "Foreign Exchange", "Settlement"],
        tags: ["options", "currency", "international"]
    },
    {
        term: "Risk-Free Rate",
        category: "valuation",
        definition: "The theoretical rate of return on an investment with zero risk, typically based on government bond yields.",
        details: {
            keyPoints: [
                "Used as baseline for pricing and risk assessment",
                "Commonly based on treasury bills or government bonds",
                "Varies by currency and time horizon",
                "Key input in options pricing models"
            ],
            proxies: ["US Treasury rates for USD", "German Bunds for EUR", "UK Gilts for GBP"],
            applications: ["Options pricing (Black-Scholes)", "CAPM calculations", "Discount rate for NPV"]
        },
        relatedTerms: ["Treasury Rate", "Discount Rate", "CAPM", "Options Pricing"],
        tags: ["valuation", "interest rates", "pricing"]
    },
    {
        term: "Spark Spread",
        category: "trading",
        definition: "The theoretical profit margin of a natural gas-fired power plant, calculated as the price of electricity minus the cost of natural gas adjusted for heat rate.",
        details: {
            keyPoints: [
                "Key trading strategy in power and gas markets",
                "Represents clean spark spread when CO2 costs are included",
                "Affected by plant efficiency (heat rate)",
                "Can be traded using power and gas futures"
            ],
            calculation: "Power Price ($/MWh) - (Gas Price ($/MMBtu) × Heat Rate)",
            factors: ["Natural gas prices", "Electricity prices", "Plant efficiency", "Carbon costs"]
        },
        relatedTerms: ["Heat Rate", "Clean Spark Spread", "Power Generation", "Gas Trading"],
        tags: ["trading", "power", "gas"]
    },
    {
        term: "Theta",
        category: "risk",
        definition: "The rate of decline in an option's value due to the passage of time, also known as time decay.",
        details: {
            keyPoints: [
                "One of the 'Greeks' in options risk management",
                "Always negative for long options positions",
                "Accelerates as expiration approaches",
                "Higher for at-the-money options"
            ],
            behavior: ["Time decay is non-linear", "Accelerates in final weeks before expiration", "Weekends and holidays reduce theta"],
            strategies: ["Theta decay benefits option sellers", "Calendar spreads profit from differential theta"]
        },
        relatedTerms: ["Time Decay", "Greeks", "Options", "Calendar Spread"],
        tags: ["options", "time decay", "greeks"]
    },
    {
        term: "Uncertainty",
        category: "risk",
        definition: "A situation where the probability distribution of possible outcomes is unknown, as opposed to risk where probabilities can be estimated.",
        details: {
            keyPoints: [
                "Knightian uncertainty: unmeasurable uncertainty",
                "Different from risk where probabilities are known",
                "Common in commodity markets due to complex factors",
                "Requires robust decision-making frameworks"
            ],
            examples: ["Climate change impacts", "Regulatory changes", "Technology disruption", "Geopolitical events"],
            management: ["Scenario analysis", "Robust optimization", "Real options", "Diversification"]
        },
        relatedTerms: ["Risk", "Knightian Uncertainty", "Scenario Analysis", "Robust Optimization"],
        tags: ["risk", "uncertainty", "decision making"]
    },
    {
        term: "Value-at-Risk (VaR)",
        category: "risk",
        definition: "A statistical measure that quantifies the maximum potential loss in value of a portfolio over a defined period for a given confidence interval.",
        details: {
            keyPoints: [
                "Most widely used risk metric in financial institutions",
                "Typically calculated for 1-day or 10-day periods",
                "Common confidence levels are 95% and 99%",
                "Regulatory requirement for many financial institutions"
            ],
            methods: ["Historical simulation", "Parametric (variance-covariance)", "Monte Carlo simulation"],
            limitations: ["Doesn't capture tail risk beyond confidence level", "Assumes normal market conditions", "Model risk"]
        },
        relatedTerms: ["Expected Shortfall", "Risk Metrics", "Portfolio Risk", "Stress Testing"],
        tags: ["risk", "VaR", "measurement"]
    },
    {
        term: "Weather Derivatives",
        category: "derivatives",
        definition: "Financial instruments that allow parties to hedge against or speculate on weather-related risks that can impact business operations or revenues.",
        details: {
            keyPoints: [
                "Based on weather indices like temperature or precipitation",
                "Used by energy companies, agriculture, and retail businesses",
                "Common underlying indices include HDD, CDD, and rainfall",
                "Can be structured as swaps, options, or futures"
            ],
            applications: ["Energy demand hedging", "Agricultural risk management", "Seasonal revenue protection"],
            indices: ["Heating Degree Days (HDD)", "Cooling Degree Days (CDD)", "Rainfall amounts", "Wind speeds"]
        },
        relatedTerms: ["HDD", "CDD", "Agricultural Risk", "Energy Demand"],
        tags: ["weather", "derivatives", "hedging"]
    },
    {
        term: "X-Border Trading",
        category: "trading",
        definition: "Cross-border trading activities involving the import and export of physical commodities across international boundaries.",
        details: {
            keyPoints: [
                "Involves complex logistics and regulatory requirements",
                "Subject to customs duties and trade regulations",
                "Requires letters of credit and trade finance",
                "Currency exchange risk must be managed"
            ],
            challenges: ["Regulatory compliance", "Documentation requirements", "Credit risk", "Currency exposure"],
            documents: ["Commercial invoices", "Bills of lading", "Certificates of origin", "Insurance certificates"]
        },
        relatedTerms: ["Trade Finance", "Letters of Credit", "Customs", "International Trade"],
        tags: ["trading", "international", "logistics"]
    },
    {
        term: "Yard-sale Risk",
        category: "risk",
        definition: "The risk of being forced to sell assets quickly at unfavorable prices during market stress, typically due to margin calls or liquidity constraints.",
        details: {
            keyPoints: [
                "Also known as fire-sale risk or liquidation risk",
                "Can create negative feedback loops in crisis situations",
                "Particularly relevant for leveraged positions",
                "Emphasized the importance of liquidity risk management"
            ],
            causes: ["Margin calls", "Credit line revocation", "Regulatory pressure", "Funding stress"],
            mitigation: ["Liquidity buffers", "Diversified funding sources", "Stress testing", "Position limits"]
        },
        relatedTerms: ["Liquidity Risk", "Fire Sale", "Margin Call", "Market Stress"],
        tags: ["risk", "liquidity", "crisis"]
    },
    {
        term: "Zero-Sum Game",
        category: "trading",
        definition: "A mathematical concept where one participant's gain equals another participant's loss, making the net change in wealth zero.",
        details: {
            keyPoints: [
                "Common characteristic of many derivative markets",
                "Ignores transaction costs and market frictions",
                "Not applicable to physical commodity trading",
                "Important concept in game theory and trading strategy"
            ],
            examples: ["Futures contracts", "Options trading", "Foreign exchange", "Binary bets"],
            implications: ["Winners and losers are clearly defined", "No value creation, only transfer", "Strategy must consider counterparty behavior"]
        },
        relatedTerms: ["Game Theory", "Derivatives", "Futures", "Market Structure"],
        tags: ["trading", "game theory", "derivatives"]
    }
];

// Application State
let currentTerms = [...etrmGlossary];
let currentCategory = 'all';
let currentLetter = 'ALL';
let currentSort = 'alphabetical';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const termsContainer = document.getElementById('termsContainer');
const letterBtns = document.querySelectorAll('.letter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const modal = document.getElementById('termModal');
const closeModal = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderTerms();
    updateStats();
});

function initializeApp() {
    // Sort glossary alphabetically by default
    etrmGlossary.sort((a, b) => a.term.localeCompare(b.term));
    currentTerms = [...etrmGlossary];
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearchButton);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearchButton();
        }
    });

    // Filter functionality
    categoryFilter.addEventListener('change', handleCategoryFilter);
    sortFilter.addEventListener('change', handleSortFilter);

    // Letter navigation
    letterBtns.forEach(btn => {
        btn.addEventListener('click', handleLetterFilter);
    });

    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategoryCard);
    });

    // Modal functionality
    closeModal.addEventListener('click', closeTermModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTermModal();
        }
    });

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length === 0) {
        hideSuggestions();
        currentTerms = [...etrmGlossary];
        applyFilters();
        return;
    }

    if (query.length < 2) {
        hideSuggestions();
        return;
    }

    // Show suggestions
    const suggestions = etrmGlossary.filter(term => 
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.tags.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 5);

    showSuggestions(suggestions, query);

    // Filter terms
    currentTerms = etrmGlossary.filter(term => 
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.tags.some(tag => tag.toLowerCase().includes(query)) ||
        term.relatedTerms.some(related => related.toLowerCase().includes(query))
    );

    applyFilters();
}

function handleSearchButton() {
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        hideSuggestions();
        currentTerms = etrmGlossary.filter(term => 
            term.term.toLowerCase().includes(query) ||
            term.definition.toLowerCase().includes(query) ||
            term.tags.some(tag => tag.toLowerCase().includes(query)) ||
            term.relatedTerms.some(related => related.toLowerCase().includes(query))
        );
        applyFilters();
    }
}

function showSuggestions(suggestions, query) {
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }

    const html = suggestions.map(term => `
        <div class="suggestion-item" onclick="selectSuggestion('${term.term}')">
            <strong>${highlightMatch(term.term, query)}</strong>
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">
                ${truncateText(term.definition, 80)}
            </div>
        </div>
    `).join('');

    searchSuggestions.innerHTML = html;
    searchSuggestions.style.display = 'block';
}

function hideSuggestions() {
    searchSuggestions.style.display = 'none';
}

function selectSuggestion(termName) {
    searchInput.value = termName;
    hideSuggestions();
    
    const term = etrmGlossary.find(t => t.term === termName);
    if (term) {
        showTermModal(term);
    }
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background: yellow; color: black;">$1</mark>');
}

function handleCategoryFilter() {
    currentCategory = categoryFilter.value;
    applyFilters();
}

function handleSortFilter() {
    currentSort = sortFilter.value;
    applyFilters();
}

function handleLetterFilter(e) {
    e.preventDefault();
    const letter = e.target.dataset.letter;
    
    // Update active state
    letterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentLetter = letter;
    applyFilters();
}

function handleCategoryCard(e) {
    const category = e.currentTarget.dataset.category;
    currentCategory = category;
    categoryFilter.value = category;
    
    // Scroll to glossary section
    document.getElementById('glossary').scrollIntoView({ behavior: 'smooth' });
    
    // Update navigation
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('[href="#glossary"]').classList.add('active');
    
    applyFilters();
}

function handleNavigation(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    
    // Update active state
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    
    // Smooth scroll to section
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

function applyFilters() {
    let filteredTerms = [...currentTerms];

    // Apply category filter
    if (currentCategory !== 'all') {
        filteredTerms = filteredTerms.filter(term => term.category === currentCategory);
    }

    // Apply letter filter
    if (currentLetter !== 'ALL') {
        filteredTerms = filteredTerms.filter(term => 
            term.term.charAt(0).toUpperCase() === currentLetter
        );
    }

    // Apply sorting
    switch (currentSort) {
        case 'alphabetical':
            filteredTerms.sort((a, b) => a.term.localeCompare(b.term));
            break;
        case 'category':
            filteredTerms.sort((a, b) => {
                if (a.category === b.category) {
                    return a.term.localeCompare(b.term);
                }
                return a.category.localeCompare(b.category);
            });
            break;
        case 'recent':
            // For demo purposes, reverse alphabetical order
            filteredTerms.sort((a, b) => b.term.localeCompare(a.term));
            break;
    }

    renderTerms(filteredTerms);
}

function renderTerms(terms = currentTerms) {
    if (terms.length === 0) {
        termsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No terms found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }

    const html = terms.map(term => `
        <div class="term-item" onclick="showTermModal(${JSON.stringify(term).replace(/"/g, '&quot;')})">
            <div class="term-header">
                <h3 class="term-name">${term.term}</h3>
                <span class="term-category-badge">${formatCategory(term.category)}</span>
            </div>
            <p class="term-definition">${truncateText(term.definition, 150)}</p>
            <div class="term-tags">
                ${term.tags.map(tag => `<span class="term-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');

    termsContainer.innerHTML = html;
}

function showTermModal(term) {
    const modal = document.getElementById('termModal');
    const modalTermName = document.getElementById('modalTermName');
    const modalTermCategory = document.getElementById('modalTermCategory');
    const modalTermDefinition = document.getElementById('modalTermDefinition');
    const modalTermDetails = document.getElementById('modalTermDetails');
    const modalRelatedTerms = document.getElementById('modalRelatedTerms');

    modalTermName.textContent = term.term;
    modalTermCategory.textContent = formatCategory(term.category);
    modalTermCategory.className = `term-category ${term.category}`;
    modalTermDefinition.textContent = term.definition;

    // Render details
    if (term.details) {
        let detailsHtml = '';
        
        if (term.details.keyPoints) {
            detailsHtml += `
                <h4>Key Points</h4>
                <ul>
                    ${term.details.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
        }

        if (term.details.examples) {
            detailsHtml += `
                <h4>Examples</h4>
                <ul>
                    ${term.details.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            `;
        }

        if (term.details.applications) {
            detailsHtml += `
                <h4>Applications</h4>
                <ul>
                    ${term.details.applications.map(app => `<li>${app}</li>`).join('')}
                </ul>
            `;
        }

        if (term.details.methods) {
            detailsHtml += `
                <h4>Methods</h4>
                <ul>
                    ${term.details.methods.map(method => `<li>${method}</li>`).join('')}
                </ul>
            `;
        }

        modalTermDetails.innerHTML = detailsHtml;
    } else {
        modalTermDetails.innerHTML = '';
    }

    // Render related terms
    if (term.relatedTerms && term.relatedTerms.length > 0) {
        modalRelatedTerms.innerHTML = `
            <h4>Related Terms</h4>
            <div class="related-terms-list">
                ${term.relatedTerms.map(relatedTerm => 
                    `<a href="#" class="related-term" onclick="searchRelatedTerm('${relatedTerm}')">${relatedTerm}</a>`
                ).join('')}
            </div>
        `;
    } else {
        modalRelatedTerms.innerHTML = '';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeTermModal() {
    const modal = document.getElementById('termModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function searchRelatedTerm(termName) {
    closeTermModal();
    searchInput.value = termName;
    
    // Find and display the term
    const term = etrmGlossary.find(t => t.term === termName);
    if (term) {
        setTimeout(() => showTermModal(term), 300);
    } else {
        // If exact match not found, perform search
        handleSearchButton();
    }
}

function formatCategory(category) {
    const categoryMap = {
        'trading': 'Trading',
        'risk': 'Risk Management',
        'derivatives': 'Derivatives',
        'commodities': 'Commodities',
        'valuation': 'Valuation',
        'regulation': 'Regulation',
        'markets': 'Market Structure',
        'technology': 'Technology'
    };
    return categoryMap[category] || category;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}

function updateStats() {
    const totalTermsElement = document.getElementById('totalTerms');
    if (totalTermsElement) {
        totalTermsElement.textContent = `${etrmGlossary.length}+`;
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'var(--shadow-md)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modal
    if (e.key === 'Escape') {
        closeTermModal();
        hideSuggestions();
    }
    
    // Ctrl+K or Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
}); 