import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fres")
export default class FreController {
  @operation({
    summary: "Get Fres",
  })
  @get()
  static getFres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fre",
  })
  @post("{id}")
  static createFre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
