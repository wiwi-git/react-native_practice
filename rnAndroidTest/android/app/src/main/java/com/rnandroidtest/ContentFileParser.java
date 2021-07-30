package com.rnandroidtest;
/*
 * Copyright (c) WhatsApp Inc. and its affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


import android.text.TextUtils;
import android.util.JsonReader;

import androidx.annotation.NonNull;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

class ContentFileParser {

    @NonNull
    static List<StickerPack> parseStickerPacks(@NonNull String jsonString) throws IOException, IllegalStateException, JSONException {
        return readStickerPacksForString(jsonString);
    }

    @NonNull
    private static List<StickerPack> readStickerPacksForString(@NonNull String jsonString) throws IllegalStateException, JSONException, IOException {
        List<StickerPack> stickerPackList = new ArrayList<>();
        String androidPlayStoreLink = null;
        String iosAppStoreLink = null;
        JSONObject json = new JSONObject(jsonString);

        if (json.has("android_play_store_link")) {
            androidPlayStoreLink = json.getString("android_play_store_link");
        }
        if (json.has("ios_app_store_link")) {
            iosAppStoreLink = json.getString("ios_app_store_link");
        }
        if (json.has("sticker_packs")) {
            JSONArray packsArray = json.getJSONArray("sticker_packs");
            for (int i = 0; i < packsArray.length(); i++) {
                JSONObject packJson = packsArray.getJSONObject(i);
                StickerPack pack = readStickerPack(packJson);
                stickerPackList.add(pack);
            }
        } else {
            throw new IllegalStateException("unknown field in json");
        }

        if (stickerPackList.size() == 0) {
            throw new IllegalStateException("sticker pack list cannot be empty");
        }
        for (StickerPack stickerPack : stickerPackList) {
            stickerPack.setAndroidPlayStoreLink(androidPlayStoreLink);
            stickerPack.setIosAppStoreLink(iosAppStoreLink);
        }
        return stickerPackList;
    }
    
    @NonNull
    private static StickerPack readStickerPack(@NonNull JSONObject json) throws IllegalStateException, JSONException {
        String identifier = null;
        String name = null;
        String publisher = null;
        String trayImageFile = null;
        String publisherEmail = null;
        String publisherWebsite = null;
        String privacyPolicyWebsite = null;
        String licenseAgreementWebsite = null;
        String imageDataVersion = "";
        boolean avoidCache = false;
        boolean animatedStickerPack = false;
        List<Sticker> stickerList = null;

        if (json.has("identifier")) {
            identifier = json.getString("identifier");
        }

        if (json.has("name")) {
            name = json.getString("name");
        }

        if (json.has("publisher")) {
            publisher = json.getString("publisher");
        }

        if (json.has("tray_image_file")) {
            trayImageFile = json.getString("tray_image_file");
        }

        if (json.has("publisher_email")) {
            publisherEmail = json.getString("publisher_email");
        }

        if (json.has("publisher_website")) {
            publisherWebsite = json.getString("publisher_website");
        }

        if (json.has("privacy_policy_website")) {
            privacyPolicyWebsite = json.getString("privacy_policy_website");
        }

        if (json.has("license_agreement_website")) {
            licenseAgreementWebsite = json.getString("license_agreement_website");
        }

        if (json.has("image_data_version")) {
            imageDataVersion = json.getString("image_data_version");
        }

        if (json.has("stickers")) {
            stickerList = readStickers(json.getJSONArray("stickers"));
        }

        if (json.has("avoid_cache")) avoidCache = json.getBoolean("avoid_cache");
        if (json.has("animated_sticker_pack"))
            animatedStickerPack = json.getBoolean("animated_sticker_pack");

        if (TextUtils.isEmpty(identifier)) {
            throw new IllegalStateException("identifier cannot be empty");
        }
        if (TextUtils.isEmpty(name)) {
            throw new IllegalStateException("name cannot be empty");
        }
        if (TextUtils.isEmpty(publisher)) {
            throw new IllegalStateException("publisher cannot be empty");
        }
        if (TextUtils.isEmpty(trayImageFile)) {
            throw new IllegalStateException("tray_image_file cannot be empty");
        }
        if (stickerList == null || stickerList.size() == 0) {
            throw new IllegalStateException("sticker list is empty");
        }
        if (identifier.contains("..") || identifier.contains("/")) {
            throw new IllegalStateException("identifier should not contain .. or / to prevent directory traversal");
        }
        if (TextUtils.isEmpty(imageDataVersion)) {
            throw new IllegalStateException("image_data_version should not be empty");
        }

        final StickerPack stickerPack = new StickerPack(identifier, name, publisher, trayImageFile, publisherEmail, publisherWebsite, privacyPolicyWebsite, licenseAgreementWebsite, imageDataVersion, avoidCache, animatedStickerPack);
        stickerPack.setStickers(stickerList);
        return stickerPack;
    }

    @NonNull
    private static List<Sticker> readStickers(@NonNull JSONArray jsonArray) throws JSONException, IllegalStateException {
        List<Sticker> stickerList = new ArrayList<>();

        for (int i = 0; i < jsonArray.length(); i++) {
            String imageFile = null;
            List<String> emojis = new ArrayList<>(StickerPackValidator.EMOJI_MAX_LIMIT);
            JSONObject json = jsonArray.getJSONObject(i);

            if (json.has("image_file")) {
                imageFile = json.getString("image_file");
            }
            if (json.has("emojis")) {
                JSONArray emojisArray = json.getJSONArray("emojis");
                for (int k = 0; k < emojisArray.length(); k++) {
                    String emoji = emojisArray.getString(k);
                    emojis.add(emoji);
                }
            }

            if (TextUtils.isEmpty(imageFile)) {
                throw new IllegalStateException("sticker image_file cannot be empty");
            }
            if (!imageFile.endsWith(".webp")) {
                throw new IllegalStateException("image file for stickers should be webp files, image file is: " + imageFile);
            }
            if (imageFile.contains("..") || imageFile.contains("/")) {
                throw new IllegalStateException("the file name should not contain .. or / to prevent directory traversal, image file is:" + imageFile);
            }
            stickerList.add(new Sticker(imageFile, emojis));
        }

        return stickerList;
    }

}
