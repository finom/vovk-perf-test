import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aoas")
export default class AoaController {
  @operation({
    summary: "Get Aoas",
  })
  @get()
  static getAoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoa",
  })
  @post("{id}")
  static createAoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
