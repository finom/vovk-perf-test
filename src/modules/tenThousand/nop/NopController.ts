import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nop")
export default class NopController {
  @operation({
    summary: "Get Nop",
  })
  @get()
  static getNop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nop",
  })
  @post("{id}")
  static createNop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
