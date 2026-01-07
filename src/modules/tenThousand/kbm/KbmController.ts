import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbm")
export default class KbmController {
  @operation({
    summary: "Get Kbm",
  })
  @get()
  static getKbm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbm",
  })
  @post("{id}")
  static createKbm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
