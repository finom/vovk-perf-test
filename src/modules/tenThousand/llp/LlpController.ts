import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llp")
export default class LlpController {
  @operation({
    summary: "Get Llp",
  })
  @get()
  static getLlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llp",
  })
  @post("{id}")
  static createLlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
