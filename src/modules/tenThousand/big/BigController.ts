import { procedure, prefix, get, post, operation } from "vovk";

@prefix("big")
export default class BigController {
  @operation({
    summary: "Get Big",
  })
  @get()
  static getBig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Big",
  })
  @post("{id}")
  static createBig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
