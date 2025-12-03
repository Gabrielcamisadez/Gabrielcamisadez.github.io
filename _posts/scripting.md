
# Table of Contents

1.  [Kernel ->](#org3f2ce12)
2.  [Shell ->](#org6747b71)
    1.  [Command-Line Shell](#org198b1bf)
        1.  [Terminal](#orge74ad13)
3.  [Shell Scripting](#org41e4b7e)
    1.  [Multi-Line comments](#org6627a80)
    2.  [Variables](#orgf048079)
    3.  [Conditional Statements](#org2fe88b7)
    4.  [Loops](#org12d5fe7)
4.  [Basic Linux Commands ->](#orge31ce62)
5.  [Input and Output Redirection](#orga3c826a)
    1.  [Types of Redirection](#orgd66cb3f)
    2.  [Append Redirection](#org554b0fa)
6.  [Variables](#orge2538a2)
    1.  [Defining Variables](#org1bc6408)
    2.  [Accessing Variables](#org16ee400)
    3.  [Deleting a Variables](#orgf2e7bf4)
    4.  [Read-Only Variables](#org6864f08)
    5.  [Types of Variables](#org4e8385b)
7.  [Strings](#org67870ab)
8.  [Arrays](#orgc3896be)
9.  [Conditional Statements](#org18e0bed)
10. [Functions](#org77ef820)
11. [Arguments and Special Parameters](#orge50154a)
12. [Special Parameters](#org564874a)
13. [Examples](#org935beb6)

The shell, a fundamental part of Linux operating systems, allows users to manage their systems through the terminal on various distributions such as Ubuntu, Debian, CentoOS, SUSE&#x2026;


<a id="org3f2ce12"></a>

# Kernel ->

The kernel is like the brain of a computer; it resides at the heart of the operating system and is responsible for managing all activities within the system.

The kernel manages a set of critical resources that are the building blocks of the Linux operating system:

-   Organization and accessibility of files,
-   Initialization, management, and termination of processes,
-   Handling of input and output operations,
-   Efficient use of memory,
-   Communication between various devices.
    
    Like an orchestra conductor, these tasks ensure the system works in harmony and that the computer performs many complex functions in an organized manner.


<a id="org6747b71"></a>

# Shell ->

The shell is an important tool that allows a user to interact with the operating system. It serves as a bridge between you and the computer&rsquo;s kernel, understanding your language and converting your instructions into a format the computer can understand.

Commands entered from the keyboard or instructions taken from files are made comprehensible to the operating system through the shell.

It automatically comes into action when a user opens a terminal or logs into their computer.

![img](./imgs/kr.png)


<a id="org198b1bf"></a>

## Command-Line Shell

This type of shell allows users to interact with the operating system using text-based commands. Commands are entered via the keyboard and enable the execution of various tasks and operations.

Commands are given through a &ldquo;Terminal&rdquo; application on Linux or macOS, and through the &ldquo;Command Prompt&rdquo; on Windows. Users can list files (ls), view file contents (cat), and perform many other tasks


<a id="orge74ad13"></a>

### Terminal

The terminal opens a window to use the shell in your computer&rsquo;s operating system and is a powerful program that allows direct dialogue with the system.

Essentially, it enables users to enter written commands and see the results of these commands through a text-based interface.

The difference between a terminal and a shell; the shell is the background engine that processes commands, while the terminal is the interface that allows you to interact with this engine.


<a id="org41e4b7e"></a>

# Shell Scripting

Shell scripts are sequences of shell commands collected in a file and executed with a single command. This is particularly useful for automating repetitive tasks and simplifying processes.

Instead of writing the same command sequence repeatedly, you can easily manage the entire process with a shell script.

Shell scripts have a structure similar to other programming languages and include the following elements:

-   Shell Keywords: Includes structures like if, else, break.
-   Shell Commands: Uses basic Unix/Linux commands like cd, ls, echo, pwd, touch.
-   Functions: Groups repeated code blocks functionally.
-   Control Flow Structures: Includes structures like if..then..else, case, and loops.

    #!/bin/bash
    
    # comment
    
    echo "Hello, World!"

**#!/bin/bash** ->
This is the shebang line. It specifies which shell interpreter should be used to run the script. It tells the system that this script should be executed with bash.

**# comment** ->
This line is a comment, and comment lines start with the # symbol. Comments are ignored by the bash interpreter and are used to explain what the script or code does.


<a id="org6627a80"></a>

## Multi-Line comments

In some cases, your explanation may need to span multiple lines. Multi-line comments are used for such situations. In shell scripting, multi-line comments start with : &rsquo; and end with &rsquo;.

    : '
    This is a multi-line comment
    Each line will be treated as a comment
    '


<a id="orgf048079"></a>

## Variables

In shell scripting, we use variable structures to store and manage data. Unlike some programming languages, you do not need to specify the type of a variable before using it

**System-Defined Variables** ->
These variables are defined by the system itself and are usually written in uppercase letters. They are also known as environment variables and contain important information about the system.

For example, you can view all available environment variables using the `printenv` command.

**User-Defined variables** ->
These variables are created by the user writing the script and only exist for the duration the code is executed.

To define a variable, write the variable name and assign it a value using the = sign. To access a variable, prefix the variable name with the $ sign.

    #!/bin/bash
    
    # Accessing an Environment Variable
    echo $PATH
    
    # Defining a variable
    name="Alex"
    number=19
    
    echo $name
    echo "Number: $number"

When writing scripts, you may often need to compare the values of variables. Basic comparison operators you can use in shell scripting:

**Integer Comparison** ->

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Operator</td>
<td class="org-left">Description</td>
</tr>

<tr>
<td class="org-left">-eq</td>
<td class="org-left">Checks if two variables are equal.</td>
</tr>

<tr>
<td class="org-left">-ne</td>
<td class="org-left">Checks if two variables are not equal.</td>
</tr>

<tr>
<td class="org-left">-gt</td>
<td class="org-left">Checks if the variable on the left is greater than the variable on the right.</td>
</tr>

<tr>
<td class="org-left">-ge</td>
<td class="org-left">Checks if the variable on the left is greater than or equal to the variable on the right.</td>
</tr>

<tr>
<td class="org-left">-lt</td>
<td class="org-left">Checks if the variable on the left is less than the variable on the right.</td>
</tr>

<tr>
<td class="org-left">-le</td>
<td class="org-left">Checks if the variable on the left is less than or equal to the variable on the right.</td>
</tr>
</tbody>
</table>

**String Comparison** ->

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Operator</td>
<td class="org-left">Description</td>
</tr>

<tr>
<td class="org-left">==</td>
<td class="org-left">Checks if two strings are equal.</td>
</tr>

<tr>
<td class="org-left">!=</td>
<td class="org-left">Checks if two strings are not equal.</td>
</tr>

<tr>
<td class="org-left">&lt;</td>
<td class="org-left">Checks if one string is less than another string in alphabetical order.</td>
</tr>

<tr>
<td class="org-left">&gt;</td>
<td class="org-left">Checks if one string is greater than another string in alphabetical order.</td>
</tr>
</tbody>
</table>

Remember that when using < and > operators, these characters may be specially recognized by the shell. Therefore, when used within the [ ] structure, they should be prefixed with the escape character \\.


<a id="org2fe88b7"></a>

## Conditional Statements

Conditional statements allow you to execute specific code blocks if certain conditions are met. Shell scripting supports such conditional statements and allows you to check conditions through comparison operators.

**IF** ->

    #!/bin/bash
    
    a=10
    b=10
    if [ $a -eq $b ]
    then
        echo "Equal"
    fi

Note: When using conditional statements, remember to leave a space before and after the condition within the brackets [ ]. Otherwise, you may encounter an error when running the script.


<a id="org12d5fe7"></a>

## Loops

Loops are structural commands that allow a set of commands to be executed repeatedly until a certain condition is met. Various loop structures can be used in shell scripts

**While Loop** ->
A while loop executes the specified commands as long as the condition is true. The loop ends when the condition is false.

    #!/bin/bash
    
    number=1
    while [ $number -lt 5 ]
    do
        echo $number
        number=`expr $number + 1`
    done

**For Loop** ->
A for loop allows a variable to iterate over a list of values or a range of values.

    #!/bin/bash
    
    for number in 4 8 12 20 25 30
    do
    echo $number
    done


<a id="orge31ce62"></a>

# Basic Linux Commands ->

Linux terminal commands are frequently used in shell scripts. Let&rsquo;s take a look at some commonly used general Linux commands that we can use in scripts.

**Extracting, Sorting, and Filtering Data** ->

-   grep: Searches for specific text within files. For example, grep &ldquo;blue&rdquo; colors.txt searches for the word blue in colors.txt and displays matching lines.

-   sort: Sorts the content of a file alphabetically or numerically. For example, sort file.txt sorts the lines in file.txt alphabetically and prints them to the screen.

-   wc (word count): Counts the number of lines, words, and characters in a file. For example, wc file.txt displays the line, word, and character counts of file.txt.

-   cut: Extracts specific fields or columns from text files. Particularly useful for extracting specific columns or fields from a file. For example, cut -d&ldquo;,&rdquo; -f1 file.csv extracts and displays the first column from each line in file.csv, assuming comma-separated values.

**File Permission Commands** ->

-   chown [user]:[group] [file]: Changes the ownership of a file or directory. This command can change the owner and optionally the group ownership of the specified file.

-   chgrp [group] [file]: Changes the group ownership of a file or directory. This command transfers the group ownership of the specified file to the new specified group.

-   chmod [permissions] [file]: Changes the access permissions of files and directories. Permissions can affect the owner (user), group, and others, and control the read (r), write (w), and execute (x) rights.


<a id="orga3c826a"></a>

# Input and Output Redirection

In Linux, when a user runs a command, these commands can take input, produce output, or do both. The redirection feature allows us to direct these inputs and outputs to specific files or directories as needed.

For example, when the &ldquo;date&rdquo; command is run, it outputs the current date and time to the screen. However, if we want to save this output to a file, output redirection comes into play.

By redirecting the output of the &ldquo;date&rdquo; command to a file, we can access this information later. Such redirections are very useful when working with multiple and large inputs or outputs because it allows us to use file contents directly as input and easily store the results of operations in files.


<a id="orgd66cb3f"></a>

## Types of Redirection

**Overwrite Redirection** ->
Used when you wish to save the output of a command to a file and replace all existing content of that file. For example, if you are running a command that generates a report and you want to save this report to an existing file containing the previous report, you use overwrite redirection.

**>** is used for standard output.

**<** is used for standard input.

Running the following command will redirect the output that should appear on the screen to the &ldquo;output.txt&rdquo; file. This is standard output redirection.

    echo "standard output redirection" > output.txt

Equivalen t

    cat output.txt
    
    cat < output.txt


<a id="org554b0fa"></a>

## Append Redirection

Append redirection allows you to add the output to the file while preserving the existing content.

**>>** ->
Appends standard output to the file while preserving the existing content.

**<<** ->
 Redirects standard input to a command using a specific delimiter (here-document).

A here-document is used to provide input interactively in a script without user intervention. This allows scripts to run programs without user interaction.

The general format for here-document is as follows:

    command << end
    > text
    end

![img](./imgs/append.png)

Append to an existent document ->

    echo "test" >> output.txt


<a id="orge2538a2"></a>

# Variables

A variable is a structure used to store values. Variables can hold any type of information such as a number, a word, a sentence, or a file path. Essentially, a variable allows us to access data stored in memory by name.

**Variable Naming Rules** ->

-   A variable name can include letters (a-z, A-Z), numbers (0-9), and the underscore (\_) character.
-   A variable name must start with a letter or an underscore; it cannot start with a number.

    variable
    _variable2
    variable123

    2_var  # cannot start with a number
    !VAR1  # contains a special character
    $VAR2  # contains a special character
    &VAR3  # contains a special character


<a id="org1bc6408"></a>

## Defining Variables

    number="10"
    name="lucy"


<a id="org16ee400"></a>

## Accessing Variables

A variable is accessed by prefixing the variable name with the $ symbol.

    #!/bin/bash
    
    name="jacky"
    animal="monkey"
    
    echo "Name: $name"
    echo "Animal: $animal"


<a id="orgf2e7bf4"></a>

## Deleting a Variables

The `unset` command removes a variable and its value from the list of variables.

    #!/bin/bash
    
    name="jacky"
    echo "Name: $name"
    
    unset name
    echo "variable removed"
    
    echo "Name: $name"


<a id="org6864f08"></a>

## Read-Only Variables

While writing scripts, you may want some variables&rsquo; values to remain constant. These variables cannot be changed later and are marked as &ldquo;readonly.&rdquo;

    #!/bin/bash
    
    pi=3.14
    readonly pi
    echo "$pi"
    
    pi=5
    echo "$pi"


<a id="org4e8385b"></a>

## Types of Variables

**Local Variables** ->
Local variables are valid only within the shell session or script in which they are defined. They cannot be accessed by other programs or subshells. Local variables are used to store temporary data within a script.

    name="Joe"

**Environment Variables** ->
Environment variables can affect the behavior of programs initiated by the shell. They are globally accessible across the system and are often used to share information between the shell and applications.

    export PATH=/usr/local/bin:$PATH

This command adds the /usr/local/bin directory to the beginning of the shell&rsquo;s search paths, allowing programs in this directory to be executed directly by their names.

**Shell Variables** ->
Shell variables are automatically defined by the shell and are used to ensure the shell functions correctly. Both local and environment variables can fall under this category.

-   $PWD holds the path of the current working directory.
-   $HOME holds the path of the user&rsquo;s home directory.
-   $SHELL indicates the path of the active shell program.


<a id="org67870ab"></a>

# Strings

String operations involve performing actions on text to achieve various results.

**Assigning Content to a Variable and Printing it** ->
In Bash, the $ sign is used to print the value of a variable. In the shell, this is called parameter expansion, which automatically replaces the variable with its value. In shell scripting, the type of variables is irrelevant; they can hold strings, integers, or decimal numbers.

    variable_name='value'
    echo $variable_name
    # or
    variable_name="value"
    echo ${variable_name}
    # or
    variable_name=value
    echo "$variable_name"

Note: When assigning a value to a variable, there should be no space around the = sign. In variable<sub>name</sub>=value, the shell treats = as the assignment operator and assigns the value to the variable.

**Finding the Length of a String** ->
To determine the length of a string, use the # symbol.

    #!/bin/bash
    
    title='cybersecurity'
    echo ${title}
    echo ${#title}

![img](./imgs/hashtag.png)

**Concatenating Strings** ->
In Bash, you can concatenate strings to combine them into a new string.

    var=${var1}${var2}${var3}
    or
    var=$var1$var2$var3
    or
    var="$var1""$var2""$var3"

Note: Avoid using var=&ldquo;$var1 $var2 $var3&rdquo; for concatenating strings with spaces. In this case, the shell might interpret $var2 and $var3 as separate commands, leading to unexpected errors.

**Extracting a Substring from a String** ->
Bash offers useful features to extract specific sections (substrings) from a string.

    ${string_variable:position}

    #!/bin/bash
    
    title="Introduction to Bash Scripting"
    echo ${title:7}

![img](./imgs/cut.png)


<a id="orgc3896be"></a>

# Arrays

If we need to store and manipulate 5000 pieces of data, defining 5000 separate variables is impractical. Instead, we can use arrays to store similar types of values together in a single array and access these values using index numbers.

An array is a data structure used to store multiple values of the same or different types together. Array indices start from 0. Thus, we can access the first element of the array with an index of 0.

    array_name[index]=value

There are multiple ways to print array elements. Below is an example demonstrating how to print array elements using various methods in an array<sub>example.sh</sub> script.

    #!/bin/bash
    
    # Array definition
    arr=("1" "2" "Blue" "Red" "Yellow" "Blue")
    
    # Printing all elements of an array
    echo "All elements of the array:"
    echo "${arr[@]}"
    echo "${arr[*]}"
    
    # First element
    echo "First element:"
    echo "${arr[0]}"
    
    # Specific element
    selected_index=3
    echo "Selected index: $selected_index"
    echo "${arr[$selected_index]}"
    
    # Printing all elements from a specific index
    echo "All elements from a given index:"
    echo "${arr[@]:2}"
    echo "${arr[*]:2}"
    
    # Printing elements in a specific range
    echo "Elements in a given range:"
    echo "${arr[@]:1:3}"
    echo "${arr[*]:1:3}"


<a id="org18e0bed"></a>

# Conditional Statements

In programming, we can use conditional statements to ensure that the code follows different paths based on specific conditions.

-   if Statement
-   if-else Statement
-   if..elif..else..fi Statement
-   case (switch) Statement

**If** ->

    #!/bin/bash
    
    # Check if the number is greater than 10
    number=15
    
    if [ $number -gt 10 ]; then
      echo "The number is greater than 10."
    fi

**If-else** ->
Runs alternative commands if the specified condition is not true.

    #!/bin/bash
    
    # Check if the number is even
    number=5
    
    if [ $((number % 2)) -eq 0 ]; then
      echo "The number is even."
    else
      echo "The number is odd."
    fi

**if..elif..else..fi Statement** ->
Used to check multiple conditions and run different commands for each. Conditions are evaluated in order, and the commands of the first true condition are executed.

    #!/bin/bash
    
    # Check if the number is positive, negative, or zero
    number=-5
    
    if [ $number -gt 0 ]; then
      echo "The number is positive."
    elif [ $number -lt 0 ]; then
      echo "The number is negative."
    else
      echo "The number is zero."
    fi

**case statement** ->
Used to execute different commands based on different possible values of a specific variable. It is similar to the switch-case structure in other programming languages.

    #!/bin/bash
    
    # Print a message based on the day of the week
    day="Monday"
    
    case $day in
      Monday)
        echo "It's Monday, the beginning of the week."
        ;;
      Friday)
        echo "It's Friday, the end of the workweek."
        ;;
      Saturday|Sunday)
        echo "It's the weekend!"
        ;;
      *)
        echo "It's a regular day."
        ;;
    esac

**loop statements** ->
In Bash programming, we can use three main loop structures for repetitive tasks:

-   while Loop
-   for Loop
-   until Loop
    
    Two keywords are used to control the flow of loops.

-   **break**: Used to exit the current loop.
-   **continue**: Skips the current iteration of the loop and proceeds to the next iteration.
    
    A while loop executes commands as long as the specified condition is true. The loop terminates when the condition becomes false.
    
        #!/bin/bash
        
        # Initialize a counter
        counter=1
        
        # Loop will run while counter is less than or equal to 5
        while [ $counter -le 5 ]
        do
          echo "Counter value: $counter"
          # Increment the counter
          counter=$((counter + 1))
        done

A for loop is used to iterate over a specified list. The list can be an array of elements, a range of numbers, or a list of files.

    #!/bin/bash
    
    # Loop through a list of strings
    for name in Alice Bob Charlie
    do
      echo "Hello, $name!"
    done

An until loop is the opposite of a while loop. It executes commands as long as the specified condition is false. The loop terminates when the condition becomes true.

    #!/bin/bash
    
    # Initialize a counter
    counter=1
    
    # Loop will run until counter is greater than 5
    until [ $counter -gt 5 ]
    do
      echo "Counter value: $counter"
      # Increment the counter
      counter=$((counter + 1))
    done


<a id="org77ef820"></a>

# Functions

A function is a collection of commands or statements that perform a specific task. The main purpose of functions is to divide complex processes into more manageable, reusable, and modular subunits. With functions:

-   Code can be reused.
-   Program readability is enhanced.
-   Software becomes modular.
-   Maintenance becomes easier.

    #!/bin/bash
    
    greetings(){
        echo "Hello"
    }
    
    greetings
    greetings
    greetings

**Passing Parameters to a FUnction** ->
We can pass values to functions as parameters.

    #!/bin/bash
    
    math_multiplication(){
        result=$(($1 * $2))
        echo $result
    }
    
    math_multiplication 5 8

**Functions Returning Values** ->
These types of functions return a value to the calling function using the return keyword.

    #!/bin/bash
    
    math_addition(){
        result=$(($1 + $2))
        return $result
    }
    
    math_addition 50 10
    echo "Result of addition: $?"


<a id="orge50154a"></a>

# Arguments and Special Parameters

When running a script, we can provide arguments right after the script&rsquo;s name. We can send as many arguments as we want, separated by spaces.

**sendind arguments to a script** ->

    ./script.sh arg1 arg2 arg3 argN

**using arguments** ->
Now, let&rsquo;s see how to access the provided arguments within the script. Each argument can be accessed sequentially starting from $1, with subsequent arguments being $2, $3, $4, and so on.

    #!/bin/bash
    
    echo "Arg1: $1"
    echo "Arg2: $2"
    echo "Arg3: $3"


<a id="org564874a"></a>

# Special Parameters

Let&rsquo;s explore special parameters used in shell scripting. Special parameters are pre-defined and read-only variables provided by the shell.

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-left">Special Parameter</td>
<td class="org-left">Description</td>
</tr>

<tr>
<td class="org-left">$#</td>
<td class="org-left">Represents the number of arguments passed to the script.</td>
</tr>

<tr>
<td class="org-left">$0</td>
<td class="org-left">Represents the name of the script.</td>
</tr>

<tr>
<td class="org-left">$1</td>
<td class="org-left">Represents the first argument passed to the script, continuing sequentially as $1, $2, etc.</td>
</tr>

<tr>
<td class="org-left">$*</td>
<td class="org-left">Represents all arguments passed to the script separated by spaces.</td>
</tr>

<tr>
<td class="org-left">$!</td>
<td class="org-left">Represents the PID of the last background process.</td>
</tr>

<tr>
<td class="org-left">$?</td>
<td class="org-left">Represents the exit status of the last executed command.</td>
</tr>

<tr>
<td class="org-left">$_</td>
<td class="org-left">Represents the last argument of the previous command.</td>
</tr>

<tr>
<td class="org-left">$$</td>
<td class="org-left">Represents the PID of the current shell.</td>
</tr>

<tr>
<td class="org-left">$@</td>
<td class="org-left">Represents all arguments passed to the script as an array, similar to $*.</td>
</tr>
</tbody>
</table>

    #!/bin/bash
    
    echo "Number of arguments passed: $#"
    echo "Script name is $0"
    echo "The 2nd argument passed is: $2"
    echo "Arguments passed to script are: $*"
    echo "Last argument provided to previous command: $_"
    echo "PID of current shell is: $$"


<a id="org935beb6"></a>

# Examples

**Log Analysis** ->
Let&rsquo;s create a simple script to analyze Apache web logs.

    #!/bin/bash
    
    LOG_FILE="/var/log/apache2/access.log"
    
    echo "Most Visited Pages"
    awk '{print $7}' $LOG_FILE | sort | uniq -c | sort -nr | head -5
    
    echo "IP Addresses Generating the Most Traffic"
    awk '{print $1}' $LOG_FILE | sort | uniq -c | sort -nr | head -5

**Backup** ->

    #!/bin/bash
    
    # Simple Backup Script
    
    source_directory="/var/log/apache2"
    
    backup_directory="/backup"
    
    timestamp=$(date +"%Y-%m-%d_%H-%M-%S")
    
    backup_filename="backup_$timestamp.tar.gz"
    
    echo "Starting backup of $source_directory to $backup_directory/$backup_filename"
    
    tar -czf $backup_directory/$backup_filename $source_directory
    
    if [ $? -eq 0 ]; then
        echo "Backup completed successfully."
    else
        echo "Backup failed."
    fi

