import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llb")
export default class LlbController {
  @operation({
    summary: "Get Llb",
  })
  @get()
  static getLlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llb",
  })
  @post("{id}")
  static createLlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
