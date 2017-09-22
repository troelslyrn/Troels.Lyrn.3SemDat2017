/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exthreadday1ex1;

/**
 *
 * @author Troels
 */
import java.util.logging.Level;
import java.util.logging.Logger;

public class Even
{
  private int n = 0;
  public int next()
  {
    n++;
    n++;
    return n;
  }
 Thread t1 = new Thread(() -> {
           
                System.out.println("t1 =" + n);
            
        });
        t1.start();
       
  Thread t2 = new Thread(() -> {
           
                System.out.println("t2 =" + n);
            
        });
        t2.start();
  

}

