import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmd")
export default class BmdController {
  @operation({
    summary: "Get Bmd",
  })
  @get()
  static getBmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmd",
  })
  @post("{id}")
  static createBmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
