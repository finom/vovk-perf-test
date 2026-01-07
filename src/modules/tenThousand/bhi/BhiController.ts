import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhi")
export default class BhiController {
  @operation({
    summary: "Get Bhi",
  })
  @get()
  static getBhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhi",
  })
  @post("{id}")
  static createBhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
