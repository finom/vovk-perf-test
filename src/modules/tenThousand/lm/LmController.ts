import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lm")
export default class LmController {
  @operation({
    summary: "Get Lm",
  })
  @get()
  static getLm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lm",
  })
  @post("{id}")
  static createLm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
