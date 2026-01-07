import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmz")
export default class BmzController {
  @operation({
    summary: "Get Bmz",
  })
  @get()
  static getBmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmz",
  })
  @post("{id}")
  static createBmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
