import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsz")
export default class BszController {
  @operation({
    summary: "Get Bsz",
  })
  @get()
  static getBsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsz",
  })
  @post("{id}")
  static createBsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
