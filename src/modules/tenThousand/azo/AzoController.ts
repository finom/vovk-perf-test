import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azos")
export default class AzoController {
  @operation({
    summary: "Get Azos",
  })
  @get()
  static getAzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azo",
  })
  @post("{id}")
  static createAzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
