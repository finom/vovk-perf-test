import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epts")
export default class EptController {
  @operation({
    summary: "Get Epts",
  })
  @get()
  static getEpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ept",
  })
  @post("{id}")
  static createEpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
