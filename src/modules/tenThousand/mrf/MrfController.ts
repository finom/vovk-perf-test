import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrfs")
export default class MrfController {
  @operation({
    summary: "Get Mrfs",
  })
  @get()
  static getMrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrf",
  })
  @post("{id}")
  static createMrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
