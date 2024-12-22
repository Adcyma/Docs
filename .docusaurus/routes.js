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
    path: '/docs',
    component: ComponentCreator('/docs', '409'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '637'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2a5'),
            routes: [
              {
                path: '/docs/administration/companysettings',
                component: ComponentCreator('/docs/administration/companysettings', '877'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/identityprovider',
                component: ComponentCreator('/docs/administration/identityprovider', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/jobtitles',
                component: ComponentCreator('/docs/administration/jobtitles', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/managedusers',
                component: ComponentCreator('/docs/administration/managedusers', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/offices',
                component: ComponentCreator('/docs/administration/offices', 'dff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/preferences',
                component: ComponentCreator('/docs/administration/preferences', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/administration/systemusers',
                component: ComponentCreator('/docs/administration/systemusers', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authentication',
                component: ComponentCreator('/docs/authentication', '938'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/administration',
                component: ComponentCreator('/docs/category/administration', 'f43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/functionalities',
                component: ComponentCreator('/docs/category/functionalities', '11f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functionalities/adduserstogroups',
                component: ComponentCreator('/docs/functionalities/adduserstogroups', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functionalities/createusers',
                component: ComponentCreator('/docs/functionalities/createusers', '863'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functionalities/deleteusers',
                component: ComponentCreator('/docs/functionalities/deleteusers', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functionalities/inactivateusers',
                component: ComponentCreator('/docs/functionalities/inactivateusers', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functionalities/updateusers',
                component: ComponentCreator('/docs/functionalities/updateusers', 'abe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hosting',
                component: ComponentCreator('/docs/hosting', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/security',
                component: ComponentCreator('/docs/security', '3ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/start',
                component: ComponentCreator('/docs/start', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/workflows',
                component: ComponentCreator('/docs/workflows', 'b54'),
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
