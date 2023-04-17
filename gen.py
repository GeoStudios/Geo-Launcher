f=open("Generate", "w")
f.write("{")
for i in range(120):
    f.write('''    "program'''+str(i+1)+'''": "./programs/prgm'''+str(i+1)+'''/prgm.exe",\n''')
f.write("}")