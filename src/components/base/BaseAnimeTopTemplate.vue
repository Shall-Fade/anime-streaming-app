<template>
  <div class="pb-[40px]">
    <h2 class="desktop:text-[36px] laptop:text-[30px] tablet:text-[26px] text-[22px] tablet:text-left text-center desktop:pb-[24px] laptop:pb-[22px] tablet:pb-[20px] pb-[16px] font-semibold leading-[36px]">
      <slot name="title"></slot>
    </h2>
    <div class="grid desktop:grid-cols-6 laptop:grid-cols-5 tablet:grid-cols-4 grid-cols-2 gap-[20px] desktop:gap-[30px]">
      <slot name="cards"></slot>
    </div>
  </div>
</template>
