import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbas")
export default class FbaController {
  @operation({
    summary: "Get Fbas",
  })
  @get()
  static getFbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fba",
  })
  @post("{id}")
  static createFba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
