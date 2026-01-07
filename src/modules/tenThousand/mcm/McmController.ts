import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcm")
export default class McmController {
  @operation({
    summary: "Get Mcm",
  })
  @get()
  static getMcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcm",
  })
  @post("{id}")
  static createMcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
