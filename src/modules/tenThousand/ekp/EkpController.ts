import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekps")
export default class EkpController {
  @operation({
    summary: "Get Ekps",
  })
  @get()
  static getEkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekp",
  })
  @post("{id}")
  static createEkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
