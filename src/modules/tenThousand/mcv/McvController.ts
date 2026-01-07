import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcv")
export default class McvController {
  @operation({
    summary: "Get Mcv",
  })
  @get()
  static getMcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcv",
  })
  @post("{id}")
  static createMcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
