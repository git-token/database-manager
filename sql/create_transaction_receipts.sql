CREATE TABLE IF NOT EXISTS transaction_receipts (
  contract_address    CHARACTER(42),
  transaction_hash    CHARACTER(66) PRIMARY KEY,
  cumulative_gas_used INTEGER,
  block_hash          CHARACTER(66),
  block_number        INTEGER,
  gas_used            INTEGER,
  organization        CHARACTER(39)
);
