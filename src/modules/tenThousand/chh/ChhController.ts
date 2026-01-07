import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chh")
export default class ChhController {
  @operation({
    summary: "Get Chh",
  })
  @get()
  static getChh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chh",
  })
  @post("{id}")
  static createChh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
