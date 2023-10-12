import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { DashboardInterface } from 'interfaces/dashboard';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  type: string;
  status: string;
  user_id: string;
  car_id: string;
  dashboard_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  dashboard?: DashboardInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  status?: string;
  user_id?: string;
  car_id?: string;
  dashboard_id?: string;
}
