import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwvs")
export default class FwvController {
  @operation({
    summary: "Get Fwvs",
  })
  @get()
  static getFwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwv",
  })
  @post("{id}")
  static createFwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
