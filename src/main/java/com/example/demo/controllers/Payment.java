package com.example.demo.controllers;

import lombok.Getter;

@Getter
public class Payment {
    final String amount = "1";
    final String shop = "1723";
    final String currency = "RUB";
    final String secret = "e2edf436d92bdfefdd6e8c3aa2d29736";

    String desc;
    String payment;

    public Payment(String desc, String payment) {
        this.desc = desc;
        this.payment = payment;
    }

    @Override
    public String toString() {
        return amount +"|"+ payment + "|" + shop + "|" + currency +"|"+desc+"|"+secret;
    }
}
