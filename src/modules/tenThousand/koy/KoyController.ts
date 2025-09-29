import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koys")
export default class KoyController {
  @operation({
    summary: "Get Koys",
  })
  @get()
  static getKoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koy",
  })
  @post("{id}")
  static createKoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
