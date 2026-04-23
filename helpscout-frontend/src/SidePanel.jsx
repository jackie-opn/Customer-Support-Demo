import './SidePanel.css';

function SidePanel() {
    const summaryData = {
        coreIssues: [
            "Missing payout of $14,250.50 from March 24th batch settlement not received at corporate bank account; urgent trace required for Friday payroll",
            "API returning 500 Internal Server Error when processing refunds for international credit cards (Japan); manual wire transfer workaround incurred extra fees",
            "Custom metadata (Order_Reference_Number) not populating in CSV export downloads despite appearing in individual transaction views",
            "Inquiry regarding account structure and pricing for Malaysian expansion (MYR currency) launching next quarter"
        ],
        keyData: {
            accountId: "ACCT-88992-B",
            missingPayoutAmount: "$14,250.50",
            transactionId: "CHRG-9938475",
            customer: "Thomas Anderson, Director of Operations, Matrix Solutions Inc."
        },
        attachments: []
    }

    return (
        <div className="panel-summary-container">
        <div className="panel-summary-header">
          <span className="panel-summary-icon">🤖</span>
          <h1>Customer Support AI Summary</h1>
        </div>
  
        {/* Core Issues Section */}
        <section className="panel-summary-section">
          <h2 className="panel-section-title">Core Issues</h2>
          <div className="issues-list">
            {summaryData.coreIssues.map((issue, index) => (
              <div key={index} className="issue-item">
                <span className="issue-number">{index + 1}</span>
                <p className="issue-text">{issue}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Key Data Section */}
        <section className="panel-summary-section">
          <h2 className="panel-section-title">Key Data</h2>
          <div className="key-data-grid">
            <div className="data-item">
              <label>Account ID</label>
              <value className="data-value">{summaryData.keyData.accountId}</value>
            </div>
            <div className="data-item">
              <label>Missing Payout Amount</label>
              <value className="data-value highlight">{summaryData.keyData.missingPayoutAmount}</value>
            </div>
            <div className="data-item">
              <label>Transaction ID (Failed Refund)</label>
              <value className="data-value">{summaryData.keyData.transactionId}</value>
            </div>
            <div className="data-item">
              <label>Customer</label>
              <value className="data-value">{summaryData.keyData.customer}</value>
            </div>
          </div>
        </section>
  
        {/* Attachments Section */}
        <section className="panel-summary-section">
          <h2 className="panel-section-title">Attachments/Media</h2>
          {summaryData.attachments.length === 0 ? (
            <p className="no-data">None</p>
          ) : (
            <div className="attachments-list">
              {summaryData.attachments.map((attachment, index) => (
                <a key={index} href={attachment.url} className="attachment-item">
                  📎 {attachment.name}
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    )
}

export default SidePanel