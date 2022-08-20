/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProteinCreate } from '../models/ProteinCreate';
import type { ProteinRead } from '../models/ProteinRead';
import type { ProteinUpdate } from '../models/ProteinUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Read Proteins
     * Return all proteins in the database (paginated).
     * @param offset
     * @param limit
     * @returns ProteinRead Successful Response
     * @throws ApiError
     */
    public static readProteinsReadProteins(
        offset?: number,
        limit: number = 100,
    ): CancelablePromise<Array<ProteinRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proteins/',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Protein
     * Create a new protein.
     * @param requestBody
     * @returns ProteinRead Successful Response
     * @throws ApiError
     */
    public static createProteinCreateProtein(
        requestBody: ProteinCreate,
    ): CancelablePromise<ProteinRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/proteins/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Protein
     * Return a protein by ID.
     * @param proteinId
     * @returns ProteinRead Successful Response
     * @throws ApiError
     */
    public static readProteinReadProtein(
        proteinId: number,
    ): CancelablePromise<ProteinRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proteins/{protein_id}',
            path: {
                'protein_id': proteinId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Protein
     * Delete a protein by ID.
     * @param proteinId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteProteinDeleteProtein(
        proteinId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/proteins/{protein_id}',
            path: {
                'protein_id': proteinId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Protein
     * Update a protein by ID.
     * @param proteinId
     * @param requestBody
     * @returns ProteinRead Successful Response
     * @throws ApiError
     */
    public static updateProteinUpdateProtein(
        proteinId: number,
        requestBody: ProteinUpdate,
    ): CancelablePromise<ProteinRead> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/proteins/{protein_id}',
            path: {
                'protein_id': proteinId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
