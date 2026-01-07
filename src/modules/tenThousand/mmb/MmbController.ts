import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmb")
export default class MmbController {
  @operation({
    summary: "Get Mmb",
  })
  @get()
  static getMmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmb",
  })
  @post("{id}")
  static createMmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
