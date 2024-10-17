CREATE TABLE `application` (
	`id` integer PRIMARY KEY NOT NULL,
	`stage` text NOT NULL,
	`company` text NOT NULL,
	`position` text NOT NULL,
	`link` text NOT NULL,
	`userId` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`userId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`userId` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL
);
