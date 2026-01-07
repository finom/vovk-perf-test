import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcw")
export default class McwController {
  @operation({
    summary: "Get Mcw",
  })
  @get()
  static getMcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcw",
  })
  @post("{id}")
  static createMcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
