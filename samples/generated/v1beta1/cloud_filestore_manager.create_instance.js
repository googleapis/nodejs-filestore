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

function main(parent, instanceId, instance) {
  // [START filestore_create_instance_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The instance's project and location, in the format
   *  `projects/{project_id}/locations/{location}`. In Cloud Filestore,
   *  locations map to GCP zones, for example **us-west1-b**.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the instance to create.
   *  The ID must be unique within the specified project and location.
   *  This value must start with a lowercase letter followed by up to 62
   *  lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
   */
  // const instanceId = 'abc123'
  /**
   *  Required. An [instance resource][google.cloud.filestore.v1beta1.Instance]
   */
  // const instance = ''

  // Imports the Filestore library
  const {CloudFilestoreManagerClient} =
    require('@google-cloud/filestore').v1beta1;

  // Instantiates a client
  const filestoreClient = new CloudFilestoreManagerClient();

  async function createInstance() {
    // Construct request
    const request = {
      parent,
      instanceId,
      instance,
    };

    // Run request
    const [operation] = await filestoreClient.createInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createInstance();
  // [END filestore_create_instance_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));