import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eais")
export default class EaiController {
  @operation({
    summary: "Get Eais",
  })
  @get()
  static getEais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eai",
  })
  @post("{id}")
  static createEai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
