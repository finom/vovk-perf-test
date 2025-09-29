import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwgs")
export default class HwgController {
  @operation({
    summary: "Get Hwgs",
  })
  @get()
  static getHwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwg",
  })
  @post("{id}")
  static createHwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
