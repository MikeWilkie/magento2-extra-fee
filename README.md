# magento2-extra-fee
Magento 2 Extra Fee extension allows adding extra charges for additional services like gift wrap, rush order, packing charges etc. and display it on cart and checkout page.

# Fork
- Add shouldApplyFee() to centralise the logic if the fee must be applied.
- Remove unused code.
- Add payload to shipping informations instead of overriding it to avoid conflict with others modules using shipping informations.
- Fix a bug that displayed the search bar in the checkout page.
