import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsas")
export default class BsaController {
  @operation({
    summary: "Get Bsas",
  })
  @get()
  static getBsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsa",
  })
  @post("{id}")
  static createBsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
