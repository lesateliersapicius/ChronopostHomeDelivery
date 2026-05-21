<?php

return [
    'chronopost_home_delivery.bo.explain_price_slice' => <<<TXT
You can create price slices by specifying a maximum cart weight and/or a maximum cart price. The slices are ordered by maximum cart weight then by maximum cart price.
If a cart matches multiple slices, it will take the last slice following that order.
If you don't specify a cart weight in a slice, it will have priority over the slices with weight. 
If you don't specify a cart price in a slice, it will have priority over the other slices with the same weight. 
If you specify both, the cart will require to have a lower weight AND a lower price in order to match the slice.
TXT
    ,
    'Tracking link creation'                          => 'Tracking link creation',
    'Start URL'                                       => 'Start URL',
    'End URL'                                         => 'End URL',
    'Preview: '                                       => 'Preview: ',
    'End URL cannot be set without a Start URL'       => 'End URL cannot be set without a Start URL'
];
