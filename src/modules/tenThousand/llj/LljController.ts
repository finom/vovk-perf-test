import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llj")
export default class LljController {
  @operation({
    summary: "Get Llj",
  })
  @get()
  static getLlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llj",
  })
  @post("{id}")
  static createLlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
