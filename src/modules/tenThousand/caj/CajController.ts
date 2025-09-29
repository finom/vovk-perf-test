import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cajs")
export default class CajController {
  @operation({
    summary: "Get Cajs",
  })
  @get()
  static getCajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caj",
  })
  @post("{id}")
  static createCaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
