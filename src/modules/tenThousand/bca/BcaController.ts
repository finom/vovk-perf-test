import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcas")
export default class BcaController {
  @operation({
    summary: "Get Bcas",
  })
  @get()
  static getBcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bca",
  })
  @post("{id}")
  static createBca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
