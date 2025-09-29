import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewbs")
export default class EwbController {
  @operation({
    summary: "Get Ewbs",
  })
  @get()
  static getEwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewb",
  })
  @post("{id}")
  static createEwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
