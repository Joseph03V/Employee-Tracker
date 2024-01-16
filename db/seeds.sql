INSERT INTO department (name)
VALUES 
('sales'),
('engineering'),
('production'),
('management');


INSERT INTO role (title,salary,department_id)
VALUES 
('Head Sales',250000,1),
('Sales Person',100000,1),
('Head Engineering',250000,2),
('Engineer',150000,2),
('Head production',250000,3),
('Supervisor',100000,3),
('laborer',60000,3),
('CEO', 1500000,4),
('President',1000000,4),
('Assistant Manager',60000,4),
('General Manager',80000,4);



INSERT INTO role (first_name,last_name,role_id,manager_id)
VALUES 
('Joseph','Vasquez',8,null),
('Brandon','Ramkissoon',3,11),
('Jonathan','Cardenas',1,11),
('Irvin','Martinez',2,3),
('Rafael','Galvan',4,2),
('Kim','Nguyen',5,11),
('Devonte','Flores',6,11),
('Juju','Houston',7,7),
('Dametrius','Johnson',9,1),
('Trent','Watt',10,11),
('Justin','James',11,9);
