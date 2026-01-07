import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcc")
export default class FccController {
  @operation({
    summary: "Get Fcc",
  })
  @get()
  static getFcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcc",
  })
  @post("{id}")
  static createFcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
