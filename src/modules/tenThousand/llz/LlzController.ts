import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llz")
export default class LlzController {
  @operation({
    summary: "Get Llz",
  })
  @get()
  static getLlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llz",
  })
  @post("{id}")
  static createLlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
