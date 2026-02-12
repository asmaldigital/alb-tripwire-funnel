/* ============================================
   AI Growth Score Quiz — Logic
   AI Lead Builder / Asmal Digital
   ============================================ */

(function () {
  'use strict';

  /* ---------- Configuration ---------- */
  const WEBHOOK_URL = 'WEBHOOK_URL'; // Replace with your GHL/Zapier webhook endpoint
  const AUTO_ADVANCE_DELAY = 500;    // ms after answer selection
  const SCORE_COUNT_DURATION = 2000; // ms for count-up animation
  const CALCULATE_DELAY = 2200;      // ms to show "calculating" screen

  /* ---------- Quiz Data ---------- */
  const QUESTIONS = [
    {
      id: 'q1',
      number: 1,
      text: 'What type of business do you run?',
      type: 'segment',
      answers: [
        { label: 'Coaching or consulting', value: 'coach', tag: 'segment_coach' },
        { label: 'Marketing or creative agency', value: 'agency', tag: 'segment_agency' },
        { label: 'Service-based business', value: 'scaling', tag: 'segment_scaling' },
        { label: 'E-commerce or product-based', value: 'ecom', tag: 'segment_ecom' }
      ]
    },
    {
      id: 'q2',
      number: 2,
      text: "What's your annual revenue?",
      type: 'scored',
      answers: [
        { label: 'Under $100K', value: 'under_100k', points: 5, tag: 'revenue_under_100k' },
        { label: '$100K - $250K', value: '100k_250k', points: 10, tag: 'revenue_100k_250k' },
        { label: '$250K - $500K', value: '250k_500k', points: 15, tag: 'revenue_250k_500k' },
        { label: '$500K+', value: '500k_plus', points: 20, tag: 'revenue_500k_plus' }
      ]
    },
    {
      id: 'q3',
      number: 3,
      text: 'How are you currently using AI in your business?',
      type: 'scored',
      answers: [
        { label: "I'm not using AI at all", value: 'none', points: 5 },
        { label: 'I use ChatGPT for basic tasks like writing', value: 'basic', points: 10 },
        { label: "I've built some custom GPTs or use AI tools regularly", value: 'intermediate', points: 15 },
        { label: 'I have AI integrated into my workflows and operations', value: 'advanced', points: 20 }
      ]
    },
    {
      id: 'q4',
      number: 4,
      text: 'How do you currently generate leads?',
      type: 'scored',
      answers: [
        { label: 'Word of mouth / referrals only', value: 'referrals', points: 5 },
        { label: 'Social media content (organic)', value: 'organic', points: 10 },
        { label: 'Paid ads (Meta, Google, etc.)', value: 'paid', points: 15 },
        { label: 'Combination of organic + paid + referrals', value: 'combination', points: 20 }
      ]
    },
    {
      id: 'q5',
      number: 5,
      text: 'How much time do you spend per week on content creation and marketing?',
      type: 'scored',
      answers: [
        { label: 'Less than 2 hours', value: 'under_2h', points: 5 },
        { label: '2-5 hours', value: '2_5h', points: 10 },
        { label: '5-10 hours', value: '5_10h', points: 15 },
        { label: '10+ hours', value: '10_plus_h', points: 20 }
      ]
    },
    {
      id: 'q6',
      number: 6,
      text: "What's your biggest bottleneck right now?",
      type: 'bottleneck',
      answers: [
        { label: "I don't have enough leads coming in", value: 'leads', tag: 'bottleneck_leads' },
        { label: "I can't create content fast enough", value: 'content', tag: 'bottleneck_content' },
        { label: 'My follow-up and nurture is inconsistent', value: 'followup', tag: 'bottleneck_followup' },
        { label: "I'm doing everything manually and can't scale", value: 'manual', tag: 'bottleneck_manual' }
      ]
    },
    {
      id: 'q7',
      number: 7,
      text: 'If AI could solve ONE problem in your business this month, what would it be?',
      type: 'outcome',
      answers: [
        { label: 'Generate qualified leads automatically', value: 'auto_leads' },
        { label: "Create a week's content in 30 minutes", value: 'fast_content' },
        { label: 'Automate my follow-up so no lead goes cold', value: 'auto_followup' },
        { label: 'Build a system that runs without me', value: 'system' }
      ]
    }
  ];

  /* ---------- Results Data ---------- */
  const SCORE_BANDS = [
    {
      min: 0, max: 30,
      level: 'AI Beginner',
      band: 'beginner',
      color: '#EF4444',
      message: "You're leaving money on the table. AI could transform your business — you just need the right system."
    },
    {
      min: 31, max: 55,
      level: 'AI Dabbler',
      band: 'dabbler',
      color: '#F97316',
      message: "You've started, but you're using AI in scattered ways. A structured system would 3-5x your results."
    },
    {
      min: 56, max: 75,
      level: 'AI Implementer',
      band: 'implementer',
      color: '#EAB308',
      message: "You're ahead of most business owners. But you're doing it manually. Time to systematize and scale."
    },
    {
      min: 76, max: 100,
      level: 'AI Operator',
      band: 'operator',
      color: '#22C55E',
      message: "You're already advanced. The next step is connecting everything into one AI-powered growth machine."
    }
  ];

  const OPPORTUNITY_DATA = {
    leads: {
      title: 'AI-Powered Lead Generation',
      text1: 'Business owners in your position are using AI to generate 73+ qualified leads per month without paid ads. The system takes about 30 days to build and runs on autopilot after that.',
      text2: 'One of our members, Shamimah, went from a struggling agency to 73 qualified leads in one month using the exact system we teach inside AI Lead Builder.'
    },
    content: {
      title: 'AI Content Systems',
      text1: "Business owners like you are using custom AI tools to create a full week of content in 30 minutes — in their own voice, for their specific audience.",
      text2: 'Riyaz, an agency owner in Malaysia, said: "It actually has like 4x my work personally." That happened in his first month.'
    },
    followup: {
      title: 'Automated Follow-Up Sequences',
      text1: 'Every lead that goes cold is revenue lost. AI-powered follow-up sequences respond instantly, nurture automatically, and book calls while you sleep.',
      text2: 'The difference between closing 10% and closing 30% often comes down to speed and consistency of follow-up — both of which AI handles better than any human.'
    },
    manual: {
      title: 'AI-Powered Business Systems',
      text1: "You're the bottleneck. The fix isn't hiring — it's building AI systems that handle the repetitive work so you can focus on what only you can do.",
      text2: 'Markus, an AI consultant in Germany, made over $22,000 from just two coaching calls where Muhammad showed him how to systematize his business with AI.'
    }
  };

  const TESTIMONIALS = {
    agency: {
      quote: 'My agency was spiraling, I was burnt out, I was stuck, and I was drowning. One month later — 73 quality qualified leads that I\'m already starting to convert.',
      author: 'Shamimah Koya, Social Zip'
    },
    coach: {
      quote: "What I love about the program is the weekly coaching calls because Muhammad will dive straight in. There's no fluff. He walks us through step by step. It actually has like 4x my work personally.",
      author: 'Riyaz Rangrage, Agency Owner, Malaysia'
    },
    scaling: {
      quote: "I made over $22,000 just using the information of last two Wednesday calls.",
      author: 'Markus Habermehl, AI Consultant, Germany'
    },
    ecom: {
      quote: "I have been able to earn back the money that I've invested in his course within four weeks by implementing what I've learned.",
      author: "Jacine Greenwood, CEO, RoCoco Botanicals"
    }
  };

  /* Base score for Q1 segment mapping */
  const SEGMENT_BASE_SCORE = 20;

  /* ---------- State ---------- */
  var currentScreen = 'question-0';
  var currentQuestionIndex = 0;
  var answers = {};
  var leadData = {};
  var isTransitioning = false;

  /* ---------- DOM Helpers ---------- */
  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function $$(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  /* ---------- Safe DOM builder ---------- */
  function createEl(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === 'className') {
          el.className = attrs[key];
        } else if (key === 'textContent') {
          el.textContent = attrs[key];
        } else if (key.indexOf('data-') === 0 || key === 'role' || key === 'tabindex' || key === 'type' || key === 'placeholder' || key === 'autocomplete' || key === 'novalidate' || key === 'required' || key === 'id' || key === 'href' || key === 'aria-label') {
          el.setAttribute(key, attrs[key]);
        } else if (key === 'style') {
          el.style.cssText = attrs[key];
        }
      });
    }
    if (children) {
      children.forEach(function (child) {
        if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        } else if (child) {
          el.appendChild(child);
        }
      });
    }
    return el;
  }

  /* ---------- Initialize ---------- */
  function init() {
    // Start with Q1 immediately — lead capture comes AFTER all questions, before results
    renderQuestion(0);
    updateProgress();
    bindLeadForm();
    showScreen('question-0');
  }

  /* ---------- Screen Management ---------- */
  function showScreen(screenId) {
    var screens = $$('.quiz-screen');
    var target = $('#' + screenId);
    if (!target) return;

    screens.forEach(function (s) {
      if (s.classList.contains('active') && s.id !== screenId) {
        s.classList.remove('active');
        s.classList.add('exit-left');
        setTimeout(function () { s.classList.remove('exit-left'); }, 500);
      }
    });

    requestAnimationFrame(function () {
      target.classList.add('active');
    });

    // Progress bar visibility — hide only on calculating and results
    var progressWrapper = $('.progress-wrapper');
    if (screenId === 'calculating' || screenId === 'results') {
      progressWrapper.classList.remove('visible');
    } else {
      progressWrapper.classList.add('visible');
    }

    currentScreen = screenId;

    // Scroll to top of quiz container
    var container = $('.quiz-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function updateProgress() {
    var pct = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
    var fill = $('.progress-fill');
    var stepLabel = $('.progress-label__step');
    var pctLabel = $('.progress-label__pct');

    if (fill) fill.style.width = pct + '%';
    if (stepLabel) stepLabel.textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + QUESTIONS.length;
    if (pctLabel) pctLabel.textContent = Math.round(pct) + '%';
  }

  /* ---------- Lead Capture Screen ---------- */
  function renderLeadCapture() {
    var screen = $('#lead-capture');
    // Clear existing content
    while (screen.firstChild) screen.removeChild(screen.firstChild);

    // Build DOM elements
    var wrapper = createEl('div', { className: 'lead-capture' });

    var badge = createEl('div', { className: 'lead-capture__badge', textContent: 'Your Score Is Ready' });

    var title = createEl('h1', { className: 'lead-capture__title' });
    title.appendChild(document.createTextNode('Where should we send your '));
    title.appendChild(createEl('span', { textContent: 'AI Growth Report' }));
    title.appendChild(document.createTextNode('?'));

    var desc = createEl('p', { className: 'lead-capture__desc', textContent: "We've analyzed your responses. Enter your details below to see your personalized AI Growth Score, your #1 opportunity, and your action plan." });

    var form = createEl('form', { className: 'lead-form', id: 'leadForm', novalidate: '' });

    // Name field
    var nameGroup = createEl('div', { className: 'lead-form__group' });
    nameGroup.appendChild(createEl('input', { type: 'text', className: 'lead-form__input', id: 'inputName', placeholder: 'First name', autocomplete: 'given-name', required: '' }));
    nameGroup.appendChild(createEl('div', { className: 'lead-form__error', id: 'errorName', textContent: 'Please enter your first name' }));

    // Email field
    var emailGroup = createEl('div', { className: 'lead-form__group' });
    emailGroup.appendChild(createEl('input', { type: 'email', className: 'lead-form__input', id: 'inputEmail', placeholder: 'Email address', autocomplete: 'email', required: '' }));
    emailGroup.appendChild(createEl('div', { className: 'lead-form__error', id: 'errorEmail', textContent: 'Please enter a valid email address' }));

    // Phone field
    var phoneGroup = createEl('div', { className: 'lead-form__group' });
    phoneGroup.appendChild(createEl('input', { type: 'tel', className: 'lead-form__input', id: 'inputPhone', placeholder: 'Phone number', autocomplete: 'tel', required: '' }));
    phoneGroup.appendChild(createEl('div', { className: 'lead-form__error', id: 'errorPhone', textContent: 'Please enter your phone number' }));

    // Submit button
    var submitBtn = createEl('button', { type: 'submit', className: 'btn btn--primary' });
    submitBtn.appendChild(document.createTextNode('See My Results '));
    var arrow = createEl('span', { className: 'btn__arrow' });
    arrow.innerHTML = '&rarr;';
    submitBtn.appendChild(arrow);

    var note = createEl('p', { className: 'lead-form__note', textContent: 'Your results are personalized and private. We will never spam you.' });

    form.appendChild(nameGroup);
    form.appendChild(emailGroup);
    form.appendChild(phoneGroup);
    form.appendChild(submitBtn);
    form.appendChild(note);

    wrapper.appendChild(badge);
    wrapper.appendChild(title);
    wrapper.appendChild(desc);
    wrapper.appendChild(form);

    screen.appendChild(wrapper);
  }

  function bindLeadForm() {
    document.addEventListener('submit', function (e) {
      if (e.target.id !== 'leadForm') return;
      e.preventDefault();

      var name = $('#inputName').value.trim();
      var email = $('#inputEmail').value.trim();
      var phone = $('#inputPhone').value.trim();

      var valid = true;

      // Name validation
      if (!name) {
        $('#inputName').classList.add('error');
        $('#errorName').classList.add('visible');
        valid = false;
      } else {
        $('#inputName').classList.remove('error');
        $('#errorName').classList.remove('visible');
      }

      // Email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        $('#inputEmail').classList.add('error');
        $('#errorEmail').classList.add('visible');
        valid = false;
      } else {
        $('#inputEmail').classList.remove('error');
        $('#errorEmail').classList.remove('visible');
      }

      // Phone validation
      if (!phone) {
        $('#inputPhone').classList.add('error');
        $('#errorPhone').classList.add('visible');
        valid = false;
      } else {
        $('#inputPhone').classList.remove('error');
        $('#errorPhone').classList.remove('visible');
      }

      if (!valid) return;

      leadData = { firstName: name, email: email, phone: phone };
      showCalculating();
    });

    // Clear errors on input
    document.addEventListener('input', function (e) {
      if (e.target.classList.contains('lead-form__input')) {
        e.target.classList.remove('error');
        var errorEl = e.target.nextElementSibling;
        if (errorEl) errorEl.classList.remove('visible');
      }
    });
  }

  /* ---------- Quiz Flow ---------- */
  function startQuiz() {
    currentQuestionIndex = 0;
    answers = {};
    renderQuestion(0);
    updateProgress();
    showScreen('question-0');
  }

  function createCheckSvg() {
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 12 12');
    svg.setAttribute('fill', 'none');
    var path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M2 6L5 9L10 3');
    path.setAttribute('stroke', '#0A1628');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(path);
    return svg;
  }

  function renderQuestion(index) {
    var q = QUESTIONS[index];
    var screenId = 'question-' + index;

    // Create screen if it doesn't exist
    var screen = $('#' + screenId);
    if (!screen) {
      screen = createEl('div', { id: screenId, className: 'quiz-screen' });
      $('.quiz-screens-wrapper').appendChild(screen);
    }

    // Clear existing
    while (screen.firstChild) screen.removeChild(screen.firstChild);

    var qWrapper = createEl('div', { className: 'question-screen' });

    var numberEl = createEl('div', { className: 'question-screen__number', textContent: 'Question ' + q.number + ' of ' + QUESTIONS.length });
    var textEl = createEl('h2', { className: 'question-screen__text', textContent: q.text });
    var cardsContainer = createEl('div', { className: 'answer-cards' });

    q.answers.forEach(function (a, i) {
      var card = createEl('div', {
        className: 'answer-card',
        'data-question': String(index),
        'data-answer': String(i),
        role: 'button',
        tabindex: '0',
        'aria-label': a.label
      });

      var indicator = createEl('div', { className: 'answer-card__indicator' });
      indicator.appendChild(createCheckSvg());

      var label = createEl('span', { className: 'answer-card__label', textContent: a.label });

      card.appendChild(indicator);
      card.appendChild(label);
      cardsContainer.appendChild(card);

      card.addEventListener('click', handleAnswerClick);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleAnswerClick.call(this, e);
        }
      });
    });

    qWrapper.appendChild(numberEl);
    qWrapper.appendChild(textEl);
    qWrapper.appendChild(cardsContainer);
    screen.appendChild(qWrapper);
  }

  function handleAnswerClick(e) {
    if (isTransitioning) return;
    isTransitioning = true;

    var card = e.currentTarget;
    var qIndex = parseInt(card.getAttribute('data-question'), 10);
    var aIndex = parseInt(card.getAttribute('data-answer'), 10);
    var question = QUESTIONS[qIndex];
    var answer = question.answers[aIndex];

    // Visual selection
    $$('.answer-card', card.parentElement).forEach(function (c) { c.classList.remove('selected'); });
    card.classList.add('selected');

    // Store answer
    answers[question.id] = {
      questionType: question.type,
      value: answer.value,
      label: answer.label,
      points: answer.points || 0,
      tag: answer.tag || null
    };

    // Auto-advance
    setTimeout(function () {
      if (qIndex < QUESTIONS.length - 1) {
        currentQuestionIndex = qIndex + 1;
        renderQuestion(currentQuestionIndex);
        updateProgress();
        showScreen('question-' + currentQuestionIndex);
      } else {
        // All questions answered — show lead capture before revealing results
        renderLeadCapture();
        showScreen('lead-capture');
      }
      isTransitioning = false;
    }, AUTO_ADVANCE_DELAY);
  }

  /* ---------- Calculating Screen ---------- */
  function showCalculating() {
    var screen = $('#calculating');
    if (!screen) {
      screen = createEl('div', { id: 'calculating', className: 'quiz-screen' });
      $('.quiz-screens-wrapper').appendChild(screen);
    }

    while (screen.firstChild) screen.removeChild(screen.firstChild);

    var inner = createEl('div', { className: 'calculating-screen' });
    inner.appendChild(createEl('div', { className: 'calculating-spinner' }));
    inner.appendChild(createEl('div', { className: 'calculating-text', textContent: 'Analyzing your responses...' }));
    inner.appendChild(createEl('div', { className: 'calculating-subtext', textContent: 'Building your personalized AI Growth Report' }));

    screen.appendChild(inner);
    showScreen('calculating');

    setTimeout(function () {
      var score = calculateScore();
      renderResults(score);
      showScreen('results');
      animateResults(score);
      postResults(score);
    }, CALCULATE_DELAY);
  }

  /* ---------- Scoring ---------- */
  function calculateScore() {
    var total = SEGMENT_BASE_SCORE; // Base 20 from Q1

    // Q2-Q5 contribute points
    ['q2', 'q3', 'q4', 'q5'].forEach(function (qId) {
      if (answers[qId]) {
        total += answers[qId].points;
      }
    });

    // Cap at 100
    total = Math.min(100, Math.max(0, total));

    var band = SCORE_BANDS.find(function (b) { return total >= b.min && total <= b.max; });
    var segment = answers.q1 ? answers.q1.value : 'coach';
    var bottleneck = answers.q6 ? answers.q6.value : 'leads';
    var outcome = answers.q7 ? answers.q7.value : 'auto_leads';

    // Collect tags
    var tags = ['quiz_completed', 'score_' + band.band];
    Object.keys(answers).forEach(function (key) {
      if (answers[key].tag) tags.push(answers[key].tag);
    });

    return {
      score: total,
      band: band,
      segment: segment,
      bottleneck: bottleneck,
      outcome: outcome,
      tags: tags
    };
  }

  /* ---------- Results Rendering ---------- */
  function renderResults(result) {
    var screen = $('#results');
    if (!screen) {
      screen = createEl('div', { id: 'results', className: 'quiz-screen' });
      $('.quiz-screens-wrapper').appendChild(screen);
    }

    while (screen.firstChild) screen.removeChild(screen.firstChild);

    var opp = OPPORTUNITY_DATA[result.bottleneck];
    var testimonial = TESTIMONIALS[result.segment];
    var radius = 90;
    var circumference = 2 * Math.PI * radius;

    var wrapper = createEl('div', { className: 'results-screen' });

    // --- Score Display ---
    var scoreDisplay = createEl('div', { className: 'score-display animate-in animate-in--delay-1' });

    var scoreCircle = createEl('div', { className: 'score-circle' });

    // SVG
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'score-circle__svg');
    svg.setAttribute('viewBox', '0 0 200 200');

    var bgCircle = document.createElementNS(svgNS, 'circle');
    bgCircle.setAttribute('class', 'score-circle__bg');
    bgCircle.setAttribute('cx', '100');
    bgCircle.setAttribute('cy', '100');
    bgCircle.setAttribute('r', String(radius));

    var fillCircle = document.createElementNS(svgNS, 'circle');
    fillCircle.setAttribute('class', 'score-circle__fill');
    fillCircle.setAttribute('cx', '100');
    fillCircle.setAttribute('cy', '100');
    fillCircle.setAttribute('r', String(radius));
    fillCircle.style.strokeDasharray = circumference;
    fillCircle.style.strokeDashoffset = circumference;
    fillCircle.style.stroke = result.band.color;

    svg.appendChild(bgCircle);
    svg.appendChild(fillCircle);
    scoreCircle.appendChild(svg);

    var scoreNumber = createEl('div', { className: 'score-circle__number', id: 'scoreNumber', textContent: '0', style: 'color:' + result.band.color });
    var scoreLabel = createEl('div', { className: 'score-circle__label', textContent: 'out of 100' });

    scoreCircle.appendChild(scoreNumber);
    scoreCircle.appendChild(scoreLabel);
    scoreDisplay.appendChild(scoreCircle);

    var bandEl = createEl('span', { className: 'score-band score-band--' + result.band.band, textContent: result.band.level });
    scoreDisplay.appendChild(bandEl);

    var messageEl = createEl('p', { className: 'score-message', textContent: result.band.message });
    scoreDisplay.appendChild(messageEl);

    wrapper.appendChild(scoreDisplay);

    // --- #1 Opportunity ---
    var oppSection = createEl('div', { className: 'results-section animate-in animate-in--delay-2' });
    oppSection.appendChild(createEl('div', { className: 'results-section__label', textContent: 'Your #1 Opportunity' }));
    oppSection.appendChild(createEl('h3', { className: 'results-section__title', textContent: opp.title }));
    oppSection.appendChild(createEl('p', { className: 'results-section__text', textContent: opp.text1 }));
    oppSection.appendChild(createEl('p', { className: 'results-section__text', textContent: opp.text2 }));
    wrapper.appendChild(oppSection);

    // --- Testimonial ---
    var testSection = createEl('div', { className: 'testimonial animate-in animate-in--delay-3' });
    var quoteEl = createEl('p', { className: 'testimonial__quote', textContent: testimonial.quote });
    var authorEl = createEl('div', { className: 'testimonial__author', textContent: '\u2014 ' + testimonial.author });
    testSection.appendChild(quoteEl);
    testSection.appendChild(authorEl);
    wrapper.appendChild(testSection);

    // --- Path Forward ---
    var pathSection = createEl('div', { className: 'path-forward animate-in animate-in--delay-4' });
    pathSection.appendChild(createEl('h3', { className: 'path-forward__title', textContent: 'Want to build this system with expert guidance?' }));

    var pathText = createEl('p', { className: 'path-forward__text' });
    pathText.appendChild(document.createTextNode('Every Wednesday, I get on a live call and show business owners exactly how to build AI-powered growth systems \u2014 step by step, for their specific business.'));
    pathText.appendChild(document.createElement('br'));
    pathText.appendChild(document.createElement('br'));
    pathText.appendChild(document.createTextNode('Members are generating '));
    pathText.appendChild(createEl('span', { className: 'path-forward__highlight', textContent: '73 leads/month' }));
    pathText.appendChild(document.createTextNode(', '));
    pathText.appendChild(createEl('span', { className: 'path-forward__highlight', textContent: '4x-ing their output' }));
    pathText.appendChild(document.createTextNode(', and making '));
    pathText.appendChild(createEl('span', { className: 'path-forward__highlight', textContent: '$22K from two calls' }));
    pathText.appendChild(document.createTextNode('.'));
    pathText.appendChild(document.createElement('br'));
    pathText.appendChild(document.createElement('br'));
    pathText.appendChild(document.createTextNode('AI Lead Builder: '));
    pathText.appendChild(createEl('span', { className: 'path-forward__highlight', textContent: '$197/month' }));
    pathText.appendChild(document.createTextNode('. Weekly live coaching + course + software + community + custom AI tools.'));
    pathSection.appendChild(pathText);

    var ctaStack = createEl('div', { className: 'cta-stack' });

    var primaryBtn = createEl('a', { href: '#sales', className: 'btn btn--primary', id: 'ctaPrimary' });
    primaryBtn.appendChild(document.createTextNode('Join AI Lead Builder \u2014 $197/month '));
    var primaryArrow = createEl('span', { className: 'btn__arrow' });
    primaryArrow.innerHTML = '&rarr;';
    primaryBtn.appendChild(primaryArrow);

    var secondaryBtn = createEl('a', { href: '#masterclass', className: 'btn btn--secondary', id: 'ctaSecondary', textContent: 'Watch the Free Live Demo' });

    ctaStack.appendChild(primaryBtn);
    ctaStack.appendChild(secondaryBtn);
    pathSection.appendChild(ctaStack);

    wrapper.appendChild(pathSection);
    screen.appendChild(wrapper);
  }

  function animateResults(result) {
    // Animate score number count-up
    var scoreEl = $('#scoreNumber');
    if (!scoreEl) return;

    var target = result.score;
    var duration = SCORE_COUNT_DURATION;
    var startTime = performance.now();

    function countUp(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      scoreEl.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(countUp);
      }
    }
    requestAnimationFrame(countUp);

    // Animate SVG circle
    var circleFill = $('.score-circle__fill');
    if (circleFill) {
      var radius = 90;
      var circumference = 2 * Math.PI * radius;
      var offset = circumference - (target / 100) * circumference;
      // Slight delay for visual impact
      setTimeout(function () {
        circleFill.style.strokeDashoffset = offset;
      }, 100);
    }
  }

  /* ---------- Data Posting ---------- */
  function postResults(result) {
    var payload = {
      lead: leadData,
      answers: answers,
      score: result.score,
      scoreBand: result.band.level,
      segment: result.segment,
      bottleneck: result.bottleneck,
      desiredOutcome: result.outcome,
      tags: result.tags,
      completedAt: new Date().toISOString()
    };

    // Post to webhook if configured
    if (WEBHOOK_URL && WEBHOOK_URL !== 'WEBHOOK_URL') {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function (err) {
        console.warn('Quiz webhook POST failed:', err);
      });
    }

    // postMessage for parent iframe integration (GHL)
    try {
      window.parent.postMessage({
        type: 'ai_growth_score_complete',
        data: payload
      }, '*');
    } catch (e) {
      // Not in iframe or cross-origin — ignore
    }

    // Also dispatch a custom event on the window for same-page listeners
    window.dispatchEvent(new CustomEvent('quizComplete', { detail: payload }));

    // Log for debugging
    console.log('[AI Growth Score Quiz] Results:', payload);
  }

  /* ---------- Boot ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
