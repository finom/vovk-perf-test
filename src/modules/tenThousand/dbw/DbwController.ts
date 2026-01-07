import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbw")
export default class DbwController {
  @operation({
    summary: "Get Dbw",
  })
  @get()
  static getDbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbw",
  })
  @post("{id}")
  static createDbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
