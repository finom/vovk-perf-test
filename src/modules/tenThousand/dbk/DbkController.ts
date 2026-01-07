import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbk")
export default class DbkController {
  @operation({
    summary: "Get Dbk",
  })
  @get()
  static getDbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbk",
  })
  @post("{id}")
  static createDbk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
