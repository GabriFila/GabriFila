<script lang="ts">
  import { onMount } from 'svelte';
  import { updateTotalPages } from '../stores/pageCursor';
  import MagnetSection from '../components/MagnetSection.svelte';
  import Card from '../components/Card.svelte';
  import { STACKS } from 'src/stacks';

  onMount(() => updateTotalPages(1));
</script>

<MagnetSection class="hidden md:block">
  <div class="grid grid-cols-3 h-full gap-6 p-4">
    {#each STACKS as { name, technologies }}
      <div class="h-full w-full flex flex-col py-4 px-2 gap-2">
        <h2 class="text-primary text-center text-4xl font-semi-bold">{name}</h2>
        <div class="flex-1 flex flex-col justify-around gap-6 items-center">
          {#each technologies as { name: techName, imgSrc, href }}
            <Card class="w-full lg:w-5/6 xl:w-2/3">
              <a
                {href}
                target="_blank"
                class={`flex gap-4 p-6 items-center justify-center w-full`}
              >
                <h4 class="text-2xl">
                  {techName}
                </h4>
                <img src={imgSrc} alt={techName} class="w-16 h-16" />
              </a>
            </Card>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</MagnetSection>

{#each STACKS as { name, technologies }}
  <MagnetSection class="md:hidden">
    <div class="h-full w-full flex flex-col py-4 px-8">
      <h2 class="text-primary text-center text-4xl font-semi-bold mb-4">
        <b>{name}</b>
      </h2>
      <div class="flex-1 flex flex-col justify-around items-center gap-6">
        {#each technologies as { name: techName, imgSrc, href }}
          <Card class="w-full lg:w-5/6 xl:w-2/3">
            <a
              {href}
              target="_blank"
              class={`flex gap-6 p-2 items-center justify-center w-full`}
            >
              <h4 class="text-xl sm:text-2xl">
                {techName}
              </h4>
              <img src={imgSrc} alt={techName} class="w-20 h-20" />
            </a>
          </Card>
        {/each}
      </div>
    </div>
  </MagnetSection>
{/each}
