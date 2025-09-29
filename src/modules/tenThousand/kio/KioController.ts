import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kios")
export default class KioController {
  @operation({
    summary: "Get Kios",
  })
  @get()
  static getKios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kio",
  })
  @post("{id}")
  static createKio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
