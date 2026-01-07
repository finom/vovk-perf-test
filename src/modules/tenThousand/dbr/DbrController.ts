import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbr")
export default class DbrController {
  @operation({
    summary: "Get Dbr",
  })
  @get()
  static getDbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbr",
  })
  @post("{id}")
  static createDbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
