import openai

openai.api_key = 'your-api-key'

def generate_text(prompt, temperature, max_tokens, top_p):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        temperature=temperature,
        max_tokens=max_tokens,
        top_p=top_p
    )
    return response.choices[0].text.strip()
