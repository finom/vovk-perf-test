import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bds")
export default class BdsController {
  @operation({
    summary: "Get Bds",
  })
  @get()
  static getBds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bds",
  })
  @post("{id}")
  static createBds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
