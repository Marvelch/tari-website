<template>
    <HeaderV />
    <div class="">
        <h1 class="font-bold px-11 pt-11 pb-11 text-2xl">NAMA TARI TRADISIONAL</h1>
    </div>
    <div class="container mx-auto mb-9 pb-32 text-left">
        <div class="grid justify-items-center bg-red-800">
            <img src="https://bebaspedia.com/wp-content/uploads/2021/04/10-Contoh-Tari-Tradisional-di-Indonesia-Beserta-Gambarnya.jpg"
                class="w-full h-64 rounded-lg" alt="" srcset="">
        </div>
        <div class="container mx-auto px-6 text-left mt-32">
            <div class="flex flex-row">
                <!-- Baris Pertama -->
                <div class="basis-1/4">
                    <h4 class="font-bold">Provinsi</h4>
                    <ul>
                        <!-- Looping disini -->
                        <li class="mt-2">
                            Nama Provinsi
                        </li>
                    </ul>
                </div>
                <div class="basis-1/4"></div>
                <div class="basis-1/2">
                    <h5 class="font-bold">Bentuk Tari</h5>
                    <ul>
                        <!-- Looping disini -->
                        <li class="mt-2">
                            .....
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Baris Kedua -->
            <div class="flex flex-row mt-9">
                <div class="basis-1/4">
                    <h4 class="font-bold">Unsur Tari</h4>
                    <ul>
                        <!-- Looping disini -->
                        <li class="mt-2">
                            Expresi
                        </li>
                    </ul>
                </div>
                <div class="basis-1/4"></div>
                <div class="basis-1/2">
                    <h5 class="font-bold">Jenis Tari</h5>
                    <ul>
                        <!-- Looping disini -->
                        <li class="mt-2">
                            Nama Provinsi
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <FooterV />
</template>

<script>
    // @ is an alias to /src
    import HeaderV from '@/components/HeaderV.vue'
    import FooterV from '@/components/FooterV.vue'

    export default {
        name: 'NamaTari',
        components: {
            HeaderV,
            FooterV
        }
    }
</script>