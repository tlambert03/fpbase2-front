/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FluorescenceCofactor } from './FluorescenceCofactor';
import type { OligomerizationTendency } from './OligomerizationTendency';
import type { SwitchingType } from './SwitchingType';

export type ProteinCreate = {
    created?: string;
    modified?: string;
    name: string;
    aliases?: Array<string>;
    agg?: OligomerizationTendency;
    seq?: string;
    seq_comment?: string;
    seq_validated?: boolean;
    chromophore?: string;
    cofactor?: FluorescenceCofactor;
    switch_type?: SwitchingType;
    blurb?: string;
    pdb?: Array<string>;
    genbank?: string;
    uniprot?: string;
    ipg_id?: string;
};

