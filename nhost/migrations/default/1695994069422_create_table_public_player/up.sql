CREATE TABLE public.player (id uuid DEFAULT gen_random_uuid() NOT NULL, "googleId" varchar NOT NULL, PRIMARY KEY (id));
