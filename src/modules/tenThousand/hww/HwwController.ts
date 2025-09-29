import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwws")
export default class HwwController {
  @operation({
    summary: "Get Hwws",
  })
  @get()
  static getHwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hww",
  })
  @post("{id}")
  static createHww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
