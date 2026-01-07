import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntn")
export default class NtnController {
  @operation({
    summary: "Get Ntn",
  })
  @get()
  static getNtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntn",
  })
  @post("{id}")
  static createNtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
