static class LogLine
{
    public static string Message(string logLine)
    {
        return logLine.Replace("[INFO]:", " ").Replace("[WARNING]:", " ").Replace("[ERROR]:", " ").Trim();
    }

    public static string LogLevel(string logLine)
    {
        if(logLine.ToLower().Contains("info"))
        {
            return "info";
        }
        else if(logLine.ToLower().Contains("warning"))
        {
            return "warning";
        }
        else if(logLine.ToLower().Contains("error"))
        {
            return "error";
        }
        else
        {
            return "";
        }
    }

    public static string Reformat(string logLine)
    {
        return $"{Message(logLine)} ({LogLevel(logLine)})";
    }
}
