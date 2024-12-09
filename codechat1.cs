using System;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        int result = 0;
        foreach (int num in arr)
        {
            result += num;
        }
        return result;
    }

    static int[] GetUserInput(int n)
    {
        int[] arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            while (true)
            {
                Console.Write($"Element {i + 1}: ");
                if (int.TryParse(Console.ReadLine(), out arr[i]))
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a valid integer.");
                }
            }
        }
        return arr;
    }

    static void Main()
    {
        int n;
        Console.Write("Enter the number of elements (1-100): ");
        while (!int.TryParse(Console.ReadLine(), out n) || n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
        }

        int[] arr = GetUserInput(n);
        int total = Sum(arr);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}