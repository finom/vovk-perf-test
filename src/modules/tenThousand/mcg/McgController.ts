import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcg")
export default class McgController {
  @operation({
    summary: "Get Mcg",
  })
  @get()
  static getMcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcg",
  })
  @post("{id}")
  static createMcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
