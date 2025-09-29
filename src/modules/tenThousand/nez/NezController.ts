import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nezs")
export default class NezController {
  @operation({
    summary: "Get Nezs",
  })
  @get()
  static getNezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nez",
  })
  @post("{id}")
  static createNez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
