import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwks")
export default class HwkController {
  @operation({
    summary: "Get Hwks",
  })
  @get()
  static getHwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwk",
  })
  @post("{id}")
  static createHwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
