import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwbs")
export default class FwbController {
  @operation({
    summary: "Get Fwbs",
  })
  @get()
  static getFwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwb",
  })
  @post("{id}")
  static createFwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
