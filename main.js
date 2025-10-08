const coursesData = {
    S3: [
        { id: 'Algèbre_3', name: 'Algèbre 3', icon: 'fas fa-square-root-alt' },
        { id: 'Analyse_3', name: 'Analyse 3', icon: 'fas fa-square-root-alt' },
        { id: 'Anglais_3', name: 'Anglais', icon: 'fas fa-laptop-code' },
        { id: 'DAO', name: 'DAO', icon: 'fas fa-cogs' },
        { id: 'C_3', name: 'Language C', icon: 'fas fa-laptop-code' },
        { id: 'solide', name: 'Mécanique du solide', icon: 'fas fa-cogs' },
        { id: 'fluide', name: 'Statistique des fluides', icon: 'fas fa-cogs' },
        { id: 'TEC_3', name: 'TEC', icon: 'fas fa-laptop-code' },
        { id: 'Thermodynamique', name: 'Thermodynamique', icon: 'fas fa-atom' }
    ],
    S4: [
        { id: 'Algèbre_4', name: 'Algèbre 4', icon: 'fas fa-square-root-alt' },
        { id: 'Analyse_4', name: 'Analyse 4', icon: 'fas fa-square-root-alt' },
        { id: 'Anglais_4', name: 'Anglais 4', icon: 'fas fa-laptop-code' },
        { id: 'Development_durable', name: 'Development durable', icon: 'fas fa-laptop-code' },
        { id: 'Droit', name: 'Droit', icon: 'fas fa-laptop-code' },
        { id: 'EAnalogique', name: 'Electronique analogique', icon: 'fas fa-laptop-code' },
        { id: 'ENumérique', name: 'Electronique numérique', icon: 'fas fa-laptop-code' },
        { id: 'Espagnol', name: 'Espagnol', icon: 'fas fa-laptop-code' },
        { id: 'Linux', name: 'Linux', icon: 'fas fa-cogs' },
        { id: 'Statistique', name: 'Statistique & Probabilité', icon: 'fas fa-square-root-alt' },
        { id: 'C_4', name: 'Structure de données en C', icon: 'fas fa-laptop-code' }
    ]
};

