import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcz")
export default class MczController {
  @operation({
    summary: "Get Mcz",
  })
  @get()
  static getMcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcz",
  })
  @post("{id}")
  static createMcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
