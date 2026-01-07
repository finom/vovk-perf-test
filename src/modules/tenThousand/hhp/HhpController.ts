import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhp")
export default class HhpController {
  @operation({
    summary: "Get Hhp",
  })
  @get()
  static getHhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhp",
  })
  @post("{id}")
  static createHhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
