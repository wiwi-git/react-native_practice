package com.rnandroidtest;
/*
 * Copyright (c) WhatsApp Inc. and its affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import android.content.ContentProvider;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.UriMatcher;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import org.json.JSONException;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class StickerContentProvider extends ContentProvider {

    /**
     * Do not change the strings listed below, as these are used by WhatsApp. And changing these will break the interface between sticker app and WhatsApp.
     */
    public static final String STICKER_PACK_IDENTIFIER_IN_QUERY = "sticker_pack_identifier";
    public static final String STICKER_PACK_NAME_IN_QUERY = "sticker_pack_name";
    public static final String STICKER_PACK_PUBLISHER_IN_QUERY = "sticker_pack_publisher";
    public static final String STICKER_PACK_ICON_IN_QUERY = "sticker_pack_icon";
    public static final String ANDROID_APP_DOWNLOAD_LINK_IN_QUERY = "android_play_store_link";
    public static final String IOS_APP_DOWNLOAD_LINK_IN_QUERY = "ios_app_download_link";
    public static final String PUBLISHER_EMAIL = "sticker_pack_publisher_email";
    public static final String PUBLISHER_WEBSITE = "sticker_pack_publisher_website";
    public static final String PRIVACY_POLICY_WEBSITE = "sticker_pack_privacy_policy_website";
    public static final String LICENSE_AGREENMENT_WEBSITE = "sticker_pack_license_agreement_website";
    public static final String IMAGE_DATA_VERSION = "image_data_version";
    public static final String AVOID_CACHE = "whatsapp_will_not_cache_stickers";
    public static final String ANIMATED_STICKER_PACK = "animated_sticker_pack";

    public static final String STICKER_FILE_NAME_IN_QUERY = "sticker_file_name";
    public static final String STICKER_FILE_EMOJI_IN_QUERY = "sticker_emoji";
    private static final String CONTENT_FILE_NAME = "contents.json";

    public static final Uri AUTHORITY_URI = new Uri.Builder().scheme(ContentResolver.SCHEME_CONTENT).authority(BuildConfig.CONTENT_PROVIDER_AUTHORITY).appendPath(StickerContentProvider.METADATA).build();

    /**
     * Do not change the values in the UriMatcher because otherwise, WhatsApp will not be able to fetch the stickers from the ContentProvider.
     */
    private static final UriMatcher MATCHER = new UriMatcher(UriMatcher.NO_MATCH);
    private static final String METADATA = "metadata";
    private static final int METADATA_CODE = 1;

    private static final int METADATA_CODE_FOR_SINGLE_PACK = 2;

    static final String STICKERS = "stickers";
    private static final int STICKERS_CODE = 3;

    static final String STICKERS_ASSET = "stickers_asset";
    private static final int STICKERS_ASSET_CODE = 4;

    private static final int STICKER_PACK_TRAY_ICON_CODE = 5;

    private List<StickerPack> stickerPackList;



    String testValue = "{\n" +
            "  \"android_play_store_link\": \"\",\n" +
            "  \"ios_app_store_link\": \"\",\n" +
            "  \"sticker_packs\": [\n" +
            "    {\n" +
            "      \"identifier\": \"1\",\n" +
            "      \"name\": \"Cuppy\",\n" +
            "      \"publisher\": \"Jane Doe\",\n" +
            "      \"tray_image_file\": \"tray_Cuppy.png\",\n" +
            "      \"image_data_version\": \"1\",\n" +
            "      \"avoid_cache\": false,\n" +
            "      \"publisher_email\": \"\",\n" +
            "      \"publisher_website\": \"\",\n" +
            "      \"privacy_policy_website\": \"\",\n" +
            "      \"license_agreement_website\": \"\",\n" +
            "      \"stickers\": [\n" +
            "        {\n" +
            "          \"image_file\": \"01_Cuppy_smile.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"☕\",\n" +
            "            \"\uD83D\uDE42\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"02_Cuppy_lol.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE04\",\n" +
            "            \"\uD83D\uDE00\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"03_Cuppy_rofl.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE06\",\n" +
            "            \"\uD83D\uDE02\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"04_Cuppy_sad.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE29\",\n" +
            "            \"\uD83D\uDE30\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"05_Cuppy_cry.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE2D\",\n" +
            "            \"\uD83D\uDCA7\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"06_Cuppy_love.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE0D\",\n" +
            "            \"♥\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"07_Cuppy_hate.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDC94\",\n" +
            "            \"\uD83D\uDC4E\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"08_Cuppy_lovewithmug.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE0D\",\n" +
            "            \"\uD83D\uDC91\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"09_Cuppy_lovewithcookie.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE18\",\n" +
            "            \"\uD83C\uDF6A\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"10_Cuppy_hmm.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83E\uDD14\",\n" +
            "            \"\uD83D\uDE10\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"11_Cuppy_upset.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE31\",\n" +
            "            \"\uD83D\uDE35\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"12_Cuppy_angry.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE21\",\n" +
            "            \"\uD83D\uDE20\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"13_Cuppy_curious.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"❓\",\n" +
            "            \"\uD83E\uDD14\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"14_Cuppy_weird.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83C\uDF08\",\n" +
            "            \"\uD83D\uDE1C\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"15_Cuppy_bluescreen.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDCBB\",\n" +
            "            \"\uD83D\uDE29\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"16_Cuppy_angry.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE21\",\n" +
            "            \"\uD83D\uDE24\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"17_Cuppy_tired.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDE29\",\n" +
            "            \"\uD83D\uDE28\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"18_Cuppy_workhard.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDCBB\",\n" +
            "            \"\uD83C\uDF03\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"19_Cuppy_shine.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83C\uDF89\",\n" +
            "            \"✨\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"20_Cuppy_disgusting.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83E\uDD2E\",\n" +
            "            \"\uD83D\uDC4E\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"21_Cuppy_hi.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDD90\",\n" +
            "            \"\uD83D\uDE4B\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"22_Cuppy_bye.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDD90\",\n" +
            "            \"\uD83D\uDC4B\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"23_Cuppy_greentea.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83C\uDF75\",\n" +
            "            \"\uD83D\uDE0C\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"24_Cuppy_phone.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDCF1\",\n" +
            "            \"\uD83D\uDE26\"\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"image_file\": \"25_Cuppy_battery.webp\",\n" +
            "          \"emojis\": [\n" +
            "            \"\uD83D\uDD0B\",\n" +
            "            \"\uD83D\uDE35\"\n" +
            "          ]\n" +
            "        }\n" +
            "      ]\n" +
            "    },\n" +
            "  ]\n" +
            "}\n";

    @Override
    public boolean onCreate() {
        final String authority = BuildConfig.CONTENT_PROVIDER_AUTHORITY;
        if (!authority.startsWith(Objects.requireNonNull(getContext()).getPackageName())) {
            throw new IllegalStateException("your authority (" + authority + ") for the content provider should start with your package name: " + getContext().getPackageName());
        }

        //the call to get the metadata for the sticker packs.
        MATCHER.addURI(authority, METADATA, METADATA_CODE);

        //the call to get the metadata for single sticker pack. * represent the identifier
        MATCHER.addURI(authority, METADATA + "/*", METADATA_CODE_FOR_SINGLE_PACK);

        //gets the list of stickers for a sticker pack, * respresent the identifier.
        MATCHER.addURI(authority, STICKERS + "/*", STICKERS_CODE);

        for (StickerPack stickerPack : getStickerPackList()) {
            MATCHER.addURI(authority, STICKERS_ASSET + "/" + stickerPack.identifier + "/" + stickerPack.trayImageFile, STICKER_PACK_TRAY_ICON_CODE);
            for (Sticker sticker : stickerPack.getStickers()) {
                MATCHER.addURI(authority, STICKERS_ASSET + "/" + stickerPack.identifier + "/" + sticker.imageFileName, STICKERS_ASSET_CODE);
            }
        }

        return true;
    }

    @Override
    public Cursor query(@NonNull Uri uri, @Nullable String[] projection, String selection,
                        String[] selectionArgs, String sortOrder) {
        final int code = MATCHER.match(uri);
        if (code == METADATA_CODE) {
            return getPackForAllStickerPacks(uri);
        } else if (code == METADATA_CODE_FOR_SINGLE_PACK) {
            return getCursorForSingleStickerPack(uri);
        } else if (code == STICKERS_CODE) {
            return getStickersForAStickerPack(uri);
        } else {
            throw new IllegalArgumentException("Unknown URI: " + uri);
        }
    }

    @Nullable
    @Override
    public AssetFileDescriptor openAssetFile(@NonNull Uri uri, @NonNull String mode) {
        final int matchCode = MATCHER.match(uri);
        if (matchCode == STICKERS_ASSET_CODE || matchCode == STICKER_PACK_TRAY_ICON_CODE) {
            return getImageAsset(uri);
        }
        return null;
    }


    @Override
    public String getType(@NonNull Uri uri) {
        final int matchCode = MATCHER.match(uri);
        switch (matchCode) {
            case METADATA_CODE:
                return "vnd.android.cursor.dir/vnd." + BuildConfig.CONTENT_PROVIDER_AUTHORITY + "." + METADATA;
            case METADATA_CODE_FOR_SINGLE_PACK:
                return "vnd.android.cursor.item/vnd." + BuildConfig.CONTENT_PROVIDER_AUTHORITY + "." + METADATA;
            case STICKERS_CODE:
                return "vnd.android.cursor.dir/vnd." + BuildConfig.CONTENT_PROVIDER_AUTHORITY + "." + STICKERS;
            case STICKERS_ASSET_CODE:
                return "image/webp";
            case STICKER_PACK_TRAY_ICON_CODE:
                return "image/png";
            default:
                throw new IllegalArgumentException("Unknown URI: " + uri);
        }
    }

