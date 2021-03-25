<template>
    <div class="bg-white shadow-lg w-95vw md:w-4/6-screen lg:w-half overflow-hidden">
        <div id="header" class="p-2 flex justify-between items-center">
            <h3 class="font-bold">Register History</h3>
            <div>
                <ns-close-button @click="closePopup"></ns-close-button>
            </div>
        </div>
        <div class="flex w-full">
            <div class="flex flex-auto">
                <div class="w-full md:w-1/2 text-right bg-green-400 text-white font-bold text-3xl p-3">{{ totalIn | currency }}</div>
                <div class="w-full md:w-1/2 text-right bg-red-400 text-white font-bold text-3xl p-3">{{ totalOut | currency }}</div>
            </div>
        </div>
        <div class="flex flex-col overflow-y-auto h-120">
            <template v-for="history of histories">
                <div :key="history.id" v-if="[ 'register-sale', 'register-cash-in' ].includes( history.action )"  class="flex border-b border-green-200 bg-green-100">
                    <div class="p-2 flex-auto">{{ history.label }}</div>
                    <div class="flex-auto text-right p-2">{{ history.value | currency }}</div>
                </div>
                <div :key="history.id" v-if="[ 'register-opening' ].includes( history.action )"  class="flex border-b border-blue-200 bg-blue-100">
                    <div class="p-2 flex-auto">{{ history.label }}</div>
                    <div class="flex-auto text-right p-2">{{ history.value | currency }}</div>
                </div>
                <div :key="history.id" v-if="[ 'register-close' ].includes( history.action )"  class="flex border-b border-teal-200 bg-teal-100">
                    <div class="p-2 flex-auto">{{ history.label }}</div>
                    <div class="flex-auto text-right p-2">{{ history.value | currency }}</div>
                </div>
                <div :key="history.id" v-if="[ 'register-refund', 'register-cash-out' ].includes( history.action )"  class="flex border-b border-red-200 bg-red-100">
                    <div class="p-2 flex-auto">{{ history.label }}</div>
                    <div class="flex-auto text-right p-2">{{ history.value | currency }}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import popupResolver from '@/libraries/popup-resolver'
import { nsHttpClient } from '@/bootstrap';
export default {
    data() {
        return {
            totalIn: 0,
            totalOut: 0,
            settings: null,
            settingsSubscription: null,
            histories: [],
        }
    },
    mounted() {
        this.settingsSubscription   =   POS.settings.subscribe( settings => {
            this.settings   =   settings;
        });

        this.getHistory();
    },
    destroyed() {
        this.settingsSubscription.unsubscribe();
    },
    methods: {
        popupResolver,

        closePopup() {
            this.popupResolver({
                status: 'success'
            });
        },

        getHistory() {
            nsHttpClient.get( `/api/nexopos/v4/cash-registers/session-history/${this.settings.register.id}` )
                .subscribe( histories  =>  {
                    this.histories      =   histories;
                    this.totalIn        =   this.histories
                        .filter( history => [ 'register-opening', 'register-sale', 'register-cash-in' ].includes( history.action ) )
                        .map( history => parseFloat( history.value ) )
                        .reduce( ( before, after ) => before + after, 0 );
                    this.totalOut        =   this.histories
                        .filter( history => [ 'register-closing', 'register-refund', 'register-cash-out' ].includes( history.action ) )
                        .map( history => parseFloat( history.value ) )
                        .reduce( ( before, after ) => before + after, 0 );

                    console.log( this.totalOut );
                });
        }
    }
}
</script>