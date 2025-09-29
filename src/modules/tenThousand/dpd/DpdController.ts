import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpds")
export default class DpdController {
  @operation({
    summary: "Get Dpds",
  })
  @get()
  static getDpds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpd",
  })
  @post("{id}")
  static createDpd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
