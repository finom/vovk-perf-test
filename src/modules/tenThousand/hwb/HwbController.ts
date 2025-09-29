import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwbs")
export default class HwbController {
  @operation({
    summary: "Get Hwbs",
  })
  @get()
  static getHwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwb",
  })
  @post("{id}")
  static createHwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