// Liens des documents (à personnaliser avec vos vrais liens)
const documentLinks = {
    Algèbre_3: {
        cours: [
            { name: 'Chapitre 0 Rappels - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1QXg3ATsnNuaKAF-eRG8fMUZrVrl2FwV2' },
            { name: 'Chapitre 1 - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1QhJL-WNfyqiCUY_8aovbHdZbkvS0QILK' },
            { name: 'Chapitre 2 - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1QQy4CESUsThVwfyChEtS94GzlsMos69L' },
            { name: 'Chapitre 3 - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1QQDgoqhqCUoAebZeGi-vrfeQw3XbO-fl' },
            { name: 'Chapitre 4 - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1Ub0v0pMpbRlcksAqjfk86cCEvLHXk6AF' },
            { name: 'Rèsumé chapitre 2&3 - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1UJ1DWc-UJfv1mwP-XkWAEYD4fLd-2_9W' }
        ],
        td: [
            { name: ' 1 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1QjYjbVIAeh4RcwcI9m5Uv0jEROz4FQ5r' },
            { name: ' 2 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1_msCKJ3YrtW6TiQe7rr5soI9BpecnzcO' },
            { name: ' 3 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1TcdFsU43jplBYu5UIulN9pSH_yPFA8Tz' },
            { name: ' 4 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1Q_XjGkcVESX_uUY-JQ4hfNmVRyhe-3Eb' },
            { name: ' 5 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1QhFEEY9e7cuqRZlFIgX4Q6jWjK00Wsw4' },
            { name: ' 6 - Exam 22-23', url: 'https://drive.google.com/uc?export=download&id=1Uj7pHSnTT0UfUsUsoj7KqGZIKK0nufMN' }
        ]
    },
    Analyse_3: {
        cours: [
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1Ycb29fW0cSXc_E4A7cT9CAFaF2MxNo7h' },
            { name: 'Cours 2 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1TkcqDYVffTX4QPuStFHM3FGgvIrJ659x' },
            { name: 'Cours 3 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1rsuQwRWUCEOWUPkK1Ug9xxPeEOohFH20' },
            { name: 'Cours 4 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1sAEORfhlms0gMtSXcQN5trOkuBVdRKgs' },
            { name: 'Cours 5 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1ZDDPurIodcLyLaF8Du_-qt2dMuYKDXnR' },
            { name: 'Cours 6 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1s-0bZv6NHEeTcSCufyFmN7W-0AXZxrTI' }
        ],
        td: [
            { name: 'Exercices 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1aLaPv_ZZ94H5448GPthn-2bl96hoZ_hU' },
            { name: 'Exercices 2 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1aM_Ab6PNA_YurH-LQi49BNQzyzSwFgtx' },
            { name: 'Exercices 3 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1TkQPBqBejgi1B2wExWKtBpFlMY5xcdLC' },
            { name: 'Exercices 4 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1TjVaydOofHnMi8igt2ZJHR5IiE_JMT54' },
            { name: 'Exercices 5 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1TtyaNFgR4IqAGy9Xg0_4s2UWvix3c3dE' },
            { name: 'Exercices 6 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1TiRjCenMKa0sCsNrRyN85nd3Q6KYcxSw' },
            { name: 'Exercices 7 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1Tw6-vRsaQoQlj2sHEhcjy8jniAB2nIrc' },
            { name: 'Exercices 8 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1UV7RNfzduSnorXsxaT1TuTshv0g33Tkq' },
            { name: 'Exercices 9 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1aOap3Uo1tADuiLCX97UZDE0rszuZHpH8' },
            { name: 'Exercices 10 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1UqhULNgkMIXip7Rr6Cjlhdwv02OGPv_M' },
            { name: 'Exam 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1UZrMS2i6G1sTIuI9AywnHAEHubNZhvCa' },
            { name: 'Exam 2 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1F891dIpj5ISIXZd_rll5cpkv-4GFFcQY' },
            { name: 'Exam 3 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1Tqy-r3YReEqWDPvWme7ZudeT70n6u6EI' },
            { name: 'Exam 4 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1Ts5v11LLIXLbIupV3E06f821PafYKuB4' }
        ]
    },
    Anglais_3: {
        cours: [
            { name: 'Cour 1 - Anglais', url: 'https://docs.google.com/document/d/1UDw1nCKDn1_98ZLRxk1OjIx3p499sJ35/export?format=pdf' },
            { name: 'Cour 2 - Anglais', url: 'https://drive.google.com/uc?export=download&id=1U55S7h-oee1GQwKEf6gJ5kmcRAiqGoH5' },
            { name: 'Cour 3 - Anglais', url: 'https://docs.google.com/presentation/d/1U7cujPKjx4A47mGM8ySIFUv7Xdyy16_L/export/pdf' },
            { name: 'Cour 4 - Anglais', url: 'https://docs.google.com/document/d/1U5DA3-duiBX8DBdhQUBbcTtXXh0sNTAa/export?format=pdf' }
        ]
    },
    DAO: {
        cours: [
            { name: 'Cour 1 - DAO', url: 'https://drive.google.com/uc?export=download&id=1Ek5OJ6hJZ-mZkzVxr7mQya-tWXH1GmLu' },
            { name: 'Cour 2 - DAO', url: 'https://drive.google.com/uc?export=download&id=1TkU3gvU7zU17eZP1c4SwNuX4atNhP242' },
            { name: 'Cour 3 - DAO', url: 'https://drive.google.com/uc?export=download&id=1TazEkgyMYkdxpHxrb6XbhP_ajutqEO6e' },
            { name: 'Cour 4 - DAO', url: 'https://drive.google.com/uc?export=download&id=1YjL_2YAfovz_va9Gf1OS59x4aLDu7Cu4' }
        ],
        tp: [
            { name: 'TP 1 - DAO', url: 'https://drive.google.com/uc?export=download&id=1TwdLIwFbt11MHRhTYUQb96ejJYBPjsck' },
            { name: 'TP 2 - DAO', url: 'https://drive.google.com/uc?export=download&id=1TyTN9pvlO5NF5i5Mucfh-DOHE-VmGryN' },
            { name: 'TP 3 - DAO', url: 'https://drive.google.com/uc?export=download&id=1U1X5kNXowzYY0WvdL-IYNPGqsyLL-BgF' },
            { name: 'TP 4 - DAO', url: 'https://drive.google.com/uc?export=download&id=1UNNeWkJ-JU9n56TCjxckvxDDARZusGbk' },
            { name: 'TP 5 - DAO', url: 'https://drive.google.com/uc?export=download&id=1UNwOkrwd8Py88G13OSZLqdY_4lrWGnH4' }
        ]
    },
    C_3: {
        cours: [
            { name: 'Cour 1 - Language C', url: 'https://drive.google.com/uc?export=download&id=1EjsP60ARjDYm3Da_yfSMeUyQmlsG0PxS' }
        ],
        td: [
            { name: 'TD 1 - Language C', url: 'https://drive.google.com/uc?export=download&id=1_lDaxIt6aCm7zd83R_e424oRtNOuD5BB' },
            { name: 'TD 2 - Language C', url: 'https://drive.google.com/uc?export=download&id=1aJeSy74jgnzxcia1DhkkS4YlhMukWsHj' },
            { name: 'TD 3 - Language C', url: 'https://drive.google.com/uc?export=download&id=1a6s9YzKo1c5N605I_uc1K0IseBbrG46y' },
            { name: 'TD 4 - Language C', url: 'https://drive.google.com/uc?export=download&id=1Ur53mhzXRfAvPIqmpwpl16jPQsM4Y8WB' },
            { name: 'Exam 1 - Language C', url: 'https://drive.google.com/uc?export=download&id=1QkD2nsdU4nmqhniNwclLLC8h-okIz7Ih' },
            { name: 'Exam 2 - Language C', url: 'https://drive.google.com/uc?export=download&id=1UY7A7jr8q_AwgpGjRBoSk7B8jqWse2-b' },
            { name: 'Exam 3 - Language C', url: 'https://drive.google.com/uc?export=download&id=1Qle8txVcLhQqZqS-G_SWblNZKTILgNEz' }
        ],
        tp: [
            { name: 'Colle 1 - Language C', url: 'https://drive.google.com/uc?export=download&id=1a5HPCswo2XTcFyF06xnA2ZHa8iNxmM9A' }
        ]
    },
    solide: {
        cours: [
            { name: 'Seance 1 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RY4LdqIM9jOAbQ1_JzgMCquA9aUXb9D9' },
            { name: 'Seance 2 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RZHidddItfDqnX4IeVh3qgE2mFfRr_Iu' },
            { name: 'Seance 3 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RazQFqAEheuOR0yDOWTHUeLoarycX-GN' },
            { name: 'Seance 4 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RdPLycWDTsFRmaiBfwg0n75yH6clivZ4' },
            { name: 'Seance 5 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RfK1XlpsOeM52G5Ki6c-bqVvAUMYez4h' },
            { name: 'Seance 6 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1RfthL_5lvEw5PUs7RhG3D8zE06-2TZyl' },
            { name: 'Seance 7 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1Rikz0Gpj7fUbR_8CUTg7-1WdlrA3EPGl' },
            { name: 'Seance 8 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1Rlr-bBJq5Vl14TYnkrzX1kXUBpugmAtI' },
            { name: 'Torseur Action - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1Rh9BiqdknMTBdb2qcDi_ycro6V0Wy12H' },
            { name: 'Résumé 1 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1_Lanon4HN2b5RrbPbiAptdVL-FrmG5ep' },
            { name: 'Résumé 2 - Mécanique Solide', url: 'https://drive.google.com/uc?export=download&id=1UKpHvSz-XrS0AZU9FQvnWF6vKtEhi9PI' }
        ],
        td: [
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1ToIdugArIq6CyegyJ12i3p7RKZIHyBYa' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1Rq8N-vOobyANPHwH528HcqeHEfU-i894' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1Yl8x2KFZwl8G16QW6BlL-HohuhdxkxgF' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1_q5GsJb52smmfD7DOSRHzVhXja_WFJjP' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1S0PPo_RjVph-G1oiqD3D-y-zWKGyDhrk' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1RoU-ZbintCqNNZRaFxM93-35vphTfh_j' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1URfOYioYbW3L0OErZVZkMtc25dqokTgM' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1RmHImysGfsoHCuZyAYkio_EiZnCQpo__' },
            { name: 'TD  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1_aQqGXd5QBCiaTwLmAIcH18e08g4adS_' },
            { name: 'Exam  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1VvawmAg6fSCNkMrdSnpJtOc2gRQgJl4X' },
            { name: 'Exam  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1RrDlk85R5Hs5azNf28m_Ki8Mg1IJpHyV' },
            { name: 'Exam  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1F0ZL3aV3JY5O6VqKuEkcb668VTciMZ1q' },
            { name: 'Exam  - Exercices Solide', url: 'https://drive.google.com/uc?export=download&id=1F5Dm7ajeaSTgEoesTCELcX9jElPmIyUH' }
        ]
    },
    fluide: {
        cours: [
            { name: 'Chapitre 0 - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1S5iNMldQHIRZqnkgtwcQu_4nxbSBl8dL' },
            { name: 'Chapitre 1-1 - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1S6iHvRzRlEQV6uIBu25rz-3WscX_CeN2' },
            { name: 'Chapitre 1-2 - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1S6nc3ro9r4tA_hHcpmLqFlD4WZ-_MhXE' },
            { name: 'Chapitre 2 - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1S9CaH-WUJf8aifTlCYZTv1jVZRYRS7LA' },
            { name: 'Chapitre 3 - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1SB3p6DD9N4FMC01b97wmd-BOuKBnHeTZ' },
            { name: 'Résumé - Statique Fluides', url: 'https://drive.google.com/uc?export=download&id=1ULph2vvct7WXmY07xA8lfffsyQnbz1CX' }
        ],
        td: [
            { name: 'TD 1 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1UOLc-yocrplvh0WDAqPse7wHM2TMBgJ4' },
            { name: 'TD 1-1 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1SIMGj9QB9IHcCudVvFBYYkFphe0bKZiJ                ' },
            { name: 'TD 1-2 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1SKCP42ysWQHGaIBWDZNX61j-_pIJ3hdG' },
            { name: 'TD 2 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1SKFEWb8oVDWnFYkzqrUy09dxZeLt5Ued' },
            { name: 'TD 3 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1SO134MAlSFiUASWFW_00hULIYcYIKE-F' },
            { name: 'TD  - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1YR7TbrdnQNAJtor45PSIt-r2c_gTCYga' },
            { name: 'TD  - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1UK6b-F8y06ZyHu8XBY3UWrzvFr4FDYHL' },
            { name: 'Exam 2018 - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1SOPwB1g-RIHsG66VmG0X2Si749pkoCX-' },
            { name: 'Exam  - Exercices Statique des Fluides', url: 'https://drive.google.com/uc?export=download&id=1EuFz_8he_IPcYqIDW_N6N6Ifkz_vBetG' }
        ]
    },
    TEC_3: {
        cours: [
            { name: 'Seance 1 - TEC', url: 'https://drive.google.com/uc?export=download&id=1QzelbXKM9hmBWBDZmd5QBMqkpg1GHOwZ' },
            { name: 'Seance 2 - TEC', url: 'https://drive.google.com/uc?export=download&id=1QzkJ6YFlSbscHaeRMXME4G0xUo4-pSGb' },
            { name: 'Seance 3 - TEC', url: 'https://drive.google.com/uc?export=download&id=1RSgvtTmQUrZhlnpokyeWiwi8zqtDVDg_' },
            { name: 'Seance 4 - TEC', url: 'https://drive.google.com/uc?export=download&id=1RMEkF1NuxkOp31A4GT-JkUEBUqgCMj9M' },
            { name: 'Résumé - TEC', url: 'https://drive.google.com/uc?export=download&id=1Up0N7kE0igutPN35LhusruL7ayXJTVcJ' }
        ],
        td: [
            { name: 'TD  - Exercices TEC', url: 'https://drive.google.com/uc?export=download&id=1FGEtJLj7Jc9MjazcCoh8dmF_PZUEpxT_' },
            { name: 'TD  - Exercices TEC', url: 'https://drive.google.com/uc?export=download&id=1Qsdu8lEubxC5c1H9EX7dcp4gUA4aEl_k' },
            { name: 'Exam  - Exercices TEC', url: 'https://drive.google.com/uc?export=download&id=1VVl-lwLkPUtovRB-vesZExXV7pbyWnex' }
        ]
    },
    Thermodynamique: {
        cours: [
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1Snm6Xb8bLggLab1ftpzP5gOr6YObTMyO' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1_Upezu8nTcq8NDBmxUrB7y5sAT69ftXT' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1aDWOQKkMx1MepuaDa-2-wHhCnd3IkmwD' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1SeCso_Vg7AIzlP0E3CTdJwitl011rhkz' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1SawsNIOOk5uDMfDpMeNeGQaLDCMG9sbZ' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1Sl_gBEBu3oHFwvGuyJ0-Q-gbPDXZqi6U' },
            { name: 'Cour  - Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1aLYd02IvOrt5IJxu01L6iM7-P96okexE' }
        ],
        td: [
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1aHHXc85RBwB5oMRUyhP9ifS0NovCj_nz' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1SyqWXRn8qzbtk4o61tpfanBSoK52QVbs' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1SycaFHyo30Fn0px74khZAfFI1p4oo1Ib' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1a5KMbPsCB4HKK2Xqe8tJ02tBK5puBGm1' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1Sy1DKn19o11plklmqnubKuR7Td3TPInF' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1Swiik58PK3tWTF4FZpDdiGXhVhtsz-X7' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1USTEokPP67uOwg3MsYVSCkOgQO-SWaPZ' },
            { name: 'TD  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1UUV35gNiYomoe6K4xVuuqTttptbUPwCk' },
            { name: 'Exam  - Exercices Thermodynamique', url: 'https://drive.google.com/uc?export=download&id=1EvfEX2xbBGON9DEheglZEgZiCp1gGmp_' }
        ]
    },//S4 here 
    Algèbre_4: {
        cours: [
            { name: 'Cours Algèbre IV - Algèbre', url: 'https://drive.google.com/uc?export=download&id=1AEmMJx4vyGjL7f_hwlKyRSkWwxeorZiN' },
        ],
        td: [
            { name: 'TD 1 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1llYK-6RK2es0rJsbpyTq5nFyBEAaKNFq' },
            { name: 'TD 2 - Exercices', url: 'https://drive.google.com/uc?export=download&id=16PyYJTzozc1mw-5OsQFy3a8RKqmq1j5M' },
            { name: 'Exam 1 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1TxdoZqUZWe7jrVtJhIbgWHN-fQ_8SqIe' },
            { name: 'Exam 2 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1AO66rBGsarY3X9nAMxUICDGOOquMPqaj' },
            { name: 'Exam 3 - Exercices', url: 'https://drive.google.com/uc?export=download&id=15O5TfTqdmn7b5JDtbl2EK6WZ_AQZe8HQ' },
            { name: 'Exam 4 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1AKxiHHLlgvmEKdH29IQ0n89Cyr6Zl0mR' },
            { name: 'Exam 5 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1lzuGaMeWnOA48fMsYV2bxjpTNtfPTFYu' }
        ]
    },
    Analyse_4: {
        cours: [
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1AxadSatdO3yy9tqjfI3wzeMT1YgAyBEG' },
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1BfjXDp8qWvXjcCL2Y1Iz9AKTx8X4_4Mz' },
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1AzH8Y7IEBx_W236d-iljlOZXx9p64Ofw' },
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1BHyiGdTAdp8VOvp4byMoTOk83fQFAGfU' },
            { name: 'Cours 1 - Analyse', url: 'https://drive.google.com/uc?export=download&id=1BJk0_lAxx8WhQOM8INSBBwsUdvcpO2c6' }
        ],
        td: [
            { name: 'Corr EX 6 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1ym5kVvqBbhzYywd1Zf5BEguLWVOwVCNr' },
            { name: 'Corr TD - Exercices', url: 'https://drive.google.com/uc?export=download&id=1_KDNFFhVbkQRt6wS5ZA9dIO-p-u5li2c' },
            { name: 'Corr TD 2 EX 5 - Exercices', url: 'https://drive.google.com/uc?export=download&id=16PPJUah40c3RmLHxXk4vz7e-eeJjzZn5' },
            { name: 'Corr TD - Exercices', url: 'https://drive.google.com/uc?export=download&id=1khy6RDF4i3slgTCiffakLvUTWPi4Wu5k' },
            { name: 'Enoncé TD - Exercices', url: 'https://drive.google.com/uc?export=download&id=1kjEoiMdIk0uV3T9q3HePgLctq_w2lhLI' },
            { name: 'Exam 20-21 - Exercices', url: 'https://drive.google.com/uc?export=download&id=167c2p7b2FCjzM6tYDWfS9ZVoHl0jh3DU' },
            { name: 'Corr Exam 22-23 - Exercices', url: 'https://drive.google.com/uc?export=download&id=15S8ekGvosGSaOQHgyw12qHMQplUQ3pSs' },
            { name: 'Corr Exam 21-22 - Exercices', url: 'https://drive.google.com/uc?export=download&id=151w7P4d8d5T2mC_P0RWgaCebG_-G1Dto' },
            { name: 'Exam + Corr - Exercices', url: 'https://drive.google.com/uc?export=download&id=16MazJcPHbdPjH-LgEBTCOHmfPE0oGgdy' },
            { name: 'Exam 22-23 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1U03kE-rjt8y27Z93BVL9wOeEWDCAY9Tx' }
        ]
    },
    Anglais_4: {
        cours: [
            { name: 'Debating - Anglais', url: 'https://docs.google.com/presentation/d/1ZBRrEAJk1NcRlKf8llkC-1DK8TB-k0TZ/export/pptx' },
            { name: 'Steels - Anglais', url: 'https://drive.google.com/uc?export=download&id=1oLmG6WuqoEIGtG_18COrgb9RvMSxoaD_' },
            { name: 'Materials - Anglais', url: 'https://drive.google.com/uc?export=download&id=1YxGJIC0FbYZpyKGEQgDb2wy6HjTBVAaG' },
            { name: 'The 5G Revolution - Anglais', url: 'https://drive.google.com/uc?export=download&id=1o9Ivelm-eEg8f1ntpKQxARVvcij80lM3' }
        ]
    },
    Development_durable: {
        cours: [
            { name: 'Cours 1 - Development durable', url: 'https://drive.google.com/uc?export=download&id=15tZzLUKrTjv9ZFxDxQfXzj0rvNoSJ4MK' },
            { name: 'Les ODDs - Development durable', url: 'https://drive.google.com/uc?export=download&id=1T6ZAwFv-F8zxal7IbD31Elq7nkrA6N-w' },
            { name: 'Seance ODD - Development durable', url: 'https://drive.google.com/uc?export=download&id=1Y_FUow1XdIyu-j-dZ2HWP7H9V8JZtgsq' }
        ],
        td: [
            { name: 'ODD 1 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1vdkqewfLxy49AhS3zHq-qCdh62igt9uw' },
            { name: 'ODD 2 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1uzsvMXsqTd95vfsj7Tk-2twhsoS3-lir' },
            { name: 'ODD 3 - Development durable', url: 'https://docs.google.com/presentation/d/1ZPr-xNtZSQbOFjszvuXv0lglv5gsOnlw/edit' },
            { name: 'ODD 4 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1v3-U85mm-cSEhqOZOgkBL7uKgZ00FaHl' },
            { name: 'ODD 5 - Development durable', url: 'https://docs.google.com/document/d/1z9Js5p5Hxr9VFFlbjQKztqYPbNsBifST/export?format=docx' },
            { name: 'ODD 6 - Development durable', url: 'https://docs.google.com/document/d/1va5RWmhIr1LFsRTwcAZZwrXr0mAxX7fS/export?format=docx' },
            { name: 'ODD 7 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1_F64y8kuDkMgwi5rUggDdkLY6qmyKkJg' },
            { name: 'ODD 8 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1udAgBpLdw9of49hErd5UCHy6QHt6x_H-' },
            { name: 'ODD 9 - Development durable', url: 'https://docs.google.com/spreadsheets/d/1vG__tvy0EhshoE9Z30BMUeuQlT4pDd_3/export?format=xlsx' },
            { name: 'ODD 11 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1vAPkHjrKzxPPQnPlWdhfZfpZTGq0rE-k' },
            { name: 'ODD 13 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1vhf5H0LcUdzlne3p25JyeFd-p8MLV1wu' },
            { name: 'ODD 14 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1vNgmVN8lGsU89I5OYyUpUqUDo1NvuRlS' },
            { name: 'ODD 15 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1zdPEJQbOE5lA4PmE0_eDGdSHkJbcxWhC' },
            { name: 'ODD 16 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1ySjkT6zY7kcRd62EIaTZ9gAirzsrpWa5' },
            { name: 'ODD 17 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1vBAUl0KqybHYBHFIZK1fXi5669icUppe' },
            { name: 'Annuaire Statistique du Maroc 2021 - Development durable', url: 'https://drive.google.com/uc?export=download&id=1oCnYak6pEMIE4pSiGvDI_iDnG8_h0_in' }
        ],
        tp: [
            { name: '15 Arduino Uno Projects - Development durable', url: 'https://drive.google.com/uc?export=download&id=1Z959qjEljjPcxitk8NE1yTvBBA5Bjbb2' },
            { name: 'Fiche du Prohet DDEE - Development durable', url: 'https://drive.google.com/uc?export=download&id=16MkVy07PijVqbRyHfHvJ1hLS1_guaOh4' },
            { name: 'Electro Help- Development durable', url: 'images/EH.png' }
        ]
    },
    Droit: {
        cours: [
            { name: 'Sujets des présentations - Droit', url: 'https://docs.google.com/spreadsheets/d/1T7gcRy_oWIIv0P9GVQSryb_EzHy_pUrx/export?format=xlsx' }
        ]
    },
    EAnalogique: {
        cours: [
            { name: 'Chapitre 1 - Elactronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1ATJcbJ72pj0d7P169QqL6Bs5lEFDosdN  ' },
            { name: 'Chapitre 2 - Elactronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1APoqFYJQeyzs9U-cPZ1hnmylnEEWaXEl  ' },
            { name: 'Chapitre 3 - Elactronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1AREPWjgv3L-eo2f8xGX7F_6k0IL3fCOR  ' },
            { name: 'Chapitre 4 - Elactronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1ARKkUl7ZcJHNpYVywFx1mXn7hJWpXzOV  ' },
            { name: 'Chapitre 5 - Elactronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1yYKu1Wz1Bbi8PgHshqLGuT4wM2tyidSo' }
        ],
        td: [
            { name: 'TD 1 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1W-5TDun1FubFpu1RjtZnMFr9P9NabiJM' },
            { name: 'TD 2 - Exercices', url: 'https://drive.google.com/uc?export=download&id=17oidVbjr5nJCGVXRJik-lVrlGinXgB5w' },
            { name: 'Exam 21-22 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1752TctOjwAILcvhUfaR4uzY9vv2kMe-A' },
            { name: 'Exam 22-23 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1_xglFp7hlTqcmIehUW9gkLb4dNuVhfZE' },
            { name: 'Exam Enoncé 22-23  - Exercices', url: 'https://drive.google.com/uc?export=download&id=1a2E3KZN22AWQbnWfViWQPqp1Q5aL5aZX' },
            { name: 'Exam  - Exercices', url: 'https://drive.google.com/uc?export=download&id=1Aimalbp1dXPKoz-7zAywMUgw7psO-zrV' },
            { name: 'Exam 17-18  - Exercices', url: 'https://drive.google.com/uc?export=download&id=1Ag9DiXeifQ9J4kzvil8Hef0NmuATZ1mi' },
            { name: 'Exam 16 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1AXIlRvs3UwHFVHlZ5pC06PtkrtUTMNuD' },
            { name: 'Exam 15-16 - Exercices', url: 'https://drive.google.com/uc?export=download&id=1AX5_v5NHeD1CqjcEpwXpzU1Xin58wXuD' }
            
        ],
        tp: [
            { name: 'TP 1,2,3&4 - Electronique Analogique', url: 'https://drive.google.com/uc?export=download&id=1S_-OUUTspgVK3tvyP7l4J25wwy47ujuw' }
        ]
    },
    ENumérique: {
        cours: [
            { name: '1 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=16JFUw5gWBBT7zPIGwKojcQn6UBeTMmkb' },
            { name: '2 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1_qsHVms1252uwDyWWVJRPc8LaImp45oA' },
            { name: '1&2 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=16LN3AhsmrqV20MqpuC75SbgvrcsbYAtX' },
            { name: '3 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1oLleAs01irb1zXNh3nikakXqAVnyS_NS' }
        ],
        td: [
            { name: 'TD 1 - Exercices', url: 'https://drive.google.com/uc?export=download&id=16eKUDbFcGZLF1ym2zeCyPlvi3kjeAPz3' },
            { name: 'Exam 21-22 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1_S-JYyBgJ7Bqz10EZNdfSMmxWKJk0oOd' },
            { name: 'Exam 22-23 - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1TRj0q5L_dUOPFyq-IpAFBwsi365WmhmK' },
            { name: 'Exam - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=17VPD6-9fz4hzr-2m8hvlLZjKvlVG8tcX' }
            
        ],
        tp: [
            { name: 'Colle  - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1l389TBxdRL_bYTDYVgfZjd2AKaGVyDtw' },
            { name: 'TP1  - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1yj_7LCuAcYZbg_TdIQmuTuOzCIy4JQyr' },
            { name: 'TP2  - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1ykCWOuEDWYF-KHTfDoce_iUkaB3ufrxm' },
            { name: 'TP3  - Electronique Numérique', url: 'https://drive.google.com/uc?export=download&id=1ylW-gs2A-Vty5zsEZDSg2sXkR4PC5SZS' }
        ]
    },
    Espagnol: {
        cours: [
            { name: 'Cours - Espagnol', url: 'https://drive.google.com/uc?export=download&id=16_Y2mRGRtyW9sEsdL_qnnS1wlBgJF3o0' },
            { name: 'Cours - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1oh45oaxKaciR3zva_p0TLETFnD8pmVb2' },
            { name: 'Résumé - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1UPW7kZhby3vsY-AyrAKuXOXauRCFHZQs' }
        ],
        td: [
            { name: 'TD 1 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1osOpfSAqvWx-49EhA_cqU29k4mRL5q1v' },
            { name: 'TD 2 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1ovAehOGycLOcOFS5tE2hIlZYnxXze34s' },
            { name: 'TD 3 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1ownG7hXZf9-rsjZwyUi805yeu0uJT0-A' },
            { name: 'TD 4 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1olGhgkkv1KHaEQIHbUP1oe2139L698To' },
            { name: 'Exam 20-21 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1nq9WToZdwsaORdalGJGEXoNEMv2kJfKP' },
            { name: 'Exam 22-23 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1dhW4w0PzCoiHaL7LzXUk3Y3NnUlTNo8O' },
            { name: 'Control 22-23 - Espagnol', url: 'https://drive.google.com/uc?export=download&id=1WX-cTQi405JRt-27v1WjNb93pg1rm4FP' }  
        ]
    },
    Linux: {
        cours: [
            { name: 'module 2 - Linux', url: 'https://drive.google.com/uc?export=download&id=17I1DXqgKKakKuacvwWsZIVEY2jTsEqWl' },
            { name: 'module 5 - Linux', url: 'https://drive.google.com/uc?export=download&id=17CC_qeiMTGAxkAe8HKN8pYoduCZvRETp' },
            { name: 'module 7 - Linux', url: 'https://drive.google.com/uc?export=download&id=17BgI9MOn7l_N2MzbpfRn7k4JTm8-ifUn' },
            { name: 'module 8 - Linux', url: 'https://drive.google.com/uc?export=download&id=171Xq5FASQxhLNbMBeElpOVEMGJLQ9Qcm' },
            { name: 'module 9 - Linux', url: 'https://drive.google.com/uc?export=download&id=16yURbC01SMPsgT20hNH2_dCSPI0fpTqL' },
            { name: 'module 10 - Linux', url: 'https://drive.google.com/uc?export=download&id=16pYfr6evs-ZBl7rehl7BpQCEuws6HStx' },
            { name: 'module 14 - Linux', url: 'https://drive.google.com/uc?export=download&id=16sBqdC9SJHc9zgTEA0g9ILTintdP-9Rp' },
            { name: 'module 15 - Linux', url: 'https://drive.google.com/uc?export=download&id=16gXpwauzTdg4_D0x8Iu_C2eEz7l-32fz' },
            { name: 'module 16 - Linux', url: 'https://drive.google.com/uc?export=download&id=179xJkyBnHnZXQaclVVBsnNRpJDrguNGr' },
            { name: 'module 17 - Linux', url: 'https://drive.google.com/uc?export=download&id=16tKtT2ib35_5qU65BdRQWnbtlrbcvgQv' }
        ],
        td: [
            { name: 'Exam & Corr - Linux', url: 'https://drive.google.com/uc?export=download&id=17m0peE1CNPsNfRuwpSvNHN7OfT56-TkN' }
            
        ],
        tp: [
            { name: 'Challenge - Linux', url: 'https://drive.google.com/uc?export=download&id=1_wBotGbyrRc9PvBabInruELOK9nMgTC3' }
        ]
    },
    Statistique: {
        cours: [
            { name: 'Chapitre 1&2 Statistiques - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1yCNEOK5O3hQXOVHipqrQFMCp9bBW6Zoy' },
            { name: 'Chapitre 3 Statistiques - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1yF4sCpyDv2x4iJN9pfXneHLlrwQimvkf' },
            { name: 'Résumé Probabilité - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1yZO4HQUkBx_YSyPfX1mJE5LwVjleMtAp' },
            { name: 'Résumé Probabilité - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1xrOlVdjfmp1TqQ8KgHxeHcJjzclE4ZXs' }
        ],
        td: [
            { name: 'TD1 Statistiques - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1ypTQSLrtVUFXC8YeK5449xdeS9Aj-mKF' },
            { name: 'TD2 Statistiques - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1yv0SAcdsx4f-Tys2n2IUSwYuspCdiMOP' },
            { name: 'TD3 Statistiques - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1yvO3hkPasv0YKo1Y3AalBax4Iwc9vx9S' },
            { name: 'TD1 Probabilité - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1Yf7LK139Z_-0LwW1nNUDLQVUubVPQ17B' },
            { name: 'TD2 Probabilité - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1Yb2x3x2dkWR7X4asMmrnYFN4NtkVre73' },
            { name: 'Exam - Statistique&Probabilité', url: 'https://drive.google.com/uc?export=download&id=1TsokD9a-rPlitXj75dIPXPNF8UiAkLmJ' }
            
        ]
    },
    C_4: {
        cours: [
            { name: 'Seance 1 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1U3XvsOGNJ-7d8yi_of8N_-neMwlwF-TY' },
            { name: 'Seance 2 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1UDntdgM4keCAefbFudL6D-1gEdEjc74Y' },
            { name: 'Seance 3 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=16_gemFNVDD3XRJuUoq22rxscOAd69Asw' },
            { name: 'Seance 4 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1UBZGhU98PSEkaz9LRqxV88lcM_63kS4I' },
            { name: 'Seance 5 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=157QAe1cGc32bHGs-daMXQlvZsivEM-hI' },
            { name: 'Seance 6 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1UBQna8_8aJMbees6AYZB195KCzG0TTsP' }
        ],
        td: [
            { name: 'Quiz - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1xrQme1keuSQ_5YqXL0fmNCN3087ZE_EK' },
            { name: 'Exam 22-23 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1T_SxYrCitqBqvH_K3T_irOgJoORo-i-S' }
            
        ],
        tp: [
            { name: 'TP1 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1pGhKz9tyxPSS_XXpO03K4Ta7yTn_NYOz' },
            { name: 'TP2 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1pBs5CpQ1jMdxG2wKM_gKH-2bJ7O4Ojzy' },
            { name: 'TP3 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1XxIW98cnuxI3WlDxDtduBNnsHV4-qZ9H' },
            { name: 'TP4 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1y36sWvOzqKRtwMqqMpnUZzK72A1K9Mtb' },
            { name: 'TP5 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1xyLK71RFh3pZAyOrvZSxCLfQnqH3Kbya' },
            { name: 'Colle 22-23 1 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1W6Qe6sg3GobV-xF7GKab72EHvACBC6V4' },
            { name: 'Colle 22-23 2 - Structure de données en C', url: 'https://drive.google.com/uc?export=download&id=1TEeJo3WpdQLVnR8fm0gUyzZu9reUKuwa' }
        ]
    }
};

