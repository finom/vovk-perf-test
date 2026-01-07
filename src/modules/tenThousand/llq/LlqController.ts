import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llq")
export default class LlqController {
  @operation({
    summary: "Get Llq",
  })
  @get()
  static getLlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llq",
  })
  @post("{id}")
  static createLlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
