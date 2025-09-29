import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cifs")
export default class CifController {
  @operation({
    summary: "Get Cifs",
  })
  @get()
  static getCifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cif",
  })
  @post("{id}")
  static createCif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