// Gestion du mode sombre
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Gestion de la recherche
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allCourses = document.querySelectorAll('.course-card');
    let hasMatch = false; // Check if at least one course matches

    allCourses.forEach(course => {
        const courseName = course.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchTerm)) {
            course.style.display = 'block';
            hasMatch = true; // A match was found
        } else {
            course.style.display = 'none';
        }
    });

    // Only scroll to the top if there are no matches and the search term is empty
    if (searchTerm === '' || !hasMatch) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hasMatch) {
        // If matches exist, scroll smoothly to the bottom
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 300); // Small delay to ensure the search results are updated before scrolling
    }
});



// Affichage des cours par semestre
const semesterCards = document.querySelectorAll('.semester-card');
const coursesContainer = document.querySelector('.courses-container');

semesterCards.forEach(card => {
    card.addEventListener('click', () => {
        const semester = card.dataset.semester;
        displayCourses(semester);
        // Scroll to courses container
        coursesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

function displayCourses(semester) {
    coursesContainer.style.display = 'grid';
    coursesContainer.innerHTML = '';
    
    coursesData[semester].forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <i class="${course.icon}"></i>
            <h3>${course.name}</h3>
        `;
        courseCard.addEventListener('click', () => openModal(course.id));
        coursesContainer.appendChild(courseCard);
    });
}

// Gestion du modal
const modal = document.getElementById('documentModal');
const closeModal = document.querySelector('.close-modal');
let currentCourseId = '';

function openModal(courseId) {
    currentCourseId = courseId;
    modal.style.display = 'block';
    const courseName = coursesData.S3.find(c => c.id === courseId)?.name || 
                      coursesData.S4.find(c => c.id === courseId)?.name;
    document.getElementById('modalTitle').textContent = `Sélectionnez le type de document pour ${courseName}`;
    
    // Reset modal content to show document types
    const modalContent = document.querySelector('.modal-content');
    const documentList = modalContent.querySelector('.document-list');
    if (documentList) {
        documentList.remove();
    }
    modalContent.querySelector('.document-types').style.display = 'grid';
    modalContent.querySelector('h2').style.display = 'block';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    // Reset modal content when closing
    const modalContent = document.querySelector('.modal-content');
    const documentList = modalContent.querySelector('.document-list');
    if (documentList) {
        documentList.remove();
    }
    modalContent.querySelector('.document-types').style.display = 'grid';
    modalContent.querySelector('h2').style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        // Reset modal content when closing
        const modalContent = document.querySelector('.modal-content');
        const documentList = modalContent.querySelector('.document-list');
        if (documentList) {
            documentList.remove();
        }
        modalContent.querySelector('.document-types').style.display = 'grid';
        modalContent.querySelector('h2').style.display = 'block';
    }
});

// Gestion des documents
const docTypes = document.querySelectorAll('.doc-type');
const loadingOverlay = document.querySelector('.loading-overlay');

docTypes.forEach(button => {
    button.addEventListener('click', () => {
        const docType = button.dataset.type;
        if (documentLinks[currentCourseId]?.[docType]) {
            displayDocuments(documentLinks[currentCourseId][docType]);
        } else {
            displayNoDocuments();
        }
    });
});

function displayDocuments(documents) {
    const modalContent = document.querySelector('.modal-content');
    const documentList = document.createElement('div');
    documentList.className = 'document-list';
    
    const courseName = coursesData.S3.find(c => c.id === currentCourseId)?.name || 
                      coursesData.S4.find(c => c.id === currentCourseId)?.name;
    
    documentList.innerHTML = `
        <h2 id="modalTitle">Téléchargez votre document pour ${courseName}</h2>
        <div class="return-message">
            <i class="fas fa-info-circle"></i> Appuyez sur "Retour" pour découvrir d'autres fichiers
        </div>
        <div class="documents-container">
            ${documents.map(doc => `
                <a href="${doc.url}" class="document-link" target="_blank">
                    <i class="fas fa-file-pdf"></i>
                    ${doc.name}
                </a>
            `).join('')}
        </div>
        <button class="back-button">Retour</button>
    `;
    
    const backButton = documentList.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        modalContent.querySelector('.document-list')?.remove();
        modalContent.querySelector('.document-types').style.display = 'grid';
        modalContent.querySelector('h2').style.display = 'block';
    });
    
    modalContent.querySelector('.document-types').style.display = 'none';
    modalContent.querySelector('h2').style.display = 'none';
    modalContent.appendChild(documentList);
}

function displayNoDocuments() {
    const modalContent = document.querySelector('.modal-content');
    const documentList = document.createElement('div');
    documentList.className = 'document-list';
    
    const courseName = coursesData.S3.find(c => c.id === currentCourseId)?.name || 
                      coursesData.S4.find(c => c.id === currentCourseId)?.name;
    
    documentList.innerHTML = `
        <h2 id="modalTitle">Sélectionnez le type de document pour ${courseName}</h2>
        <div class="return-message">
            <i class="fas fa-info-circle"></i> Appuyez sur "Retour" pour découvrir d'autres fichiers
        </div>
        <div class="no-documents">
            <i class="fas fa-exclamation-circle"></i>
            <p>Aucun document disponible pour le moment</p>
        </div>
        <button class="back-button">Retour</button>
    `;
    
    const backButton = documentList.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        modalContent.querySelector('.document-list')?.remove();
        modalContent.querySelector('.document-types').style.display = 'grid';
        modalContent.querySelector('h2').style.display = 'block';
    });
    
    modalContent.querySelector('.document-types').style.display = 'none';
    modalContent.querySelector('h2').style.display = 'none';
    modalContent.appendChild(documentList);
}
