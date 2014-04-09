using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem_4___Kaspichania_Boats
{
    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            int boatWidth = 2*n + 1;
            int boatHeight = ((n - 3) / 2)*3 + 6;
            char[,] matrix = new char[boatHeight, boatWidth];
            BuildMatrix(boatWidth, boatHeight, matrix);
            matrix[0,n] = '*';
            for (int i = 0; i < boatWidth; i++)
            {
                matrix[n,i] = '*';
            }
            PrintMatrix(boatWidth, boatHeight, matrix); 
        }

        private static void BuildMatrix(int boatWidth, int boatHeight, char[,] matrix)
        {
            for (int row = 0; row < boatHeight; row++)
            {
                for (int col = 0; col < boatWidth; col++)
                {
                    matrix[row, col] = '.';
                }
            }
        }

        private static void PrintMatrix(int boatWidth, int boatHeight, char[,] matrix)
        {
            for (int row = 0; row < boatHeight; row++)
            {
                for (int col = 0; col < boatWidth; col++)
                {
                    Console.Write(matrix[row, col]);
                }
                Console.WriteLine();
            }
        }
    }
}
