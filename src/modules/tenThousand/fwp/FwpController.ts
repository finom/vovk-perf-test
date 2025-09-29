import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwps")
export default class FwpController {
  @operation({
    summary: "Get Fwps",
  })
  @get()
  static getFwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwp",
  })
  @post("{id}")
  static createFwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
