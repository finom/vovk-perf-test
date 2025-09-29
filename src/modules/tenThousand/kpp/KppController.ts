import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpps")
export default class KppController {
  @operation({
    summary: "Get Kpps",
  })
  @get()
  static getKpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpp",
  })
  @post("{id}")
  static createKpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
