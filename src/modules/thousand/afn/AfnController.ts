import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afns")
export default class AfnController {
  @operation({
    summary: "Get Afns",
  })
  @get()
  static getAfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afn",
  })
  @post("{id}")
  static createAfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
