import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fis")
export default class FisController {
  @operation({
    summary: "Get Fis",
  })
  @get()
  static getFis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fis",
  })
  @post("{id}")
  static createFis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
