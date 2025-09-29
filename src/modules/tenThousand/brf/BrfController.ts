import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brfs")
export default class BrfController {
  @operation({
    summary: "Get Brfs",
  })
  @get()
  static getBrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brf",
  })
  @post("{id}")
  static createBrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
