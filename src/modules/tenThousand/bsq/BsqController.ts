import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsq")
export default class BsqController {
  @operation({
    summary: "Get Bsq",
  })
  @get()
  static getBsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsq",
  })
  @post("{id}")
  static createBsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
