import { BookingInterface } from 'interfaces/booking';
import { OperationInterface } from 'interfaces/operation';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  color: string;
  license_plate: string;
  location: string;
  availability?: boolean;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  operation?: OperationInterface[];

  _count?: {
    booking?: number;
    operation?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  location?: string;
}
