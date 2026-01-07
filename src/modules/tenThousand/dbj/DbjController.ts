import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbj")
export default class DbjController {
  @operation({
    summary: "Get Dbj",
  })
  @get()
  static getDbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbj",
  })
  @post("{id}")
  static createDbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
