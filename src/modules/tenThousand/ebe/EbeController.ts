import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebes")
export default class EbeController {
  @operation({
    summary: "Get Ebes",
  })
  @get()
  static getEbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebe",
  })
  @post("{id}")
  static createEbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
