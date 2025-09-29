import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kexes")
export default class KexController {
  @operation({
    summary: "Get Kexes",
  })
  @get()
  static getKexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kex",
  })
  @post("{id}")
  static createKex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
