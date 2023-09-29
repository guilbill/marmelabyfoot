DROP TABLE IF EXISTS public.team CASCADE;

CREATE TABLE public.team (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "playerOne" uuid NOT NULL,
    "playerTwo" uuid NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY ("playerOne") REFERENCES public.player (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    FOREIGN KEY ("playerTwo") REFERENCES public.player (id) ON UPDATE RESTRICT ON DELETE RESTRICT
);