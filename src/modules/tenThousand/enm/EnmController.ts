import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enm")
export default class EnmController {
  @operation({
    summary: "Get Enm",
  })
  @get()
  static getEnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enm",
  })
  @post("{id}")
  static createEnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
