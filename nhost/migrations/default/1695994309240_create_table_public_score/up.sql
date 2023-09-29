DROP TABLE IF EXISTS public.score CASCADE;

CREATE TABLE public.score (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "blueTeamId" uuid NOT NULL,
    "redTeamId" uuid NOT NULL,
    "blueTeamScore" int4 NOT NULL,
    "redTeamScore" int4 NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY ("blueTeamId") REFERENCES public.team (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY ("redTeamId") REFERENCES public.team (id) ON UPDATE RESTRICT ON DELETE RESTRICT
);