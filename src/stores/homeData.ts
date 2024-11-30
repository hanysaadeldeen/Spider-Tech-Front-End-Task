import { defineStore } from "pinia";
import { reactive, ref } from "vue";

const HomeStore = defineStore("homeStore", () => {
  const error = ref("");
  const about = reactive({});
  const brands = reactive({});
  const contact = reactive({});
  const footer = reactive({});
  const header = reactive({});

  const fetchHomeData = async () => {
    try {
      const response = await fetch(
        "https://api-woman-secrets.spider-te8.com/api/testing"
      );
      const { data } = await response.json();
      Object.assign(about, data.about);
      Object.assign(brands, data.brands);
      Object.assign(contact, data.contact);
      Object.assign(footer, data.footer);
      Object.assign(header, data.header);
    } catch (err: any) {
      error.value = `Error fetching data: ${err.message}`;
    }
  };

  return { about, brands, contact, footer, header, fetchHomeData, error };
});

export default HomeStore;
