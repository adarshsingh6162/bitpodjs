<template>
  <v-flex d-flex flex-md-row flex-lg-row flex-column>
    <v-flex column xs12 sm8 md8 lg8>
      <div class="xs12 sm8 md8 lg8 boxview pa-3 mr-2 mb-2">
        <v-row>
          <v-col class="col-md-6 col-12 pt-0">
            <v-card class="elevation-0 mt-0">
              <v-list>
                <v-list-item class="pl-0">
                  <v-list-item-avatar size="62">
                    <v-avatar
                      color="primary"
                      size="62"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span class="white--text Twitter">{{
                        data.contact.FirstName
                      }}</span>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      <h2 class="text-capitalize text-truncate">
                        {{ data.contact.FullName }}
                      </h2>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                      data.contact.Job
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      data.contact.Organization
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col class="col-md-6 col-12 pt-0">
            <div class="text-truncate my-3 mt-0">
              <v-icon class="mr-2 fs-16">mdi-email-outline</v-icon>
              {{ formatField(data.contact.Email) }}
            </div>
            <div class="text-truncate my-3">
              <v-icon class="mr-2 fs-16">mdi-cellphone-iphone</v-icon>
              {{ formatField(data.contact.CellPhone) }}
            </div>
            <div class="text-truncate my-3">
              <v-icon class="mr-2 fs-16">mdi-map-marker-outline</v-icon>
              {{ formatField(data.contact.Country) }}
            </div>
            <div class="text-truncate my-3">
              <v-icon class="mr-2 fs-16">mdi-calendar-blank</v-icon>
              {{ formatDate(data.contact.createdDate) }}
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="xs12 sm4 md4 lg4 boxview pa-4 mr-2 mb-2">
        <h2 class="body-1 pb-2">
          <i class="fa fa-user-plus pr-1" aria-hidden="true"></i>Registrations
        </h2>
        <v-divider></v-divider>
        <Grid view-name="contactRegistration" content-name="Contacts" />
      </div>
      <div class="xs12 sm12 md12 boxview pa-4 mr-2 mb-2">
        <h2 class="body-1 pb-2">
          <i class="fa fa-file pr-1" aria-hidden="true"></i> Invites
        </h2>
        <v-divider></v-divider>
        <Grid view-name="contactInvites" content-name="Contacts" />
      </div>
      <div class="xs12 sm12 md12 boxview pa-4 mr-2 mb-2">
        <h2 class="body-1 pb-2">
          <i class="fa fa-envelope1 pr-1" aria-hidden="true"></i> Emails
        </h2>
        <v-divider></v-divider>
        <Grid view-name="contactRegistration" content-name="Contacts" />
      </div>
    </v-flex>
    <v-flex column xs12 sm4 md4 lg4>
      <div class="xs12 sm4 md4 lg4 boxview pa-4 mb-2 pr-2">
        <h2 class="body-1 pb-1">
          <i class="fa fa-info-circle pr-1" aria-hidden="true"></i> Contact
          Information
        </h2>
        <v-divider></v-divider>
        <v-row>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Date of Birth</div>
            <div class="body-1">{{ formatField(data.contact.BirthDate) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Department</div>
            <div class="body-1">{{ formatField(data.contact.Job) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Other Phone</div>
            <div class="body-1">{{ formatField(data.contact.WorkPhone) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Reports To</div>
            <div class="body-1">{{ formatField(data.contact.ReportsTo) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Assistant</div>
            <div class="body-1">{{ formatField(data.contact.Assistant) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Asst Phone</div>
            <div class="body-1">{{ formatField(data.contact.AsstPhone) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Contact Owner</div>
            <div class="body-1">{{ formatField(data.contact.Owner) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Created By</div>
            <div class="body-1">{{ formatField(data.contact.modifiedBy) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Modified By</div>
            <div class="body-1">{{ formatField(data.contact.modifiedBy) }}</div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Modified Date</div>
            <div class="body-1">
              {{ formatDate(data.contact.modifiedDate) }}
            </div>
          </v-col>
          <v-col class="col-md-12 col-12">
            <div class="body-2 text--secondary">Description</div>
            <div class="body-1">
              {{ formatField(data.contact.Description) }}
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="xs12 sm4 md4 lg4 boxview pa-4 mb-2 pr-2">
        <h2 class="body-1 pb-1">
          <i class="fa fa-location pr-1" aria-hidden="true"></i> Address
          Information
        </h2>
        <v-divider></v-divider>
        <v-row>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Mailing Street</div>
            <div class="body-1">
              {{
                formatField(
                  data.contact._CurrentAddress &&
                    data.contact._CurrentAddress.AddressLine
                )
              }}
            </div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Mailing City</div>
            <div class="body-1">
              {{
                formatField(
                  data.contact._CurrentAddress &&
                    data.contact._CurrentAddress.City
                )
              }}
            </div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Mailing State</div>
            <div class="body-1">
              {{
                formatField(
                  data.contact._CurrentAddress &&
                    data.contact._CurrentAddress.State
                )
              }}
            </div>
          </v-col>
          <v-col class="col-md-6 col-12">
            <div class="body-2 text--secondary">Mailing Zip</div>
            <div class="body-1">
              {{
                formatField(
                  data.contact._CurrentAddress &&
                    data.contact._CurrentAddress.PostalCode
                )
              }}
            </div>
          </v-col>
          <v-col class="col-md-12 col-12">
            <div class="body-2 text--secondary">Mailing Country</div>
            <div class="body-1">
              {{
                formatField(
                  data.contact._CurrentAddress &&
                    data.contact._CurrentAddress.Country
                )
              }}
            </div>
          </v-col>
        </v-row>
      </div>
    </v-flex>
  </v-flex>
</template>

<script>
import gql from 'graphql-tag'
import format from 'date-fns/format'
import Grid from '~/components/common/grid'
import contact from '~/config/apps/event/gql/contact.gql'
import { formatGQLResult } from '~/utility/gql.js'
export default {
  components: {
    Grid,
  },
  data() {
    return {
      loading: 0,
      data: {
        contact: {},
      },
    }
  },
  methods: {
    formatDate(date) {
      return date ? format(new Date(date), 'PPp') : ''
    },
    formatField(fieldValue) {
      return fieldValue || '-'
    },
  },
  apollo: {
    data: {
      query() {
        return gql`
          ${contact}
        `
      },
      variables() {
        return {
          filters: {
            where: {
              id: this.$route.params.id,
            },
          },
        }
      },
      update(data) {
        const contact = formatGQLResult(data, 'Contact')
        return {
          contact: contact.length > 0 ? contact[0] : {},
        }
      },
      result({ data, loading, networkStatus }) {},
      error(error) {
        this.error = error
        this.loading = 0
      },
      prefetch: false,
      loadingKey: 'loading',
      skip: false,
      pollInterval: 0,
    },
  },
}
</script>
