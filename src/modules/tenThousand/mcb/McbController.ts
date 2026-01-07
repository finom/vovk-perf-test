import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcb")
export default class McbController {
  @operation({
    summary: "Get Mcb",
  })
  @get()
  static getMcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcb",
  })
  @post("{id}")
  static createMcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
