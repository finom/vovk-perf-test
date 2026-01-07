import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llk")
export default class LlkController {
  @operation({
    summary: "Get Llk",
  })
  @get()
  static getLlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llk",
  })
  @post("{id}")
  static createLlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
