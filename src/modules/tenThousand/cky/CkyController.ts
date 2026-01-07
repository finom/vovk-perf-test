import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cky")
export default class CkyController {
  @operation({
    summary: "Get Cky",
  })
  @get()
  static getCky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cky",
  })
  @post("{id}")
  static createCky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
