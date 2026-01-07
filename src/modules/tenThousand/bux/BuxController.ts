import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bux")
export default class BuxController {
  @operation({
    summary: "Get Bux",
  })
  @get()
  static getBux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bux",
  })
  @post("{id}")
  static createBux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
