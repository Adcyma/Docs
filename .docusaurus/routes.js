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
    component: ComponentCreator('/v1', '02e'),
    routes: [
      {
        path: '/v1',
        component: ComponentCreator('/v1', '360'),
        routes: [
          {
            path: '/v1',
            component: ComponentCreator('/v1', '49e'),
            routes: [
              {
                path: '/v1/administration/companyprofile',
                component: ComponentCreator('/v1/administration/companyprofile', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/identityprovider',
                component: ComponentCreator('/v1/administration/identityprovider', '295'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/jobtitles',
                component: ComponentCreator('/v1/administration/jobtitles', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/managedusers',
                component: ComponentCreator('/v1/administration/managedusers', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/offices',
                component: ComponentCreator('/v1/administration/offices', '45b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/preferences',
                component: ComponentCreator('/v1/administration/preferences', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/v1/administration/systemusers',
                component: ComponentCreator('/v1/administration/systemusers', '24c'),
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
                path: '/v1/workflows',
                component: ComponentCreator('/v1/workflows', '975'),
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
