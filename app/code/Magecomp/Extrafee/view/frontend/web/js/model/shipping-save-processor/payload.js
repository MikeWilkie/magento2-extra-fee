define([
    'jquery',
    'mage/utils/wrapper'
], function($, wrapper) {
    'use strict';

    return function (processor) {

        return wrapper.wrap(processor, function (proceed, payload) {
            payload = proceed(payload);

            payload.addressInformation['extension_attributes'] = {
                'fee': $('[name="custom-fee"]').prop("checked")
            };

            return payload;
        });
    };
});
