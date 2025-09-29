import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anos")
export default class AnoController {
  @operation({
    summary: "Get Anos",
  })
  @get()
  static getAnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ano",
  })
  @post("{id}")
  static createAno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
