import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwis")
export default class HwiController {
  @operation({
    summary: "Get Hwis",
  })
  @get()
  static getHwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwi",
  })
  @post("{id}")
  static createHwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
