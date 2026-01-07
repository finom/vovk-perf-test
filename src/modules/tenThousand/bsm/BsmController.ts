import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsm")
export default class BsmController {
  @operation({
    summary: "Get Bsm",
  })
  @get()
  static getBsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsm",
  })
  @post("{id}")
  static createBsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
