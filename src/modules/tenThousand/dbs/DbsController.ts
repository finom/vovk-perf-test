import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbs")
export default class DbsController {
  @operation({
    summary: "Get Dbs",
  })
  @get()
  static getDbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbs",
  })
  @post("{id}")
  static createDbs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
