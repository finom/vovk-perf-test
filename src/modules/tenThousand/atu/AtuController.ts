import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atus")
export default class AtuController {
  @operation({
    summary: "Get Atus",
  })
  @get()
  static getAtus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atu",
  })
  @post("{id}")
  static createAtu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
