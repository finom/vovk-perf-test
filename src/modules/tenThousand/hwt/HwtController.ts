import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwts")
export default class HwtController {
  @operation({
    summary: "Get Hwts",
  })
  @get()
  static getHwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwt",
  })
  @post("{id}")
  static createHwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
