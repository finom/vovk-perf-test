import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdas")
export default class BdaController {
  @operation({
    summary: "Get Bdas",
  })
  @get()
  static getBdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bda",
  })
  @post("{id}")
  static createBda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
