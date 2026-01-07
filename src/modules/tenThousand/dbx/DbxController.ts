import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbx")
export default class DbxController {
  @operation({
    summary: "Get Dbx",
  })
  @get()
  static getDbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbx",
  })
  @post("{id}")
  static createDbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
