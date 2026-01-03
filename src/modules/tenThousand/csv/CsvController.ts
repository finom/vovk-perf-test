import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csvs")
export default class CsvController {
  @operation({
    summary: "Get Csvs",
  })
  @get()
  static getCsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csv",
  })
  @post("{id}")
  static createCsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
