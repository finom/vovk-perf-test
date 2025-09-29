import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuws")
export default class KuwController {
  @operation({
    summary: "Get Kuws",
  })
  @get()
  static getKuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuw",
  })
  @post("{id}")
  static createKuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
