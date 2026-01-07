import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vp")
export default class VpController {
  @operation({
    summary: "Get Vp",
  })
  @get()
  static getVp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vp",
  })
  @post("{id}")
  static createVp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
