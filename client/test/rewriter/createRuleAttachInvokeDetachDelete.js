/*
 * Copyright 2015-2016 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import it from '../helpers/driver'

it.should('create an action, trigger, and rule, then attach to the rule, fire the trigger, detach, delete, and finally quit without error', (name) => [
    `create ${name} nodejs:default function main(params) { return { message: "Hello " + params.name } }`,
    `create-trigger ${name}-trigger`,
    `create-rule ${name}-rule ${name}-trigger ${name}`,
    `attach ${name} -a`,
    `invoke ${name}-trigger`,
    `c`,
    `c`,
    `quit`, // quit the debugger
    `detach ${name}`,
    `delete ${name}-rule`,
    `delete ${name}-trigger`,
    `delete ${name}`
], ['-c']); // use the cli debugger
