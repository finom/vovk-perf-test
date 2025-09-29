import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwcs")
export default class HwcController {
  @operation({
    summary: "Get Hwcs",
  })
  @get()
  static getHwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwc",
  })
  @post("{id}")
  static createHwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
