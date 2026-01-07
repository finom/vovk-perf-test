import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bph")
export default class BphController {
  @operation({
    summary: "Get Bph",
  })
  @get()
  static getBph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bph",
  })
  @post("{id}")
  static createBph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
