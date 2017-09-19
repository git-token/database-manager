CREATE TABLE IF NOT EXISTS contributions (
  txHash          CHARACTER(66) PRIMARY KEY,
  contributor     CHARACTER(42),
  username        CHARACTER(42),
  value           BIGINT NOT NULL DEFAULT 0,
  reservedValue   BIGINT NOT NULL DEFAULT 0,
  date            BIGINT NOT NULL DEFAULT 0,
  rewardType      CHARACTER(42)
);
