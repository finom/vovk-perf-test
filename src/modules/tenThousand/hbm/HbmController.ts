import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbm")
export default class HbmController {
  @operation({
    summary: "Get Hbm",
  })
  @get()
  static getHbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbm",
  })
  @post("{id}")
  static createHbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
