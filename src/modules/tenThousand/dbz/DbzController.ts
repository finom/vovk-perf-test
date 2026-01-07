import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbz")
export default class DbzController {
  @operation({
    summary: "Get Dbz",
  })
  @get()
  static getDbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbz",
  })
  @post("{id}")
  static createDbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
