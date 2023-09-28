#include <cs50.h>
// The above is a cs50 library that needs to be downloaded separately, to allow the string variable 
#include <stdio.h>
// include standard io.h

int main (void)
{
    
    string first = get_string("What's your first name? ");
    string last = get_string("What's your last name? ");
    printf("hello, %s %s!\n", first, last);
}
