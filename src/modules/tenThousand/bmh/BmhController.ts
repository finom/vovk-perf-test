import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmh")
export default class BmhController {
  @operation({
    summary: "Get Bmh",
  })
  @get()
  static getBmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmh",
  })
  @post("{id}")
  static createBmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
