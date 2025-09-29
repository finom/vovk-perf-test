import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsrs")
export default class LsrController {
  @operation({
    summary: "Get Lsrs",
  })
  @get()
  static getLsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsr",
  })
  @post("{id}")
  static createLsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
