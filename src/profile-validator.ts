type UserProfile = {
  id: number;
  username: string;
  settings?: {
    notifications?: boolean;
  };
};

const userWithNotifications: UserProfile = {
  id: 1,
  username: "franklin_dev",
  settings: { notifications: true },
};

const userWithoutSettings: UserProfile = {
  id: 2,
  username: "guest_shopper",
};

const userWithoutNotifications: UserProfile = {
  id: 3,
  username: "minimal_user",
  settings: {},
};

function isNotified(user: UserProfile): boolean {
  return user.settings?.notifications ?? false;
}

console.log("User 1 (notifications true):", isNotified(userWithNotifications));
console.log("User 2 (no settings):", isNotified(userWithoutSettings));
console.log("User 3 (settings, no notifications):", isNotified(userWithoutNotifications));