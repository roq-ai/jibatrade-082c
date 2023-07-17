const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  roles: 'role',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
