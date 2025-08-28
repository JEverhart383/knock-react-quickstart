import {
  KnockProvider,
  KnockFeedProvider,
  NotificationFeed,
  NotificationIconButton,
} from "@knocklabs/react";

// Required CSS import, unless you're overriding the styling
import "@knocklabs/react/dist/index.css";

const Inbox = () => {
  // An example of fetching the current authenticated user
  const user = {
    id: "12c23775-5902-481a-b8ea-d1704aabc769",
  };

  return (
    <KnockProvider
      apiKey={import.meta.env.VITE_KNOCK_PUBLIC_API_KEY}
      user={{ id: user.id }}
    >
      <KnockFeedProvider
        feedId={import.meta.env.VITE_KNOCK_FEED_CHANNEL_ID}
        colorMode="dark"
      >
        <>
          <div style={{ marginBottom: "1rem" }}>
            <NotificationIconButton onClick={() => {}} />
          </div>
          <div style={{ width: "420px", height: "550px" }}>
            <NotificationFeed />
          </div>
        </>
      </KnockFeedProvider>
    </KnockProvider>
  );
};

export default Inbox;
