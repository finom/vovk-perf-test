import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbm")
export default class DbmController {
  @operation({
    summary: "Get Dbm",
  })
  @get()
  static getDbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbm",
  })
  @post("{id}")
  static createDbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
