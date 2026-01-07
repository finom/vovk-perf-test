import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbf")
export default class DbfController {
  @operation({
    summary: "Get Dbf",
  })
  @get()
  static getDbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbf",
  })
  @post("{id}")
  static createDbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
