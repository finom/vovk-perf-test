import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbv")
export default class DbvController {
  @operation({
    summary: "Get Dbv",
  })
  @get()
  static getDbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbv",
  })
  @post("{id}")
  static createDbv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
