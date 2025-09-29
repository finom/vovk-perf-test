import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csvs")
export default class CsvController {
  @operation({
    summary: "Get Csvs",
  })
  @get()
  static getCsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csv",
  })
  @post("{id}")
  static createCsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
