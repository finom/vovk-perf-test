import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcr")
export default class McrController {
  @operation({
    summary: "Get Mcr",
  })
  @get()
  static getMcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcr",
  })
  @post("{id}")
  static createMcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
