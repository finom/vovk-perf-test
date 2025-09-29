import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwbs")
export default class CwbController {
  @operation({
    summary: "Get Cwbs",
  })
  @get()
  static getCwbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwb",
  })
  @post("{id}")
  static createCwb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
