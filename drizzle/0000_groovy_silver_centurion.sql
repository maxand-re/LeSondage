CREATE TABLE `battle_poll` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`description` text,
	`prize` text,
	`start_time` integer DEFAULT (CURRENT_TIME),
	`start_date` integer DEFAULT (CURRENT_DATE),
	`end_time` integer,
	`end_date` integer,
	`number_of_votes_per_user` integer
);
--> statement-breakpoint
CREATE TABLE `battle_poll_option` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`image` text,
	`elo` integer DEFAULT 1000,
	`vote_count` integer DEFAULT 0,
	`poll_id` integer NOT NULL,
	FOREIGN KEY (`poll_id`) REFERENCES `battle_poll`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `battle_poll_votes` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`battle_poll_id` integer NOT NULL,
	`votes` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`battle_poll_id`) REFERENCES `battle_poll`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`avatar` text,
	`email` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `optionsIdx` ON `battle_poll` (`id`);