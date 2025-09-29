import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrfs")
export default class LrfController {
  @operation({
    summary: "Get Lrfs",
  })
  @get()
  static getLrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrf",
  })
  @post("{id}")
  static createLrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
