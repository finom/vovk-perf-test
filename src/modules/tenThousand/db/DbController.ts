import { procedure, prefix, get, post, operation } from "vovk";

@prefix("db")
export default class DbController {
  @operation({
    summary: "Get Db",
  })
  @get()
  static getDb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Db",
  })
  @post("{id}")
  static createDb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
