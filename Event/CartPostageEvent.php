<?php

namespace ChronopostHomeDelivery\Event;

use Thelia\Core\Event\DefaultActionEvent;
use Thelia\Model\Cart;

class CartPostageEvent extends DefaultActionEvent
{
    private float $weight = 0.0;

    private Cart $cart;

    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    public function getWeight(): float
    {
        return $this->weight;
    }

    public function setWeight(float $weight): CartPostageEvent
    {
        $this->weight = $weight;

        return $this;
    }

    public function getCart(): Cart
    {
        return $this->cart;
    }

    public function setCart(Cart $cart): CartPostageEvent
    {
        $this->cart = $cart;

        return $this;
    }
}
