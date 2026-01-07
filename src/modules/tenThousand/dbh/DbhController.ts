import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbh")
export default class DbhController {
  @operation({
    summary: "Get Dbh",
  })
  @get()
  static getDbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbh",
  })
  @post("{id}")
  static createDbh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
