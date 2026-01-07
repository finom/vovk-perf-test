import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khn")
export default class KhnController {
  @operation({
    summary: "Get Khn",
  })
  @get()
  static getKhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khn",
  })
  @post("{id}")
  static createKhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
