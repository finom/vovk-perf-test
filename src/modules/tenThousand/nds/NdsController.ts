import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nds")
export default class NdsController {
  @operation({
    summary: "Get Nds",
  })
  @get()
  static getNds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nds",
  })
  @post("{id}")
  static createNds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
