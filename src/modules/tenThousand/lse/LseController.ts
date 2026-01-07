import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lse")
export default class LseController {
  @operation({
    summary: "Get Lse",
  })
  @get()
  static getLse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lse",
  })
  @post("{id}")
  static createLse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
