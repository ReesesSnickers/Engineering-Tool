const ROOTS = {
  ROOT: '/',
  JIRA_TOOLS: '/jira-tools',
  DEVELOPER_TOOLS: '/dev-tools',
  HELPFUL_LINKS: '/helpful-links',
};

const JIRA_TOOLS = {
  JIRA_BOILERPLATES: `${ROOTS.JIRA_TOOLS}/boilerplates`,
};

const DEV_TOOLS = {
  DEV_ENCODE_BASE64: `${ROOTS.DEVELOPER_TOOLS}/encode-base64`,
  DEV_DECODE_BASE64: `${ROOTS.DEVELOPER_TOOLS}/decode-base64`,
  DEV_TIMESTAMP_CONVERTER: `${ROOTS.DEVELOPER_TOOLS}/timestamp-converter`,
};

const HELPFUL_LINKS = {
  HELPFUL_LINKS_ACCESSIBILITY: `${ROOTS.HELPFUL_LINKS}/accessibility`,
  HELPFUL_LINKS_GENERAL: `${ROOTS.HELPFUL_LINKS}/general`,
};

const ROUTES = {
  ...ROOTS,
  ...JIRA_TOOLS,
  ...DEV_TOOLS,
  ...HELPFUL_LINKS,
};

export default ROUTES;
