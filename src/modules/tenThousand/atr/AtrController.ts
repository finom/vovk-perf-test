import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atr")
export default class AtrController {
  @operation({
    summary: "Get Atr",
  })
  @get()
  static getAtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atr",
  })
  @post("{id}")
  static createAtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
