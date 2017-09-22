/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exthreadday2ex;

import java.util.concurrent.BlockingQueue;

/**
 *
 * @author Troels
 */
public class Producer implements Runnable{

    protected BlockingQueue queue = null;

    public Producer(BlockingQueue queue) {
        this.queue = queue;
    }

    public void run() {
        try {
            queue.put(Math.random());
            Thread.sleep(1000);
            queue.put(Math.random());
            Thread.sleep(1000);
            queue.put(Math.random());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}