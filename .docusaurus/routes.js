import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/dannesehar',
    component: ComponentCreator('/dannesehar', '798'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/v1',
    component: ComponentCreator('/v1', 'fbb'),
    routes: [
      {
        path: '/v1',
        component: ComponentCreator('/v1', 'bf4'),
        routes: [
          {
            path: '/v1',
            component: ComponentCreator('/v1', 'aa0'),
            routes: [
              {
                path: '/v1/administration/Access Governance/approvalflows',
                component: ComponentCreator('/v1/administration/Access Governance/approvalflows', 'b91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Access Governance/pendingrequests',
                component: ComponentCreator('/v1/administration/Access Governance/pendingrequests', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Access Governance/servicesandresources',
                component: ComponentCreator('/v1/administration/Access Governance/servicesandresources', 'f99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/dynamicgroups',
                component: ComponentCreator('/v1/administration/Lifecycle Management/dynamicgroups', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/emailtemplates',
                component: ComponentCreator('/v1/administration/Lifecycle Management/emailtemplates', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/roletemplate',
                component: ComponentCreator('/v1/administration/Lifecycle Management/roletemplate', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/workflows',
                component: ComponentCreator('/v1/administration/Lifecycle Management/workflows', '17e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/companies',
                component: ComponentCreator('/v1/administration/Organization/companies', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/departments',
                component: ComponentCreator('/v1/administration/Organization/departments', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/jobtitles',
                component: ComponentCreator('/v1/administration/Organization/jobtitles', '4da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/offices',
                component: ComponentCreator('/v1/administration/Organization/offices', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/companyprofile',
                component: ComponentCreator('/v1/administration/Settings/companyprofile', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/identityprovider',
                component: ComponentCreator('/v1/administration/Settings/identityprovider', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/logs',
                component: ComponentCreator('/v1/administration/Settings/logs', '93b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/managedusers',
                component: ComponentCreator('/v1/administration/Settings/managedusers', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/preferences',
                component: ComponentCreator('/v1/administration/Settings/preferences', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/systemusers',
                component: ComponentCreator('/v1/administration/Settings/systemusers', '12f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/api/createuser',
                component: ComponentCreator('/v1/api/createuser', '424'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/api/deleteuser',
                component: ComponentCreator('/v1/api/deleteuser', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/api/getallusers',
                component: ComponentCreator('/v1/api/getallusers', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/api/updateuser',
                component: ComponentCreator('/v1/api/updateuser', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/authentication',
                component: ComponentCreator('/v1/authentication', '0cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/category/administration',
                component: ComponentCreator('/v1/category/administration', 'a32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/category/api',
                component: ComponentCreator('/v1/category/api', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/category/user-guides',
                component: ComponentCreator('/v1/category/user-guides', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/dashboard',
                component: ComponentCreator('/v1/dashboard', '932'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/hosting',
                component: ComponentCreator('/v1/hosting', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/security',
                component: ComponentCreator('/v1/security', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/start',
                component: ComponentCreator('/v1/start', '4a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/userguides/setupentraappregistration',
                component: ComponentCreator('/v1/userguides/setupentraappregistration', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/userguides/signupadcyma',
                component: ComponentCreator('/v1/userguides/signupadcyma', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
