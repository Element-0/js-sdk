#!/bin/bash
flatc --ts --gen-object-api *.fbs
sed -i 's/import { flatbuffers } from "\.\/flatbuffers"/import \* as flatbuffers from "\.\/flatbuffers"/' *.ts
