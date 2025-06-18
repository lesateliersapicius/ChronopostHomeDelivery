<?php

namespace ChronopostHomeDelivery\EventListeners;

use ChronopostHomeDelivery\Event\CartPostageEvent;
use ChronopostHomeDelivery\Event\ChronopostHomeDeliveryEvents;
use Propel\Runtime\Exception\PropelException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class PostageAction implements EventSubscriberInterface
{
    public function __construct()
    {
    }

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents(): array
    {
        return [
            ChronopostHomeDeliveryEvents::CART_POSTAGE_WEIGHT => ['getWeight', 128]
        ];
    }

    /**
     * This method provides the Cart weight
     * @param CartPostageEvent $event
     * @return void
     * @throws PropelException
     */
    public function getWeight(CartPostageEvent $event): void
    {
        $cart = $event->getCart();
        $event->setWeight($cart->getWeight());
    }
}
