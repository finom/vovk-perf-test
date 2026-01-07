import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bts")
export default class BtsController {
  @operation({
    summary: "Get Bts",
  })
  @get()
  static getBts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bts",
  })
  @post("{id}")
  static createBts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
