package com.example.bustrackingapp.api

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object ApiService {
    private const val BASE_URL = "http://192.168.11.112:3000/api/" // Harmonisé avec Constants.kt
    // Si vous testez sur un appareil physique, utilisez l'adresse IP de votre ordinateur
    // private const val BASE_URL = "http://192.16!:8.1.X:3000/api/" // Remplacez X par votre IP

    private val retrofit = Retrofit.Builder()
        .baseUrl(BASE_URL)
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    val api: ApiInterface = retrofit.create(ApiInterface::class.java)
} 