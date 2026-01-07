import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvg")
export default class BvgController {
  @operation({
    summary: "Get Bvg",
  })
  @get()
  static getBvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvg",
  })
  @post("{id}")
  static createBvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
