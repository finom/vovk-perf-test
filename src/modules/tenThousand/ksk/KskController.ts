import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksks")
export default class KskController {
  @operation({
    summary: "Get Ksks",
  })
  @get()
  static getKsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksk",
  })
  @post("{id}")
  static createKsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
