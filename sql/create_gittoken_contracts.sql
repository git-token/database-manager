CREATE TABLE IF NOT EXISTS gittoken_contracts (
  address       CHARACTER(42),
  date_deployed BIGINT NOT NULL DEFAULT 0,
  decimals      INTEGER,
  organization  CHARACTER(39),
  symbol        TEXT,
  name          TEXT
);
