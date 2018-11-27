import requests

def search(query):

    search = []

    access_token = "BQDIjDSlYMncceYFPKZeTuXcWF8ODHP9q88zlpB3zoOhIombaWanp2jT7yf8VWIUHIkUqaiqHxYmu3q_C0nofmuFh2reKdLRMsBxvBbifYAPHhZCd0YcFGOlm6FwKnIw7GgAQDqSrqAMk5WbshUvX27-gAHkcz3Jg0WP"

    #   Spotify API search endpoint returns list of tracks matching track title in order of popularity
    endpoint = f"https://api.spotify.com/v1/{query}"
    headers = {"Authorization":f"Bearer {access_token}"}

    response = requests.get(endpoint,headers=headers).json()

    song = response["name"]
    artist = response["name"]
    album = response["name"]

    search.append({
        "song": song,
        "artist": artist,
        "album": album
    })

    return search

def recommendation(song_ids):

    recs = []

    access_token = "BQDIjDSlYMncceYFPKZeTuXcWF8ODHP9q88zlpB3zoOhIombaWanp2jT7yf8VWIUHIkUqaiqHxYmu3q_C0nofmuFh2reKdLRMsBxvBbifYAPHhZCd0YcFGOlm6FwKnIw7GgAQDqSrqAMk5WbshUvX27-gAHkcz3Jg0WP"

    for song_id in song_ids:
    #   Spotify API search endpoint returns list of tracks matching track title in order of popularity
        endpoint = f"https://api.spotify.com/v1/audio-features/{song_id}"
        headers = {"Authorization":f"Bearer {access_token}"}

        response = requests.get(endpoint,headers=headers).json()

        song = response["name"]
        artist = response["name"]
        album = response["name"]

        recs.append({
            "song": song,
            "artist": artist,
            "album": album
        })

    return recs

