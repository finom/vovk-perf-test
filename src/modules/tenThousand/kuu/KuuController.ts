import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuus")
export default class KuuController {
  @operation({
    summary: "Get Kuus",
  })
  @get()
  static getKuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuu",
  })
  @post("{id}")
  static createKuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
