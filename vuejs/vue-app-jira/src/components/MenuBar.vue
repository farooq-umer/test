<template>
    <v-app-bar>
        <v-toolbar>
            
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            
            <v-img
                alt="logo"
                src="../assets/logo.svg"
                aspect-ratio="1"
                class="v-responsive v-image"
                max-width="40"
                max-height="40">
            </v-img>
            <!-- <div role="img" aria-label="Vuetify Logo" class="v-responsive v-image" style="height:38px;width:38px;">
                <div class="v-image__image v-image__image--contain" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/logos/v-alt.svg&quot;); background-position: center center;">
                </div>
            </div> -->

            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-light">Code Test</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>                
                <v-btn class="mr-2">
                    <span>
                        <router-link to="/">
                            <v-icon>mdi-store</v-icon>Home
                        </router-link>
                    </span>
                </v-btn>
                <v-btn>
                    <span>
                        <router-link to="/jira">
                            <v-icon>mdi-plus-circle</v-icon>Jira
                        </router-link>
                    </span>
                </v-btn>
                <v-btn>
                    <span>
                        <router-link to="/users">
                            <v-icon>mdi-plus-circle</v-icon>Users
                        </router-link>
                    </span>
                </v-btn>
            </v-toolbar-items>

            <!-- <template v-if="$vuetify.breakpoint.smAndUp">
                <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
                <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
            </template> -->
        </v-toolbar>
    </v-app-bar>
</template>