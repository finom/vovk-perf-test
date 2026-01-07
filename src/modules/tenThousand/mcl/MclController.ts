import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcl")
export default class MclController {
  @operation({
    summary: "Get Mcl",
  })
  @get()
  static getMcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcl",
  })
  @post("{id}")
  static createMcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
