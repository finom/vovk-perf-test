import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbp")
export default class DbpController {
  @operation({
    summary: "Get Dbp",
  })
  @get()
  static getDbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbp",
  })
  @post("{id}")
  static createDbp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
