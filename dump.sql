--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: critters; Type: TABLE; Schema: public; Owner: spacepanda
--

CREATE TABLE public.critters (
    id integer NOT NULL,
    type character varying(255) NOT NULL,
    legs integer NOT NULL,
    color character varying(255) NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.critters OWNER TO spacepanda;

--
-- Name: critters_id_seq; Type: SEQUENCE; Schema: public; Owner: spacepanda
--

CREATE SEQUENCE public.critters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.critters_id_seq OWNER TO spacepanda;

--
-- Name: critters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: spacepanda
--

ALTER SEQUENCE public.critters_id_seq OWNED BY public.critters.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: spacepanda
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO spacepanda;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: spacepanda
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO spacepanda;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: spacepanda
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: spacepanda
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO spacepanda;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: spacepanda
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO spacepanda;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: spacepanda
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: critters id; Type: DEFAULT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.critters ALTER COLUMN id SET DEFAULT nextval('public.critters_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Data for Name: critters; Type: TABLE DATA; Schema: public; Owner: spacepanda
--

COPY public.critters (id, type, legs, color, name) FROM stdin;
1	hamster	6	black	Mario
2	alligator	6	orange	Leonardo
4	grasshopper	4	taupe	George
5	swan	4	indigo	Allen
6	albatross	4	maroon	Pierre
7	mole	4	indigo	Andrew
8	viper	2	magenta	Mason
9	falcon	2	blue	Chad
10	chough	2	taupe	Osvaldo
11	lobster	2	indigo	Brent
12	sea-lion	4	coral	Everett
13	aardvark	6	taupe	Leo
14	bear	2	blue	Konnor
15	pigeon	2	taupe	Brady
16	lobster	4	blue	Cristopher
17	ox	2	black	Fabian
18	ibex	2	purple	Tyrese
19	gull	6	cyan	Calvin
21	giraffe	4	blue	qu5ert
22	giraffe	4	blue	qu:DLAFKJDSFSDrt
20	sheep	4	orange	Jim
3	pelican	2	maroon	Goose
\.


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: spacepanda
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
30	20210319070420_critters.js	1	2021-03-19 04:59:17.886-04
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: spacepanda
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Name: critters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: spacepanda
--

SELECT pg_catalog.setval('public.critters_id_seq', 22, true);


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: spacepanda
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 30, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: spacepanda
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: critters critters_pkey; Type: CONSTRAINT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.critters
    ADD CONSTRAINT critters_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: spacepanda
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

