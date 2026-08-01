export interface Fleet {
  id: string;
  name: string;
  model: string | null;
  type: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
}

export interface Employee {
  id: string;
  full_name: string;
  email: string;
  position: string | null;
  department: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
}
