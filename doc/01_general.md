[back](../README.md)

# General

## EditorConfig

[EditorConfig](http://editorconfig.org/) helps define and maintain consistent coding styles between different editors and IDEs ([supporting editors/IDEs](http://editorconfig.org/#download)).

Put the following ``.editorconfig`` file in your frontend application's root:

    # http://editorconfig.org

    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.{diff,md}]
    insert_final_newline = false
    trim_trailing_whitespace = false
