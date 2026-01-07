import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llw")
export default class LlwController {
  @operation({
    summary: "Get Llw",
  })
  @get()
  static getLlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llw",
  })
  @post("{id}")
  static createLlw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
