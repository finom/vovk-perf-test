import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbq")
export default class DbqController {
  @operation({
    summary: "Get Dbq",
  })
  @get()
  static getDbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbq",
  })
  @post("{id}")
  static createDbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
