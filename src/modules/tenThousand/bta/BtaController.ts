import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bta")
export default class BtaController {
  @operation({
    summary: "Get Bta",
  })
  @get()
  static getBta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bta",
  })
  @post("{id}")
  static createBta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
