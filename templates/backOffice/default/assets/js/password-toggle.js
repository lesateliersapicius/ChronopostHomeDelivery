/* globals jQuery */

/**
 * Toggle de visibilité d'un champ password ChronopostHomeDelivery.
 *
 * Usage HTML :
 *   <input type="password" id="mdp" ...>
 *   <button data-toggle-password-target="mdp">...</button>
 *
 * Le bouton bascule l'attribut `type` du champ ciblé entre `password` et `text`.
 * Event delegation sur `document` pour supporter les boutons ajoutés dynamiquement.
 */
(function ($) {
    'use strict';

    /**
     * Inverse le type de l'input ciblé par l'attribut `data-toggle-password-target`
     * du bouton qui a déclenché l'événement (`this`).
     *
     * @returns {void}
     */
    function togglePassword() {
        // Identifiant du champ à toggler, déclaré sur le bouton
        var targetId = $(this).data('toggle-password-target');
        if (!targetId) {
            return;
        }

        var $input = $('#' + targetId);
        if ($input.length === 0) {
            return;
        }

        // Bascule password <-> text sans toucher aux autres attributs
        $input.attr('type', $input.attr('type') === 'password' ? 'text' : 'password');
    }

    // Event delegation : un seul listener sur document, déclenché par n'importe quel bouton
    // portant l'attribut data-toggle-password-target (présent ou ajouté plus tard au DOM)
    $(document).on('click', '[data-toggle-password-target]', togglePassword);
})(jQuery);
