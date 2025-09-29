import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kphs")
export default class KphController {
  @operation({
    summary: "Get Kphs",
  })
  @get()
  static getKphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kph",
  })
  @post("{id}")
  static createKph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
