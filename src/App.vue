<template>
  <v-app>
    <v-app-bar app absolute color="white">
      <div class="d-flex align-center">
        <span class="hidden-md-and-up">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </span>

        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://media.glassdoor.com/sqll/1778018/paris-sorbonne-university-abu-dhabi-squarelogo-1533030782551.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :to="item.to"
        :href="item.href"
        :target="item.href ? '_blank' : ''"
        text
        class="hidden-md-and-down"
        v-for="item in items"
        :key="item.title"
      >
        <span class="mr-2">{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://media.glassdoor.com/sqll/1778018/paris-sorbonne-university-abu-dhabi-squarelogo-1533030782551.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Guide</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          :href="item.href"
          :target="item.href ? '_blank' : ''"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/#',
      },
      {
        icon: 'mdi-magnify',
        title: 'Find books',
        to: '/lang',
      },
      {
        icon: 'mdi-book',
        title: 'The Gutenberg project',
        href: 'https://www.gutenberg.org/',
      },
      {
        icon: 'mdi-desktop-classic',
        title: 'DAAR',
        href: 'https://github.com/arthurescriou/gutenberg-app',
      },
      {
        icon: 'mdi-github',
        title: 'This app repository',
        href: '"https://github.com/arthurescriou/gutenberg-app"',
      },
    ],
  }),
}
</script>
