CREATE TABLE IF NOT EXISTS webhook (
  delivery_id      CHARACTER(36) PRIMARY KEY,
  event            TEXT,
  action           TEXT,
  organization     CHARACTER(39),
  contributor      TEXT,
  date_received    BIGINT NOT NULL DEFAULT 0
);
