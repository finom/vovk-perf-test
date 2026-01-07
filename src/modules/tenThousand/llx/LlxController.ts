import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llx")
export default class LlxController {
  @operation({
    summary: "Get Llx",
  })
  @get()
  static getLlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llx",
  })
  @post("{id}")
  static createLlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
