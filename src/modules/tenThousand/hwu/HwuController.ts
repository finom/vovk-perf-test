import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwus")
export default class HwuController {
  @operation({
    summary: "Get Hwus",
  })
  @get()
  static getHwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwu",
  })
  @post("{id}")
  static createHwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
