import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csv")
export default class CsvController {
  @operation({
    summary: "Get Csv",
  })
  @get()
  static getCsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csv",
  })
  @post("{id}")
  static createCsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
