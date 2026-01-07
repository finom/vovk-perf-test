import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llr")
export default class LlrController {
  @operation({
    summary: "Get Llr",
  })
  @get()
  static getLlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llr",
  })
  @post("{id}")
  static createLlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
