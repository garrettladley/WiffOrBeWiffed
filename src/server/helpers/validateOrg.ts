import type { UserResource } from "@clerk/types";

export const validateOrg = (
  user: UserResource,
  organizationName: string
): boolean => {
  return user.organizationMemberships.some((org) => {
    return org.organization.name === organizationName;
  });
};
