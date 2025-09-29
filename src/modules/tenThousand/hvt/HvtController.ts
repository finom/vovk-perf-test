import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvts")
export default class HvtController {
  @operation({
    summary: "Get Hvts",
  })
  @get()
  static getHvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvt",
  })
  @post("{id}")
  static createHvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
