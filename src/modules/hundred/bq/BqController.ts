import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bq")
export default class BqController {
  @operation({
    summary: "Get Bq",
  })
  @get()
  static getBq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bq",
  })
  @post("{id}")
  static createBq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
