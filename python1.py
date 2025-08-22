# views.py

from django.http import JsonResponse


user_store = []


#in memory user store 
def add_user(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        user_store.append({'name':name, 'email':email})
    return JsonResponse({'users': user_store})    