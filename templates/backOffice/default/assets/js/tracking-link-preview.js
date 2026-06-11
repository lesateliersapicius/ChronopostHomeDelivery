/* globals jQuery */

/**
 * Prévisualisation live du lien de suivi Chronopost.
 *
 * Le champ « URL de tracking » est saisi en deux parties (préfixe + suffixe)
 * concaténées côté backend autour du placeholder ChronopostHomeDeliveryConst::MASK_SEPARATOR (`{REF}`).
 * Ce script affiche en temps réel le rendu final que verra le client, en remplaçant
 * le placeholder par une suite de X pour matérialiser l'emplacement de la référence colis.
 *
 * Sélecteurs HTML attendus (déclarés via `attr` Symfony côté ChronopostHomeDeliveryConfigurationForm) :
 *   - <input data-chronopost-mask-role="prefix"> : début de l'URL
 *   - <input data-chronopost-mask-role="suffix"> : fin de l'URL
 *   - <strong class="chronopost-mask-url-preview"> : zone d'affichage du rendu
 */
(function ($) {
    'use strict';

    var SELECTOR = '[data-chronopost-mask-role]';
    // Placeholder visuel substitué à MASK_SEPARATOR pour l'aperçu admin
    var PLACEHOLDER = 'XXXXXXXXXXXXX';

    /**
     * Recalcule et réaffiche la prévisualisation à partir des valeurs courantes
     * des deux champs. Cache le bloc preview si les deux champs sont vides.
     *
     * @returns {void}
     */
    function refresh() {
        var prefix = $('[data-chronopost-mask-role="prefix"]').val() || '';
        var suffix = $('[data-chronopost-mask-role="suffix"]').val() || '';
        var $preview = $('.chronopost-mask-url-preview');

        if (prefix !== '' || suffix !== '') {
            $preview.text(prefix + PLACEHOLDER + suffix).show();
        } else {
            // Reset complet quand l'admin vide les deux champs
            $preview.text('').hide();
        }
    }

    // `ready` : rafraîchit au chargement initial.
    // Event delegation : capte `input`, `change`, `keyup` pour couvrir paste, saisie clavier
    // et auto-complétion navigateur.
    $(document)
        .ready(refresh)
        .on('input change keyup', SELECTOR, refresh);
})(jQuery);
