import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krfs")
export default class KrfController {
  @operation({
    summary: "Get Krfs",
  })
  @get()
  static getKrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krf",
  })
  @post("{id}")
  static createKrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
