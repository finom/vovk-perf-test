import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbg")
export default class DbgController {
  @operation({
    summary: "Get Dbg",
  })
  @get()
  static getDbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbg",
  })
  @post("{id}")
  static createDbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
