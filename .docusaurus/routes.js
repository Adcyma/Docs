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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/v1',
    component: ComponentCreator('/v1', 'c83'),
    routes: [
      {
        path: '/v1',
        component: ComponentCreator('/v1', '557'),
        routes: [
          {
            path: '/v1',
            component: ComponentCreator('/v1', 'a9e'),
            routes: [
              {
                path: '/v1/administration/Lifecycle Management/dynamicgroups',
                component: ComponentCreator('/v1/administration/Lifecycle Management/dynamicgroups', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/emailtemplates',
                component: ComponentCreator('/v1/administration/Lifecycle Management/emailtemplates', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/roletemplate',
                component: ComponentCreator('/v1/administration/Lifecycle Management/roletemplate', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Lifecycle Management/workflows',
                component: ComponentCreator('/v1/administration/Lifecycle Management/workflows', 'ae5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/companies',
                component: ComponentCreator('/v1/administration/Organization/companies', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/departments',
                component: ComponentCreator('/v1/administration/Organization/departments', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/jobtitles',
                component: ComponentCreator('/v1/administration/Organization/jobtitles', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Organization/offices',
                component: ComponentCreator('/v1/administration/Organization/offices', '9cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/companyprofile',
                component: ComponentCreator('/v1/administration/Settings/companyprofile', 'dee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/identityprovider',
                component: ComponentCreator('/v1/administration/Settings/identityprovider', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/logs',
                component: ComponentCreator('/v1/administration/Settings/logs', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/managedusers',
                component: ComponentCreator('/v1/administration/Settings/managedusers', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/preferences',
                component: ComponentCreator('/v1/administration/Settings/preferences', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/Settings/systemusers',
                component: ComponentCreator('/v1/administration/Settings/systemusers', '618'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/authentication',
                component: ComponentCreator('/v1/authentication', '342'),
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
                path: '/v1/category/user-guides',
                component: ComponentCreator('/v1/category/user-guides', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/hosting',
                component: ComponentCreator('/v1/hosting', 'c5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/peoplehub',
                component: ComponentCreator('/v1/peoplehub', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/security',
                component: ComponentCreator('/v1/security', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/start',
                component: ComponentCreator('/v1/start', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/userguides/setupentraappregistration',
                component: ComponentCreator('/v1/userguides/setupentraappregistration', 'ba5'),
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
