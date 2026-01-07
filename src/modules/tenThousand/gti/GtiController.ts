import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gti")
export default class GtiController {
  @operation({
    summary: "Get Gti",
  })
  @get()
  static getGti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gti",
  })
  @post("{id}")
  static createGti = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
