import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llm")
export default class LlmController {
  @operation({
    summary: "Get Llm",
  })
  @get()
  static getLlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llm",
  })
  @post("{id}")
  static createLlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
