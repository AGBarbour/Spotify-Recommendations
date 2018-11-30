import requests
import json

# function to grab data for user search input


def search(query):

    search = []

    access_token = "BQC4VH7_bnxMPNhjQIva5ARXwHYCaYXpNM-rBnke1XHExQbKmXC049Y7KpVraOyOcoa49WbGttRdo6t7BqZQRPRZRD_X6VJw0774lJSZSC7ZSjeSyviWqZcWYSuTDUIqC1C1aNma5AWfmq7YVbRfJJVDPzZnJvTas5Yv"

    #   Spotify API search endpoint returns list of tracks matching track title in order of popularity
    endpoint = f"https://api.spotify.com/v1/search?q={query}&type=track"
    headers = {"Authorization": f"Bearer {access_token}"}

    response = requests.get(endpoint, headers=headers).json()
    # print(response)

    song = response["tracks"]["items"][0]["name"]
    artist = response["tracks"]["items"][0]["artists"][0]["name"]
    album = response["tracks"]["items"][0]["album"]["name"]
    song_id = response["tracks"]["items"][0]["id"]

    search.append({
        "song": song,
        "artist": artist,
        "album": album,
        "song_id": song_id
    })
    print(search)
    return search

# function to grab song data for recomended songs (MUST PASS LIST THROUGH FUNCTION EVEN IF THE LIST IS 1 ITEM LONG)


def recommendation(song_ids):

    recs = []

    access_token = "BQAWd1ydMY2NUAMAOK2CNI_9wLaDACVYXuzhdcqi3I-feCB632aQRrLck64Z4tAq5iF2s8eiO427CU4L0OaQrzNrnaDUyKGcznh2xwfR9QnaFOL_oZofMCeBS6kqXKMB_etQqZA_zaUCKauUbmgWx4m8l5C9NyGZKFGK"

    for song_id in song_ids:
        #   Spotify API search endpoint returns list of tracks matching track title in order of popularity
        endpoint = f"https://api.spotify.com/v1/tracks/?ids={song_id}"
        headers = {"Authorization": f"Bearer {access_token}"}

        response = requests.get(endpoint, headers=headers).json()
#         print(response)

        song = response["tracks"][0]["name"]
        artist = response["tracks"][0]["artists"][0]["name"]
        album = response["tracks"][0]["album"]["name"]
        print(song)

        recs.append({
            "song": song,
            "artist": artist,
            "album": album
        })

    return recs

# function to gather features for a sing song


def features_call(song_id):

    features = []

    access_token = "BQAWd1ydMY2NUAMAOK2CNI_9wLaDACVYXuzhdcqi3I-feCB632aQRrLck64Z4tAq5iF2s8eiO427CU4L0OaQrzNrnaDUyKGcznh2xwfR9QnaFOL_oZofMCeBS6kqXKMB_etQqZA_zaUCKauUbmgWx4m8l5C9NyGZKFGK"


#     Call Spotify API to collect Audio features data
    endpoint = f"https://api.spotify.com/v1/audio-features/{song_id}"
<<<<<<< HEAD
    headers = {"Authorization":f"Bearer {access_token}"}
    response = requests.get(endpoint,headers=headers).json()
=======
    headers = {"Authorization": f"Bearer {access_token}"}

    response = requests.get(endpoint, headers=headers).json()
>>>>>>> origin/Evan

#     Append each feature
    features.append({
        "id": response["id"],
        "key": response["key"],
        "mode": response["mode"],
        "danceability": response["danceability"],
        "energy": response["energy"],
        "loudness": response["loudness"],
        "speechiness": response["speechiness"],
        "tempo": response["tempo"],
        "acousticness": response["acousticness"],
        "instrumentalness": response["instrumentalness"],
        "liveness": response["liveness"],
        "valence": response["valence"]
    })

    return features
