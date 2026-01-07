import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhi")
export default class HhiController {
  @operation({
    summary: "Get Hhi",
  })
  @get()
  static getHhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhi",
  })
  @post("{id}")
  static createHhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
