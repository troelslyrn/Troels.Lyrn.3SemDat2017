/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exthreadday1ex1;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Troels
 */
public class ExThreadDay1ex1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                System.out.println("t1 =" + i);
            }
        });
        t1.start();

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                 try{Thread.sleep(2000);} catch (InterruptedException ex) {
                   
                }
                System.out.println("t2 =" + i);
            }
        });
        t2.start();
        
        Thread t3 = new Thread(() -> {
            for (int i = 10; i < 100; i++) {
                 try{Thread.sleep(3000);} catch (InterruptedException ex) {
                   
                }
                System.out.println("t3 =" + i);
            }
        });
        t3.start();
        
        

    }
    
    
    

}
