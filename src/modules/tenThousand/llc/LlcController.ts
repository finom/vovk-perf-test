import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llc")
export default class LlcController {
  @operation({
    summary: "Get Llc",
  })
  @get()
  static getLlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llc",
  })
  @post("{id}")
  static createLlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
