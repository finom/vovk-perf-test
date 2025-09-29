import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksis")
export default class KsiController {
  @operation({
    summary: "Get Ksis",
  })
  @get()
  static getKsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksi",
  })
  @post("{id}")
  static createKsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
