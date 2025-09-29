import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdas")
export default class CdaController {
  @operation({
    summary: "Get Cdas",
  })
  @get()
  static getCdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cda",
  })
  @post("{id}")
  static createCda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
