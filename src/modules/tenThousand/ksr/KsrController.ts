import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksrs")
export default class KsrController {
  @operation({
    summary: "Get Ksrs",
  })
  @get()
  static getKsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksr",
  })
  @post("{id}")
  static createKsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
