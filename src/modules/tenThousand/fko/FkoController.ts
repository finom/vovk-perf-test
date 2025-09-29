import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkos")
export default class FkoController {
  @operation({
    summary: "Get Fkos",
  })
  @get()
  static getFkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fko",
  })
  @post("{id}")
  static createFko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
