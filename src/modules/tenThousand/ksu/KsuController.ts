import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksus")
export default class KsuController {
  @operation({
    summary: "Get Ksus",
  })
  @get()
  static getKsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksu",
  })
  @post("{id}")
  static createKsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
