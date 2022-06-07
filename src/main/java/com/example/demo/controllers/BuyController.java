package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

@Controller
@RequestMapping("/buy-methods")
public class BuyController {


    private static final Map<Integer, Integer> map = new HashMap<>();
    private static final List<String> list = new ArrayList<>();

    @GetMapping
    public String getBuyPage(){
        return "buy-methods";
    }

    @PostMapping()
    public RedirectView toPayok(@RequestParam String username, @RequestParam String robox) throws NoSuchAlgorithmException {
        double amount = Double.parseDouble(robox);
        double sum = amount/(0.7*4);
        /*map.put(1, 100);
        map.put(2, 130);
        map.put(3, 200);
        for (int i = 4, j = 250; i < 30; i++, j+=50) {
            map.put(i, j);
        }
        String key = String.valueOf((sum/50+1));
        String amount1 = String.valueOf(map.get((int)sum/50+1));
        RedirectView redirectView = new RedirectView();
*/
        RedirectView redirectView = new RedirectView();
        Payment payment = new Payment(username, String.valueOf(sum));
        String str = payment.toString();
        MessageDigest md =  MessageDigest.getInstance("MD5");
        byte[] bytes = md.digest(str.getBytes(StandardCharsets.UTF_8));
        StringBuilder stringBuilder = new StringBuilder();
        for (byte b:bytes) {
            stringBuilder.append(String.format("%02X",b));
        }
        String key = stringBuilder.toString();

        String url = "https://payok.io/pay?amount="+payment.getAmount()+"&payment="+"300"+"&desc="+payment.getDesc()+"&shop="+payment.getShop()+"&currency"+payment.getCurrency()+"&sign="+key.toLowerCase(Locale.ROOT);

        redirectView.setUrl(url);

        return redirectView;
    }

}
