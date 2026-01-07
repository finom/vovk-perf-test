import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fop")
export default class FopController {
  @operation({
    summary: "Get Fop",
  })
  @get()
  static getFop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fop",
  })
  @post("{id}")
  static createFop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
