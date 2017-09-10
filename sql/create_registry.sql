CREATE TABLE IF NOT EXISTS registry (
  address CHARACTER(42),
  date_deployed BIGINT NOT NULL DEFAULT 0,
  decimals INTEGER,
  organization TEXT,
  symbol TEXT,
  name TEXT
);
