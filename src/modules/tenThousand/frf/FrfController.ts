import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frfs")
export default class FrfController {
  @operation({
    summary: "Get Frfs",
  })
  @get()
  static getFrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frf",
  })
  @post("{id}")
  static createFrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
