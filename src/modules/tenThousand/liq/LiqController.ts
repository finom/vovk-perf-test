import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liq")
export default class LiqController {
  @operation({
    summary: "Get Liq",
  })
  @get()
  static getLiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liq",
  })
  @post("{id}")
  static createLiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
