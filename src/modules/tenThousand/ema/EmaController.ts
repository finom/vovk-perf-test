import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ema")
export default class EmaController {
  @operation({
    summary: "Get Ema",
  })
  @get()
  static getEma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ema",
  })
  @post("{id}")
  static createEma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
