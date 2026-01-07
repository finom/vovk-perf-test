import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmb")
export default class LmbController {
  @operation({
    summary: "Get Lmb",
  })
  @get()
  static getLmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmb",
  })
  @post("{id}")
  static createLmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
