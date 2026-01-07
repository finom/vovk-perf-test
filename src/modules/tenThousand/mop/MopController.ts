import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mop")
export default class MopController {
  @operation({
    summary: "Get Mop",
  })
  @get()
  static getMop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mop",
  })
  @post("{id}")
  static createMop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
