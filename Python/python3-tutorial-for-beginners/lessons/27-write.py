# with open('files/write.txt', 'w') as write_file:
#     write_file.write('Hey there ninjas, python is awesome')
#     write_file.write('\nI love it so much, I dream in python')

# with open('files/write.txt', 'a') as write_file:
#     i = 1
#     while i <= 10:
#         write_file.write(f'\n {i}) I love it so much, I dream in python\n')
#         i += 1

#------------------------------------------------------------------------------#

quotes = [
    '\nI can resist everything except temptation',
    '\nWe are all in the gutter, but some of us are looking at the stars',
    '\nAlways forgive your enemies - nothing annoys them so much'
]

with open('files/write.txt', 'a') as write_file:
    write_file.writelines(quotes)