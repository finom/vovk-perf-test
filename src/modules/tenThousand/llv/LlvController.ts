import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llv")
export default class LlvController {
  @operation({
    summary: "Get Llv",
  })
  @get()
  static getLlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llv",
  })
  @post("{id}")
  static createLlv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
