import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuis")
export default class KuiController {
  @operation({
    summary: "Get Kuis",
  })
  @get()
  static getKuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kui",
  })
  @post("{id}")
  static createKui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
