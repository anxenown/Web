import tkinter as tk
from time import strftime   #import necessary libraries for gui
def time():
    ctime = strftime('%H:%M:%S %p')
    cdate = strftime('%D:%B:%Y')           #digital clock function
    label_time.config(text= ctime)
    label_date.config(text= cdate)
    label_time.after(1000,time)    # function calling after 1 sec
root = tk.Tk()                             #ui
root.title('Digital Clock')                #title
label_time= tk.Label(root, font= ('calibri', 20, 'bold'), background= 'black', foreground= 'white')
label_time.pack(anchor= 'center')
label_date= tk.Label(root, font=('calibri', 10), background= 'black', foreground='white')
label_date.pack(anchor='center')                                                           #display
time()                                                                                     #function calling
root.mainloop()  