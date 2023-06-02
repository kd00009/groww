import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "How much can I invest in a SIP?",
          "answer": "There is no limit to the amount you can invest in a SIP. The minimum amount that you can invest is Rs. 500 per month."
        },
        {
          "id": 2,
          "question": "What is the maximum tenure of a SIP?",
          "answer": "There is no maximum tenure of a SIP. You can invest as long as you can. The minimum tenure you can go for is 3 years"
        },
        {
          "id": 3,
          "question": "Are SIPs similar to mutual funds?",
          "answer": "people often tend to think of SIP as either mutual funds or different than a mutual fund. The fact is that SIP is just a style of investment and not a fund/scheme or a stock/investment avenue. It is an investment vehicle to invest periodically in a fund/scheme of your choice."
        },
        {
          "id": 4,
          "question": "Can I modify my SIP amount?",
          "answer": "Yes, you can anytime check your returns with SIP investment calculator and increase or decrease the SIP amount"
        },
        {
          "id": 4,
          "question": "Do SIP allows only equity mutual funds investments?",
          "answer": "No, you can invest in debt and hybrid mutual funds through SIP."
        }
        ,
        {
          "id": 4,
          "question": "What are the types of SIPs available?",
          answer: (
            <div>
              Different types of SIPs are available in the market like:
              <ul style={{ listStyleType: 'disc', marginLeft: '1.5em' }}>
                <li>
                  Step-up or top-up SIP: A step-up or top-up SIP enables you to increase the investment amount automatically at specified intervals at a particular amount or percentage.
                </li>
                <li>
                  Perpetual SIP: A perpetual SIP enables you to keep investing as long as you wish to without any end date.
                </li>
                <li>
                  Trigger SIP: A trigger SIP lets you start investing during a specific index level, NAV, date, or event.
                </li>
                <li>
                  Flexible SIP: A flexible SIP lets you change the amount you are investing in according to your preference.
                </li>
              </ul>
            </div>
          ),
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-left font-semibold  mb-3 ">SIP Calculator - FAQs</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
