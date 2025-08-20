package com.example.telecompdf;

import jakarta.persistence.*;

@Entity
@Table(name = "telecom_usage") // not a reserved word
public class Usage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, length=15)
    private String msisdn; // phone number

    @Column(length=50)
    private String plan;

    @Column(nullable=false)
    private Double amountDue; // simple number

    public Usage() {}
    public Usage(String msisdn, String plan, Double amountDue) {
        this.msisdn = msisdn;
        this.plan = plan;
        this.amountDue = amountDue;
    }

    public Long getId() { return id; }
    public String getMsisdn() { return msisdn; }
    public String getPlan() { return plan; }
    public Double getAmountDue() { return amountDue; }

    public void setId(Long id) { this.id = id; }
    public void setMsisdn(String msisdn) { this.msisdn = msisdn; }
    public void setPlan(String plan) { this.plan = plan; }
    public void setAmountDue(Double amountDue) { this.amountDue = amountDue; }
}
