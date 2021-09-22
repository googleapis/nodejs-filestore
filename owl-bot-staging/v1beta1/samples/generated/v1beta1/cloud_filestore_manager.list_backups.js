// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START filestore_list_backups_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location for which to retrieve backup information,
   *  in the format `projects/{project_id}/locations/{location}`.
   *  In Cloud Filestore, backup locations map to GCP regions,
   *  for example **us-west1**.
   *  To retrieve backup information for all locations, use "-" for the
   *  `{location}` value.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value to use if there are additional
   *  results to retrieve for this list request.
   */
  // const pageToken = 'abc123'
  /**
   *  Sort results. Supported values are "name", "name desc" or "" (unsorted).
   */
  // const orderBy = 'abc123'
  /**
   *  List filter.
   */
  // const filter = 'abc123'

  // Imports the Filestore library
  const {CloudFilestoreManagerClient} = require('@google-cloud/filestore').v1beta1;

  // Instantiates a client
  const filestoreClient = new CloudFilestoreManagerClient();

  async function listBackups() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await filestoreClient.listBackupsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listBackups();
  // [END filestore_list_backups_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
