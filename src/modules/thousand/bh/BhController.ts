import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bh")
export default class BhController {
  @operation({
    summary: "Get Bh",
  })
  @get()
  static getBh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bh",
  })
  @post("{id}")
  static createBh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
