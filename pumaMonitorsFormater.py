import csv

datafile = open('uwLayer2.csv','r')
myreader = csv.reader(datafile)
with open('uwLayer2Monitors.ini', 'w') as outfile:
    for row in myreader:
        outfile.write(f'['+row[0]+']\n' +'type=host\n' +'host='+ row[1]+'\n' + 'tolerance=0'+'\n'+'\n')