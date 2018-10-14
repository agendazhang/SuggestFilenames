PDF Name Suggester
==
## How to use the extension

1. Visit a webpage that ends with .pdf
2. Load the extension
3. Suggested names based on the metadata of the pdf file will be shown in the respective text boxes
4. Click on the checkbox to append that name into the final text box. Unclick to remove that name. The order of the clicking of the checkboxes are important
5. You can also manually edit the final text box if you are not satisfied with the suggested names
5. Click on "Save To" to choose the directory to save the pdf file. The name of the file is same as the one in the final text box. Final text box cannot be empty to execute "Save To"

## Options

Extensions -> Save text to file -> Options

1. Filename prefix

        `custom-prefix--`.txt

2. Add date or epoch to filename

Output using each of the different options:

    custom-prefix--`1514072979`.txt
    custom-prefix--`20012017`.txt
    custom-prefix--`01202017`.txt
    custom-prefix--`20170120`.txt
    custom-prefix--`20172001`.txt
    custom-prefix--.txt

3. Save current URL in file

Whether to include the current URL at the top of the saved file.

4. Show directory selection dialog

Whether user can select an alternative directory and/or filename before text is saved.

5. Show notifications

Whether notifications are displayed every-time text is saved.

6. If file exists

    Uniquify

        To avoid duplication, the filename is changed
        to include a counter before the filename extension.

    Overwrite

        The existing file will be overwritten with the new file.

    Prompt

        The user will be prompted with a file chooser dialog.
