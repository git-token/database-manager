CREATE TABLE IF NOT EXISTS registry (
  admin_username   TEXT,
  admin_address    CHARACTER(42),
  admin_email      TEXT,
  organization     CHARACTER(39) PRIMARY KEY,
  name             TEXT,
  symbol           TEXT,
  decimals         INTEGER,
  deployed         BOOLEAN,
  token_address    CHARACTER(42),
  date_registered  BIGINT NOT NULL DEFAULT 0,
  date_deployed    BIGINT NOT NULL DEFAULT 0
);
