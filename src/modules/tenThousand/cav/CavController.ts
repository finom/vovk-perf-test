import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cav")
export default class CavController {
  @operation({
    summary: "Get Cav",
  })
  @get()
  static getCav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cav",
  })
  @post("{id}")
  static createCav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
