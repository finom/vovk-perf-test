import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anc")
export default class AncController {
  @operation({
    summary: "Get Anc",
  })
  @get()
  static getAnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anc",
  })
  @post("{id}")
  static createAnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
