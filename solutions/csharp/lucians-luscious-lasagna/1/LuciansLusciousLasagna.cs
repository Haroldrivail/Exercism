class Lasagna
{
    // TODO: define the 'ExpectedMinutesInOven()' method
    public int ExpectedMinutesInOven()
    {
        return 40;
    }
    // TODO: define the 'RemainingMinutesInOven()' method
    public int RemainingMinutesInOven(int minute)
    {
        return this.ExpectedMinutesInOven() - minute;
    }
    // TODO: define the 'PreparationTimeInMinutes()' method
    public int PreparationTimeInMinutes(int number)
    {
        return number * 2;
    }
    // TODO: define the 'ElapsedTimeInMinutes()' method
    public int ElapsedTimeInMinutes(int number, int minute)
    {
        return this.PreparationTimeInMinutes(number) + minute;
    }
}
