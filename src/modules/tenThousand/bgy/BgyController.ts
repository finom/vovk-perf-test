import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgy")
export default class BgyController {
  @operation({
    summary: "Get Bgy",
  })
  @get()
  static getBgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgy",
  })
  @post("{id}")
  static createBgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
