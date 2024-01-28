export const LayerBlur = () => {
  return (
    <div
      style={{
        zIndex: 9000,
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0,0.85)",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: `max(0px, env(safe-area-inset-top))`,
        paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
        paddingLeft: `max(0px, env(safe-area-inset-left))`,
        paddingRight: `max(0px, env(safe-area-inset-right))`,
      }}
    />
  );
};