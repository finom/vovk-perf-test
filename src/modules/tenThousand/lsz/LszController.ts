import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsz")
export default class LszController {
  @operation({
    summary: "Get Lsz",
  })
  @get()
  static getLsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsz",
  })
  @post("{id}")
  static createLsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
