import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuqs")
export default class KuqController {
  @operation({
    summary: "Get Kuqs",
  })
  @get()
  static getKuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuq",
  })
  @post("{id}")
  static createKuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
