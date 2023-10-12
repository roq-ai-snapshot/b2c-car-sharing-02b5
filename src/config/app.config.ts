interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View company information', 'View car details', 'View booking status', 'View dashboard'],
  ownerAbilities: ['Manage users', 'Manage company', 'Manage car', 'Manage bookings'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/4fa2dc98-99b9-4f96-8395-2099e36e8e87',
};
