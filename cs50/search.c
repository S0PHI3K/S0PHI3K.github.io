#include <stdio.h>
#include <string.h>

// example of a linear search 
int main (void)
{
    int numbers[] = {20, 500, 10, 5, 100, 1, 50};

    int n = get_int("Number: ");
    for (int i = 0; i < 7; i++)
    {
        if (number[i] == n)
        { printf("Found\n");
        return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

int main (void)
{
    string strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "top hat"}

    string s = get_string("String: ");
    for (int i = 0; i < 7; i++)
    {
        if (strcmp(strings[i], s) == 0)
        { printf("Found\n");
        return 0;
        }
    }
    printf("Not found\n");
    return 1;
}