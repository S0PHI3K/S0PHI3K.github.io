#include <cs50.h>
#include <stdio.h>

int main (void)
{
    int x = get_int("x: ");
    int y = get_int("y: ");

    printf("∞i\n", x + y);
}

int main (void)
{
    long x = get_long("x: ");
    long y = get_long("y: ");

    float z = (float) x / (float) y;
    printf("∞f\n", z);
}