//    private synchronized void readContentFile(@NonNull Context context) {
//        try (InputStream contentsInputStream = context.getAssets().open(CONTENT_FILE_NAME)) {
//            stickerPackList = ContentFileParser.parseStickerPacks(contentsInputStream);
//        } catch (IOException | IllegalStateException e) {
//            throw new RuntimeException(CONTENT_FILE_NAME + " file has some issues: " + e.getMessage(), e);
//        }
//    }

//    private List<StickerPack> getStickerPackList() {
//        if (stickerPackList == null) {
//            readContentFile(Objects.requireNonNull(getContext()));
//        }
//        return stickerPackList;
//    }

    private List<StickerPack> getStickerPackList() {
        String jsonString = testValue;
        try {
            stickerPackList = ContentFileParser.parseStickerPacks(jsonString);
            return stickerPackList;
        } catch (JSONException | IOException | IllegalStateException e) {
            throw new RuntimeException(jsonString + " file has some issues: " + e.getMessage(), e);
        }
    }

    private Cursor getPackForAllStickerPacks(@NonNull Uri uri) {
        return getStickerPackInfo(uri, getStickerPackList());
    }

    private Cursor getCursorForSingleStickerPack(@NonNull Uri uri) {
        final String identifier = uri.getLastPathSegment();
        for (StickerPack stickerPack : getStickerPackList()) {
            if (identifier.equals(stickerPack.identifier)) {
                return getStickerPackInfo(uri, Collections.singletonList(stickerPack));
            }
        }

        return getStickerPackInfo(uri, new ArrayList<>());
    }

    @NonNull
    private Cursor getStickerPackInfo(@NonNull Uri uri, @NonNull List<StickerPack> stickerPackList) {
        MatrixCursor cursor = new MatrixCursor(
                new String[]{
                        STICKER_PACK_IDENTIFIER_IN_QUERY,
                        STICKER_PACK_NAME_IN_QUERY,
                        STICKER_PACK_PUBLISHER_IN_QUERY,
                        STICKER_PACK_ICON_IN_QUERY,
                        ANDROID_APP_DOWNLOAD_LINK_IN_QUERY,
                        IOS_APP_DOWNLOAD_LINK_IN_QUERY,
                        PUBLISHER_EMAIL,
                        PUBLISHER_WEBSITE,
                        PRIVACY_POLICY_WEBSITE,
                        LICENSE_AGREENMENT_WEBSITE,
                        IMAGE_DATA_VERSION,
                        AVOID_CACHE,
                        ANIMATED_STICKER_PACK,
                });
        for (StickerPack stickerPack : stickerPackList) {
            MatrixCursor.RowBuilder builder = cursor.newRow();
            builder.add(stickerPack.identifier);
            builder.add(stickerPack.name);
            builder.add(stickerPack.publisher);
            builder.add(stickerPack.trayImageFile);
            builder.add(stickerPack.androidPlayStoreLink);
            builder.add(stickerPack.iosAppStoreLink);
            builder.add(stickerPack.publisherEmail);
            builder.add(stickerPack.publisherWebsite);
            builder.add(stickerPack.privacyPolicyWebsite);
            builder.add(stickerPack.licenseAgreementWebsite);
            builder.add(stickerPack.imageDataVersion);
            builder.add(stickerPack.avoidCache ? 1 : 0);
            builder.add(stickerPack.animatedStickerPack ? 1 : 0);
        }
        cursor.setNotificationUri(Objects.requireNonNull(getContext()).getContentResolver(), uri);
        return cursor;
    }

    @NonNull
    private Cursor getStickersForAStickerPack(@NonNull Uri uri) {
        final String identifier = uri.getLastPathSegment();
        MatrixCursor cursor = new MatrixCursor(new String[]{STICKER_FILE_NAME_IN_QUERY, STICKER_FILE_EMOJI_IN_QUERY});
        for (StickerPack stickerPack : getStickerPackList()) {
            if (identifier.equals(stickerPack.identifier)) {
                for (Sticker sticker : stickerPack.getStickers()) {
                    cursor.addRow(new Object[]{sticker.imageFileName, TextUtils.join(",", sticker.emojis)});
                }
            }
        }
        cursor.setNotificationUri(Objects.requireNonNull(getContext()).getContentResolver(), uri);
        return cursor;
    }

    private AssetFileDescriptor getImageAsset(Uri uri) throws IllegalArgumentException {
        AssetManager am = Objects.requireNonNull(getContext()).getAssets();
        final List<String> pathSegments = uri.getPathSegments();
        if (pathSegments.size() != 3) {
            throw new IllegalArgumentException("path segments should be 3, uri is: " + uri);
        }
        String fileName = pathSegments.get(pathSegments.size() - 1);
        final String identifier = pathSegments.get(pathSegments.size() - 2);
        if (TextUtils.isEmpty(identifier)) {
            throw new IllegalArgumentException("identifier is empty, uri: " + uri);
        }
        if (TextUtils.isEmpty(fileName)) {
            throw new IllegalArgumentException("file name is empty, uri: " + uri);
        }
        //making sure the file that is trying to be fetched is in the list of stickers.
        for (StickerPack stickerPack : getStickerPackList()) {
            if (identifier.equals(stickerPack.identifier)) {
                if (fileName.equals(stickerPack.trayImageFile)) {
                    return fetchFile(uri, am, fileName, identifier);
                } else {
                    for (Sticker sticker : stickerPack.getStickers()) {
                        if (fileName.equals(sticker.imageFileName)) {
                            return fetchFile(uri, am, fileName, identifier);
                        }
                    }
                }
            }
        }
        return null;
    }

    private AssetFileDescriptor fetchFile(@NonNull Uri uri, @NonNull AssetManager am, @NonNull String fileName, @NonNull String identifier) {
        try {
            return am.openFd(identifier + "/" + fileName);
        } catch (IOException e) {
            Log.e(Objects.requireNonNull(getContext()).getPackageName(), "IOException when getting asset file, uri:" + uri, e);
            return null;
        }
    }


    @Override
    public int delete(@NonNull Uri uri, @Nullable String selection, String[] selectionArgs) {
        throw new UnsupportedOperationException("Not supported");
    }

    @Override
    public Uri insert(@NonNull Uri uri, ContentValues values) {
        throw new UnsupportedOperationException("Not supported");
    }

    @Override
    public int update(@NonNull Uri uri, ContentValues values, String selection,
                      String[] selectionArgs) {
        throw new UnsupportedOperationException("Not supported");
    }
}
